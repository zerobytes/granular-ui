const themeVars = new Set([
  '--g-ui-bg',
  '--g-ui-surface',
  '--g-ui-border',
  '--g-ui-text',
  '--g-ui-muted',
  '--g-ui-primary',
  '--g-ui-primary-strong',
  '--g-ui-success',
  '--g-ui-danger',
  '--g-ui-radius',
  '--g-ui-shadow',
  '--g-ui-font',
]);

export function setThemeVars(vars = {}, target = document?.documentElement) {
  if (!target) return;
  for (const [key, value] of Object.entries(vars)) {
    const cssKey = key.startsWith('--') ? key : `--g-ui-${key}`;
    if (!themeVars.has(cssKey)) continue;
    target.style.setProperty(cssKey, String(value));
  }
}

export function setThemeMode(mode = 'dark', target = document?.documentElement) {
  if (!target) return;
  target.classList.remove('g-ui-theme-dark', 'g-ui-theme-light');
  target.classList.add(mode === 'light' ? 'g-ui-theme-light' : 'g-ui-theme-dark');
}
