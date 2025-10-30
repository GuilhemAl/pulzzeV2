const socket = io();
let teamsState = {};

function getColor(hex) {
  return hex || '#00c9a7';
}

function renderTeams(teams) {
  teamsState = teams;
  const container = document.getElementById('team-grid');
  if (!container) return;
  container.innerHTML = '';
  Object.entries(teams).forEach(([key, team]) => {
    const card = document.createElement('article');
    card.className = 'team-card fade-in';
    card.style.borderTop = `4px solid ${getColor(team.color)}`;

    const header = document.createElement('div');
    header.className = 'team-header';
    const icon = document.createElement('span');
    icon.className = 'team-icon';
    icon.textContent = team.icon || '';
    const title = document.createElement('div');
    title.innerHTML = `<strong>${team.name}</strong>`;
    header.append(icon, title);

    const progressWrap = document.createElement('div');
    progressWrap.className = 'team-progress';

    const progress = document.createElement('div');
    progress.className = 'team-progress__value';
    progress.dataset.team = key;
    progress.style.background = `linear-gradient(90deg, ${getColor(team.color)}, ${team.color || '#00c9a7'}90)`;
    progress.style.width = `${team.progress}%`;
    progressWrap.append(progress);

    const pct = document.createElement('span');
    pct.className = 'team-progress__label';
    pct.textContent = `${team.progress}%`;

    card.append(header, progressWrap, pct);
    container.appendChild(card);
  });
}

function renderFeed(feed) {
  const container = document.getElementById('team-feed');
  if (!container) return;
  container.innerHTML = '';
  feed.slice(0, 10).forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.message;
    container.appendChild(li);
  });
}

async function bootstrap() {
  try {
    const res = await fetch('/api/state');
    const state = await res.json();
    renderTeams(state.teams);
    renderFeed(state.stats?.live_feed || []);
  } catch (err) {
    console.error('Unable to bootstrap teams view', err);
  }
}

socket.on('initial_state', (state) => {
  renderTeams(state.teams);
  renderFeed(state.stats?.live_feed || []);
});

socket.on('update_team_progress', (payload) => {
  renderTeams(payload.teams);
  renderFeed(payload.live_feed || []);
});

bootstrap();
