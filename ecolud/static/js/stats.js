const socket = io();
let currentStats = {};
let animationFrame;

function animateCounter(el, target) {
  const start = Number(el.dataset.current || 0);
  const duration = 600;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + (target - start) * progress);
    el.textContent = value.toLocaleString('fr-FR');
    el.dataset.current = value;
    if (progress < 1) {
      animationFrame = requestAnimationFrame(tick);
    }
  }

  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(tick);
}

function renderCounters(stats) {
  document.querySelectorAll('.counter-value').forEach((el) => {
    const key = el.dataset.key;
    if (key && typeof stats[key] !== 'undefined') {
      animateCounter(el, Number(stats[key]));
    }
  });
}

function renderTable(selector, data, mapper) {
  const tbody = document.querySelector(selector);
  if (!tbody) return;
  tbody.innerHTML = '';
  data.forEach((item) => {
    const tr = document.createElement('tr');
    tr.innerHTML = mapper(item);
    tbody.appendChild(tr);
  });
}

function renderUsage(stats) {
  const container = document.getElementById('avatar-usage');
  if (!container) return;
  container.innerHTML = '';
  const max = Math.max(...stats.map((item) => item.count), 1);
  stats.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'usage-row';
    const label = document.createElement('span');
    label.textContent = item.avatar.replace('.png', '');
    const bar = document.createElement('div');
    bar.className = 'usage-bar';
    const value = document.createElement('div');
    value.className = 'usage-bar__value';
    value.style.width = `${(item.count / max) * 100}%`;
    bar.appendChild(value);
    row.append(label, bar);
    container.appendChild(row);
  });
}

function updateStats(stats) {
  currentStats = stats;
  renderCounters(stats);
  renderTable('#team-leaderboard tbody', stats.team_leaderboard || [], (team) => {
    const color = team.team && team.team.includes('turtle') ? '#2f9e44' :
      team.team.includes('sun') ? '#f59f00' :
      '#228be6';
    return `<td><span class="team-dot" style="background:${color}"></span>${team.team}</td><td>${team.points}</td>`;
  });
  renderTable('#player-leaderboard tbody', stats.player_leaderboard || [], (player) => `
    <td><img src="/static/images/avatars/${player.avatar}" alt="${player.name}" class="mini-avatar"> ${player.name}</td>
    <td>${player.team}</td>
    <td>${player.points}</td>
  `);
  renderUsage(stats.avatar_usage || []);
}

async function bootstrap() {
  try {
    const res = await fetch('/api/state');
    const state = await res.json();
    updateStats(state.stats || {});
  } catch (err) {
    console.error('Unable to fetch stats', err);
  }
}

socket.on('initial_state', (state) => {
  updateStats(state.stats || {});
});

socket.on('update_stats', (stats) => {
  updateStats(stats);
});

bootstrap();
