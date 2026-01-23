const STYLE_ID = 'granular-ui-styles';

const font400 = new URL('./fonts/Poppins-400.ttf', import.meta.url).href;
const font500 = new URL('./fonts/Poppins-500.ttf', import.meta.url).href;
const font600 = new URL('./fonts/Poppins-600.ttf', import.meta.url).href;
const font700 = new URL('./fonts/Poppins-700.ttf', import.meta.url).href;

const css = `
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${font400}') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('${font500}') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('${font600}') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('${font700}') format('truetype');
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
  font-family: var(--g-ui-font);
}

.g-ui-reset {
  font-family: var(--g-ui-font);
  color: var(--g-ui-text);
}

.g-ui-text {
  font-family: var(--g-ui-font);
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

.g-ui-grid-system {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 12px;
}
.g-ui-col-span-1 { grid-column: span 1; }
.g-ui-col-span-2 { grid-column: span 2; }
.g-ui-col-span-3 { grid-column: span 3; }
.g-ui-col-span-4 { grid-column: span 4; }
.g-ui-col-span-5 { grid-column: span 5; }
.g-ui-col-span-6 { grid-column: span 6; }
.g-ui-col-span-7 { grid-column: span 7; }
.g-ui-col-span-8 { grid-column: span 8; }
.g-ui-col-span-9 { grid-column: span 9; }
.g-ui-col-span-10 { grid-column: span 10; }
.g-ui-col-span-11 { grid-column: span 11; }
.g-ui-col-span-12 { grid-column: span 12; }

.g-ui-scroll-area {
  overflow: auto;
  border: 1px solid var(--g-ui-border);
  border-radius: 10px;
  background: var(--g-ui-surface);
  padding: 8px;
}
.g-ui-scroll-area-sm { max-height: 120px; }
.g-ui-scroll-area-md { max-height: 200px; }
.g-ui-scroll-area-lg { max-height: 320px; }

.g-ui-pin-inputs {
  display: flex;
  gap: 8px;
}
.g-ui-pin-input {
  width: 36px;
  height: 40px;
  text-align: center;
  border: 1px solid var(--g-ui-border);
  border-radius: 8px;
  background: #0f1115;
  color: var(--g-ui-text);
}

.g-ui-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.g-ui-avatar-group {
  display: inline-flex;
  align-items: center;
}
.g-ui-avatar-group .g-ui-avatar {
  margin-left: -8px;
  border: 2px solid var(--g-ui-surface);
}
.g-ui-avatar-group .g-ui-avatar:first-child {
  margin-left: 0;
}

.g-ui-badge-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
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
  justify-content: flex-start;
  gap: 12px;
  padding: 0 18px;
  background: var(--g-ui-surface);
  border-bottom: 1px solid var(--g-ui-border);
  z-index: 100;
  position:relative;
}
.g-ui-appbar-static { position: static; }
.g-ui-appbar-sticky { position: sticky; top: 0; }
.g-ui-appbar-fixed { position: fixed; top: 0; left: 0; right: 0; }

.g-ui-sidebar {
  width: 260px;
  min-width: 260px;
  background: var(--g-ui-bg);
  border-right: 1px solid var(--g-ui-border);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.g-ui-sidebar-position-right { border-right: 0; border-left: 1px solid var(--g-ui-border); }
.g-ui-sidebar-size-sm { width: 220px; min-width: 220px; }
.g-ui-sidebar-size-md { width: 260px; min-width: 260px; }
.g-ui-sidebar-size-lg { width: 320px; min-width: 320px; }
.g-ui-sidebar-size-xl { width: 380px; min-width: 380px; }
.g-ui-sidebar-min-button { min-width: 38px; width: 38px; }
.g-ui-sidebar-min-xs { min-width: 48px; width: 48px; }
.g-ui-sidebar-min-sm { min-width: 64px; width: 64px; }
.g-ui-sidebar-min-md { min-width: 80px; width: 80px; }
.g-ui-sidebar-fixed { 
  position: relative;
  width: 45px; 
  min-width: 45px; 
  max-width: 45px;
  height: 100%;
  transition: 
    width .22s cubic-bezier(.2,.8,.2,1),
    min-width .22s cubic-bezier(.2,.8,.2,1),
    max-width .22s cubic-bezier(.2,.8,.2,1);
}
.g-ui-sidebar-fixed.g-ui-sidebar-size-sm { width: 40px; min-width: 40px; max-width: 40px; }
.g-ui-sidebar-fixed.g-ui-sidebar-size-md { width: 45px; min-width: 45px; max-width: 45px; }
.g-ui-sidebar-fixed.g-ui-sidebar-size-lg { width: 50px; min-width: 50px; max-width: 50px; }
.g-ui-sidebar-fixed.g-ui-sidebar-size-xl { width: 60px; min-width: 60px; max-width: 60px; }

.g-ui-sidebar-fixed-open.g-ui-sidebar-size-sm { width: 220px; min-width: 220px; max-width: 220px; }
.g-ui-sidebar-fixed-open.g-ui-sidebar-size-md { width: 260px; min-width: 260px; max-width: 260px; }
.g-ui-sidebar-fixed-open.g-ui-sidebar-size-lg { width: 320px; min-width: 320px; max-width: 320px; }
.g-ui-sidebar-fixed-open.g-ui-sidebar-size-xl { width: 380px; min-width: 380px; max-width: 380px; }

.g-ui-sidebar-drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 999;
  transition: transform .22s cubic-bezier(.2,.8,.2,1), opacity .22s ease;
  opacity: 0;
  transform: translateX(-100%);
  height: 100%;
  min-height: 100vh;
}
.g-ui-sidebar-drawer-left.g-ui-sidebar-drawer-open,
.g-ui-sidebar-drawer-right.g-ui-sidebar-drawer-open {
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
`;

export function ensureStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);
}
