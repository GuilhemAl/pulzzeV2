(() => {
  const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));

const safeStorage = {
  get(key, fallback = null) {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? stored : fallback;
      } catch (error) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        // Storage failure is non-critical; ignore.
      }
    },
    remove(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        // Storage failure is non-critical; ignore.
      }
    },
    clear() {
      try {
        localStorage.clear();
      } catch (error) {
        // Storage failure is non-critical; ignore.
      }
    },
    getNumber(key, fallback = 0) {
      const storedValue = Number(this.get(key, null));
      return Number.isFinite(storedValue) ? storedValue : fallback;
    },
    getJSON(key, fallback = null) {
      const rawData = this.get(key, null);
      if (rawData === null) {
        return fallback;
      }
      try {
        return JSON.parse(rawData);
      } catch (error) {
        return fallback;
      }
    },
    setJSON(key, value) {
      try {
        this.set(key, JSON.stringify(value));
      } catch (error) {
        // Storage failure is non-critical; ignore.
      }
  }
};

const getUserProfile = () => {
  if (window.ecoludUser && typeof window.ecoludUser.get === 'function') {
    return window.ecoludUser.get();
  }
  return null;
};

const updateUserProfile = (patch) => {
  if (window.ecoludUser && typeof window.ecoludUser.update === 'function') {
    window.ecoludUser.update(patch);
  }
};

const clearUserProfile = () => {
  if (window.ecoludUser && typeof window.ecoludUser.clear === 'function') {
    window.ecoludUser.clear();
  }
};

const resolveAvatarSource = (avatar) => {
  if (!avatar) {
    return '';
  }
  if (/^(https?:\/\/|data:)/i.test(avatar)) {
    return avatar;
  }
  if (avatar.includes('/')) {
    return avatar;
  }
  if (/\.(png|jpe?g|webp|svg)$/i.test(avatar)) {
    return avatar;
  }
  return `images/${avatar}.png`;
};

