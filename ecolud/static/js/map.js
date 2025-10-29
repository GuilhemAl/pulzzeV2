const socket = io();
const markers = new Map();
let map;

async function loadInitialState() {
  try {
    const res = await fetch(window.ECOLUD_STATE.replace(/"/g, ''));
    return await res.json();
  } catch (err) {
    console.error('Failed to load initial state', err);
    return null;
  }
}

function initMap(state) {
  map = L.map('world-map', { zoomControl: false }).setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  updateGlobalProgress(state.global_progress);
  renderPlayers(state.players);
  renderFeed(state.stats?.live_feed || []);
}

function avatarIcon(avatar) {
  return L.icon({
    iconUrl: `/static/images/avatars/${avatar}`,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    className: 'player-icon',
  });
}

function renderPlayers(players) {
  players.forEach((player) => {
    const popup = `<strong>${player.name}</strong><br>${player.points} pts<br>${player.team}`;
    if (markers.has(player.id)) {
      const marker = markers.get(player.id);
      marker.setLatLng([player.lat, player.lng]);
      marker.setPopupContent(popup);
    } else {
      const marker = L.marker([player.lat, player.lng], { icon: avatarIcon(player.avatar) });
      marker.bindPopup(popup);
      marker.addTo(map);
      markers.set(player.id, marker);
    }
  });
}

function renderFeed(feed) {
  const container = document.getElementById('live-feed');
  if (!container) return;
  container.innerHTML = '';
  feed.slice(0, 12).forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.message;
    container.appendChild(li);
  });
}

function updateGlobalProgress(progress) {
  const percent = Math.round(progress * 100);
  const label = document.getElementById('global-progress-label');
  const bar = document.getElementById('global-progress-bar');
  if (label) {
    label.textContent = `Nettoyer la planète ensemble — ${percent}% complété 🌎💚`;
  }
  if (bar) {
    bar.style.width = `${percent}%`;
  }
}

function handleMissionEffect(payload) {
  renderPlayers([payload]);

  if (!map) return;
  const circle = L.circle([payload.lat, payload.lng], {
    radius: 50000,
    color: '#00c9a7',
    fillColor: '#00c9a7',
    fillOpacity: 0.35,
    opacity: 0.35,
  }).addTo(map);

  setTimeout(() => {
    map.removeLayer(circle);
  }, 2500);
}

socket.on('initial_state', (state) => {
  if (!map) {
    initMap(state);
  } else {
    updateGlobalProgress(state.global_progress);
    renderPlayers(state.players);
    renderFeed(state.stats?.live_feed || []);
  }
});

socket.on('mission_effect', handleMissionEffect);

socket.on('update_team_progress', (payload) => {
  if (payload.global_progress !== undefined) {
    updateGlobalProgress(payload.global_progress);
  }
  renderFeed(payload.live_feed || []);
});

(async () => {
  const state = await loadInitialState();
  if (state) {
    initMap(state);
  }
})();
