document.addEventListener('DOMContentLoaded', () => {
  const frame = document.querySelector('iframe');
  const openNewTabLink = document.getElementById('puzzleOpenNewTab');
  const guideBtn = document.getElementById('puzzleHelpGuideBtn');
  const guideOverlay = document.getElementById('puzzleGuide');
  const guideCloseBtn = document.getElementById('puzzleGuideClose');
  document.querySelectorAll('.guide-kebab').forEach((el) => {
    el.textContent = '⋮';
  });

  const buildDirectUrl = (value) => {
    if (!value) {
      return '';
    }
    try {
      const url = new URL(value, window.location.href);
      if (url.searchParams.get('view') === 'iframe') {
        url.searchParams.delete('view');
      }
      return url.toString();
    } catch (error) {
      return value
        .replace(/([?&])view=iframe(&)?/i, (match, sep, trailing) => {
          if (trailing) {
            return sep;
          }
          return sep === '?' ? '?' : '';
        })
        .replace(/[?&]$/, '');
    }
  };

  const getBaseSrc = () => {
    if (!frame) {
      return '';
    }
    if (frame.dataset && frame.dataset.puzzleSrc) {
      return frame.dataset.puzzleSrc;
    }
    return frame.getAttribute('src') || '';
  };

  const baseSrc = getBaseSrc();
  if (openNewTabLink && baseSrc) {
    openNewTabLink.href = buildDirectUrl(baseSrc);
  }

  if (!guideOverlay) {
    return;
  }

  const showGuide = () => {
    guideOverlay.classList.add('visible');
    guideOverlay.setAttribute('aria-hidden', 'false');
    guideCloseBtn?.focus();
  };

  const hideGuide = () => {
    guideOverlay.classList.remove('visible');
    guideOverlay.setAttribute('aria-hidden', 'true');
  };

  guideBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    showGuide();
  });

  guideCloseBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    hideGuide();
    guideBtn?.focus();
  });

  guideOverlay.addEventListener('click', (event) => {
    if (event.target === guideOverlay) {
      hideGuide();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && guideOverlay.classList.contains('visible')) {
      hideGuide();
      guideBtn?.focus();
    }
  });
});