const ADVENTURE_PRESETS = {
    forest: {
      id: 'forest',
      title: 'For\u00eat',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
    },
    ocean: {
      id: 'ocean',
      title: 'Oc\u00e9an',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    city: {
      id: 'city',
      title: 'Ville durable',
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef'
    },
    recycle: {
      id: 'recycle',
      title: 'Recyclage',
      image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40'
    }
  };

  const translateText = (key, replacements = {}) => {
    if (typeof window.translate === 'function') {
      return window.translate(key, replacements);
    }
    return key;
  };

  const toArray = (collection) => Array.from(collection ?? []);
  const navigateTo = (url) => {
    window.location.href = url;
  };

  const initProfileSetup = () => {
    const avatars = toArray(document.querySelectorAll('.avatar-option, .avatar-selection .avatar'));
    const startButton = document.getElementById('startButton');
    const playerNameInput = document.getElementById('playerName');
    const clickSound = document.getElementById('clickSound');

    if (avatars.length > 0) {
      const savedAvatar = getUserProfile()?.avatar || null;

      avatars.forEach((avatar) => {
        const avatarPath =
          avatar.dataset.avatar || avatar.querySelector('img')?.getAttribute('src') || '';

        if (savedAvatar && savedAvatar === avatarPath) {
          avatar.classList.add('avatar-selected');
          avatar.classList.add('selected');
        }

        avatar.addEventListener('click', () => {
          avatars.forEach((item) => {
            item.classList.remove('avatar-selected');
            item.classList.remove('selected');
          });
          avatar.classList.add('avatar-selected');
          avatar.classList.add('selected');

          if (avatarPath) {
            updateUserProfile({ avatar: avatarPath });
          }
        });
      });
    }

    if (startButton) {
      startButton.addEventListener('click', () => {
        const name = playerNameInput ? playerNameInput.value.trim() : '';
        const avatar = getUserProfile()?.avatar || null;

        if (!name) {
          const nameModal = document.getElementById('nameModal');
          if (nameModal) {
            nameModal.style.display = 'flex';
            const closeNameModal = document.getElementById('closeNameModal');
            if (closeNameModal) {
              closeNameModal.addEventListener(
                'click',
                () => {
                  nameModal.style.display = 'none';
                },
                { once: true }
              );
            }
          }
          return;
        }

        if (!avatar) {
          alert(translateText('alert_select_avatar'));
          return;
        }

        updateUserProfile({ name, avatar: avatar || undefined });
        if (clickSound) {
          try {
            clickSound.currentTime = 0;
            clickSound.play();
          } catch (error) {
            // Autoplay failure is not critical; ignore.
          }
        }

        setTimeout(() => {
          navigateTo('home.html');
        }, 800);
      });
    }
  };

  const updateDefaultPlayerName = () => {
    const profile = getUserProfile();
    const defaultName = translateText('default-player-name') || 'Explorateur';
    const storedName = profile?.name || '';
    const storedAvatar = profile?.avatar || '';
    const resolvedAvatar = resolveAvatarSource(storedAvatar);
    const displayName = storedName || defaultName;

    const playerDisplay = document.getElementById('playerDisplay');
    const avatarDisplay = document.getElementById('avatarDisplay');
    if (playerDisplay && avatarDisplay) {
      playerDisplay.textContent = displayName;
      avatarDisplay.src = resolvedAvatar;
      avatarDisplay.alt = displayName;
    }

    const navBadge = document.getElementById('navPlayerBadge');
    const navAvatar = document.getElementById('navPlayerAvatar');
    const navName = document.getElementById('navPlayerName');
    const navPlayButton = document.getElementById('navPlayButton');
    const navChangeButton = document.getElementById('navChangeProfile');

    if (navBadge && navAvatar && navName) {
      if (profile && storedName && storedAvatar) {
        navBadge.classList.remove('hidden');
        navAvatar.src = resolvedAvatar;
        navAvatar.alt = displayName;
        navName.textContent = displayName;
        navChangeButton?.classList.remove('hidden');
      } else if (profile && (storedName || storedAvatar)) {
        navBadge.classList.remove('hidden');
        if (storedAvatar) {
          navAvatar.src = resolvedAvatar;
        }
        navAvatar.alt = displayName;
        navName.textContent = displayName;
        navChangeButton?.classList.remove('hidden');
      } else {
        navBadge.classList.add('hidden');
        navChangeButton?.classList.add('hidden');
      }
    }

    const floatingContainer = document.getElementById('floating-avatar');
    const floatingImg = document.getElementById('avatarCompanion');
    if (floatingContainer && floatingImg) {
      if (storedAvatar) {
        floatingContainer.classList.remove('hidden');
        floatingImg.src = resolvedAvatar || storedAvatar;
        floatingImg.alt = displayName;
      } else {
        floatingContainer.classList.add('hidden');
      }
    }

    if (typeof window.refreshNavSession === 'function') {
      window.refreshNavSession();
    }
  };

  window.updateDefaultPlayerName = updateDefaultPlayerName;

  const bindProfileResetTriggers = () => {
    document.querySelectorAll('[data-change-profile]').forEach((trigger) => {
      if (trigger.dataset.profileResetBound === 'true') {
        return;
      }
      trigger.dataset.profileResetBound = 'true';
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const mode = trigger.dataset.profileMode || 'reset';
        const target = trigger.dataset.profileTarget || 'choose.html';
        const request = new CustomEvent('ecolud:profile-reset-request', {
          cancelable: true,
          detail: { trigger, mode, target },
        });
        const proceed = document.dispatchEvent(request);
        if (!proceed) {
          return;
        }
        if (mode === 'redirect') {
          navigateTo(target);
          return;
        }
        clearUserProfile();
        safeStorage.clear();
        navigateTo(target);
      });
    });
  };

  const initProfileHeader = () => {
    updateDefaultPlayerName();
    bindProfileResetTriggers();

    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        clearUserProfile();
        safeStorage.clear();
        navigateTo('index.html');
      });
    }
  };

  const initFloatingCompanion = () => {\n    const floatingContainer = document.getElementById('floating-avatar');\n    const floatingCompanion = document.getElementById('avatarCompanion');\n    if (!floatingContainer || !floatingCompanion) {\n      return;\n    }\n\n    const profile = getUserProfile();\n    const defaultName = translateText('default-player-name') || 'Explorateur';\n    if (profile && profile.avatar) {\n      floatingContainer.classList.remove('hidden');\n      floatingCompanion.src = profile.avatar;\n      floatingCompanion.alt = profile.name || defaultName;\n    } else {\n      floatingContainer.classList.add('hidden');\n    }\n  };

  const initQuestModal = () => {
    const questModal = document.getElementById('dailyQuestModal');
    const closeQuest = document.getElementById('closeQuest');

    if (!questModal) {
      return;
    }

    setTimeout(() => {
      questModal.style.display = 'flex';
    }, 500);

    if (closeQuest) {
      closeQuest.addEventListener('click', () => {
        questModal.style.display = 'none';
      });
    }
  };

  const initAdventureSelection = () => {
    const chooseAdventureButton = document.getElementById('chooseAdventure');
    const adventureSection = document.getElementById('adventureSection');
    const gameContainer = document.querySelector('.game-container');

    if (chooseAdventureButton && adventureSection && gameContainer) {
      chooseAdventureButton.addEventListener('click', () => {
        gameContainer.classList.add('hidden');
        gameContainer.setAttribute('aria-hidden', 'true');

        adventureSection.classList.remove('hidden');
        adventureSection.classList.add('fade-in');
        adventureSection.setAttribute('aria-hidden', 'false');

        const firstCard = adventureSection.querySelector('.puzzle-card');
        if (firstCard) {
          firstCard.focus();
        }
      });
    }

    const adventureCards = toArray(document.querySelectorAll('#adventureSection .puzzle-card'));
    adventureCards.forEach((card) => {
      const puzzleId = card.dataset.puzzleId || 'forest';
      const fallback = ADVENTURE_PRESETS[puzzleId] || ADVENTURE_PRESETS.forest;
      const puzzleData = {
        id: puzzleId,
        title: card.dataset.title || fallback.title,
        image: card.dataset.image || fallback.image
      };

      const startSelectedPuzzle = () => {
        safeStorage.setJSON('selectedPuzzle', puzzleData);
        navigateTo('game.html');
      };

      card.addEventListener('click', startSelectedPuzzle);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          startSelectedPuzzle();
        }
      });
    });

    const playButton = document.getElementById('playLive');
    if (playButton) {
      playButton.addEventListener('click', () => {
        navigateTo('game.html');
      });
    }
  };

  const initAnimatedBackground = () => {
    const animatedBackground = document.getElementById('animated-bg');
    if (!animatedBackground) {
      return;
    }

    const avatarForBackground = getUserProfile()?.avatar || '';
    const backgroundThemes = {
      turtle: { gradient: 'linear-gradient(180deg, #a5d6a7, #e8f5e9)', asset: 'leaf.png' },
      drop: { gradient: 'linear-gradient(180deg, #81d4fa, #b3e5fc)', asset: 'bubbles.png' },
      squirrel: { gradient: 'linear-gradient(180deg, #ffe082, #fff8e1)', asset: 'leaf.png' },
      sun: { gradient: 'linear-gradient(180deg, #fff59d, #f1f8e9)', asset: 'clouds.png' },
      default: { gradient: 'linear-gradient(180deg, #b3e5fc, #e0f7fa)', asset: 'clouds.png' }
    };

    const resolvedThemeKey =
      Object.keys(backgroundThemes).find((key) => avatarForBackground.includes(key)) || 'default';
    const themeConfig = backgroundThemes[resolvedThemeKey];

    animatedBackground.style.background = themeConfig.gradient;
    animatedBackground.replaceChildren();

    const elementsCount = 20;
    for (let index = 0; index < elementsCount; index += 1) {
      const floatingElement = document.createElement('div');
      floatingElement.classList.add('floating-element');
      floatingElement.style.left = `${Math.random() * 100}%`;
      floatingElement.style.backgroundImage = `url('${themeConfig.asset}')`;

      const delay = (Math.random() * 10).toFixed(2);
      const duration = (10 + Math.random() * 15).toFixed(2);
      const size = 30 + Math.random() * 60;

      floatingElement.style.animationDelay = `${delay}s`;
      floatingElement.style.animationDuration = `${duration}s`;
      floatingElement.style.width = `${size}px`;
      floatingElement.style.height = `${size}px`;

      animatedBackground.appendChild(floatingElement);
    }
  };

  const initPuzzleBoard = () => {
    const puzzleBoard = document.getElementById('puzzleBoard');
    if (!puzzleBoard) {
      return;
    }

    const levelSelection = document.getElementById('levelSelection');
    const puzzleGame = document.getElementById('puzzleGame');
    const puzzleGrid = document.getElementById('puzzleGrid');
    const puzzleTitleElement = document.getElementById('puzzleTitle');
    const puzzleStatusElement = document.getElementById('puzzleStatus');
    const puzzlePreviewImage = document.getElementById('puzzlePreview');
    const levelCards = toArray(puzzleBoard.querySelectorAll('.level-card'));
    const restartButton = document.getElementById('restartGame');
    const changeDifficultyButton = document.getElementById('changeDifficulty');
    const puzzleActions = document.getElementById('puzzleActions');
    const playerProgressBar = document.getElementById('playerProgressBar');
    const playerProgressLabel = document.getElementById('playerProgressLabel');
    const collectiveProgressBar = document.getElementById('collectiveProgressBar');
    const collectiveProgressLabel = document.getElementById('collectiveProgressLabel');

    const getCollectiveProgress = () => {
      const storedValue = safeStorage.getNumber('ecoludCollectiveProgress', Number.NaN);
      if (Number.isFinite(storedValue)) {
        return clamp(storedValue);
      }
      return 68;
    };

    const updateCollectiveDisplay = (value) => {
      if (collectiveProgressBar) {
        collectiveProgressBar.style.width = `${value}%`;
      }
      if (collectiveProgressLabel) {
        collectiveProgressLabel.textContent = `${value}%`;
      }
    };

    const setCollectiveProgress = (value, theme) => {
      const clampedValue = clamp(Math.round(value));
      updateCollectiveDisplay(clampedValue);
      safeStorage.set('ecoludCollectiveProgress', String(clampedValue));
      if (typeof window.updatePlanet === 'function') {
        window.updatePlanet({ value: clampedValue, theme });
      }
      document.dispatchEvent(
        new CustomEvent('ecolud:collective-progress', { detail: { value: clampedValue, theme } })
      );
    };

    updateCollectiveDisplay(getCollectiveProgress());
    document.addEventListener('ecolud:collective-progress', (event) => {
      if (!event || typeof event.detail !== 'object') {
        return;
      }
      const value = typeof event.detail.value === 'number' ? event.detail.value : undefined;
      if (typeof value === 'number') {
        updateCollectiveDisplay(clamp(Math.round(value)));

  document.addEventListener('ecolud:user-ready', () => {
    updateDefaultPlayerName();
  });
      }
    });

    const loadStoredPuzzle = () => {
      const stored = safeStorage.getJSON('selectedPuzzle');
      if (!stored) {
        return { ...ADVENTURE_PRESETS.forest };
      }
      const fallback =
        (stored && stored.id && ADVENTURE_PRESETS[stored.id]) || ADVENTURE_PRESETS.forest;
      return {
        id: stored.id || fallback.id,
        title: stored.title || fallback.title,
        image: stored.image || fallback.image
      };
    };

    let activePuzzle = loadStoredPuzzle();
    let gridSize = 0;
    let currentOrder = [];
    let selectedPosition = null;
    let moveCount = 0;

    const applyPuzzleDetails = () => {
      if (puzzleTitleElement) {
        puzzleTitleElement.textContent = activePuzzle.title;
      }
      if (puzzlePreviewImage) {
        puzzlePreviewImage.src = activePuzzle.image;
        puzzlePreviewImage.alt = `Aper\u00e7u du puzzle ${activePuzzle.title}`;
      }
      safeStorage.setJSON('selectedPuzzle', activePuzzle);
    };

    const isSolved = () =>
      currentOrder.every((tileIndex, position) => tileIndex === position);

    const countCorrectPieces = () =>
      currentOrder.reduce(
        (total, tileIndex, position) => (tileIndex === position ? total + 1 : total),
        0
      );

    const updatePlayerProgress = (correctPieces, totalPieces) => {
      if (!playerProgressBar) {
        return;
      }
      const safeTotal = totalPieces > 0 ? totalPieces : 0;
      const ratio = safeTotal > 0 ? Math.round((correctPieces / safeTotal) * 100) : 0;
      playerProgressBar.style.width = `${ratio}%`;
      if (playerProgressLabel) {
        playerProgressLabel.textContent = `${ratio}%`;
      }
      const profile = getUserProfile();
      if (profile && profile.progress !== ratio) {
        updateUserProfile({ progress: ratio });
        document.dispatchEvent(new CustomEvent('ecolud:user-progress', { detail: { progress: ratio } }));
      }
    };

    const updateStatus = (message) => {
      if (!puzzleStatusElement) {
        return;
      }

      if (message) {
        puzzleStatusElement.textContent = message;
        return;
      }

      const correctPieces = countCorrectPieces();
      const totalPieces = currentOrder.length || gridSize * gridSize;
      updatePlayerProgress(correctPieces, totalPieces);

      if (moveCount > 0) {
        puzzleStatusElement.textContent = translateText('status_moves', {
          correct: correctPieces,
          total: totalPieces,
          moves: moveCount
        });
      } else {
        puzzleStatusElement.textContent = translateText('status_base', {
          correct: correctPieces,
          total: totalPieces
        });
      }
    };

    const renderPuzzle = () => {
      if (!puzzleGrid) {
        return;
      }
      puzzleGrid.replaceChildren();

      const totalTiles = currentOrder.length;
      const cols = gridSize;

      currentOrder.forEach((tileIndex, position) => {
        const tile = document.createElement('button');
        tile.classList.add('puzzle-piece');
        tile.type = 'button';
        tile.dataset.position = String(position);
        tile.dataset.index = String(tileIndex);
        tile.style.setProperty('--tile-image', `url('${activePuzzle.image}')`);
        tile.style.setProperty('--tile-size', `${gridSize}`);

        const col = tileIndex % cols;
        const row = Math.floor(tileIndex / cols);
        tile.style.setProperty('--bg-x', `${col}`);
        tile.style.setProperty('--bg-y', `${row}`);

        if (tileIndex === position) {
          tile.classList.add('is-correct');
        }

        if (selectedPosition === position) {
          tile.classList.add('is-selected');
        }

        tile.addEventListener('click', () => {
          if (selectedPosition === null) {
            selectedPosition = position;
            renderPuzzle();
            return;
          }

          if (selectedPosition === position) {
            selectedPosition = null;
            renderPuzzle();
            return;
          }

          const nextOrder = [...currentOrder];
          [nextOrder[selectedPosition], nextOrder[position]] = [
            nextOrder[position],
            nextOrder[selectedPosition]
          ];
          currentOrder = nextOrder;
          selectedPosition = null;
          moveCount += 1;

          renderPuzzle();
          updateStatus();

          if (isSolved()) {
            puzzleGrid.classList.add('is-complete');
            updateStatus(
              translateText('victory_message', {
                moves: moveCount
              })
            );

            const nextValue = clamp(getCollectiveProgress() + 1);
            setCollectiveProgress(nextValue, activePuzzle.id);
          }
        });

        tile.addEventListener('keydown', (event) => {
          const positionNumber = Number(tile.dataset.position);
          const isArrow = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key);
          if (!isArrow || Number.isNaN(positionNumber)) {
            return;
          }
          event.preventDefault();

          switch (event.key) {
            case 'ArrowUp':
              if (positionNumber - cols >= 0) {
                puzzleGrid
                  .querySelector(`[data-position="${positionNumber - cols}"]`)
                  ?.focus();
              }
              break;
            case 'ArrowDown':
              if (positionNumber + cols < totalTiles) {
                puzzleGrid
                  .querySelector(`[data-position="${positionNumber + cols}"]`)
                  ?.focus();
              }
              break;
            case 'ArrowLeft':
              if (positionNumber % cols !== 0) {
                puzzleGrid
                  .querySelector(`[data-position="${positionNumber - 1}"]`)
                  ?.focus();
              }
              break;
            case 'ArrowRight':
              if ((positionNumber + 1) % cols !== 0) {
                puzzleGrid
                  .querySelector(`[data-position="${positionNumber + 1}"]`)
                  ?.focus();
              }
              break;
            default:
              break;
          }
        });

        puzzleGrid.appendChild(tile);
      });
    };

    const shufflePieces = (announce = false) => {
      const total = gridSize * gridSize;
      currentOrder = Array.from({ length: total }, (_, index) => index);

      const shuffleArray = () => {
        for (let index = currentOrder.length - 1; index > 0; index -= 1) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          [currentOrder[index], currentOrder[randomIndex]] = [
            currentOrder[randomIndex],
            currentOrder[index]
          ];
        }
      };

      do {
        shuffleArray();
      } while (isSolved() && total > 1);

      selectedPosition = null;
      moveCount = 0;
      renderPuzzle();
      updatePlayerProgress(0, currentOrder.length);

      if (announce) {
        updateStatus(translateText('puzzle_ready', { total: currentOrder.length }));
      } else {
        updateStatus();
      }
    };

    const startPuzzle = (size) => {
      gridSize = Math.max(5, size);
      selectedPosition = null;
      moveCount = 0;

      if (levelSelection) {
        levelSelection.classList.add('hidden');
        levelSelection.setAttribute('aria-hidden', 'true');
      }
      if (puzzleGame) {
        puzzleGame.classList.remove('hidden');
        puzzleGame.setAttribute('aria-hidden', 'false');
      }
      if (puzzleActions) {
        puzzleActions.classList.remove('hidden');
      }

      shufflePieces(true);
    };

    levelCards.forEach((card) => {
      const launchPuzzle = () => {
        const targetUrl = card.dataset.puzzleUrl || card.getAttribute('href');
        if (typeof targetUrl === 'string' && targetUrl.length > 0) {
          window.location.href = targetUrl;
          return;
        }
        const size = Number(card.dataset.size) || 3;
        startPuzzle(size);
      };

      card.addEventListener('click', launchPuzzle);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          launchPuzzle();
        }
      });
    });

    if (changeDifficultyButton) {
      changeDifficultyButton.addEventListener('click', () => {
        if (puzzleGame) {
          puzzleGame.classList.add('hidden');
          puzzleGame.setAttribute('aria-hidden', 'true');
        }
        if (levelSelection) {
          levelSelection.classList.remove('hidden');
          levelSelection.setAttribute('aria-hidden', 'false');
        }
        if (puzzleActions) {
          puzzleActions.classList.add('hidden');
        }
        gridSize = 0;
        currentOrder = [];
        selectedPosition = null;
        moveCount = 0;
        if (puzzleGrid) {
          puzzleGrid.replaceChildren();
          puzzleGrid.classList.remove('is-complete');
        }
        if (puzzleStatusElement) {
          puzzleStatusElement.textContent = translateText('choose_difficulty');
        }
      });
    }

    if (restartButton) {
      restartButton.addEventListener('click', () => {
        if (gridSize > 0) {
          shufflePieces(false);
        }
      });
    }

    applyPuzzleDetails();
    if (puzzleStatusElement) {
      puzzleStatusElement.textContent = translateText('choose_difficulty');
    }
    updatePlayerProgress(0, 0);
  };

  const initBackNavigation = () => {
    const backHome = document.getElementById('backHome');
    if (!backHome) {
      return;
    }
    backHome.addEventListener('click', (event) => {
      event.preventDefault();
      navigateTo('home.html');
    });
  };

  const SCORE_POINTS_KEY = 'userPoints';
  const SCORE_PURCHASES_KEY = 'ecoPuzzlesPurchased';
  const SCORE_PARTICIPANTS_KEY = 'ecoScoreParticipants';
  const SCORE_VISITOR_ID_KEY = 'ecoScoreVisitorId';
  const SCORE_STORAGE_KEYS = [SCORE_POINTS_KEY, SCORE_PURCHASES_KEY, SCORE_PARTICIPANTS_KEY];
  const SCORE_ANIMATION_DURATION = 700;

  const calculateEcoPoints = (count) => {
    const total = Math.max(0, Math.floor(Number(count) || 0));
    if (total >= 10) {
      return 1300 + (total - 10) * 100;
    }
    if (total >= 5) {
      return 600 + (total - 5) * 100;
    }
    return total * 100;
  };

  const inferPuzzlesFromPoints = (points) => {
    const normalized = Math.max(0, Math.floor(Number(points) || 0));
    if (normalized >= 1300) {
      return 10 + Math.round((normalized - 1300) / 100);
    }
    if (normalized >= 600) {
      return 5 + Math.round((normalized - 600) / 100);
    }
    return Math.round(normalized / 100);
  };

  const getStoredParticipants = () => {
    const stored = safeStorage.getJSON(SCORE_PARTICIPANTS_KEY, []);
    if (!Array.isArray(stored)) {
      return [];
    }
    return stored.filter((value) => typeof value === 'string' && value.trim());
  };

  const persistParticipants = (entries) => {
    const unique = Array.from(new Set(entries.filter((value) => typeof value === 'string' && value.trim())));
    safeStorage.setJSON(SCORE_PARTICIPANTS_KEY, unique);
    return unique;
  };

  const generateVisitorId = () => {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return `vid-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
  };

  const resolveParticipantId = () => {
    try {
      const profile = getUserProfile();
      if (profile && typeof profile.name === 'string' && profile.name.trim()) {
        return `profile:${profile.name.trim().toLowerCase()}`;
      }
    } catch (error) {
      // Ignore profile resolution errors; fallback to visitor id.
    }

    let visitorId = safeStorage.get(SCORE_VISITOR_ID_KEY, null);
    if (!visitorId) {
      visitorId = generateVisitorId();
      safeStorage.set(SCORE_VISITOR_ID_KEY, visitorId);
    }
    return visitorId ? `visitor:${visitorId}` : null;
  };

  const registerParticipant = () => {
    const participantId = resolveParticipantId();
    if (!participantId) {
      return getStoredParticipants().length;
    }
    const participants = getStoredParticipants();
    if (!participants.includes(participantId)) {
      participants.push(participantId);
      persistParticipants(participants);
    }
    return participants.length;
  };

  const unregisterParticipant = () => {
    const participantId = resolveParticipantId();
    if (!participantId) {
      return getStoredParticipants().length;
    }
    const participants = getStoredParticipants();
    const filtered = participants.filter((entry) => entry !== participantId);
    if (filtered.length !== participants.length) {
      persistParticipants(filtered);
    }
    return filtered.length;
  };

  const ecoScoreElements = {
    card: null,
    value: null,
    message: null,
    participants: null,
    progressFill: null,
    progressText: null,
    progressBar: null
  };

  const ecoScoreState = {
    count: 0,
    points: 0,
    participants: 0,
    animationFrame: null
  };

  const cancelScoreAnimation = () => {
    if (ecoScoreState.animationFrame) {
      cancelAnimationFrame(ecoScoreState.animationFrame);
      ecoScoreState.animationFrame = null;
    }
  };

  const animateScoreValue = (start, end, onUpdate) => {
    cancelScoreAnimation();
    const from = Number.isFinite(start) ? start : 0;
    const to = Number.isFinite(end) ? end : 0;
    if (from === to || SCORE_ANIMATION_DURATION <= 0) {
      onUpdate(to);
      return;
    }
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = clamp(elapsed / SCORE_ANIMATION_DURATION, 0, 1);
      const eased = progress < 1 ? 1 - Math.pow(1 - progress, 3) : 1;
      const current = Math.round(from + (to - from) * eased);
      onUpdate(current);
      if (progress < 1) {
        ecoScoreState.animationFrame = requestAnimationFrame(tick);
      } else {
        ecoScoreState.animationFrame = null;
      }
    };
    ecoScoreState.animationFrame = requestAnimationFrame(tick);
  };

  const formatScoreNumber = (value) => {
    const locale = document.documentElement.lang || 'fr';
    try {
      return new Intl.NumberFormat(locale).format(value);
    } catch (error) {
      return String(value);
    }
  };

  const resolveNextMilestone = (count) => {
    if (count < 5) {
      return { next: 5, previous: 0 };
    }
    if (count < 10) {
      return { next: 10, previous: 5 };
    }
    const next = Math.ceil((count + 1) / 5) * 5;
    return { next, previous: next - 5 };
  };

  const renderEcoScore = (count, points, { animate = false, participants } = {}) => {
    if (!ecoScoreElements.value || !ecoScoreElements.message) {
      return;
    }

    const previousPoints = ecoScoreState.points;
    const safePoints = Math.max(0, Math.floor(points));
    const safeCount = Math.max(0, Math.floor(count));
    const safeParticipants = Number.isFinite(participants)
      ? Math.max(0, Math.floor(participants))
      : ecoScoreState.participants;

    const updateValue = (value) => {
      ecoScoreElements.value.textContent = formatScoreNumber(value);
    };

    if (animate) {
      animateScoreValue(previousPoints, safePoints, updateValue);
    } else {
      cancelScoreAnimation();
      updateValue(safePoints);
    }

    const messageKey = safeCount === 0 ? 'eco-score-empty' : 'eco-score-message';
    ecoScoreElements.message.textContent = translateText(messageKey);

    if (ecoScoreElements.participants) {
      ecoScoreElements.participants.textContent = formatScoreNumber(safeParticipants);
    }

    if (ecoScoreElements.progressBar) {
      ecoScoreElements.progressBar.setAttribute(
        'aria-label',
        translateText('eco-score-progress-label')
      );
    }

    const { next, previous } = resolveNextMilestone(safeCount);
    const range = Math.max(1, next - previous);
    const progress = clamp(((safeCount - previous) / range) * 100);

    if (ecoScoreElements.progressFill) {
      ecoScoreElements.progressFill.style.width = `${progress}%`;
    }

    if (ecoScoreElements.progressBar) {
      ecoScoreElements.progressBar.setAttribute('aria-valuenow', String(Math.round(progress)));
    }

    if (ecoScoreElements.progressText) {
      const remaining = Math.max(next - safeCount, 0);
      const progressKey =
        remaining === 0 ? 'eco-score-progress-max' : 'eco-score-progress-hint';
      ecoScoreElements.progressText.textContent =
        remaining === 0
          ? translateText(progressKey)
          : translateText(progressKey, { count: formatScoreNumber(remaining) });
    }

    ecoScoreState.count = safeCount;
    ecoScoreState.points = safePoints;
    ecoScoreState.participants = safeParticipants;
  };

  const persistEcoScore = (count, points) => {
    safeStorage.set(SCORE_PURCHASES_KEY, String(count));
    safeStorage.set(SCORE_POINTS_KEY, String(points));
  };

  const syncEcoScoreFromStorage = ({ animate = false } = {}) => {
    if (!ecoScoreElements.card) {
      return;
    }
    const storedCount = safeStorage.getNumber(SCORE_PURCHASES_KEY, NaN);
    const storedPoints = safeStorage.getNumber(SCORE_POINTS_KEY, NaN);

    let resolvedCount = Number.isFinite(storedCount) ? storedCount : null;
    let resolvedPoints = Number.isFinite(storedPoints) ? storedPoints : null;
    let participantsList = getStoredParticipants();

    if (resolvedCount === null && resolvedPoints !== null) {
      resolvedCount = inferPuzzlesFromPoints(resolvedPoints);
    }

    if (resolvedCount === null) {
      resolvedCount = 0;
    }

    resolvedPoints = calculateEcoPoints(resolvedCount);

    const participantId = resolveParticipantId();
    if (participantId) {
      if (resolvedCount > 0 && !participantsList.includes(participantId)) {
        participantsList.push(participantId);
        participantsList = persistParticipants(participantsList);
      }
      if (resolvedCount === 0 && participantsList.includes(participantId)) {
        participantsList = persistParticipants(
          participantsList.filter((entry) => entry !== participantId)
        );
      }
    }

    const participantsTotal = participantsList.length;

    persistEcoScore(resolvedCount, resolvedPoints);
    renderEcoScore(resolvedCount, resolvedPoints, { animate, participants: participantsTotal });
  };

  const updateEcoPoints = (nbPuzzles) => {
    const sanitizedCount = Math.max(0, Math.floor(Number(nbPuzzles) || 0));
    const newPoints = calculateEcoPoints(sanitizedCount);
    persistEcoScore(sanitizedCount, newPoints);
    const participantsTotal =
      sanitizedCount > 0 ? registerParticipant() : unregisterParticipant();
    renderEcoScore(sanitizedCount, newPoints, { animate: true, participants: participantsTotal });
    return newPoints;
  };

  const handlePuzzlePurchaseEvent = (event) => {
    const detail = (event && event.detail) || {};
    if (typeof detail.total === 'number') {
      updateEcoPoints(detail.total);
      return;
    }
    if (typeof detail.increment === 'number') {
      updateEcoPoints(ecoScoreState.count + detail.increment);
      return;
    }
    updateEcoPoints(ecoScoreState.count + 1);
  };

  const initEcoScore = () => {
    const card = document.getElementById('ecoScoreCard');
    if (!card) {
      return;
    }

    ecoScoreElements.card = card;
    ecoScoreElements.value = card.querySelector('#ecoScoreValue');
    ecoScoreElements.message = card.querySelector('#ecoScoreMessage');
    ecoScoreElements.participants = card.querySelector('#ecoScoreParticipants');
    ecoScoreElements.progressFill = card.querySelector('#ecoScoreProgressFill');
    ecoScoreElements.progressText = card.querySelector('#ecoScoreProgressText');
    ecoScoreElements.progressBar = card.querySelector('#ecoScoreProgressBar');

    syncEcoScoreFromStorage({ animate: false });

    document.addEventListener('ecolud:puzzle-purchased', handlePuzzlePurchaseEvent);
    document.addEventListener('ecolud:language-change', () => {
      renderEcoScore(ecoScoreState.count, ecoScoreState.points, {
        animate: false,
        participants: ecoScoreState.participants
      });
    });

    window.addEventListener('storage', (event) => {
      if (!event.key || (event.key && !SCORE_STORAGE_KEYS.includes(event.key))) {
        return;
      }
      syncEcoScoreFromStorage({ animate: false });
    });

    if (typeof window.updatePoints !== 'function') {
      window.updatePoints = updateEcoPoints;
    } else {
      const originalUpdate = window.updatePoints;
      window.updatePoints = (...args) => {
        const result = originalUpdate.apply(window, args);
        updateEcoPoints(...args);
        return result;
      };
    }
  };

  const initBirdAnimation = () => {
    const birdContainer = document.querySelector('.bird-background');
    if (!birdContainer) {
      return;
    }

    birdContainer.replaceChildren();
    const totalBirds = 6;
    for (let index = 0; index < totalBirds; index += 1) {
      const bird = document.createElement('div');
      bird.classList.add('bird');

      bird.style.setProperty('--yStart', `${Math.random() * 60 + 10}vh`);
      bird.style.setProperty('--yMid', `${Math.random() * 60 + 10}vh`);
      bird.style.setProperty('--yEnd', `${Math.random() * 60 + 10}vh`);
      bird.style.animationDuration = `${8 + Math.random() * 6}s`;
      bird.style.animationDelay = `${Math.random() * 5}s`;

      birdContainer.appendChild(bird);
    }
  };

  const initApp = () => {
    initProfileSetup();
    initProfileHeader();
    initFloatingCompanion();
    initQuestModal();
    initAdventureSelection();
    initAnimatedBackground();
    initPuzzleBoard();
    initBackNavigation();
    initEcoScore();
    initBirdAnimation();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
