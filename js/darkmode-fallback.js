// =======================================
// ConectaSocial - Dark Mode Fallback Global
// =======================================
(() => {
  const TOGGLE_ID = 'toggle-contrast';
  const DARK_CLASS = 'dark-mode';
  const STORAGE_KEY = 'theme';

  function initDarkMode() {
    const toggle = document.getElementById(TOGGLE_ID);
    if (!toggle) return; // botão não existe

    // evita duplicar listeners se app.js já fez isso
    if (toggle.dataset.darkListener) return;

    // aplica tema salvo
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark') document.body.classList.add(DARK_CLASS);
    } catch (e) {}

    // define emoji correto
    toggle.textContent = document.body.classList.contains(DARK_CLASS) ? '☀️' : '🌙';

    // adiciona listener
    toggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle(DARK_CLASS);
      try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (e) {}
      toggle.textContent = isDark ? '☀️' : '🌙';
      console.log(`%c${isDark ? '🌙 Modo escuro ativado' : '☀️ Modo claro ativado'}`, 'color:#48BB78; font-weight:bold;');
    });

    toggle.dataset.darkListener = '1';
    window.__darkModeReady = true;
  }

  // tenta inicializar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
  } else {
    initDarkMode();
  }

  // fallback extra se o app.js não inicializar
  setTimeout(() => {
    if (!window.__darkModeReady) initDarkMode();
  }, 800);
})();
