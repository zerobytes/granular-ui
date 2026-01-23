const themeVars = new Set([
  '--g-ui-bg',
  '--g-ui-bg-subtle',
  '--g-ui-bg-muted',
  '--g-ui-bg-emphasized',
  '--g-ui-bg-inverted',
  '--g-ui-bg-panel',
  '--g-ui-fg',
  '--g-ui-fg-muted',
  '--g-ui-fg-subtle',
  '--g-ui-fg-inverted',
  '--g-ui-border',
  '--g-ui-border-subtle',
  '--g-ui-border-emphasized',
  '--g-ui-border-inverted',
  '--g-ui-primary',
  '--g-ui-primary-hover',
  '--g-ui-primary-active',
  '--g-ui-primary-subtle',
  '--g-ui-primary-muted',
  '--g-ui-primary-emphasized',
  '--g-ui-success',
  '--g-ui-success-hover',
  '--g-ui-success-active',
  '--g-ui-success-subtle',
  '--g-ui-success-muted',
  '--g-ui-danger',
  '--g-ui-danger-hover',
  '--g-ui-danger-active',
  '--g-ui-danger-subtle',
  '--g-ui-danger-muted',
  '--g-ui-warning',
  '--g-ui-warning-hover',
  '--g-ui-warning-active',
  '--g-ui-warning-subtle',
  '--g-ui-warning-muted',
  '--g-ui-info',
  '--g-ui-info-hover',
  '--g-ui-info-active',
  '--g-ui-info-subtle',
  '--g-ui-info-muted',
  '--g-ui-shadow-xs',
  '--g-ui-shadow-sm',
  '--g-ui-shadow-md',
  '--g-ui-shadow-lg',
  '--g-ui-shadow-xl',
  '--g-ui-shadow-2xl',
  '--g-ui-radius',
  '--g-ui-font',
  // Legacy
  '--g-ui-surface',
  '--g-ui-text',
  '--g-ui-muted',
  '--g-ui-primary-strong',
  '--g-ui-shadow',
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
