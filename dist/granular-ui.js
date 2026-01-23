var W="granular-ui-styles",yi=`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/granular-ui-fonts/Poppins-400.ttf') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/granular-ui-fonts/Poppins-500.ttf') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/granular-ui-fonts/Poppins-600.ttf') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/granular-ui-fonts/Poppins-700.ttf') format('truetype');
}

:root {
  --g-ui-bg: #1f1f1f;
  --g-ui-surface: #252526;
  --g-ui-border: #3c3c3c;
  --g-ui-text: #d4d4d4;
  --g-ui-muted: #8a8a8a;
  --g-ui-primary: #3794ff;
  --g-ui-primary-strong: #1f7bff;
  --g-ui-success: #4ec9b0;
  --g-ui-danger: #f14c4c;
  --g-ui-radius: 10px;
  --g-ui-shadow: 0 10px 24px rgba(0,0,0,0.25);
  --g-ui-font: 'Poppins', system-ui, -apple-system, Segoe UI, sans-serif;
}

.g-ui-theme-dark {
  --g-ui-bg: #1f1f1f;
  --g-ui-surface: #252526;
  --g-ui-border: #3c3c3c;
  --g-ui-text: #d4d4d4;
  --g-ui-muted: #8a8a8a;
  --g-ui-primary: #3794ff;
  --g-ui-primary-strong: #1f7bff;
  --g-ui-success: #4ec9b0;
  --g-ui-danger: #f14c4c;
  --g-ui-shadow: 0 10px 24px rgba(0,0,0,0.25);
}

.g-ui-theme-light {
  --g-ui-bg: #ffffff;
  --g-ui-surface: #f3f3f3;
  --g-ui-border: #e5e5e5;
  --g-ui-text: #1f1f1f;
  --g-ui-muted: #5a5a5a;
  --g-ui-primary: #0f62fe;
  --g-ui-primary-strong: #0353e9;
  --g-ui-success: #107c41;
  --g-ui-danger: #d83b01;
  --g-ui-shadow: 0 10px 24px rgba(0,0,0,0.12);
}
body {
  margin:0;
  padding:0;
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
}
html, body, #app {
  height: 100%;
  min-height: 100%;
}
.g-ui-reset {
  font-family: var(--g-ui-font);
  color: var(--g-ui-text);
}

.g-ui-text {
  font-family: var(--g-ui-font);
  color: var(--g-ui-text);
}
.g-ui-text-size-xs { font-size: 12px; }
.g-ui-text-size-sm { font-size: 13px; }
.g-ui-text-size-md { font-size: 14px; }
.g-ui-text-size-lg { font-size: 16px; }
.g-ui-text-size-xl { font-size: 18px; }
.g-ui-text-weight-400 { font-weight: 400; }
.g-ui-text-weight-500 { font-weight: 500; }
.g-ui-text-weight-600 { font-weight: 600; }
.g-ui-text-weight-700 { font-weight: 700; }
.g-ui-text-dimmed { color: var(--g-ui-muted); }
.g-ui-text-muted { color: var(--g-ui-muted); }
.g-ui-text-primary { color: var(--g-ui-primary); }
.g-ui-text-success { color: var(--g-ui-success); }
.g-ui-text-danger { color: var(--g-ui-danger); }
.g-ui-text-align-left { text-align: left; }
.g-ui-text-align-center { text-align: center; }
.g-ui-text-align-right { text-align: right; }

.g-ui-title {
  font-family: var(--g-ui-font);
  color: var(--g-ui-text);
  margin: 0;
  font-weight: 700;
}
.g-ui-title-order-1 { font-size: 32px; }
.g-ui-title-order-2 { font-size: 26px; }
.g-ui-title-order-3 { font-size: 22px; }
.g-ui-title-order-4 { font-size: 18px; }
.g-ui-title-order-5 { font-size: 16px; }
.g-ui-title-order-6 { font-size: 14px; }

.g-ui-stack {
  display: flex;
  flex-direction: column;
}
.g-ui-gap-xs { gap: 6px; }
.g-ui-gap-sm { gap: 10px; }
.g-ui-gap-md { gap: 14px; }
.g-ui-gap-lg { gap: 20px; }
.g-ui-gap-xl { gap: 28px; }
.g-ui-align-start { align-items: flex-start; }
.g-ui-align-center { align-items: center; }
.g-ui-align-end { align-items: flex-end; }
.g-ui-justify-start { justify-content: flex-start; }
.g-ui-justify-center { justify-content: center; }
.g-ui-justify-end { justify-content: flex-end; }
.g-ui-justify-between { justify-content: space-between; }

.g-ui-group {
  display: flex;
  align-items: center;
}
.g-ui-wrap { flex-wrap: wrap; }

.g-ui-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}
.g-ui-container-size-xs { max-width: 540px; }
.g-ui-container-size-sm { max-width: 720px; }
.g-ui-container-size-md { max-width: 960px; }
.g-ui-container-size-lg { max-width: 1140px; }
.g-ui-container-size-xl { max-width: 1320px; }
.g-ui-container-fluid { max-width: 100%; }

.g-ui-card {
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border);
  border-radius: var(--g-ui-radius);
  box-shadow: var(--g-ui-shadow);
}
.g-ui-card-padding-xs { padding: 10px; }
.g-ui-card-padding-sm { padding: 14px; }
.g-ui-card-padding-md { padding: 18px; }
.g-ui-card-padding-lg { padding: 24px; }
.g-ui-card-radius-sm { border-radius: 8px; }
.g-ui-card-radius-md { border-radius: 10px; }
.g-ui-card-radius-lg { border-radius: 14px; }
.g-ui-card-shadow-sm { box-shadow: 0 6px 14px rgba(0,0,0,0.2); }
.g-ui-card-shadow-md { box-shadow: 0 10px 24px rgba(0,0,0,0.25); }
.g-ui-card-shadow-lg { box-shadow: 0 16px 32px rgba(0,0,0,0.3); }

.g-ui-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
}
.g-ui-badge-variant-filled {
  background: var(--g-ui-primary);
  color: #fff;
  border: 1px solid transparent;
}
.g-ui-badge-variant-light {
  background: rgba(102,126,234,0.15);
  color: var(--g-ui-primary);
  border: 1px solid rgba(102,126,234,0.2);
}
.g-ui-badge-variant-outline {
  background: transparent;
  color: var(--g-ui-primary);
  border: 1px solid rgba(102,126,234,0.6);
}
.g-ui-badge-variant-dot {
  background: transparent;
  color: var(--g-ui-text);
  border: 1px solid var(--g-ui-border);
}
.g-ui-badge-dot {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.g-ui-badge-dot::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--g-ui-success);
}

.g-ui-button {
  border: 0;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: 600;
  transition: transform .08s ease, background .12s ease, border .12s ease, color .12s ease;
}
.g-ui-button:active { transform: translateY(1px); }
.g-ui-button:disabled { opacity: 0.6; cursor: not-allowed; }
.g-ui-button-full { width: 100%; }
.g-ui-button-loading { opacity: 0.8; }
.g-ui-button-section-left { margin-right: 8px; display: inline-flex; }
.g-ui-button-section-right { margin-left: 8px; display: inline-flex; }
.g-ui-button-variant-filled { background: var(--g-ui-primary); color: #fff; border: 1px solid transparent; }
.g-ui-button-variant-light { background: rgba(102,126,234,0.12); color: var(--g-ui-primary); border: 1px solid rgba(102,126,234,0.2); }
.g-ui-button-variant-outline { background: transparent; color: var(--g-ui-primary); border: 1px solid rgba(102,126,234,0.6); }
.g-ui-button-variant-subtle { background: transparent; color: var(--g-ui-text); border: 1px solid var(--g-ui-border); }
.g-ui-button-variant-transparent { background: transparent; color: var(--g-ui-text); border: 1px solid transparent; }
.g-ui-button-size-xs { font-size: 12px; height: 30px; padding: 6px 10px; }
.g-ui-button-size-sm { font-size: 13px; height: 34px; padding: 8px 12px; }
.g-ui-button-size-md { font-size: 14px; height: 38px; padding: 10px 14px; }
.g-ui-button-size-lg { font-size: 15px; height: 44px; padding: 12px 16px; }
.g-ui-button-size-xl { font-size: 16px; height: 50px; padding: 14px 18px; }

.g-ui-input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: #0f1115;
  color: var(--g-ui-text);
  padding: 10px 12px;
}
.g-ui-input-error {
  border-color: var(--g-ui-danger);
}
.g-ui-text-input {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-ui-text-input-label {
  font-size: 13px;
  color: var(--g-ui-muted);
}
.g-ui-text-input-description {
  font-size: 12px;
  color: var(--g-ui-muted);
}
.g-ui-text-input-error-text {
  font-size: 12px;
  color: var(--g-ui-danger);
}

.g-ui-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.g-ui-modal-overlay-light { background: rgba(0,0,0,0.4); }
.g-ui-modal-overlay-normal { background: rgba(0,0,0,0.6); }
.g-ui-modal-overlay-dark { background: rgba(0,0,0,0.8); }
.g-ui-modal-centered { align-items: center; }
.g-ui-modal-top { align-items: flex-start; padding-top: 40px; }
.g-ui-modal {
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border);
  border-radius: 14px;
  padding: 20px;
  min-width: 320px;
  max-width: 680px;
  box-shadow: var(--g-ui-shadow);
}
.g-ui-modal-size-sm { width: 380px; }
.g-ui-modal-size-md { width: 460px; }
.g-ui-modal-size-lg { width: 560px; }
.g-ui-modal-size-xl { width: 680px; }
.g-ui-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.g-ui-modal-title { font-weight: 700; }

.g-ui-checkbox {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-ui-checkbox-control {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.g-ui-checkbox-input {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--g-ui-border);
  border-radius: 4px;
  background: #0f1115;
  position: relative;
}
.g-ui-checkbox-input:checked {
  background: var(--g-ui-primary);
  border-color: var(--g-ui-primary);
}
.g-ui-checkbox-input:checked::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 2px;
  background: #fff;
}
.g-ui-checkbox-label { font-size: 14px; }
.g-ui-checkbox-description { font-size: 12px; color: var(--g-ui-muted); }

.g-ui-switch {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.g-ui-switch-input {
  appearance: none;
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: #20242d;
  border: 1px solid var(--g-ui-border);
  position: relative;
  transition: background .15s ease, border .15s ease;
}
.g-ui-switch-input::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  top: 2px;
  left: 2px;
  transition: transform .15s ease;
}
.g-ui-switch-input:checked {
  background: var(--g-ui-primary);
  border-color: var(--g-ui-primary);
}
.g-ui-switch-input:checked::after {
  transform: translateX(16px);
}
.g-ui-switch-label { font-size: 14px; }

.g-ui-select {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: #0f1115;
  color: var(--g-ui-text);
  padding: 10px 12px;
}

.g-ui-tabs { display: flex; flex-direction: column; gap: 12px; }
.g-ui-tabs-list { display: flex; gap: 8px; }
.g-ui-tabs-tab {
  border: 1px solid var(--g-ui-border);
  background: transparent;
  color: var(--g-ui-text);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}
.g-ui-tabs-tab-active {
  background: rgba(102,126,234,0.15);
  border-color: rgba(102,126,234,0.5);
  color: var(--g-ui-primary);
}
.g-ui-tabs-panel { padding-top: 6px; }

.g-ui-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--g-ui-text);
}
.g-ui-table th,
.g-ui-table td {
  border-bottom: 1px solid var(--g-ui-border);
  padding: 10px 12px;
  text-align: left;
}
.g-ui-table-striped tbody tr:nth-child(odd) { background: rgba(255,255,255,0.02); }
.g-ui-table-hover tbody tr:hover { background: rgba(102,126,234,0.08); }

.g-ui-accordion { display: flex; flex-direction: column; gap: 8px; }
.g-ui-accordion-item {
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  background: var(--g-ui-surface);
}
.g-ui-accordion-control {
  width: 100%;
  text-align: left;
  padding: 12px 14px;
  background: transparent;
  border: 0;
  color: var(--g-ui-text);
  cursor: pointer;
  font-weight: 600;
}
.g-ui-accordion-panel {
  padding: 12px 14px;
  border-top: 1px solid var(--g-ui-border);
}

.g-ui-tooltip {
  position: relative;
  display: inline-flex;
}
.g-ui-tooltip-content {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #0f1115;
  color: var(--g-ui-text);
  border: 1px solid var(--g-ui-border);
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity .12s ease, transform .12s ease;
}
.g-ui-tooltip:hover .g-ui-tooltip-content {
  opacity: 1;
  transform: translateX(-50%) translateY(-2px);
}

.g-ui-menu {
  position: relative;
  display: inline-flex;
}
.g-ui-menu-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  box-shadow: var(--g-ui-shadow);
  padding: 6px;
  z-index: 50;
}
.g-ui-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--g-ui-text);
}
.g-ui-menu-item:hover { background: rgba(102,126,234,0.12); }

.g-ui-drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 998;
}
.g-ui-drawer-overlay-normal { background: rgba(0,0,0,0.6); }
.g-ui-drawer-overlay-light { background: rgba(0,0,0,0.4); }
.g-ui-drawer-overlay-dark { background: rgba(0,0,0,0.8); }
.g-ui-drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 320px;
  background: var(--g-ui-surface);
  border-left: 1px solid var(--g-ui-border);
  box-shadow: var(--g-ui-shadow);
  z-index: 999;
  padding: 16px;
}
.g-ui-drawer-right { right: 0; }
.g-ui-drawer-left { left: 0; border-left: 0; border-right: 1px solid var(--g-ui-border); }
.g-ui-drawer-size-sm { width: 280px; }
.g-ui-drawer-size-md { width: 320px; }
.g-ui-drawer-size-lg { width: 420px; }
.g-ui-drawer-size-xl { width: 520px; }

.g-ui-notification {
  border: 1px solid var(--g-ui-border);
  border-radius: 12px;
  padding: 14px 16px;
  background: var(--g-ui-surface);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-ui-notification-title { font-weight: 700; }
.g-ui-notification-primary { border-color: rgba(102,126,234,0.4); }
.g-ui-notification-success { border-color: rgba(18,184,134,0.4); }
.g-ui-notification-danger { border-color: rgba(255,107,107,0.5); }

.g-ui-divider {
  width: 100%;
  height: 1px;
  border: 0;
  background: var(--g-ui-border);
}

.g-ui-paper {
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
}

.g-ui-textarea {
  min-height: 120px;
  resize: vertical;
}

.g-ui-alert {
  border-radius: 12px;
  border: 1px solid var(--g-ui-border);
  padding: 12px 14px;
  background: var(--g-ui-surface);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-ui-alert-title { font-weight: 700; }
.g-ui-alert-primary { border-color: rgba(102,126,234,0.4); }
.g-ui-alert-success { border-color: rgba(18,184,134,0.4); }
.g-ui-alert-danger { border-color: rgba(255,107,107,0.5); }
.g-ui-alert-warning { border-color: rgba(250,176,5,0.5); }

.g-ui-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #20242d;
  color: var(--g-ui-text);
  overflow: hidden;
  border: 1px solid var(--g-ui-border);
  font-weight: 600;
}
.g-ui-avatar-size-xs { width: 24px; height: 24px; font-size: 11px; }
.g-ui-avatar-size-sm { width: 32px; height: 32px; font-size: 12px; }
.g-ui-avatar-size-md { width: 40px; height: 40px; font-size: 13px; }
.g-ui-avatar-size-lg { width: 52px; height: 52px; font-size: 14px; }
.g-ui-avatar-size-xl { width: 64px; height: 64px; font-size: 16px; }
.g-ui-avatar-img { width: 100%; height: 100%; object-fit: cover; }

.g-ui-kbd {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid var(--g-ui-border);
  background: #0f1115;
  font-size: 12px;
  color: var(--g-ui-muted);
}

.g-ui-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  background: #0f1115;
  border: 1px solid var(--g-ui-border);
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 12px;
  color: var(--g-ui-text);
}

.g-ui-blockquote {
  border-left: 3px solid var(--g-ui-primary);
  padding: 8px 12px;
  background: rgba(102,126,234,0.08);
  color: var(--g-ui-text);
  border-radius: 8px;
}

.g-ui-grid {
  display: grid;
  gap: 12px;
}
.g-ui-grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.g-ui-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.g-ui-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.g-ui-grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.g-ui-grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.g-ui-grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }

.g-ui-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 18px;
  color: var(--g-ui-text);
}

.g-ui-anchor {
  color: var(--g-ui-primary);
  text-decoration: none;
}
.g-ui-anchor:hover { text-decoration: underline; }

.g-ui-image {
  max-width: 100%;
  border-radius: 10px;
  border: 1px solid var(--g-ui-border);
}

.g-ui-progress {
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: #20242d;
  border: 1px solid var(--g-ui-border);
  overflow: hidden;
}
.g-ui-progress-bar {
  height: 100%;
  background: var(--g-ui-primary);
}
.g-ui-progress-0 .g-ui-progress-bar { width: 0%; }
.g-ui-progress-5 .g-ui-progress-bar { width: 5%; }
.g-ui-progress-10 .g-ui-progress-bar { width: 10%; }
.g-ui-progress-15 .g-ui-progress-bar { width: 15%; }
.g-ui-progress-20 .g-ui-progress-bar { width: 20%; }
.g-ui-progress-25 .g-ui-progress-bar { width: 25%; }
.g-ui-progress-30 .g-ui-progress-bar { width: 30%; }
.g-ui-progress-35 .g-ui-progress-bar { width: 35%; }
.g-ui-progress-40 .g-ui-progress-bar { width: 40%; }
.g-ui-progress-45 .g-ui-progress-bar { width: 45%; }
.g-ui-progress-50 .g-ui-progress-bar { width: 50%; }
.g-ui-progress-55 .g-ui-progress-bar { width: 55%; }
.g-ui-progress-60 .g-ui-progress-bar { width: 60%; }
.g-ui-progress-65 .g-ui-progress-bar { width: 65%; }
.g-ui-progress-70 .g-ui-progress-bar { width: 70%; }
.g-ui-progress-75 .g-ui-progress-bar { width: 75%; }
.g-ui-progress-80 .g-ui-progress-bar { width: 80%; }
.g-ui-progress-85 .g-ui-progress-bar { width: 85%; }
.g-ui-progress-90 .g-ui-progress-bar { width: 90%; }
.g-ui-progress-95 .g-ui-progress-bar { width: 95%; }
.g-ui-progress-100 .g-ui-progress-bar { width: 100%; }
.g-ui-progress-success .g-ui-progress-bar { background: var(--g-ui-success); }
.g-ui-progress-danger .g-ui-progress-bar { background: var(--g-ui-danger); }

.g-ui-slider {
  width: 100%;
  appearance: none;
  height: 6px;
  border-radius: 999px;
  background: #20242d;
  border: 1px solid var(--g-ui-border);
}
.g-ui-slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--g-ui-primary);
  border: 2px solid #0f1115;
  cursor: pointer;
}
.g-ui-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--g-ui-primary);
  border: 2px solid #0f1115;
  cursor: pointer;
}

.g-ui-skeleton {
  background: linear-gradient(90deg, #1f222b, #2a2f3a, #1f222b);
  background-size: 200% 100%;
  animation: g-ui-skeleton 1.2s ease-in-out infinite;
  border-radius: 8px;
}
@keyframes g-ui-skeleton { 0% { background-position: 0% 0; } 100% { background-position: -200% 0; } }

.g-ui-chip {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--g-ui-border);
  border-radius: 999px;
  padding: 6px 10px;
  cursor: pointer;
  background: transparent;
  color: var(--g-ui-text);
}
.g-ui-chip-active {
  background: rgba(102,126,234,0.15);
  border-color: rgba(102,126,234,0.6);
  color: var(--g-ui-primary);
}

.g-ui-segmented {
  display: inline-flex;
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  overflow: hidden;
}
.g-ui-segmented-item {
  padding: 8px 12px;
  cursor: pointer;
  background: transparent;
  color: var(--g-ui-text);
  border-right: 1px solid var(--g-ui-border);
}
.g-ui-segmented-item:last-child { border-right: 0; }
.g-ui-segmented-active {
  background: rgba(102,126,234,0.15);
  color: var(--g-ui-primary);
}

.g-ui-pagination {
  display: inline-flex;
  gap: 6px;
  align-items: center;
}
.g-ui-pagination-item {
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: transparent;
  color: var(--g-ui-text);
  cursor: pointer;
}
.g-ui-pagination-item-active {
  background: rgba(102,126,234,0.15);
  border-color: rgba(102,126,234,0.6);
  color: var(--g-ui-primary);
}

.g-ui-timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.g-ui-timeline-item {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
}
.g-ui-timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--g-ui-primary);
  margin-top: 4px;
}
.g-ui-timeline-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.g-ui-timeline-title { font-weight: 600; }
.g-ui-timeline-desc { color: var(--g-ui-muted); font-size: 13px; }

.g-ui-stepper {
  display: flex;
  gap: 12px;
  align-items: center;
}
.g-ui-stepper-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.g-ui-stepper-index {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--g-ui-border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.g-ui-stepper-active .g-ui-stepper-index {
  background: rgba(102,126,234,0.15);
  border-color: rgba(102,126,234,0.6);
  color: var(--g-ui-primary);
}
.g-ui-stepper-label { font-size: 13px; }

.g-ui-rating {
  display: inline-flex;
  gap: 6px;
}
.g-ui-rating-item {
  cursor: pointer;
  color: var(--g-ui-muted);
}
.g-ui-rating-item-active {
  color: var(--g-ui-primary);
}

.g-ui-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--g-ui-border);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  color: var(--g-ui-text);
}

.g-ui-divider-label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--g-ui-muted);
  font-size: 12px;
}
.g-ui-divider-label::before,
.g-ui-divider-label::after {
  content: '';
  height: 1px;
  flex: 1;
  background: var(--g-ui-border);
}

.g-ui-calendar {
  width: 100%;
  max-width: 320px;
  border: 1px solid var(--g-ui-border);
  border-radius: 12px;
  background: var(--g-ui-surface);
  padding: 12px;
}
.g-ui-calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.g-ui-calendar-title {
  font-weight: 600;
}
.g-ui-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
}
.g-ui-calendar-cell {
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--g-ui-text);
}
.g-ui-calendar-cell-muted {
  color: var(--g-ui-muted);
}
.g-ui-calendar-cell-active {
  background: rgba(102,126,234,0.2);
  color: var(--g-ui-primary);
}

.g-ui-select-multi {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: #0f1115;
  color: var(--g-ui-text);
  padding: 10px 12px;
  min-height: 44px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.g-ui-select-tag {
  border: 1px solid var(--g-ui-border);
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 12px;
  color: var(--g-ui-text);
}

.g-ui-toast-stack {
  position: fixed;
  right: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1001;
}
.g-ui-toast {
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  padding: 10px 12px;
  background: var(--g-ui-surface);
  min-width: 220px;
}
.g-ui-toast-title { font-weight: 600; }

.g-ui-tabs-vertical {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
}
.g-ui-tabs-vertical .g-ui-tabs-list {
  flex-direction: column;
}

.g-ui-drawer-shadowed {
  box-shadow: var(--g-ui-shadow);
}

.g-ui-notifications {
  position: fixed;
  right: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1001;
}

.g-ui-range {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.g-ui-input-number {
  width: 100%;
}

.g-ui-popper {
  position: relative;
  display: inline-flex;
}
.g-ui-popper-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  box-shadow: var(--g-ui-shadow);
  padding: 10px;
  z-index: 50;
}

.g-ui-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  border: 1px solid var(--g-ui-border);
  padding: 4px 10px;
  font-size: 12px;
}

.g-ui-pagination-compact .g-ui-pagination-item {
  min-width: 26px;
  height: 26px;
  font-size: 12px;
}

.g-ui-input-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: #0f1115;
}
.g-ui-input-with-icon .g-ui-input {
  border: 0;
  background: transparent;
  padding: 10px 0;
}

.g-ui-password-toggle {
  border: 0;
  background: transparent;
  color: var(--g-ui-muted);
  cursor: pointer;
  font-size: 12px;
}

.g-ui-copy-button {
  border: 1px solid var(--g-ui-border);
  background: transparent;
  color: var(--g-ui-text);
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
}
.g-ui-copy-button-done {
  color: var(--g-ui-success);
  border-color: rgba(18,184,134,0.5);
}

.g-ui-progress-ring {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid rgba(255,255,255,0.1);
  border-top-color: var(--g-ui-primary);
  animation: g-ui-spin 1s linear infinite;
}
.g-ui-progress-ring-size-sm { width: 32px; height: 32px; }
.g-ui-progress-ring-size-md { width: 48px; height: 48px; }
.g-ui-progress-ring-size-lg { width: 64px; height: 64px; }

.g-ui-toast-close {
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--g-ui-muted);
  cursor: pointer;
}

.g-ui-toast-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.g-ui-select-search {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.g-ui-select-search-input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: #0f1115;
  color: var(--g-ui-text);
  padding: 8px 10px;
}
.g-ui-select-search-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 160px;
  overflow: auto;
}
.g-ui-select-search-item {
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;
}
.g-ui-select-search-item:hover {
  background: rgba(102,126,234,0.12);
}

.g-ui-switch-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.g-ui-segmented-scroll {
  overflow-x: auto;
  max-width: 100%;
}

.g-ui-range-picker {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.g-ui-slider-marks {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--g-ui-muted);
}

.g-ui-toast-auto {
  border-color: rgba(102,126,234,0.4);
}

.g-ui-flex {
  display: flex;
}
.g-ui-flex-column { flex-direction: column; }
.g-ui-flex-row { flex-direction: row; }
.g-ui-flex-wrap { flex-wrap: wrap; }

.g-ui-navlink {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--g-ui-text);
  text-decoration: none;
  cursor: pointer;
}
.g-ui-navlink:hover { background: rgba(102,126,234,0.12); }
.g-ui-navlink-active {
  background: rgba(102,126,234,0.2);
  color: var(--g-ui-primary);
}

.g-ui-indicator {
  position: relative;
  display: inline-flex;
}
.g-ui-indicator-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--g-ui-danger);
  border: 2px solid var(--g-ui-surface);
}

.g-ui-burger {
  width: 24px;
  height: 16px;
  position: relative;
  display: inline-block;
}
.g-ui-burger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--g-ui-text);
  transition: transform .2s ease, opacity .2s ease, top .2s ease;
}
.g-ui-burger span:nth-child(1) { top: 0; }
.g-ui-burger span:nth-child(2) { top: 7px; }
.g-ui-burger span:nth-child(3) { top: 14px; }
.g-ui-burger-open span:nth-child(1) { top: 7px; transform: rotate(45deg); }
.g-ui-burger-open span:nth-child(2) { opacity: 0; }
.g-ui-burger-open span:nth-child(3) { top: 7px; transform: rotate(-45deg); }

.g-ui-loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15,17,21,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.g-ui-radio {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.g-ui-radio-control {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.g-ui-radio-input {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--g-ui-border);
  background: #0f1115;
  position: relative;
}
.g-ui-radio-input:checked {
  border-color: var(--g-ui-primary);
}
.g-ui-radio-input:checked::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--g-ui-primary);
  top: 3px;
  left: 3px;
}
.g-ui-radio-label { font-size: 14px; }
.g-ui-radio-description { font-size: 12px; color: var(--g-ui-muted); }

.g-ui-breadcrumbs {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--g-ui-muted);
  font-size: 13px;
}
.g-ui-breadcrumbs-separator { opacity: 0.6; }

.g-ui-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.g-ui-space { display: block; }
.g-ui-space-xs { height: 8px; }
.g-ui-space-sm { height: 12px; }
.g-ui-space-md { height: 16px; }
.g-ui-space-lg { height: 24px; }
.g-ui-space-xl { height: 32px; }

.g-ui-collapse-hidden { display: none; }

.g-ui-action-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: transparent;
  color: var(--g-ui-text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.g-ui-action-icon-size-sm { width: 28px; height: 28px; }
.g-ui-action-icon-size-md { width: 34px; height: 34px; }
.g-ui-action-icon-size-lg { width: 42px; height: 42px; }
.g-ui-action-icon-filled {
  background: rgba(102,126,234,0.15);
  border-color: rgba(102,126,234,0.4);
  color: var(--g-ui-primary);
}
.g-ui-action-icon-subtle {
  background: transparent;
  border-color: var(--g-ui-border);
}

.g-ui-popover {
  position: relative;
  display: inline-flex;
}
.g-ui-popover-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  box-shadow: var(--g-ui-shadow);
  padding: 10px;
  z-index: 50;
}
.g-ui-popover-right { left: auto; right: 0; }
.g-ui-popover-center { left: 50%; transform: translateX(-50%); }

.g-ui-hover-card {
  position: relative;
  display: inline-flex;
}
.g-ui-hover-card-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  box-shadow: var(--g-ui-shadow);
  padding: 10px;
  z-index: 50;
  opacity: 0;
  pointer-events: none;
  transition: opacity .12s ease, transform .12s ease;
  transform: translateY(-4px);
}
.g-ui-hover-card:hover .g-ui-hover-card-dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.g-ui-hover-card-right { left: auto; right: 0; }
.g-ui-hover-card-center { left: 50%; transform: translateX(-50%) translateY(-4px); }
.g-ui-hover-card:hover .g-ui-hover-card-center { transform: translateX(-50%) translateY(0); }

.g-ui-affix {
  position: fixed;
  z-index: 1000;
}
.g-ui-affix-bottom-right { right: 20px; bottom: 20px; }
.g-ui-affix-bottom-left { left: 20px; bottom: 20px; }
.g-ui-affix-top-right { right: 20px; top: 20px; }
.g-ui-affix-top-left { left: 20px; top: 20px; }

.g-ui-fieldset {
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  padding: 14px;
}
.g-ui-legend {
  padding: 0 6px;
  color: var(--g-ui-muted);
  font-size: 12px;
}

.g-ui-appbar {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  background: var(--g-ui-surface);
  border-bottom: 1px solid var(--g-ui-border);
  z-index: 100;
}
.g-ui-appbar-static { position: static; }
.g-ui-appbar-sticky { position: sticky; top: 0; }
.g-ui-appbar-fixed { position: fixed; top: 0; left: 0; right: 0; }

.g-ui-sidebar {
  width: 260px;
  min-width: 260px;
  height: 100%;
  min-height: 100vh;
  background: var(--g-ui-surface);
  border-right: 1px solid var(--g-ui-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}
.g-ui-sidebar-size-sm { width: 220px; min-width: 220px; }
.g-ui-sidebar-size-md { width: 260px; min-width: 260px; }
.g-ui-sidebar-size-lg { width: 320px; min-width: 320px; }
.g-ui-sidebar-size-xl { width: 380px; min-width: 380px; }
.g-ui-sidebar-position-right { border-right: 0; border-left: 1px solid var(--g-ui-border); }
.g-ui-sidebar-fixed { position: fixed; top: 0; bottom: 0; }
.g-ui-sidebar-min-button { min-width: 38px; width: 38px; }
.g-ui-sidebar-min-xs { min-width: 48px; width: 48px; }
.g-ui-sidebar-min-sm { min-width: 64px; width: 64px; }
.g-ui-sidebar-min-md { min-width: 80px; width: 80px; }
.g-ui-sidebar-drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 999;
  transition: transform .22s cubic-bezier(.2,.8,.2,1), opacity .22s ease;
  opacity: 0;
  transform: translateX(-100%);
}
.g-ui-sidebar-drawer-open {
  opacity: 1;
  transform: translateX(0);
}
.g-ui-sidebar-drawer-right {
  right: 0;
  left: auto;
  transform: translateX(100%);
}
.g-ui-sidebar-drawer-left {
  left: 0;
  right: auto;
}
.g-ui-sidebar-overlay {
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba(0,0,0,0.6);
  opacity: 0;
  pointer-events: none;
  transition: opacity .22s ease, backdrop-filter .22s ease;
  backdrop-filter: blur(10px);
}
.g-ui-sidebar-overlay-noblur {
  backdrop-filter: none;
}
.g-ui-sidebar-overlay-open {
  opacity: 1;
  pointer-events: auto;
}
.g-ui-sidebar-title {
  font-weight: 700;
  font-size: 14px;
  color: var(--g-ui-muted);
  text-transform: uppercase;
  letter-spacing: .08em;
}
.g-ui-sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--g-ui-text);
  text-decoration: none;
}
.g-ui-sidebar-item:hover {
  background: rgba(102,126,234,0.12);
}
.g-ui-sidebar-item-active {
  background: rgba(102,126,234,0.2);
  color: var(--g-ui-primary);
}
.g-ui-skeleton-h-xs { height: 8px; }
.g-ui-skeleton-h-sm { height: 12px; }
.g-ui-skeleton-h-md { height: 16px; }
.g-ui-skeleton-h-lg { height: 24px; }
.g-ui-skeleton-h-xl { height: 32px; }
.g-ui-skeleton-w-xs { width: 60px; }
.g-ui-skeleton-w-sm { width: 120px; }
.g-ui-skeleton-w-md { width: 180px; }
.g-ui-skeleton-w-lg { width: 240px; }
.g-ui-skeleton-w-xl { width: 320px; }
.g-ui-skeleton-w-full { width: 100%; }
.g-ui-loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.g-ui-spinner {
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: var(--g-ui-primary);
  border-radius: 50%;
  animation: g-ui-spin 1s linear infinite;
}
.g-ui-loading-size-xs .g-ui-spinner { width: 14px; height: 14px; }
.g-ui-loading-size-sm .g-ui-spinner { width: 18px; height: 18px; }
.g-ui-loading-size-md .g-ui-spinner { width: 22px; height: 22px; }
.g-ui-loading-size-lg .g-ui-spinner { width: 28px; height: 28px; }
.g-ui-loading-size-xl .g-ui-spinner { width: 36px; height: 36px; }
.g-ui-dots::before,
.g-ui-dots::after {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--g-ui-primary);
  margin: 0 3px;
  animation: g-ui-bounce 1s infinite ease-in-out;
}
.g-ui-dots::after { animation-delay: .2s; }
.g-ui-loading-size-xs.g-ui-dots::before,
.g-ui-loading-size-xs.g-ui-dots::after { width: 4px; height: 4px; }
.g-ui-loading-size-sm.g-ui-dots::before,
.g-ui-loading-size-sm.g-ui-dots::after { width: 6px; height: 6px; }
.g-ui-loading-size-md.g-ui-dots::before,
.g-ui-loading-size-md.g-ui-dots::after { width: 8px; height: 8px; }
.g-ui-loading-size-lg.g-ui-dots::before,
.g-ui-loading-size-lg.g-ui-dots::after { width: 10px; height: 10px; }
.g-ui-loading-size-xl.g-ui-dots::before,
.g-ui-loading-size-xl.g-ui-dots::after { width: 12px; height: 12px; }
.g-ui-bars span {
  width: 4px;
  height: 16px;
  background: var(--g-ui-primary);
  margin: 0 2px;
  display: inline-block;
  animation: g-ui-bars 1s infinite ease-in-out;
}
.g-ui-bars span:nth-child(2) { animation-delay: .15s; }
.g-ui-bars span:nth-child(3) { animation-delay: .3s; }
.g-ui-loading-size-xs.g-ui-bars span { width: 3px; height: 12px; }
.g-ui-loading-size-sm.g-ui-bars span { width: 4px; height: 14px; }
.g-ui-loading-size-md.g-ui-bars span { width: 4px; height: 16px; }
.g-ui-loading-size-lg.g-ui-bars span { width: 5px; height: 20px; }
.g-ui-loading-size-xl.g-ui-bars span { width: 6px; height: 24px; }

@keyframes g-ui-spin { to { transform: rotate(360deg); } }
@keyframes g-ui-bounce { 0%, 100% { transform: translateY(0); opacity: .6; } 50% { transform: translateY(-5px); opacity: 1; } }
@keyframes g-ui-bars { 0%, 100% { transform: scaleY(.6); } 50% { transform: scaleY(1.2); } }
`;function K(){if(typeof document>"u"||document.getElementById(W))return;let a=document.createElement("style");a.id=W,a.textContent=yi,document.head.appendChild(a)}var Ni=new Set(["--g-ui-bg","--g-ui-surface","--g-ui-border","--g-ui-text","--g-ui-muted","--g-ui-primary","--g-ui-primary-strong","--g-ui-success","--g-ui-danger","--g-ui-radius","--g-ui-shadow","--g-ui-font"]);function ki(a={},o=document?.documentElement){if(o)for(let[i,r]of Object.entries(a)){let e=i.startsWith("--")?i:`--g-ui-${i}`;Ni.has(e)&&o.style.setProperty(e,String(r))}}function Ci(a="dark",o=document?.documentElement){o&&(o.classList.remove("g-ui-theme-dark","g-ui-theme-light"),o.classList.add(a==="light"?"g-ui-theme-light":"g-ui-theme-dark"))}import{Button as $i,Span as I}from"granular";import{Renderer as U,isSignal as zi,isState as Pi,isStatePath as Si,isComputed as Di}from"granular";function t(...a){return a.filter(Boolean).join(" ")}function s(a){let o={},i=[],r=e=>!!e&&typeof e=="object"&&!Array.isArray(e)&&!U.isRenderable(e)&&!U.isDomNode(e)&&!zi(e)&&!Pi(e)&&!Si(e)&&!Di(e);for(let e of a)r(e)?Object.assign(o,e):i.push(e);return{props:o,children:i}}function Ti(...a){let{props:o,children:i}=s(a),{variant:r="filled",size:e="md",fullWidth:n,loading:u,leftSection:p,rightSection:g,className:l,disabled:c,...d}=o;return $i({...d,disabled:c||u,className:t("g-ui-button",`g-ui-button-variant-${r}`,`g-ui-button-size-${e}`,n&&"g-ui-button-full",u&&"g-ui-button-loading",l)},p?I({className:"g-ui-button-section-left"},p):null,u?I("Loading..."):i,g?I({className:"g-ui-button-section-right"},g):null)}import{Span as Ii}from"granular";function ji(...a){let{props:o,children:i}=s(a),{size:r="md",weight:e,color:n,dimmed:u,align:p,className:g,style:l,...c}=o,d=e==="bold"?"g-ui-text-weight-700":e==="semibold"?"g-ui-text-weight-600":e==="medium"?"g-ui-text-weight-500":e===700?"g-ui-text-weight-700":e===600?"g-ui-text-weight-600":e===500?"g-ui-text-weight-500":e===400?"g-ui-text-weight-400":null,f=n==="primary"?"g-ui-text-primary":n==="success"?"g-ui-text-success":n==="danger"?"g-ui-text-danger":n==="muted"?"g-ui-text-dimmed":null,m=p==="center"?"g-ui-text-align-center":p==="right"?"g-ui-text-align-right":p==="left"?"g-ui-text-align-left":null;return Ii({...c,className:t("g-ui-text",`g-ui-text-size-${r}`,u&&"g-ui-text-dimmed",d,f,m,g)},i)}import{H1 as Bi,H2 as _,H3 as Ai,H4 as Li,H5 as Mi,H6 as Hi}from"granular";var Oi={1:Bi,2:_,3:Ai,4:Li,5:Mi,6:Hi};function Ri(...a){let{props:o,children:i}=s(a),{order:r=2,className:e,style:n,...u}=o;return(Oi[r]||_)({...u,className:t("g-ui-title",`g-ui-title-order-${r}`,e)},i)}import{Div as Fi}from"granular";function Yi(...a){let{props:o,children:i}=s(a),{size:r="md",fluid:e,className:n,style:u,...p}=o;return Fi({...p,className:t("g-ui-container",e?"g-ui-container-fluid":`g-ui-container-size-${r}`,n)},i)}import{Div as Vi}from"granular";function qi(...a){let{props:o,children:i}=s(a),{gap:r="md",align:e,justify:n,className:u,style:p,...g}=o,l=n==="between"?"g-ui-justify-between":n==="center"?"g-ui-justify-center":n==="end"?"g-ui-justify-end":n==="start"?"g-ui-justify-start":null;return Vi({...g,className:t("g-ui-stack",`g-ui-gap-${r}`,e&&`g-ui-align-${e}`,l,u)},i)}import{Div as Xi}from"granular";function Gi(...a){let{props:o,children:i}=s(a),{gap:r="md",align:e="center",position:n,wrap:u,className:p,style:g,...l}=o,c=n==="apart"?"g-ui-justify-between":n==="center"?"g-ui-justify-center":n==="right"?"g-ui-justify-end":n==="left"?"g-ui-justify-start":null;return Xi({...l,className:t("g-ui-group",`g-ui-gap-${r}`,e&&`g-ui-align-${e}`,c,u&&"g-ui-wrap",p)},i)}import{Div as Ei}from"granular";function Wi(...a){let{props:o,children:i}=s(a),{padding:r="md",radius:e="md",shadow:n="md",className:u,style:p,...g}=o;return Ei({...g,className:t("g-ui-card",`g-ui-card-padding-${r}`,`g-ui-card-radius-${e}`,`g-ui-card-shadow-${n}`,u)},i)}import{Span as Ki}from"granular";function Ui(...a){let{props:o,children:i}=s(a),{variant:r="light",className:e,dot:n,style:u,...p}=o;return Ki({...p,className:t("g-ui-badge",`g-ui-badge-variant-${r}`,(r==="dot"||n)&&"g-ui-badge-dot",e)},i)}import{Div as _i,Input as Ji,Label as Qi,Span as J}from"granular";function Zi(...a){let{props:o}=s(a),{label:i,description:r,error:e,className:n,style:u,inputProps:p,onChange:g,...l}=o,c=Ji({...l,className:t("g-ui-input",e&&"g-ui-input-error",p?.className),onInput:d=>{g?.(d?.target?.value,d),p?.onInput?.(d)}});return _i({className:t("g-ui-text-input",n)},i?Qi({className:"g-ui-text-input-label"},i):null,r?J({className:"g-ui-text-input-description"},r):null,c,e?J({className:"g-ui-text-input-error-text"},e):null)}import{Textarea as ir}from"granular";function rr(...a){let{props:o}=s(a),{className:i,...r}=o;return ir({...r,className:t("g-ui-input g-ui-textarea",i)})}import{Input as er}from"granular";function tr(...a){let{props:o}=s(a),{className:i,...r}=o;return er({type:"number",...r,className:t("g-ui-input",i)})}import{Div as C,Button as or,portal as ar,when as sr}from"granular";function nr(...a){let{props:o,children:i}=s(a),{opened:r,onClose:e,title:n,size:u="md",centered:p=!0,overlay:g="normal",className:l,style:c}=o;return sr(r,()=>ar(C({className:t("g-ui-modal-overlay",`g-ui-modal-overlay-${g}`,p?"g-ui-modal-centered":"g-ui-modal-top"),onClick:d=>{d.target===d.currentTarget&&e?.()}},C({className:t("g-ui-modal",`g-ui-modal-size-${u}`,l)},C({className:"g-ui-modal-header"},n?C({className:"g-ui-modal-title"},n):null,e?or({className:"g-ui-button g-ui-button-variant-subtle g-ui-button-size-xs",onClick:e},"Close"):null),i))))}import{Div as z,Span as j}from"granular";function B(...a){let{props:o}=s(a),{variant:i="spinner",size:r="md",className:e,style:n}=o;return i==="dots"?z({className:t("g-ui-loading g-ui-dots",`g-ui-loading-size-${r}`,e)}):i==="bars"?z({className:t("g-ui-loading g-ui-bars",`g-ui-loading-size-${r}`,e)},j(""),j(""),j("")):z({className:t("g-ui-loading",`g-ui-loading-size-${r}`,e)},z({className:"g-ui-spinner"}))}import{Div as pr,Input as ur,Label as gr,Span as Q}from"granular";function lr(...a){let{props:o}=s(a),{label:i,description:r,className:e,style:n,inputProps:u,...p}=o,g=gr({className:"g-ui-checkbox-control"},ur({type:"checkbox",className:t("g-ui-checkbox-input",u?.className),...p}),i?Q({className:"g-ui-checkbox-label"},i):null);return pr({className:t("g-ui-checkbox",e)},g,r?Q({className:"g-ui-checkbox-description"},r):null)}import{Input as cr,Label as dr,Span as mr}from"granular";function xr(...a){let{props:o}=s(a),{label:i,className:r,style:e,inputProps:n,...u}=o;return dr({className:t("g-ui-switch",r)},cr({type:"checkbox",className:t("g-ui-switch-input",n?.className),...u}),i?mr({className:"g-ui-switch-label"},i):null)}import{Select as fr,Option as Z}from"granular";function br(...a){let{props:o}=s(a),{data:i=[],placeholder:r,className:e,style:n,...u}=o;return fr({...u,className:t("g-ui-select",e)},r?Z({value:"",disabled:!0,selected:!0},r):null,i.map(p=>Z({value:p.value},p.label)))}import{Button as hr,Div as A}from"granular";function vr(...a){let{props:o}=s(a),{value:i,onChange:r,tabs:e=[],orientation:n="horizontal",className:u,style:p}=o,g=i?.get?i.get():i,l=d=>{i?.set&&i.set(d),r?.(d)},c=e.find(d=>d.value===g)||e[0];return A({className:t("g-ui-tabs",n==="vertical"&&"g-ui-tabs-vertical",u)},A({className:"g-ui-tabs-list"},e.map(d=>hr({className:t("g-ui-tabs-tab",d.value===g&&"g-ui-tabs-tab-active"),onClick:()=>l(d.value),type:"button"},d.label))),A({className:"g-ui-tabs-panel"},c?.content??null))}import{Table as wr,Thead as yr,Tbody as Nr,Tr as ii,Th as kr,Td as ri}from"granular";function Cr(...a){let{props:o}=s(a),{headers:i=[],rows:r=[],striped:e,highlightOnHover:n,className:u,style:p,...g}=o;return wr({...g,className:t("g-ui-table",e&&"g-ui-table-striped",n&&"g-ui-table-hover",u)},i.length?yr(ii(i.map(l=>kr(l)))):null,Nr(r.map(l=>ii(Array.isArray(l)?l.map(c=>ri(c)):Object.values(l).map(c=>ri(c))))))}import{Button as zr,Div as L}from"granular";import{state as Pr,when as Sr}from"granular";function Dr(...a){let{props:o}=s(a),{items:i=[],value:r,defaultValue:e,multiple:n,className:u,style:p}=o,g=Pr(e??(n?[]:null)),l=r?.get?r.get():r??g.get(),c=m=>{r?.set?r.set(m):g.set(m)},d=m=>{if(n){let v=Array.isArray(l)?l.slice():[],x=v.indexOf(m);x>=0?v.splice(x,1):v.push(m),c(v);return}c(l===m?null:m)},f=m=>n?Array.isArray(l)&&l.includes(m):l===m;return L({className:t("g-ui-accordion",u)},i.map(m=>L({className:"g-ui-accordion-item"},zr({className:"g-ui-accordion-control",type:"button",onClick:()=>d(m.value)},m.label),Sr(f(m.value),()=>L({className:"g-ui-accordion-panel"},m.content)))))}import{Span as ei}from"granular";function $r(...a){let{props:o,children:i}=s(a),{label:r,className:e,style:n}=o;return ei({className:t("g-ui-tooltip",e)},i,ei({className:"g-ui-tooltip-content"},r))}import{Div as P,when as Tr}from"granular";import{state as Ir}from"granular";function jr(...a){let{props:o,children:i}=s(a),{opened:r,onChange:e,items:n=[],className:u,style:p}=o,g=Ir(!1),l=r?.get?r.get():r??g.get(),c=d=>{r?.set?r.set(d):g.set(d),e?.(d)};return P({className:t("g-ui-menu",u)},P({onClick:()=>c(!l)},i),Tr(l,()=>P({className:"g-ui-menu-dropdown"},n.map(d=>P({className:"g-ui-menu-item",onClick:()=>{d.onClick?.(),c(!1)}},d.label)))))}import{Div as ti,portal as Br,when as Ar}from"granular";function Lr(...a){let{props:o,children:i}=s(a),{opened:r,onClose:e,position:n="right",size:u="md",overlay:p="normal",shadowed:g=!0,className:l,style:c}=o;return Ar(r,()=>Br(ti({className:t("g-ui-drawer-overlay",`g-ui-drawer-overlay-${p}`),onClick:e},ti({className:t("g-ui-drawer",g&&"g-ui-drawer-shadowed",`g-ui-drawer-${n}`,`g-ui-drawer-size-${u}`,l),onClick:d=>d.stopPropagation()},i))))}import{Div as oi}from"granular";function Mr(...a){let{props:o,children:i}=s(a),{title:r,color:e="primary",className:n,style:u}=o;return oi({className:t("g-ui-notification",`g-ui-notification-${e}`,n)},r?oi({className:"g-ui-notification-title"},r):null,i)}import{Div as ai}from"granular";function Hr(...a){let{props:o}=s(a),{label:i,className:r,...e}=o;return i?ai({...e,className:t("g-ui-divider-label",r)},i):ai({...e,className:t("g-ui-divider",r)})}import{Div as Or}from"granular";function Rr(...a){let{props:o,children:i}=s(a),{padding:r="md",radius:e="md",shadow:n="md",className:u,...p}=o;return Or({...p,className:t("g-ui-paper",`g-ui-card-padding-${r}`,`g-ui-card-radius-${e}`,`g-ui-card-shadow-${n}`,u)},i)}import{Div as si}from"granular";function Fr(...a){let{props:o,children:i}=s(a),{title:r,color:e="primary",className:n,...u}=o;return si({...u,className:t("g-ui-alert",`g-ui-alert-${e}`,n)},r?si({className:"g-ui-alert-title"},r):null,i)}import{Div as Yr,Img as Vr}from"granular";function qr(...a){let{props:o,children:i}=s(a),{src:r,size:e="md",alt:n="",className:u,...p}=o;return Yr({...p,className:t("g-ui-avatar",`g-ui-avatar-size-${e}`,u)},r?Vr({className:"g-ui-avatar-img",src:r,alt:n}):i)}import{Span as Xr}from"granular";function Gr(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return Xr({...e,className:t("g-ui-kbd",r)},i)}import{Code as Er}from"granular";function Wr(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return Er({...e,className:t("g-ui-code",r)},i)}import{Blockquote as Kr}from"granular";function Ur(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return Kr({...e,className:t("g-ui-blockquote",r)},i)}import{Div as _r}from"granular";function Jr(...a){let{props:o,children:i}=s(a),{cols:r=3,className:e,...n}=o;return _r({...n,className:t("g-ui-grid",`g-ui-grid-cols-${r}`,e)},i)}import{Ul as Qr}from"granular";function Zr(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return Qr({...e,className:t("g-ui-list",r)},i)}import{A as ie}from"granular";function re(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return ie({...e,className:t("g-ui-anchor",r)},i)}import{Img as ee}from"granular";function te(...a){let{props:o}=s(a),{className:i,...r}=o;return ee({...r,className:t("g-ui-image",i)})}import{Div as ni}from"granular";function oe(...a){let{props:o}=s(a),{value:i=0,color:r="primary",className:e,...n}=o,u=Math.max(0,Math.min(100,i)),p=Math.round(u/5)*5;return ni({...n,className:t("g-ui-progress",`g-ui-progress-${p}`,r&&`g-ui-progress-${r}`,e)},ni({className:"g-ui-progress-bar"}))}import{Input as ae,Div as M}from"granular";function se(...a){let{props:o}=s(a),{marks:i,className:r,...e}=o;return M({className:t(r)},ae({type:"range",...e,className:"g-ui-slider"}),i?M({className:"g-ui-slider-marks"},i.map(n=>M(String(n)))):null)}import{Div as ne}from"granular";function pe(...a){let{props:o}=s(a),{height:i="md",width:r="full",className:e,...n}=o;return ne({...n,className:t("g-ui-skeleton",`g-ui-skeleton-h-${i}`,`g-ui-skeleton-w-${r}`,e)})}import{Button as ue}from"granular";function ge(...a){let{props:o,children:i}=s(a),{checked:r,onChange:e,className:n,...u}=o,p=r?.get?r.get():!!r,g=l=>{r?.set&&r.set(l),e?.(l)};return ue({...u,type:"button",className:t("g-ui-chip",p&&"g-ui-chip-active",n),onClick:()=>g(!p)},i)}import{Div as H}from"granular";function le(...a){let{props:o}=s(a),{value:i,onChange:r,data:e=[],scroll:n,className:u,...p}=o,g=i?.get?i.get():i,l=c=>{i?.set&&i.set(c),r?.(c)};return H({...p,className:t(n&&"g-ui-segmented-scroll")},H({className:t("g-ui-segmented",u)},e.map(c=>H({className:t("g-ui-segmented-item",c.value===g&&"g-ui-segmented-active"),onClick:()=>l(c.value)},c.label))))}import{Button as O,Div as ce}from"granular";function de(...a){let{props:o}=s(a),{page:i,total:r=1,onChange:e,className:n,...u}=o,p=i?.get?i.get():i??1,g=c=>{let d=Math.max(1,Math.min(r,c));i?.set&&i.set(d),e?.(d)},l=[];for(let c=1;c<=r;c+=1)l.push(c);return ce({...u,className:t("g-ui-pagination",n)},O({className:"g-ui-pagination-item",onClick:()=>g(p-1),disabled:p<=1},"<"),l.map(c=>O({className:t("g-ui-pagination-item",c===p&&"g-ui-pagination-item-active"),onClick:()=>g(c)},String(c))),O({className:"g-ui-pagination-item",onClick:()=>g(p+1),disabled:p>=r},">"))}import{Div as me,Input as xe,Label as fe,Span as pi}from"granular";function be(...a){let{props:o}=s(a),{label:i,description:r,className:e,inputProps:n,...u}=o,p=fe({className:"g-ui-radio-control"},xe({type:"radio",className:t("g-ui-radio-input",n?.className),...u}),i?pi({className:"g-ui-radio-label"},i):null);return me({className:t("g-ui-radio",e)},p,r?pi({className:"g-ui-radio-description"},r):null)}import{Div as he}from"granular";function ve(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return he({...e,className:t("g-ui-stack g-ui-gap-sm",r)},i)}import{Nav as we,Span as ye}from"granular";function Ne(...a){let{props:o,children:i}=s(a),{separator:r="/",className:e,...n}=o,u=Array.isArray(i)?i.filter(Boolean):[i].filter(Boolean),p=[];return u.forEach((g,l)=>{p.push(g),l<u.length-1&&p.push(ye({className:"g-ui-breadcrumbs-separator"},r))}),we({...n,className:t("g-ui-breadcrumbs",e)},p)}import{Div as ke}from"granular";function Ce(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return ke({...e,className:t("g-ui-center",r)},i)}import{Div as ze}from"granular";function Pe(...a){let{props:o}=s(a),{size:i="md",className:r,...e}=o;return ze({...e,className:t("g-ui-space",`g-ui-space-${i}`,r)})}import{Div as Se,when as De}from"granular";function $e(...a){let{props:o,children:i}=s(a),{opened:r,className:e,...n}=o;return De(r,()=>Se({...n,className:t("g-ui-collapse",e)},i))}import{Button as Te}from"granular";function Ie(...a){let{props:o,children:i}=s(a),{size:r="md",variant:e="subtle",className:n,...u}=o;return Te({...u,type:"button",className:t("g-ui-action-icon",`g-ui-action-icon-size-${r}`,`g-ui-action-icon-${e}`,n)},i)}import{Div as R,when as je}from"granular";import{state as Be}from"granular";function Ae(...a){let{props:o,children:i}=s(a),{opened:r,onChange:e,position:n="left",content:u,className:p,...g}=o,l=Be(!1),c=r?.get?r.get():r??l.get(),d=f=>{r?.set?r.set(f):l.set(f),e?.(f)};return R({...g,className:t("g-ui-popover",p)},R({onClick:()=>d(!c)},i),je(c,()=>R({className:t("g-ui-popover-dropdown",n==="right"&&"g-ui-popover-right",n==="center"&&"g-ui-popover-center")},u)))}import{Div as ui}from"granular";function Le(...a){let{props:o,children:i}=s(a),{position:r="left",content:e,className:n,...u}=o;return ui({...u,className:t("g-ui-hover-card",n)},i,ui({className:t("g-ui-hover-card-dropdown",r==="right"&&"g-ui-hover-card-right",r==="center"&&"g-ui-hover-card-center")},e))}import{Div as Me}from"granular";function He(...a){let{props:o,children:i}=s(a),{position:r="bottom-right",className:e,...n}=o;return Me({...n,className:t("g-ui-affix",`g-ui-affix-${r}`,e)},i)}import{Fieldset as Oe,Legend as Re}from"granular";function Fe(...a){let{props:o,children:i}=s(a),{legend:r,className:e,...n}=o;return Oe({...n,className:t("g-ui-fieldset",e)},r?Re({className:"g-ui-legend"},r):null,i)}import{Div as Ye}from"granular";function Ve(...a){let{props:o,children:i}=s(a),{position:r="sticky",className:e,...n}=o;return Ye({...n,className:t("g-ui-appbar",`g-ui-appbar-${r}`,e)},i)}import{Div as F,portal as qe,after as Y,isSignal as Xe,isState as Ge,isStatePath as Ee,state as gi,when as We}from"granular";function Ke(...a){let{props:o,children:i}=s(a),{opened:r,open:e,onClose:n,position:u="left",size:p="md",blur:g=!0,fixed:l=!1,minWidth:c="button",className:d,...f}=o,m=r??e,v=c==="button"?"g-ui-sidebar-min-button":c==="xs"?"g-ui-sidebar-min-xs":c==="sm"?"g-ui-sidebar-min-sm":c==="md"?"g-ui-sidebar-min-md":null,x=F({...f,className:t("g-ui-sidebar",`g-ui-sidebar-size-${p}`,u==="right"&&"g-ui-sidebar-position-right",l&&"g-ui-sidebar-fixed",l&&v,m!==void 0&&"g-ui-sidebar-drawer",d)},i);if(l||m===void 0)return x;let b=(m?.get,m),fi=Xe(b)||Ge(b)||Ee(b),$=gi(!1),y=gi(!1),bi=220,T=h=>{if(h){$.set(!0),typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>y.set(!0)):setTimeout(()=>y.set(!0),0);return}y.set(!1),setTimeout(()=>$.set(!1),bi)};if(fi){let h=b?.get?b.get():b;T(!!h),Y(b).change(wi=>T(!!wi))}else T(!!b);let hi=Y(y).compute(h=>t("g-ui-sidebar-overlay",h&&"g-ui-sidebar-overlay-open",!g&&"g-ui-sidebar-overlay-noblur")),vi=Y(y).compute(h=>t("g-ui-sidebar","g-ui-sidebar-drawer",`g-ui-sidebar-size-${p}`,u==="right"?"g-ui-sidebar-drawer-right g-ui-sidebar-position-right":"g-ui-sidebar-drawer-left",h&&"g-ui-sidebar-drawer-open",d));return We($,()=>qe(F({className:hi,onClick:n},F({className:vi,onClick:h=>h.stopPropagation()},i))))}import{Div as w}from"granular";function Ue(...a){let{props:o}=s(a),{items:i=[],className:r,...e}=o;return w({...e,className:t("g-ui-timeline",r)},i.map(n=>w({className:"g-ui-timeline-item"},w({className:"g-ui-timeline-dot"}),w({className:"g-ui-timeline-content"},n.title?w({className:"g-ui-timeline-title"},n.title):null,n.description?w({className:"g-ui-timeline-desc"},n.description):null,n.content))))}import{Div as S}from"granular";function _e(...a){let{props:o}=s(a),{active:i=0,items:r=[],className:e,...n}=o;return S({...n,className:t("g-ui-stepper",e)},r.map((u,p)=>S({className:t("g-ui-stepper-item",p===i&&"g-ui-stepper-active")},S({className:"g-ui-stepper-index"},String(p+1)),S({className:"g-ui-stepper-label"},u.label))))}import{Span as li}from"granular";function Je(...a){let{props:o}=s(a),{value:i=0,max:r=5,onChange:e,className:n,...u}=o,p=i?.get?i.get():i,g=c=>{i?.set&&i.set(c),e?.(c)},l=[];for(let c=1;c<=r;c+=1)l.push(c);return li({...u,className:t("g-ui-rating",n)},l.map(c=>li({className:t("g-ui-rating-item",c<=p&&"g-ui-rating-item-active"),onClick:()=>g(c)},"\u2605")))}import{Span as Qe}from"granular";function Ze(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return Qe({...e,className:t("g-ui-tag",r)},i)}import{Button as it,Div as N,Span as rt}from"granular";var et=["S","M","T","W","T","F","S"];function V(...a){let{props:o}=s(a),{value:i,onChange:r,className:e,...n}=o,u=i?.get?i.get():i,p=u instanceof Date?u:new Date,g=p.getFullYear(),l=p.getMonth(),d=new Date(g,l,1).getDay(),f=new Date(g,l+1,0).getDate(),m=[];for(let x=0;x<d;x+=1)m.push({muted:!0,label:""});for(let x=1;x<=f;x+=1)m.push({label:x});let v=x=>{let b=new Date(g,l,x);i?.set&&i.set(b),r?.(b)};return N({...n,className:t("g-ui-calendar",e)},N({className:"g-ui-calendar-header"},rt({className:"g-ui-calendar-title"},`${p.toLocaleString("default",{month:"long"})} ${g}`),it({className:"g-ui-button g-ui-button-size-xs g-ui-button-variant-subtle"},"...")),N({className:"g-ui-calendar-grid"},et.map(x=>N({className:"g-ui-calendar-cell g-ui-calendar-cell-muted"},x)),m.map(x=>N({className:t("g-ui-calendar-cell",x.muted&&"g-ui-calendar-cell-muted",x.label===p.getDate()&&"g-ui-calendar-cell-active"),onClick:()=>x.label&&v(x.label)},x.label))))}import{Div as tt,Span as ot}from"granular";function at(...a){let{props:o}=s(a),{value:i,data:r=[],onChange:e,className:n,...u}=o,p=i?.get?i.get():i??[],g=l=>{let c=p.includes(l)?p.filter(d=>d!==l):p.concat(l);i?.set&&i.set(c),e?.(c)};return tt({...u,className:t("g-ui-select-multi",n)},r.map(l=>ot({className:t("g-ui-select-tag",p.includes(l.value)&&"g-ui-chip-active"),onClick:()=>g(l.value)},l.label)))}import{Div as k}from"granular";function st(...a){let{props:o}=s(a),{items:i=[],className:r,onClose:e,timeout:n,...u}=o;return k({...u,className:t("g-ui-toast-stack",r)},i.map(p=>k({className:t("g-ui-toast",n&&"g-ui-toast-auto")},k({className:"g-ui-toast-row"},p.title?k({className:"g-ui-toast-title"},p.title):null,e?k({className:"g-ui-toast-close",onClick:()=>e(p)},"\xD7"):null),p.message)))}function nt(...a){let{props:o}=s(a);return V(o)}import{Div as q}from"granular";function pt(...a){let{props:o}=s(a),{items:i=[],className:r,...e}=o;return q({...e,className:t("g-ui-notifications",r)},i.map(n=>q({className:t("g-ui-notification",n.color&&`g-ui-notification-${n.color}`)},n.title?q({className:"g-ui-notification-title"},n.title):null,n.message)))}import{Input as ci,Div as ut}from"granular";function gt(...a){let{props:o}=s(a),{value:i,onChange:r,min:e=0,max:n=100,className:u,...p}=o,g=i?.get?i.get():i??[e,n],l=c=>{i?.set&&i.set(c),r?.(c)};return ut({...p,className:t("g-ui-range",u)},ci({type:"range",min:e,max:n,value:g[0],className:"g-ui-slider",onInput:c=>l([Number(c.target.value),g[1]])}),ci({type:"range",min:e,max:n,value:g[1],className:"g-ui-slider",onInput:c=>l([g[0],Number(c.target.value)])}))}import{Input as lt}from"granular";function ct(...a){let{props:o}=s(a),{className:i,...r}=o;return lt({type:"date",...r,className:t("g-ui-input",i)})}import{Input as dt}from"granular";function mt(...a){let{props:o}=s(a),{className:i,...r}=o;return dt({type:"number",...r,className:t("g-ui-input g-ui-input-number",i)})}import{Div as X,when as xt}from"granular";import{state as ft}from"granular";function bt(...a){let{props:o,children:i}=s(a),{opened:r,onChange:e,content:n,className:u,...p}=o,g=ft(!1),l=r?.get?r.get():r??g.get(),c=d=>{r?.set?r.set(d):g.set(d),e?.(d)};return X({...p,className:t("g-ui-popper",u)},X({onClick:()=>c(!l)},i),xt(l,()=>X({className:"g-ui-popper-dropdown"},n)))}import{Div as ht,Input as vt,Button as wt,after as yt,when as Nt}from"granular";import{state as kt}from"granular";function Ct(...a){let{props:o}=s(a),{className:i,...r}=o,e=kt(!1),n=yt(e).compute(u=>u?"text":"password");return ht({className:t("g-ui-input-with-icon",i)},vt({type:n,...r,className:"g-ui-input"}),wt({className:"g-ui-password-toggle",onClick:()=>e.set(!e.get())},Nt(e,()=>"Hide",()=>"Show")))}import{Div as di,Input as zt}from"granular";function Pt(...a){let{props:o}=s(a),{className:i,...r}=o;return di({className:t("g-ui-input-with-icon",i)},di({className:"g-ui-text-muted"},"\u{1F50E}"),zt({type:"search",...r,className:"g-ui-input"}))}import{Button as St,after as Dt,when as $t}from"granular";import{state as Tt}from"granular";function It(...a){let{props:o,children:i}=s(a),{value:r="",timeout:e=1500,className:n,...u}=o,p=Tt(!1),g=Dt(p).compute(c=>t("g-ui-copy-button",c&&"g-ui-copy-button-done",n));return St({...u,className:g,onClick:async()=>{try{await navigator.clipboard.writeText(String(r)),p.set(!0),setTimeout(()=>p.set(!1),e)}catch{}},type:"button"},i?.length?i:$t(p,()=>"Copied",()=>"Copy"))}import{Div as jt}from"granular";function Bt(...a){let{props:o}=s(a),{size:i="md",className:r,...e}=o;return jt({...e,className:t("g-ui-progress-ring",`g-ui-progress-ring-size-${i}`,r)})}import{Div as G,Button as At}from"granular";function Lt(...a){let{props:o,children:i}=s(a),{title:r,onClose:e,className:n,...u}=o;return G({...u,className:t("g-ui-toast",n)},G({className:"g-ui-toast-row"},r?G({className:"g-ui-toast-title"},r):null,e?At({className:"g-ui-toast-close",onClick:e},"\xD7"):null),i)}import{Div as E,Input as Mt}from"granular";import{state as Ht}from"granular";function Ot(...a){let{props:o}=s(a),{data:i=[],onChange:r,className:e,...n}=o,u=Ht(""),p=i.filter(g=>String(g.label||"").toLowerCase().includes(String(u.get()).toLowerCase()));return E({...n,className:t("g-ui-select-search",e)},Mt({className:"g-ui-select-search-input",placeholder:"Search...",value:u}),E({className:"g-ui-select-search-list"},p.map(g=>E({className:"g-ui-select-search-item",onClick:()=>r?.(g.value)},g.label))))}import{Div as Rt}from"granular";function Ft(...a){let{props:o,children:i}=s(a),{className:r,...e}=o;return Rt({...e,className:t("g-ui-switch-group",r)},i)}import{Div as Yt,Input as mi}from"granular";function Vt(...a){let{props:o}=s(a),{value:i,onChange:r,className:e,...n}=o,u=i?.get?i.get():i??["",""],p=g=>{i?.set&&i.set(g),r?.(g)};return Yt({...n,className:t("g-ui-range-picker",e)},mi({type:"date",className:"g-ui-input",value:u[0],onInput:g=>p([g.target.value,u[1]])}),mi({type:"date",className:"g-ui-input",value:u[1],onInput:g=>p([u[0],g.target.value])}))}import{Div as qt}from"granular";function Xt(...a){let{props:o,children:i}=s(a),{direction:r="row",wrap:e,align:n,justify:u,gap:p,className:g,...l}=o;return qt({...l,className:t("g-ui-flex",r==="column"?"g-ui-flex-column":"g-ui-flex-row",e&&"g-ui-flex-wrap",n&&`g-ui-align-${n}`,u&&`g-ui-justify-${u}`,p&&`g-ui-gap-${p}`,g)},i)}import{A as Gt}from"granular";function Et(...a){let{props:o,children:i}=s(a),{active:r,className:e,...n}=o;return Gt({...n,className:t("g-ui-navlink",r&&"g-ui-navlink-active",e)},i)}import{Div as xi}from"granular";function Wt(...a){let{props:o,children:i}=s(a),{show:r=!0,className:e,...n}=o;return xi({...n,className:t("g-ui-indicator",e)},i,r?xi({className:"g-ui-indicator-badge"}):null)}import{Span as D}from"granular";function Kt(...a){let{props:o}=s(a),{opened:i,className:r,...e}=o,n=i?.get?i.get():i;return D({...e,className:t("g-ui-burger",n&&"g-ui-burger-open",r)},D(""),D(""),D(""))}import{Div as Ut,when as _t}from"granular";function Jt(...a){let{props:o}=s(a),{visible:i,...r}=o,e=(i?.get,i);return _t(e,()=>Ut({...r,className:"g-ui-loading-overlay"},B({})))}import{state as Qt}from"granular";function Zt(a=!1){let o=Qt(!!a);return[o,{open:()=>o.set(!0),close:()=>o.set(!1),toggle:()=>o.set(!o.get())}]}K();export{Dr as Accordion,Ie as ActionIcon,He as Affix,Fr as Alert,re as Anchor,Ve as AppBar,qr as Avatar,Ui as Badge,Ur as Blockquote,Ne as Breadcrumbs,Kt as Burger,Ti as Button,V as Calendar,Wi as Card,Ce as Center,lr as Checkbox,ge as Chip,Wr as Code,$e as Collapse,Yi as Container,It as CopyButton,ct as DateInput,nt as DatePicker,Hr as Divider,Lr as Drawer,Fe as Fieldset,Xt as Flex,Gi as Group,Le as HoverCard,te as Image,Wt as Indicator,Gr as Kbd,Zr as List,B as Loading,Jt as LoadingOverlay,jr as Menu,nr as Modal,at as MultiSelect,Et as NavLink,Mr as Notification,pt as Notifications,mt as NumberField,tr as NumberInput,de as Pagination,Rr as Paper,Ct as PasswordInput,Ae as Popover,bt as Popper,oe as Progress,Bt as ProgressRing,be as Radio,ve as RadioGroup,Vt as RangePicker,gt as RangeSlider,Je as Rating,Pt as SearchInput,le as SegmentedControl,br as Select,Ot as SelectSearch,Ke as Sidebar,Jr as SimpleGrid,pe as Skeleton,se as Slider,Pe as Space,qi as Stack,_e as Stepper,xr as Switch,Ft as SwitchGroup,Cr as Table,vr as Tabs,Ze as Tag,ji as Text,Zi as TextInput,rr as Textarea,Ue as Timeline,Ri as Title,Lt as Toast,st as ToastStack,$r as Tooltip,Ci as setThemeMode,ki as setThemeVars,Zt as useDisclosure};
//# sourceMappingURL=granular-ui.js.map
