(() => {
  const STORAGE_KEY = 'partner_session';
  const AUTH_USERS = {
    graine: {
      password: 'planet',
      company: 'Grainedeplanet',
      prototypes: [
        'puzzle-fr-35',
        'puzzle-fr-45',
        'puzzle-en-35',
        'puzzle-en-45',
        'puzzle-es-35',
        'puzzle-es-45',
      ],
    },
  };

  const readSession = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const payload = JSON.parse(raw);
      if (payload && typeof payload.username === 'string') {
        return payload;
      }
    } catch {
      // Ignore malformed payloads.
    }
    return null;
  };

  let currentSession = readSession();

  const persistSession = () => {
    try {
      if (currentSession) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ username: currentSession.username }));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Fallback: storage not available, ignore.
    }
  };

  const normalizeUsername = (value) =>
    typeof value === 'string' ? value.trim().toLowerCase() : '';

  const resolveAccount = (username) => {
    const key = normalizeUsername(username);
    const user = AUTH_USERS[key];
    if (!user) {
      return null;
    }
    return { username: key, ...user };
  };

  const login = (username, password) => {
    const account = resolveAccount(username);
    if (!account || account.password !== password) {
      return null;
    }
    currentSession = { username: account.username };
    persistSession();
    return { ...account };
  };

  const logout = () => {
    currentSession = null;
    persistSession();
  };

  const getAccount = () => {
    if (!currentSession) {
      return null;
    }
    const account = resolveAccount(currentSession.username);
    if (!account) {
      logout();
      return null;
    }
    return { ...account };
  };

  const isAuthenticated = () => !!getAccount();

  window.auth = {
    login,
    logout,
    getAccount,
    isAuthenticated,
    users: AUTH_USERS,
  };
})();
