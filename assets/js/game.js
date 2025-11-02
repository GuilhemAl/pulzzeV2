(() => {
  const CURRENT_PATH = window.location.pathname.replace(/\\/g, '/');
  const IN_PAGES_DIRECTORY = CURRENT_PATH.includes('/pages/');
  const ROOT_PREFIX = IN_PAGES_DIRECTORY ? '../' : '';

  const isExternalUrl = (value) => typeof value === 'string' && /^(?:https?:|data:)/i.test(value);
  const trimLeadingRelative = (value = '') => value.replace(/^(\.\/|\/)+/, '');
  const normalizeRelativePath = (value) => {
    const trimmed = trimLeadingRelative(value);
    if (!trimmed) {
      return '';
    }
    if (trimmed.startsWith('assets/')) {
      return trimmed;
    }
    return `assets/${trimmed}`;
  };
  const resolveRootRelative = (path) => {
    if (!path || isExternalUrl(path)) {
      return path || '';
    }
    if (path.startsWith('../') || path.startsWith('./') || path.startsWith('/')) {
      return path;
    }
    return `${ROOT_PREFIX}${path}`;
  };
  const resolveAssetPath = (assetPath) => {
    if (!assetPath || isExternalUrl(assetPath)) {
      return assetPath || '';
    }
    const normalized = normalizeRelativePath(assetPath);
    return resolveRootRelative(normalized);
  };
  const DEFAULT_AVATAR = 'assets/images/avatars/turtle.png';
  const ensureAvatarAssetPath = (avatar) => {
    if (!avatar) {
      return DEFAULT_AVATAR;
    }
    const trimmed = trimLeadingRelative(avatar);
    if (trimmed.startsWith('assets/')) {
      return trimmed;
    }
    if (trimmed.startsWith('images/avatars/')) {
      return `assets/${trimmed}`;
    }
    if (trimmed.includes('/')) {
      return `assets/${trimmed}`;
    }
    return `assets/images/avatars/${trimmed}`;
  };

  const LEGACY_USER_KEY = 'user';
  const MODAL_OPEN_CLASS = 'modal-open';

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const clamp = (value, min = 0, max = 100) => {
    const number = Number(value);
    if (!Number.isFinite(number)) {
      return min;
    }
    return Math.min(max, Math.max(min, number));
  };

  const resolveStoredUser = () => {
    if (window.ecoludUser && typeof window.ecoludUser.get === 'function') {
      const stored = window.ecoludUser.get();
      if (stored && stored.name && stored.avatar) {
        return {
          ...stored,
          avatar: ensureAvatarAssetPath(stored.avatar)
        };
      }
    }

    const raw = localStorage.getItem(LEGACY_USER_KEY);
    if (!raw) {
      return null;
    }

    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return {
          name: typeof parsed.name === 'string' ? parsed.name : '',
          avatar: ensureAvatarAssetPath(parsed.avatar),
          progress: clamp(parsed.progress || 0)
        };
      }
    } catch (error) {
      // Ignore malformed payloads.
    }
    return null;
  };

  const resolveAvatarSrc = (avatar) => {
    if (isExternalUrl(avatar)) {
      return avatar;
    }
    return resolveAssetPath(ensureAvatarAssetPath(typeof avatar === 'string' ? avatar : ''));
  };

  const applyWelcomeMessage = (user) => {
    const welcomeText = document.getElementById('welcomeText');
    if (!welcomeText) {
      return;
    }
    const safeName = escapeHtml(user.name || '');
    const personalised =
      (typeof window.translate === 'function'
        ? window.translate('game-title-personalized', { name: safeName })
        : `Salut <span class="username">${safeName}</span> ! Aide-moi \u00E0 restaurer notre monde \uD83C\uDF0D`);
    welcomeText.innerHTML = personalised;
  };

  const applyAvatar = (element, src, alt) => {
    if (!element) {
      return;
    }
    element.src = src;
    element.alt = alt || 'Avatar';
  };

  const applyHeaderBadge = (user, avatarSrc) => {
    const navBadge = document.getElementById('navPlayerBadge');
    const navName = document.getElementById('navPlayerName');
    const navAvatar = document.getElementById('navPlayerAvatar');
    const navPlayButton = document.getElementById('navPlayButton');
    const navChangeButton = document.getElementById('navChangeProfile');

    if (navBadge && navName && navAvatar) {
      navBadge.classList.remove('hidden');
      navName.textContent = user.name || '';
      applyAvatar(navAvatar, avatarSrc, user.name);
      navPlayButton?.classList.add('hidden');
      navChangeButton?.classList.remove('hidden');
    }
  };

  const applyProgress = (user) => {
    if (!Number.isFinite(user.progress)) {
      return;
    }
    const progressValue = clamp(user.progress);
    const progressBar = document.getElementById('playerProgressBar');
    const progressLabel = document.getElementById('playerProgressLabel');
    if (progressBar) {
      progressBar.style.width = `${progressValue}%`;
    }
    if (progressLabel) {
      progressLabel.textContent = `${progressValue}%`;
    }
  };

  const applyUserToPage = (user) => {
    const avatarSrc = resolveAvatarSrc(user.avatar);
    applyWelcomeMessage(user);
    applyAvatar(document.getElementById('userAvatar'), avatarSrc, user.name);
    applyHeaderBadge(user, avatarSrc);
    applyProgress(user);
  };

  const toggleModal = (modal, open) => {
    if (!modal) {
      return;
    }
    if (open) {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add(MODAL_OPEN_CLASS);
      const primaryBtn = modal.querySelector('[data-primary]');
      (primaryBtn || modal.querySelector('button'))?.focus();
    } else {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove(MODAL_OPEN_CLASS);
    }
  };

  const attachModalBehavior = () => {
    const modal = document.getElementById('profileResetModal');
    if (!modal) {
      return;
    }
    const cancelBtn = document.getElementById('cancelProfileReset');
    const confirmBtn = document.getElementById('confirmProfileReset');

    const closeModal = () => toggleModal(modal, false);
    const changeProfileBtn = document.querySelector('[data-change-profile]');
    const DEFAULT_RESET_TARGET = 'pages/choose.html';
    const sanitizeResetTarget = (value) => {
      if (typeof value !== 'string') {
        return resolveRootRelative(DEFAULT_RESET_TARGET);
      }
      const trimmed = value.trim();
      if (!trimmed) {
        return resolveRootRelative(DEFAULT_RESET_TARGET);
      }
      if (isExternalUrl(trimmed)) {
        return trimmed;
      }
      if (trimmed === 'choose.html') {
        return resolveRootRelative(DEFAULT_RESET_TARGET);
      }
      if (trimmed.startsWith('../') || trimmed.startsWith('./') || trimmed.startsWith('/')) {
        return trimmed;
      }
      const normalised = trimLeadingRelative(trimmed);
      if (normalised.startsWith('pages/')) {
        return resolveRootRelative(normalised);
      }
      return resolveRootRelative(normalised || DEFAULT_RESET_TARGET);
    };
    let resetTarget = sanitizeResetTarget(changeProfileBtn?.dataset.profileTarget);

    const performReset = () => {
      if (window.ecoludUser && typeof window.ecoludUser.clear === 'function') {
        window.ecoludUser.clear();
      } else {
        localStorage.removeItem(LEGACY_USER_KEY);
      }
      localStorage.removeItem('playerName');
      localStorage.removeItem('avatar');
      localStorage.removeItem('selectedPuzzle');
      localStorage.removeItem('selectedAvatar');
      toggleModal(modal, false);
      window.location.href = resetTarget;
    };

    cancelBtn?.addEventListener('click', closeModal);
    confirmBtn?.addEventListener('click', performReset);
    if (confirmBtn) {
      confirmBtn.dataset.primary = 'true';
    }

    changeProfileBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      resetTarget = sanitizeResetTarget(changeProfileBtn.dataset.profileTarget);
      toggleModal(modal, true);
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    document.addEventListener('ecolud:profile-reset-request', (event) => {
      event.preventDefault();
      if (event.detail && typeof event.detail.target === 'string') {
        resetTarget = sanitizeResetTarget(event.detail.target);
      }
      toggleModal(modal, true);
    });
  };

  const initialise = () => {
    const user = resolveStoredUser();
    if (!user || !user.name || !user.avatar) {
      window.location.href = resolveRootRelative('pages/choose.html');
      return;
    }
    applyUserToPage(user);
    attachModalBehavior();
  };

  window.addEventListener('DOMContentLoaded', initialise);

  document.addEventListener('ecolud:user-ready', (event) => {
    const user = event.detail?.user;
    if (user && user.name && user.avatar) {
      applyUserToPage(user);
    }
  });

  document.addEventListener('ecolud:language-change', () => {
    const user = resolveStoredUser();
    if (user && user.name) {
      applyWelcomeMessage(user);
    }
  });
})();
