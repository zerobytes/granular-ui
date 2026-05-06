const STYLE_ID = 'granular-ui-styles';

const poppins400 = new URL('./fonts/Poppins-400.ttf', import.meta.url).href;
const poppins500 = new URL('./fonts/Poppins-500.ttf', import.meta.url).href;
const poppins600 = new URL('./fonts/Poppins-600.ttf', import.meta.url).href;
const poppins700 = new URL('./fonts/Poppins-700.ttf', import.meta.url).href;

const arimo400 = new URL('./fonts/Arimo-400.ttf', import.meta.url).href;
const arimo500 = new URL('./fonts/Arimo-500.ttf', import.meta.url).href;
const arimo600 = new URL('./fonts/Arimo-600.ttf', import.meta.url).href;
const arimo700 = new URL('./fonts/Arimo-700.ttf', import.meta.url).href;

const inter400 = new URL('./fonts/Inter-400.woff2', import.meta.url).href;
const inter500 = new URL('./fonts/Inter-500.woff2', import.meta.url).href;
const inter600 = new URL('./fonts/Inter-600.woff2', import.meta.url).href;
const inter700 = new URL('./fonts/Inter-700.woff2', import.meta.url).href;

const css = `
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${poppins400}') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('${poppins500}') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('${poppins600}') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('${poppins700}') format('truetype');
}

@font-face {
  font-family: 'Arimo';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${arimo400}') format('truetype');
}
@font-face {
  font-family: 'Arimo';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('${arimo500}') format('truetype');
}
@font-face {
  font-family: 'Arimo';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('${arimo600}') format('truetype');
}
@font-face {
  font-family: 'Arimo';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('${arimo700}') format('truetype');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${inter400}') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('${inter500}') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('${inter600}') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('${inter700}') format('woff2');
}

:root {
  /* Color scales - base colors */
  --g-ui-white: #ffffff;
  --g-ui-black: #000000;
  
  --g-ui-gray-50: #f9fafb;
  --g-ui-gray-100: #f2f4f7;
  --g-ui-gray-200: #e4e7ec;
  --g-ui-gray-300: #cdd1d9;
  --g-ui-gray-350: #b2b7c3;
  --g-ui-gray-400: #98a2b3;
  --g-ui-gray-500: #667085;
  --g-ui-gray-600: #475467;
  --g-ui-gray-700: #344054;
  --g-ui-gray-800: #1d2939;
  --g-ui-gray-900: #101828;
  --g-ui-gray-950: #0c111d;
  
  --g-ui-red-50: #fef3f2;
  --g-ui-red-100: #fee4e2;
  --g-ui-red-200: #fecdca;
  --g-ui-red-300: #fda29b;
  --g-ui-red-400: #f97066;
  --g-ui-red-500: #f04438;
  --g-ui-red-600: #d92d20;
  --g-ui-red-700: #b42318;
  --g-ui-red-800: #912018;
  --g-ui-red-900: #7a271a;
  --g-ui-red-950: #55160c;
  
  --g-ui-orange-50: #fff6ed;
  --g-ui-orange-100: #ffead5;
  --g-ui-orange-200: #fddcab;
  --g-ui-orange-300: #feb273;
  --g-ui-orange-400: #fd853a;
  --g-ui-orange-500: #ef6820;
  --g-ui-orange-600: #e04f16;
  --g-ui-orange-700: #b93815;
  --g-ui-orange-800: #932f19;
  --g-ui-orange-900: #7a2e0e;
  --g-ui-orange-950: #511c10;
  
  --g-ui-green-50: #ecfdf3;
  --g-ui-green-100: #dcfae6;
  --g-ui-green-200: #abefc6;
  --g-ui-green-300: #75e0a7;
  --g-ui-green-400: #47cd89;
  --g-ui-green-500: #17b26a;
  --g-ui-green-600: #079455;
  --g-ui-green-700: #067647;
  --g-ui-green-800: #085d3a;
  --g-ui-green-900: #074d31;
  --g-ui-green-950: #053321;
  
  --g-ui-blue-50: #eff8ff;
  --g-ui-blue-100: #d1e9ff;
  --g-ui-blue-200: #b2ddff;
  --g-ui-blue-300: #84caff;
  --g-ui-blue-400: #53b1fd;
  --g-ui-blue-500: #2e90fa;
  --g-ui-blue-600: #1570ef;
  --g-ui-blue-700: #175cd3;
  --g-ui-blue-800: #1849a9;
  --g-ui-blue-900: #194185;
  --g-ui-blue-950: #102a56;
  
  --g-ui-yellow-50: #fefbe8;
  --g-ui-yellow-100: #fef7c3;
  --g-ui-yellow-200: #feee95;
  --g-ui-yellow-300: #fde272;
  --g-ui-yellow-400: #fac515;
  --g-ui-yellow-500: #eaaa08;
  --g-ui-yellow-600: #ca8504;
  --g-ui-yellow-700: #a15c07;
  --g-ui-yellow-800: #854a0e;
  --g-ui-yellow-900: #713b12;
  --g-ui-yellow-950: #422006;
  
  --g-ui-teal-50: #f0fdf9;
  --g-ui-teal-100: #ccfbef;
  --g-ui-teal-200: #99f6e0;
  --g-ui-teal-300: #5fe9d0;
  --g-ui-teal-400: #2ed3b7;
  --g-ui-teal-500: #15b79e;
  --g-ui-teal-600: #0e9384;
  --g-ui-teal-700: #107569;
  --g-ui-teal-800: #125d56;
  --g-ui-teal-900: #134e48;
  --g-ui-teal-950: #0a2926;
  
  --g-ui-purple-50: #f4f3ff;
  --g-ui-purple-100: #ebe9fe;
  --g-ui-purple-200: #d9d6fe;
  --g-ui-purple-300: #bdb4fe;
  --g-ui-purple-400: #9b8afb;
  --g-ui-purple-500: #7a5af8;
  --g-ui-purple-600: #6938ef;
  --g-ui-purple-700: #5925dc;
  --g-ui-purple-800: #4a1fb8;
  --g-ui-purple-900: #3e1c96;
  --g-ui-purple-950: #27115a;
  
  --g-ui-pink-50: #fdf2fa;
  --g-ui-pink-100: #fce7f6;
  --g-ui-pink-200: #fcceee;
  --g-ui-pink-300: #faa7e0;
  --g-ui-pink-400: #f670c7;
  --g-ui-pink-500: #ee46bc;
  --g-ui-pink-600: #dd2590;
  --g-ui-pink-700: #c11574;
  --g-ui-pink-800: #9e165f;
  --g-ui-pink-900: #851651;
  --g-ui-pink-950: #4e0d30;
  
  --g-ui-cyan-50: #ecfdff;
  --g-ui-cyan-100: #cff9fe;
  --g-ui-cyan-200: #a5f0fc;
  --g-ui-cyan-300: #67e3f9;
  --g-ui-cyan-400: #22ccee;
  --g-ui-cyan-500: #06aed4;
  --g-ui-cyan-600: #088ab2;
  --g-ui-cyan-700: #0e7090;
  --g-ui-cyan-800: #155b75;
  --g-ui-cyan-900: #164c63;
  --g-ui-cyan-950: #0d2d3a;
  
  /* Semantic colors - Dark theme (default) */
  --g-ui-bg: #F3F4F6;
  --g-ui-bg-subtle: var(--g-ui-gray-900);
  --g-ui-bg-muted: var(--g-ui-gray-800);
  --g-ui-bg-emphasized: var(--g-ui-gray-700);
  --g-ui-bg-inverted: var(--g-ui-gray-50);
  --g-ui-bg-panel: var(--g-ui-gray-900);
  --g-ui-bg-error: var(--g-ui-red-950);
  --g-ui-bg-warning: var(--g-ui-orange-950);
  --g-ui-bg-success: var(--g-ui-green-950);
  --g-ui-bg-info: var(--g-ui-blue-950);
  
  --g-ui-fg: var(--g-ui-gray-50);
  --g-ui-fg-muted: var(--g-ui-gray-400);
  --g-ui-fg-subtle: var(--g-ui-gray-500);
  --g-ui-fg-inverted: var(--g-ui-gray-950);
  --g-ui-fg-error: var(--g-ui-red-400);
  --g-ui-fg-warning: var(--g-ui-orange-300);
  --g-ui-fg-success: var(--g-ui-green-400);
  --g-ui-fg-info: var(--g-ui-blue-400);
  
  --g-ui-border: var(--g-ui-gray-700);
  --g-ui-border-subtle: var(--g-ui-gray-900);
  --g-ui-border-muted: var(--g-ui-gray-800);
  --g-ui-border-emphasized: var(--g-ui-gray-600);
  --g-ui-border-inverted: var(--g-ui-gray-200);
  --g-ui-border-error: var(--g-ui-red-400);
  --g-ui-border-warning: var(--g-ui-orange-400);
  --g-ui-border-success: var(--g-ui-green-400);
  --g-ui-border-info: var(--g-ui-blue-400);
  
  /* Gray semantic */
  --g-ui-gray-contrast: var(--g-ui-gray-950);
  --g-ui-gray-fg: var(--g-ui-gray-200);
  --g-ui-gray-subtle: var(--g-ui-gray-800);
  --g-ui-gray-muted: var(--g-ui-gray-700);
  --g-ui-gray-emphasized: var(--g-ui-gray-600);
  --g-ui-gray-solid: var(--g-ui-gray-50);
  --g-ui-gray-focus-ring: var(--g-ui-gray-400);
  --g-ui-gray-border: var(--g-ui-gray-700);
  
  /* Red semantic */
  --g-ui-red-contrast: white;
  --g-ui-red-fg: var(--g-ui-red-300);
  --g-ui-red-subtle: var(--g-ui-red-900);
  --g-ui-red-muted: var(--g-ui-red-800);
  --g-ui-red-emphasized: var(--g-ui-red-700);
  --g-ui-red-solid: var(--g-ui-red-600);
  --g-ui-red-focus-ring: var(--g-ui-red-500);
  --g-ui-red-border: var(--g-ui-red-400);
  
  /* Orange semantic */
  --g-ui-orange-contrast: black;
  --g-ui-orange-fg: var(--g-ui-orange-300);
  --g-ui-orange-subtle: var(--g-ui-orange-900);
  --g-ui-orange-muted: var(--g-ui-orange-800);
  --g-ui-orange-emphasized: var(--g-ui-orange-700);
  --g-ui-orange-solid: var(--g-ui-orange-500);
  --g-ui-orange-focus-ring: var(--g-ui-orange-500);
  --g-ui-orange-border: var(--g-ui-orange-400);
  
  /* Green semantic */
  --g-ui-green-contrast: white;
  --g-ui-green-fg: var(--g-ui-green-300);
  --g-ui-green-subtle: var(--g-ui-green-900);
  --g-ui-green-muted: var(--g-ui-green-800);
  --g-ui-green-emphasized: var(--g-ui-green-700);
  --g-ui-green-solid: var(--g-ui-green-600);
  --g-ui-green-focus-ring: var(--g-ui-green-500);
  --g-ui-green-border: var(--g-ui-green-400);
  
  /* Blue semantic */
  --g-ui-blue-contrast: white;
  --g-ui-blue-fg: var(--g-ui-blue-300);
  --g-ui-blue-subtle: var(--g-ui-blue-900);
  --g-ui-blue-muted: var(--g-ui-blue-800);
  --g-ui-blue-emphasized: var(--g-ui-blue-700);
  --g-ui-blue-solid: var(--g-ui-blue-600);
  --g-ui-blue-focus-ring: var(--g-ui-blue-500);
  --g-ui-blue-border: var(--g-ui-blue-400);
  
  /* Yellow semantic */
  --g-ui-yellow-contrast: black;
  --g-ui-yellow-fg: var(--g-ui-yellow-300);
  --g-ui-yellow-subtle: var(--g-ui-yellow-900);
  --g-ui-yellow-muted: var(--g-ui-yellow-800);
  --g-ui-yellow-emphasized: var(--g-ui-yellow-700);
  --g-ui-yellow-solid: var(--g-ui-yellow-300);
  --g-ui-yellow-focus-ring: var(--g-ui-yellow-500);
  --g-ui-yellow-border: var(--g-ui-yellow-500);
  
  /* Teal semantic */
  --g-ui-teal-contrast: white;
  --g-ui-teal-fg: var(--g-ui-teal-300);
  --g-ui-teal-subtle: var(--g-ui-teal-900);
  --g-ui-teal-muted: var(--g-ui-teal-800);
  --g-ui-teal-emphasized: var(--g-ui-teal-700);
  --g-ui-teal-solid: var(--g-ui-teal-600);
  --g-ui-teal-focus-ring: var(--g-ui-teal-500);
  --g-ui-teal-border: var(--g-ui-teal-400);
  
  /* Purple semantic */
  --g-ui-purple-contrast: white;
  --g-ui-purple-fg: var(--g-ui-purple-300);
  --g-ui-purple-subtle: var(--g-ui-purple-900);
  --g-ui-purple-muted: var(--g-ui-purple-800);
  --g-ui-purple-emphasized: var(--g-ui-purple-700);
  --g-ui-purple-solid: var(--g-ui-purple-600);
  --g-ui-purple-focus-ring: var(--g-ui-purple-500);
  --g-ui-purple-border: var(--g-ui-purple-400);
  
  /* Pink semantic */
  --g-ui-pink-contrast: white;
  --g-ui-pink-fg: var(--g-ui-pink-300);
  --g-ui-pink-subtle: var(--g-ui-pink-900);
  --g-ui-pink-muted: var(--g-ui-pink-800);
  --g-ui-pink-emphasized: var(--g-ui-pink-700);
  --g-ui-pink-solid: var(--g-ui-pink-600);
  --g-ui-pink-focus-ring: var(--g-ui-pink-500);
  --g-ui-pink-border: var(--g-ui-pink-400);
  
  /* Cyan semantic */
  --g-ui-cyan-contrast: white;
  --g-ui-cyan-fg: var(--g-ui-cyan-300);
  --g-ui-cyan-subtle: var(--g-ui-cyan-900);
  --g-ui-cyan-muted: var(--g-ui-cyan-800);
  --g-ui-cyan-emphasized: var(--g-ui-cyan-700);
  --g-ui-cyan-solid: var(--g-ui-cyan-600);
  --g-ui-cyan-focus-ring: var(--g-ui-cyan-500);
  --g-ui-cyan-border: var(--g-ui-cyan-400);
  
  /* Primary (indigo #6366f1 - Linear inspired) */
  --g-ui-primary: #6366f1;
  --g-ui-primary-hover: #818cf8;
  --g-ui-primary-active: #4f46e5;
  --g-ui-primary-subtle: rgba(99, 102, 241, 0.1);
  --g-ui-primary-muted: rgba(99, 102, 241, 0.2);
  --g-ui-primary-emphasized: rgba(99, 102, 241, 0.3);
  --g-ui-primary-fg: var(--g-ui-white);
  
  /* Aliases for common usage */
  --g-ui-success: var(--g-ui-green-500);
  --g-ui-success-hover: var(--g-ui-green-600);
  --g-ui-success-active: var(--g-ui-green-700);
  --g-ui-success-subtle: var(--g-ui-green-100);
  --g-ui-success-muted: var(--g-ui-green-200);
  --g-ui-success-fg: var(--g-ui-white);
  --g-ui-danger: var(--g-ui-red-500);
  --g-ui-danger-hover: var(--g-ui-red-600);
  --g-ui-danger-active: var(--g-ui-red-700);
  --g-ui-danger-subtle: var(--g-ui-red-100);
  --g-ui-danger-muted: var(--g-ui-red-200);
  --g-ui-danger-fg: var(--g-ui-white);
  --g-ui-warning: var(--g-ui-yellow-500);
  --g-ui-warning-hover: var(--g-ui-yellow-600);
  --g-ui-warning-active: var(--g-ui-yellow-700);
  --g-ui-warning-subtle: var(--g-ui-yellow-100);
  --g-ui-warning-muted: var(--g-ui-yellow-200);
  --g-ui-warning-fg: var(--g-ui-gray-900);
  --g-ui-info: var(--g-ui-cyan-500);
  --g-ui-info-hover: var(--g-ui-cyan-600);
  --g-ui-info-active: var(--g-ui-cyan-700);
  --g-ui-info-subtle: var(--g-ui-cyan-100);
  --g-ui-info-muted: var(--g-ui-cyan-200);
  --g-ui-info-fg: var(--g-ui-white);
  
  /* Shadows - Dark theme (dual-layer, Linear/Vercel inspired) */
  --g-ui-shadow-xs: 0px 1px 2px rgba(0, 0, 0, 0.48);
  --g-ui-shadow-sm: 0px 1px 3px rgba(0, 0, 0, 0.48), 0px 1px 2px rgba(0, 0, 0, 0.32);
  --g-ui-shadow-md: 0px 4px 8px -2px rgba(0, 0, 0, 0.48), 0px 2px 4px -2px rgba(0, 0, 0, 0.32);
  --g-ui-shadow-lg: 0px 12px 16px -4px rgba(0, 0, 0, 0.48), 0px 4px 6px -2px rgba(0, 0, 0, 0.24);
  --g-ui-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.48), 0px 8px 8px -4px rgba(0, 0, 0, 0.24);
  --g-ui-shadow-2xl: 0px 24px 48px -12px rgba(0, 0, 0, 0.64);
  
  /* Legacy (compatibility) */
  --g-ui-text: var(--g-ui-fg);
  --g-ui-muted: var(--g-ui-fg-muted);
  --g-ui-surface: var(--g-ui-bg-panel);
  --g-ui-primary-strong: var(--g-ui-primary-active);
  --g-ui-shadow: var(--g-ui-shadow-md);
  
  /* Overlays (themeable) */
  --g-ui-overlay-light: rgba(0,0,0,0.4);
  --g-ui-overlay-normal: rgba(0,0,0,0.6);
  --g-ui-overlay-dark: rgba(0,0,0,0.8);

  /* Misc */
  --g-ui-radius: 6px;
  --g-ui-font: 'Inter', 'Arimo', 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --g-ui-space-2: 2px;
  --g-ui-space-3: 3px;
  --g-ui-space-4: 4px;
  --g-ui-space-5: 5px;
  --g-ui-space-6: 6px;
  --g-ui-space-7: 7px;
  --g-ui-space-8: 8px;
  --g-ui-space-9: 9px;
  --g-ui-space-10: 10px;
  --g-ui-space-12: 12px;
  --g-ui-space-13: 13px;
  --g-ui-space-14: 14px;
  --g-ui-space-15: 15px;
  --g-ui-space-16: 16px;
  --g-ui-space-18: 18px;
  --g-ui-space-20: 20px;
  --g-ui-space-22: 22px;
  --g-ui-space-24: 24px;
  --g-ui-space-26: 26px;
  --g-ui-space-28: 28px;
  --g-ui-space-30: 30px;
  --g-ui-space-32: 32px;
  --g-ui-space-36: 36px;
  --g-ui-space-38: 38px;
  --g-ui-space-40: 40px;
  --g-ui-container-padding: var(--g-ui-space-16);
}

/* Global custom scrollbar: thumb hidden when idle, primary + wider when hovering or scrolling (per scroll area, via JS) */
* {
  /* scrollbar-width: thin; 
  scrollbar-color: var(--g-ui-primary-subtle) transparent;
  */
}
*::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  transition: width 0.2s ease, height 0.2s ease;
  background-color: var(--g-ui-primary-subtle) transparent;
}
*::-webkit-scrollbar:hover {
  width: 6px;
  height: 6px;
  transition: width 0.2s ease, height 0.2s ease;
  background-color: var(--g-ui-yellow-300) transparent;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
  
*::-webkit-scrollbar-thumb {
  background-color: var(--g-ui-primary-subtle);
  border-radius: 999px;
  transition: background 0.2s ease;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: var(--g-ui-primary);
}
*::-webkit-scrollbar-thumb:active {
  background-color: var(--g-ui-primary);
}

*::-webkit-scrollbar-corner {
  background: transparent;
}

.g-ui-theme-dark {
  --g-ui-bg: var(--g-ui-gray-950);
  --g-ui-bg-subtle: var(--g-ui-gray-800);
  --g-ui-bg-muted: var(--g-ui-gray-700);
  --g-ui-bg-emphasized: var(--g-ui-gray-600);
  --g-ui-bg-inverted: var(--g-ui-gray-50);
  --g-ui-bg-panel: var(--g-ui-gray-900);
  
  --g-ui-fg: var(--g-ui-gray-50);
  --g-ui-fg-muted: var(--g-ui-gray-400);
  --g-ui-fg-subtle: var(--g-ui-gray-500);
  --g-ui-fg-inverted: var(--g-ui-gray-950);
  
  --g-ui-border: var(--g-ui-gray-700);
  --g-ui-border-subtle: var(--g-ui-gray-900);
  --g-ui-border-muted: var(--g-ui-gray-800);
  --g-ui-border-emphasized: var(--g-ui-gray-600);
  
  /* Gray semantic */
  --g-ui-gray-contrast: var(--g-ui-gray-950);
  --g-ui-gray-subtle: var(--g-ui-gray-800);
  --g-ui-gray-muted: var(--g-ui-gray-700);
  --g-ui-gray-emphasized: var(--g-ui-gray-600);
  --g-ui-gray-solid: var(--g-ui-gray-50);
  --g-ui-gray-border: var(--g-ui-gray-700);
  
  /* Primary (dark mode) */
  --g-ui-primary-hover: #818cf8;
  --g-ui-primary-active: #4f46e5;
  
  --g-ui-shadow-xs: 0px 1px 2px rgba(0, 0, 0, 0.48);
  --g-ui-shadow-sm: 0px 1px 3px rgba(0, 0, 0, 0.48), 0px 1px 2px rgba(0, 0, 0, 0.32);
  --g-ui-shadow-md: 0px 4px 8px -2px rgba(0, 0, 0, 0.48), 0px 2px 4px -2px rgba(0, 0, 0, 0.32);
  --g-ui-shadow-lg: 0px 12px 16px -4px rgba(0, 0, 0, 0.48), 0px 4px 6px -2px rgba(0, 0, 0, 0.24);
  --g-ui-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.48), 0px 8px 8px -4px rgba(0, 0, 0, 0.24);
  --g-ui-shadow-2xl: 0px 24px 48px -12px rgba(0, 0, 0, 0.64);
}

.g-ui-theme-light {
  /* Semantic colors - Light theme */
  --g-ui-bg: #F3F4F6;
  --g-ui-bg-subtle: var(--g-ui-gray-50);
  --g-ui-bg-muted: var(--g-ui-gray-100);
  --g-ui-bg-emphasized: var(--g-ui-gray-200);
  --g-ui-bg-inverted: var(--g-ui-gray-950);
  --g-ui-bg-panel: var(--g-ui-white);
  --g-ui-bg-error: var(--g-ui-red-400);
  --g-ui-bg-warning: var(--g-ui-yellow-300);
  --g-ui-bg-success: var(--g-ui-green-400);
  --g-ui-bg-info: var(--g-ui-blue-300);
  
  --g-ui-fg: var(--g-ui-gray-900);
  --g-ui-fg-muted: var(--g-ui-gray-600);
  --g-ui-fg-subtle: var(--g-ui-gray-400);
  --g-ui-fg-inverted: var(--g-ui-gray-50);
  --g-ui-fg-error: var(--g-ui-red-600);
  --g-ui-fg-warning: var(--g-ui-orange-600);
  --g-ui-fg-success: var(--g-ui-green-600);
  --g-ui-fg-info: var(--g-ui-blue-600);
  
  /* Legacy override for light theme */
  --g-ui-text: var(--g-ui-fg);
  --g-ui-muted: var(--g-ui-fg-muted);
  
  --g-ui-border: var(--g-ui-gray-200);
  --g-ui-border-subtle: var(--g-ui-gray-100);
  --g-ui-border-muted: var(--g-ui-gray-200);
  --g-ui-border-emphasized: var(--g-ui-gray-300);
  --g-ui-border-inverted: var(--g-ui-gray-800);
  --g-ui-border-error: var(--g-ui-red-300);
  --g-ui-border-warning: var(--g-ui-orange-300);
  --g-ui-border-success: var(--g-ui-green-300);
  --g-ui-border-info: var(--g-ui-blue-300);
  
  /* Gray semantic */
  --g-ui-gray-contrast: var(--g-ui-gray-50);
  --g-ui-gray-fg: var(--g-ui-gray-700);
  --g-ui-gray-subtle: var(--g-ui-gray-50);
  --g-ui-gray-muted: var(--g-ui-gray-100);
  --g-ui-gray-emphasized: var(--g-ui-gray-200);
  --g-ui-gray-solid: var(--g-ui-gray-900);
  --g-ui-gray-focus-ring: var(--g-ui-gray-400);
  --g-ui-gray-border: var(--g-ui-gray-200);
  
  /* Red semantic */
  --g-ui-red-contrast: white;
  --g-ui-red-fg: var(--g-ui-red-600);
  --g-ui-red-subtle: var(--g-ui-red-50);
  --g-ui-red-muted: var(--g-ui-red-100);
  --g-ui-red-emphasized: var(--g-ui-red-200);
  --g-ui-red-solid: var(--g-ui-red-600);
  --g-ui-red-focus-ring: var(--g-ui-red-500);
  --g-ui-red-border: var(--g-ui-red-300);
  
  /* Orange semantic */
  --g-ui-orange-contrast: white;
  --g-ui-orange-fg: var(--g-ui-orange-600);
  --g-ui-orange-subtle: var(--g-ui-orange-50);
  --g-ui-orange-muted: var(--g-ui-orange-100);
  --g-ui-orange-emphasized: var(--g-ui-orange-200);
  --g-ui-orange-solid: var(--g-ui-orange-600);
  --g-ui-orange-focus-ring: var(--g-ui-orange-500);
  --g-ui-orange-border: var(--g-ui-orange-300);
  
  /* Green semantic */
  --g-ui-green-contrast: white;
  --g-ui-green-fg: var(--g-ui-green-600);
  --g-ui-green-subtle: var(--g-ui-green-50);
  --g-ui-green-muted: var(--g-ui-green-100);
  --g-ui-green-emphasized: var(--g-ui-green-200);
  --g-ui-green-solid: var(--g-ui-green-600);
  --g-ui-green-focus-ring: var(--g-ui-green-500);
  --g-ui-green-border: var(--g-ui-green-300);
  
  /* Blue semantic */
  --g-ui-blue-contrast: white;
  --g-ui-blue-fg: var(--g-ui-blue-600);
  --g-ui-blue-subtle: var(--g-ui-blue-50);
  --g-ui-blue-muted: var(--g-ui-blue-100);
  --g-ui-blue-emphasized: var(--g-ui-blue-200);
  --g-ui-blue-solid: var(--g-ui-blue-600);
  --g-ui-blue-focus-ring: var(--g-ui-blue-500);
  --g-ui-blue-border: var(--g-ui-blue-300);
  
  /* Yellow semantic */
  --g-ui-yellow-contrast: black;
  --g-ui-yellow-fg: var(--g-ui-yellow-700);
  --g-ui-yellow-subtle: var(--g-ui-yellow-50);
  --g-ui-yellow-muted: var(--g-ui-yellow-100);
  --g-ui-yellow-emphasized: var(--g-ui-yellow-200);
  --g-ui-yellow-solid: var(--g-ui-yellow-400);
  --g-ui-yellow-focus-ring: var(--g-ui-yellow-500);
  --g-ui-yellow-border: var(--g-ui-yellow-300);
  
  /* Teal semantic */
  --g-ui-teal-contrast: white;
  --g-ui-teal-fg: var(--g-ui-teal-600);
  --g-ui-teal-subtle: var(--g-ui-teal-50);
  --g-ui-teal-muted: var(--g-ui-teal-100);
  --g-ui-teal-emphasized: var(--g-ui-teal-200);
  --g-ui-teal-solid: var(--g-ui-teal-600);
  --g-ui-teal-focus-ring: var(--g-ui-teal-500);
  --g-ui-teal-border: var(--g-ui-teal-300);
  
  /* Purple semantic */
  --g-ui-purple-contrast: white;
  --g-ui-purple-fg: var(--g-ui-purple-600);
  --g-ui-purple-subtle: var(--g-ui-purple-50);
  --g-ui-purple-muted: var(--g-ui-purple-100);
  --g-ui-purple-emphasized: var(--g-ui-purple-200);
  --g-ui-purple-solid: var(--g-ui-purple-600);
  --g-ui-purple-focus-ring: var(--g-ui-purple-500);
  --g-ui-purple-border: var(--g-ui-purple-300);
  
  /* Pink semantic */
  --g-ui-pink-contrast: white;
  --g-ui-pink-fg: var(--g-ui-pink-600);
  --g-ui-pink-subtle: var(--g-ui-pink-50);
  --g-ui-pink-muted: var(--g-ui-pink-100);
  --g-ui-pink-emphasized: var(--g-ui-pink-200);
  --g-ui-pink-solid: var(--g-ui-pink-600);
  --g-ui-pink-focus-ring: var(--g-ui-pink-500);
  --g-ui-pink-border: var(--g-ui-pink-300);
  
  /* Cyan semantic */
  --g-ui-cyan-contrast: white;
  --g-ui-cyan-fg: var(--g-ui-cyan-600);
  --g-ui-cyan-subtle: var(--g-ui-cyan-50);
  --g-ui-cyan-muted: var(--g-ui-cyan-100);
  --g-ui-cyan-emphasized: var(--g-ui-cyan-200);
  --g-ui-cyan-solid: var(--g-ui-cyan-600);
  --g-ui-cyan-focus-ring: var(--g-ui-cyan-500);
  --g-ui-cyan-border: var(--g-ui-cyan-300);
  
  /* Primary overrides for light theme */
  --g-ui-primary-hover: #4f46e5;
  --g-ui-primary-active: #4338ca;
  --g-ui-primary-subtle: rgba(99, 102, 241, 0.1);
  --g-ui-primary-muted: rgba(99, 102, 241, 0.12);
  --g-ui-primary-emphasized: rgba(99, 102, 241, 0.2);
  
  /* Shadows - Light theme (dual-layer, Untitled UI inspired) */
  --g-ui-shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
  --g-ui-shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  --g-ui-shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  --g-ui-shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  --g-ui-shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  --g-ui-shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
  font-family: var(--g-ui-font);
  font-size: 14px;
}

.g-ui-reset {
  font-family: var(--g-ui-font);
  color: var(--g-ui-text);
}

.g-ui-text {
  font-family: var(--g-ui-font);
  font-weight: 400;
}
.g-ui-text-size-xs { font-size: 12px; line-height: 1.4; }
.g-ui-text-size-sm { font-size: 14px; line-height: 1.45; }
.g-ui-text-size-md { font-size: 16px; line-height: 1.5; }
.g-ui-text-size-lg { font-size: 18px; line-height: 1.55; }
.g-ui-text-size-xl { font-size: 20px; line-height: 1.6; }
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
.g-ui-text-decoration-underline { text-decoration: underline; }
.g-ui-text-decoration-line-through { text-decoration: line-through; }
.g-ui-text-decoration-overline { text-decoration: overline; }
.g-ui-text-decoration-none { text-decoration: none; }

.g-ui-title {
  font-family: var(--g-ui-font);
  color: var(--g-ui-text);
  margin: 0;
  font-weight: 700;
}
.g-ui-title-order-1 { font-size: 38px; }
.g-ui-title-order-2 { font-size: 32px; }
.g-ui-title-order-3 { font-size: 28px; }
.g-ui-title-order-4 { font-size: 22px; }
.g-ui-title-order-5 { font-size: 18px; }
.g-ui-title-order-6 { font-size: 16px; }

.g-ui-stack {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-stack-gap, 0);
}
.g-ui-gap-none { gap: 0; }
body .g-ui-gap-xs { gap: var(--g-ui-space-4); }
body .g-ui-gap-sm { gap: var(--g-ui-space-8); }
body .g-ui-gap-md { gap: var(--g-ui-space-12); }
body .g-ui-gap-lg { gap: var(--g-ui-space-16); }
body .g-ui-gap-xl { gap: var(--g-ui-space-20); }
body .g-ui-align-start { align-items: flex-start; }
body .g-ui-align-center { align-items: center; }
body .g-ui-align-end { align-items: flex-end; }
body .g-ui-justify-start { justify-content: flex-start; }
body .g-ui-justify-center { justify-content: center; }
body .g-ui-justify-end { justify-content: flex-end; }
body .g-ui-justify-between { justify-content: space-between; }

.g-ui-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.g-ui-no-wrap { flex-wrap: nowrap; }

.g-ui-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--g-ui-container-padding, var(--g-ui-space-16));
  box-sizing: border-box;
}
.g-ui-container-size-xs { max-width: 540px; }
.g-ui-container-size-sm { max-width: 720px; }
.g-ui-container-size-md { max-width: 960px; }
.g-ui-container-size-lg { max-width: 1140px; }
.g-ui-container-size-xl { max-width: 1320px; }
.g-ui-container-fluid { max-width: 100%; }

.g-ui-card {
  background: var(--g-ui-surface);
  border-radius: var(--g-ui-radius);
  box-shadow: none;
}
.g-ui-card-bordered { border: 1px solid var(--g-ui-border); }
body .g-ui-card-border-default { border: 1px solid var(--g-ui-border); }
body .g-ui-card-border-none { border: none; }
body .g-ui-card-border-light { border: 1px solid var(--g-ui-border-light); }
body .g-ui-card-border-dark { border: 1px solid var(--g-ui-border-dark); }
body .g-ui-card-border-primary { border: 1px solid var(--g-ui-primary); }
body .g-ui-card-border-success { border: 1px solid var(--g-ui-success); }
body .g-ui-card-border-danger { border: 1px solid var(--g-ui-danger); }
body .g-ui-card-border-warning { border: 1px solid var(--g-ui-warning); }
body .g-ui-card-border-info { border: 1px solid var(--g-ui-info); }
body .g-ui-card-border-subtle { border: 1px solid var(--g-ui-border-subtle); }
body .g-ui-card-border-emphasized { border: 1px solid var(--g-ui-border-emphasized); }
body .g-ui-card-border-inverted { border: 1px solid var(--g-ui-border-inverted); }
body .g-ui-card-border-error { border: 1px solid var(--g-ui-border-error); }
body .g-ui-card-border-warning { border: 1px solid var(--g-ui-border-warning); }
body .g-ui-card-border-success { border: 1px solid var(--g-ui-border-success); }
body .g-ui-card-border-info { border: 1px solid var(--g-ui-border-info); }

body .g-ui-card-padding-xs { padding: var(--g-ui-space-10); }
body .g-ui-card-padding-sm { padding: var(--g-ui-space-14); }
body .g-ui-card-padding-md { padding: var(--g-ui-space-18); }
body .g-ui-card-padding-lg { padding: var(--g-ui-space-24); }
body .g-ui-card-radius-sm { border-radius: 8px; }
body .g-ui-card-radius-md { border-radius: 10px; }
body .g-ui-card-radius-lg { border-radius: 14px; }
body .g-ui-card-shadow-none { box-shadow: none; }
body .g-ui-card-shadow-sm { box-shadow: var(--g-ui-shadow-sm); }
body .g-ui-card-shadow-md { box-shadow: var(--g-ui-shadow-md); }
body .g-ui-card-shadow-lg { box-shadow: var(--g-ui-shadow-lg); }
.g-ui-card-title {
  margin-bottom: var(--g-ui-space-8);
  font-weight: 600;
  font-size: 16px;
  color: var(--g-ui-text);
}
.g-ui-card-content {
  color: var(--g-ui-muted);
  margin-bottom: var(--g-ui-space-10);
}
.g-ui-card-actions {
  position:relative;
  margin-top: var(--g-ui-space-10);
  display: flex;
  justify-content: flex-end;
  gap: var(--g-ui-space-8);
  border-top: 1px solid var(--g-ui-border);
  box-sizing: border-box;
}

.g-ui-card-padding-xs .g-ui-card-title, .g-ui-card-padding-xs .g-ui-card-content { margin-bottom: var(--g-ui-space-10); }
.g-ui-card-padding-sm .g-ui-card-title, .g-ui-card-padding-sm .g-ui-card-content { margin-bottom: var(--g-ui-space-14); }
.g-ui-card-padding-md .g-ui-card-title, .g-ui-card-padding-md .g-ui-card-content { margin-bottom: var(--g-ui-space-18); }
.g-ui-card-padding-lg .g-ui-card-title, .g-ui-card-padding-lg .g-ui-card-content { margin-bottom: var(--g-ui-space-24); }

.g-ui-card-padding-xs .g-ui-card-actions { left: calc(0px - var(--g-ui-space-10)); width: calc(100% + var(--g-ui-space-10) + var(--g-ui-space-10)); padding: var(--g-ui-space-10) var(--g-ui-space-10) 0 var(--g-ui-space-10); }
.g-ui-card-padding-sm .g-ui-card-actions { left: calc(0px - var(--g-ui-space-14)); width: calc(100% + var(--g-ui-space-14) + var(--g-ui-space-14)); padding: var(--g-ui-space-14) var(--g-ui-space-14) 0 var(--g-ui-space-14); }
.g-ui-card-padding-md .g-ui-card-actions { left: calc(0px - var(--g-ui-space-18)); width: calc(100% + var(--g-ui-space-18) + var(--g-ui-space-18)); padding: var(--g-ui-space-18) var(--g-ui-space-18) 0 var(--g-ui-space-18); }
.g-ui-card-padding-lg .g-ui-card-actions { left: calc(0px - var(--g-ui-space-24)); width: calc(100% + var(--g-ui-space-24) + var(--g-ui-space-24)); padding: var(--g-ui-space-24) var(--g-ui-space-24) 0 var(--g-ui-space-24); }

.g-ui-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-6);
  border-radius: 999px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  white-space: nowrap;
}
.g-ui-badge-size-xs { font-size: 9px; height: 16px; padding: 0 var(--g-ui-space-6); }
.g-ui-badge-size-sm { font-size: 10px; height: 18px; padding: 0 var(--g-ui-space-8); }
.g-ui-badge-size-md { font-size: 11px; height: 20px; padding: 0 var(--g-ui-space-10); }
.g-ui-badge-size-lg { font-size: 13px; height: 26px; padding: 0 var(--g-ui-space-12); }
.g-ui-badge-size-xl { font-size: 16px; height: 32px; padding: 0 var(--g-ui-space-16); }
.g-ui-badge-variant-filled {
  background: var(--g-ui-primary);
  color: var(--g-ui-primary-fg);
  border: 1px solid transparent;
}
.g-ui-badge-variant-light {
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
  border: 1px solid var(--g-ui-primary-muted);
}
.g-ui-badge-variant-outline {
  background: transparent;
  color: var(--g-ui-primary);
  border: 1px solid var(--g-ui-primary);
}
.g-ui-badge-variant-dot {
  background: transparent;
  color: var(--g-ui-text);
  border: 1px solid var(--g-ui-border);
}
.g-ui-badge-dot {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-6);
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
  cursor: pointer;
  font-weight: 600;
  transition: transform .08s ease, background .12s ease, border .12s ease, color .12s ease;
  line-height: 1;
  display: inline-flex;
  align-items: center;
}
.g-ui-button:active { transform: translateY(1px); }
.g-ui-button:disabled { opacity: 0.6; cursor: not-allowed; }
.g-ui-button-full { width: 100%; }
.g-ui-button-loading { opacity: 0.8; }
.g-ui-button-section-left { margin-right: var(--g-ui-space-8); display: inline-flex; }
.g-ui-button-section-right { margin-left: var(--g-ui-space-8); display: inline-flex; }
.g-ui-button-variant-filled { background: var(--g-ui-primary); color: var(--g-ui-primary-fg); border: 1px solid transparent; }
.g-ui-button-variant-light { background: var(--g-ui-primary-subtle); color: var(--g-ui-primary); border: 1px solid var(--g-ui-primary-muted); }
.g-ui-button-variant-outline { background: transparent; color: var(--g-ui-primary); border: 1px solid var(--g-ui-primary); }
.g-ui-button-variant-subtle { background: transparent; color: var(--g-ui-text); border: 1px solid var(--g-ui-border); }
.g-ui-button-variant-transparent { background: transparent; color: var(--g-ui-text); border: 1px solid transparent; }
.g-ui-button-variant-filled:hover { background: var(--g-ui-primary-hover); }
.g-ui-button-variant-light:hover { background: var(--g-ui-primary-muted); }
.g-ui-button-variant-outline:hover { background: var(--g-ui-primary-subtle); }
.g-ui-button-variant-subtle:hover { background: var(--g-ui-bg-muted); }
.g-ui-button-variant-transparent:hover { background: var(--g-ui-bg-muted); }

.g-ui-button-color-primary.g-ui-button-variant-filled { background: var(--g-ui-primary); color: var(--g-ui-primary-fg); border: 1px solid transparent; }
.g-ui-button-color-primary.g-ui-button-variant-light { background: var(--g-ui-primary-subtle); color: var(--g-ui-primary); border: 1px solid var(--g-ui-primary-muted); }
.g-ui-button-color-primary.g-ui-button-variant-outline { background: transparent; color: var(--g-ui-primary); border: 1px solid var(--g-ui-primary); }
.g-ui-button-color-primary.g-ui-button-variant-subtle { background: transparent; color: var(--g-ui-text); border: 1px solid var(--g-ui-border); }
.g-ui-button-color-primary.g-ui-button-variant-transparent { background: transparent; color: var(--g-ui-text); border: 1px solid transparent; }
.g-ui-button-color-primary.g-ui-button-variant-filled:hover { background: var(--g-ui-primary-hover); }
.g-ui-button-color-primary.g-ui-button-variant-light:hover { background: var(--g-ui-primary-muted); }
.g-ui-button-color-primary.g-ui-button-variant-outline:hover { background: var(--g-ui-primary-subtle); }
.g-ui-button-color-primary.g-ui-button-variant-subtle:hover { background: var(--g-ui-bg-muted); }
.g-ui-button-color-primary.g-ui-button-variant-transparent:hover { background: var(--g-ui-bg-muted); }

.g-ui-button-color-success.g-ui-button-variant-filled { background: var(--g-ui-success); color: var(--g-ui-success-fg); border: 1px solid transparent; }
.g-ui-button-color-success.g-ui-button-variant-light { background: var(--g-ui-success-subtle); color: var(--g-ui-success); border: 1px solid var(--g-ui-success-muted); }
.g-ui-button-color-success.g-ui-button-variant-outline { background: transparent; color: var(--g-ui-success); border: 1px solid var(--g-ui-success); }
.g-ui-button-color-success.g-ui-button-variant-subtle { background: transparent; color: var(--g-ui-text); border: 1px solid var(--g-ui-border); }
.g-ui-button-color-success.g-ui-button-variant-transparent { background: transparent; color: var(--g-ui-text); border: 1px solid transparent; }
.g-ui-button-color-success.g-ui-button-variant-filled:hover { background: var(--g-ui-success-hover); }
.g-ui-button-color-success.g-ui-button-variant-light:hover { background: var(--g-ui-success-muted); }
.g-ui-button-color-success.g-ui-button-variant-outline:hover { background: var(--g-ui-success-subtle); }
.g-ui-button-color-success.g-ui-button-variant-subtle:hover { background: var(--g-ui-bg-muted); }
.g-ui-button-color-success.g-ui-button-variant-transparent:hover { background: var(--g-ui-bg-muted); }

.g-ui-button-color-warning.g-ui-button-variant-filled { background: var(--g-ui-warning); color: var(--g-ui-warning-fg); border: 1px solid transparent; }
.g-ui-button-color-warning.g-ui-button-variant-light { background: var(--g-ui-warning-subtle); color: var(--g-ui-warning); border: 1px solid var(--g-ui-warning-muted); }
.g-ui-button-color-warning.g-ui-button-variant-outline { background: transparent; color: var(--g-ui-warning); border: 1px solid var(--g-ui-warning); }
.g-ui-button-color-warning.g-ui-button-variant-subtle { background: transparent; color: var(--g-ui-text); border: 1px solid var(--g-ui-border); }
.g-ui-button-color-warning.g-ui-button-variant-transparent { background: transparent; color: var(--g-ui-text); border: 1px solid transparent; }
.g-ui-button-color-warning.g-ui-button-variant-filled:hover { background: var(--g-ui-warning-hover); }
.g-ui-button-color-warning.g-ui-button-variant-light:hover { background: var(--g-ui-warning-muted); }
.g-ui-button-color-warning.g-ui-button-variant-outline:hover { background: var(--g-ui-warning-subtle); }
.g-ui-button-color-warning.g-ui-button-variant-subtle:hover { background: var(--g-ui-bg-muted); }
.g-ui-button-color-warning.g-ui-button-variant-transparent:hover { background: var(--g-ui-bg-muted); }

.g-ui-button-color-danger.g-ui-button-variant-filled { background: var(--g-ui-danger); color: var(--g-ui-danger-fg); border: 1px solid transparent; }
.g-ui-button-color-danger.g-ui-button-variant-light { background: var(--g-ui-danger-subtle); color: var(--g-ui-danger); border: 1px solid var(--g-ui-danger-muted); }
.g-ui-button-color-danger.g-ui-button-variant-outline { background: transparent; color: var(--g-ui-danger); border: 1px solid var(--g-ui-danger); }
.g-ui-button-color-danger.g-ui-button-variant-subtle { background: transparent; color: var(--g-ui-text); border: 1px solid var(--g-ui-border); }
.g-ui-button-color-danger.g-ui-button-variant-transparent { background: transparent; color: var(--g-ui-text); border: 1px solid transparent; }
.g-ui-button-color-danger.g-ui-button-variant-filled:hover { background: var(--g-ui-danger-hover); }
.g-ui-button-color-danger.g-ui-button-variant-light:hover { background: var(--g-ui-danger-muted); }
.g-ui-button-color-danger.g-ui-button-variant-outline:hover { background: var(--g-ui-danger-subtle); }
.g-ui-button-color-danger.g-ui-button-variant-subtle:hover { background: var(--g-ui-bg-muted); }
.g-ui-button-color-danger.g-ui-button-variant-transparent:hover { background: var(--g-ui-bg-muted); }

.g-ui-button-color-info.g-ui-button-variant-filled { background: var(--g-ui-info); color: var(--g-ui-info-fg); border: 1px solid transparent; }
.g-ui-button-color-info.g-ui-button-variant-light { background: var(--g-ui-info-subtle); color: var(--g-ui-info); border: 1px solid var(--g-ui-info-muted); }
.g-ui-button-color-info.g-ui-button-variant-outline { background: transparent; color: var(--g-ui-info); border: 1px solid var(--g-ui-info); }
.g-ui-button-color-info.g-ui-button-variant-subtle { background: transparent; color: var(--g-ui-text); border: 1px solid var(--g-ui-border); }
.g-ui-button-color-info.g-ui-button-variant-transparent { background: transparent; color: var(--g-ui-text); border: 1px solid transparent; }
.g-ui-button-color-info.g-ui-button-variant-filled:hover { background: var(--g-ui-info-hover); }
.g-ui-button-color-info.g-ui-button-variant-light:hover { background: var(--g-ui-info-muted); }
.g-ui-button-color-info.g-ui-button-variant-outline:hover { background: var(--g-ui-info-subtle); }
.g-ui-button-color-info.g-ui-button-variant-subtle:hover { background: var(--g-ui-bg-muted); }
.g-ui-button-color-info.g-ui-button-variant-transparent:hover { background: var(--g-ui-bg-muted); }


.g-ui-button-size-xs { font-size: 12px; height: 30px; padding: 0 var(--g-ui-space-8); }
.g-ui-button-size-sm { font-size: 13px; height: 36px; padding: 0 var(--g-ui-space-10); }
.g-ui-button-size-md { font-size: 14px; height: 42px; padding: 0 var(--g-ui-space-10); }
.g-ui-button-size-lg { font-size: 15px; height: 50px; padding: 0 var(--g-ui-space-12); }
.g-ui-button-size-xl { font-size: 16px; height: 60px; padding: 0 var(--g-ui-space-14); }

.g-ui-input-wrapper {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: var(--g-ui-surface);
  color: var(--g-ui-text);
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
  padding: 0 var(--g-ui-space-12);
  box-sizing: border-box;
  cursor: text;
}
.g-ui-input-wrapper:focus-within {
  border-color: var(--g-ui-primary);
}
.g-ui-input {
  width: 100%;
  border: 0;
  background: transparent;
  color: inherit;
  padding: 0;
  height: 100%;
  font-size: inherit;
}
.g-ui-input:focus,
.g-ui-input:focus-within {
  outline: none;
}
.g-ui-input::placeholder {
  color: var(--g-ui-muted);
  transition: opacity .12s ease;
}
.g-ui-input:focus::placeholder {
  opacity: 0.5;
}
.g-ui-input-section {
  display: inline-flex;
  align-items: center;
  color: var(--g-ui-muted);
}
.g-ui-input-error {
  border-color: var(--g-ui-danger);
}
.g-ui-input-size-xs { font-size: 12px; height: 30px; padding: 0 var(--g-ui-space-10); }
.g-ui-input-size-sm { font-size: 13px; height: 36px; padding: 0 var(--g-ui-space-12); }
.g-ui-input-size-md { font-size: 14px; height: 42px; padding: 0 var(--g-ui-space-14); }
.g-ui-input-size-lg { font-size: 15px; height: 50px; padding: 0 var(--g-ui-space-16); }
.g-ui-input-size-xl { font-size: 16px; height: 60px; padding: 0 var(--g-ui-space-20); }
.g-ui-text-input {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-6);
}
.g-ui-text-input.g-ui-input-disabled .g-ui-input-wrapper,
.g-ui-text-input.g-ui-input-read-only .g-ui-input-wrapper {
  background: var(--g-ui-bg-subtle);
  color: var(--g-ui-text-subtle);
  cursor: not-allowed;
  border-color: var(--g-ui-border-muted);
}



.g-ui-text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.g-ui-text-input-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--g-ui-text);
}
.g-ui-text-input-description {
  font-size: 12px;
  color: var(--g-ui-muted);
}
.g-ui-text-input-error-text {
  font-size: 12px;
  color: var(--g-ui-danger);
}
.g-ui-date-input-popover .g-ui-popover-dropdown {
  padding: 0;
  border-width:0;
}

.g-ui-modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--g-ui-overlay-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.g-ui-modal-overlay-light { background: var(--g-ui-overlay-light); }
.g-ui-modal-overlay-normal { background: var(--g-ui-overlay-normal); }
.g-ui-modal-overlay-dark { background: var(--g-ui-overlay-dark); }
.g-ui-modal-centered { align-items: center; justify-content: center; }
.g-ui-modal-top { align-items: flex-start; justify-content: center; padding-top: var(--g-ui-space-40); }
.g-ui-modal-position-top-left { align-items: flex-start; justify-content: flex-start; padding: var(--g-ui-space-40) var(--g-ui-space-20); }
.g-ui-modal-position-top-center { align-items: flex-start; justify-content: center; padding: var(--g-ui-space-40) var(--g-ui-space-20); }
.g-ui-modal-position-top-right { align-items: flex-start; justify-content: flex-end; padding: var(--g-ui-space-40) var(--g-ui-space-20); }
.g-ui-modal-position-center-left { align-items: center; justify-content: flex-start; padding: var(--g-ui-space-20); }
.g-ui-modal-position-center { align-items: center; justify-content: center; padding: var(--g-ui-space-20); }
.g-ui-modal-position-center-right { align-items: center; justify-content: flex-end; padding: var(--g-ui-space-20); }
.g-ui-modal-position-bottom-left { align-items: flex-end; justify-content: flex-start; padding: var(--g-ui-space-20); padding-bottom: var(--g-ui-space-40); }
.g-ui-modal-position-bottom-center { align-items: flex-end; justify-content: center; padding: var(--g-ui-space-20); padding-bottom: var(--g-ui-space-40); }
.g-ui-modal-position-bottom-right { align-items: flex-end; justify-content: flex-end; padding: var(--g-ui-space-20); padding-bottom: var(--g-ui-space-40); }
.g-ui-modal {
  background: var(--g-ui-bg);
  border: 1px solid var(--g-ui-border-muted);
  border-radius: 8px;
  padding: var(--g-ui-space-16);
  min-width: 320px;
  max-width: 780px;
  box-shadow: var(--g-ui-shadow-lg);
}
.g-ui-modal-size-sm { width: 380px; }
.g-ui-modal-size-md { width: 440px; }
.g-ui-modal-size-lg { width: 620px; }
.g-ui-modal-size-xl { width: 780px; }
.g-ui-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--g-ui-space-12);
}
.g-ui-modal-title { font-weight: 700; }
.g-ui-modal-close {
  padding: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.g-ui-modal-close svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.g-ui-checkbox {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-6);
  box-sizing: border-box;
}
.g-ui-checkbox-control {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-10);
  cursor: pointer;
}
.g-ui-checkbox-indeterminate,
.g-ui-checkbox-checked {
  position:absolute;
  color: var(--g-ui-primary-fg);
  fill: var(--g-ui-primary-fg);
}
.g-ui-checkbox-indeterminate svg,
.g-ui-checkbox-checked svg {
  fill: var(--g-ui-primary-fg);
}
.g-ui-checkbox-input {
  appearance: none;
  width: var(--g-ui-control-size, 16px);
  height: var(--g-ui-control-size, 16px);
  border: 1px solid var(--g-ui-border);
  border-radius: 4px;
  background: var(--g-ui-bg);
  position: relative;
  transition: background-color .12s ease, border-color .12s ease;
  cursor: pointer;
}
.g-ui-checkbox-input:focus-visible {
  outline: 2px solid var(--g-ui-primary);
  outline-offset: 2px;
}
.g-ui-checkbox-input:checked {
  background: var(--g-ui-primary);
  border-color: var(--g-ui-primary);
}
.g-ui-checkbox-input:indeterminate {
  background: var(--g-ui-primary);
  border-color: var(--g-ui-primary);
}

.g-ui-checkbox-label { font-size: 14px; }
.g-ui-checkbox-description { font-size: 12px; color: var(--g-ui-muted); }
.g-ui-checkbox-size-xs { --g-ui-control-size: 16px; --g-ui-control-inner-offset: 4px; }
.g-ui-checkbox-size-sm { --g-ui-control-size: 20px; --g-ui-control-inner-offset: 5px; }
.g-ui-checkbox-size-md { --g-ui-control-size: 24px; --g-ui-control-inner-offset: 6px; }
.g-ui-checkbox-size-lg { --g-ui-control-size: 30px; --g-ui-control-inner-offset: 7px; }
.g-ui-checkbox-size-xl { --g-ui-control-size: 36px; --g-ui-control-inner-offset: 8px; }

.g-ui-checkbox-size-xs .g-ui-checkbox-indeterminate { top: 2px;left:4px; }
.g-ui-checkbox-size-xs .g-ui-checkbox-indeterminate svg { width: 16px; height: 16px; }
.g-ui-checkbox-size-sm .g-ui-checkbox-indeterminate { top:3px; left:4px;  }
.g-ui-checkbox-size-sm .g-ui-checkbox-indeterminate svg { width: 20px; height:20px;  }
.g-ui-checkbox-size-md .g-ui-checkbox-indeterminate { top:0px; left:0px; }
.g-ui-checkbox-size-md .g-ui-checkbox-indeterminate svg { width: 24px; height: 24px; }
.g-ui-checkbox-size-lg .g-ui-checkbox-indeterminate { top:4px; left:5px; }
.g-ui-checkbox-size-lg .g-ui-checkbox-indeterminate svg { width: 28px; height: 28px; }
.g-ui-checkbox-size-xl .g-ui-checkbox-indeterminate { top:5px; left:6px; }
.g-ui-checkbox-size-xl .g-ui-checkbox-indeterminate svg { width: 32px; height: 32px; }

.g-ui-checkbox-size-xs .g-ui-checkbox-checked { top: 0px;left:0.5px; }
.g-ui-checkbox-size-xs .g-ui-checkbox-checked svg { width: 16px; height: 16px; }
.g-ui-checkbox-size-sm .g-ui-checkbox-checked { top:0px; left:0.3px;  }
.g-ui-checkbox-size-sm .g-ui-checkbox-checked svg { width: 20px; height:20px;  }
.g-ui-checkbox-size-md .g-ui-checkbox-checked { top:0px; left:0px; }
.g-ui-checkbox-size-md .g-ui-checkbox-checked svg { width: 24px; height: 24px; }
.g-ui-checkbox-size-lg .g-ui-checkbox-checked { top:1px; left:1px; }
.g-ui-checkbox-size-lg .g-ui-checkbox-checked svg { width: 28px; height: 28px; }
.g-ui-checkbox-size-xl .g-ui-checkbox-checked { top:2px; left:3px; }
.g-ui-checkbox-size-xl .g-ui-checkbox-checked svg { width: 32px; height: 32px; }

.g-ui-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-10);
  cursor: pointer;
}
.g-ui-switch-input {
  appearance: none;
  width: var(--g-ui-switch-width, 36px);
  height: var(--g-ui-switch-height, 20px);
  border-radius: 999px;
  background: var(--g-ui-bg-muted);
  border: 1px solid var(--g-ui-border);
  position: relative;
  transition: background .15s ease, border .15s ease;
}
.g-ui-switch-input:focus-visible {
  outline: 2px solid var(--g-ui-primary);
  outline-offset: 2px;
}
.g-ui-switch-input::after {
  content: '';
  position: absolute;
  width: var(--g-ui-switch-thumb, 14px);
  height: var(--g-ui-switch-thumb, 14px);
  border-radius: 50%;
  background: var(--g-ui-white);
  top: var(--g-ui-switch-offset, 2px);
  left: var(--g-ui-switch-offset, 2px);
  transition: transform .15s ease;
}
.g-ui-switch-input:checked {
  background: var(--g-ui-primary);
  border-color: var(--g-ui-primary);
}
.g-ui-switch-input:checked::after {
  transform: translateX(calc(var(--g-ui-switch-width, 36px) - var(--g-ui-switch-thumb, 14px) - (var(--g-ui-switch-offset, 2px) * 2) - 2px));
}
.g-ui-switch-label { font-size: 14px; }
.g-ui-switch-size-xs { --g-ui-switch-width: 32px; --g-ui-switch-height: 16px; --g-ui-switch-thumb: 12px; --g-ui-switch-offset: 1px; }
.g-ui-switch-size-sm { --g-ui-switch-width: 38px; --g-ui-switch-height: 20px; --g-ui-switch-thumb: 14px; --g-ui-switch-offset: 2px; }
.g-ui-switch-size-md { --g-ui-switch-width: 46px; --g-ui-switch-height: 24px; --g-ui-switch-thumb: 18px; --g-ui-switch-offset: 2px; }
.g-ui-switch-size-lg { --g-ui-switch-width: 56px; --g-ui-switch-height: 30px; --g-ui-switch-thumb: 22px; --g-ui-switch-offset: 3px; }
.g-ui-switch-size-xl { --g-ui-switch-width: 72px; --g-ui-switch-height: 36px; --g-ui-switch-thumb: 28px; --g-ui-switch-offset: 3px; }

.g-ui-select-root {
  position: relative;
  width: 100%;
}
.g-ui-select-root .g-ui-input-wrapper {
  cursor: pointer;
}
.g-ui-select {
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 100%;
  cursor: pointer;
  color: var(--g-ui-text);
  font-size: inherit;
}
.g-ui-select-value {
  flex: 1;
}
.g-ui-select-placeholder {
  color: var(--g-ui-muted);
}
.g-ui-select-caret {
  color: var(--g-ui-muted);
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.g-ui-select-caret svg{
  fill: var(--g-ui-muted);
}
.g-ui-select-dropdown {
  position: absolute;
  top: calc(100% + var(--g-ui-space-6));
  left: 0;
  right: 0;
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  background: var(--g-ui-bg-panel);
  box-shadow: var(--g-ui-shadow-sm);
  padding: var(--g-ui-space-6);
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-4);
  z-index: 60;
  max-height: 240px;
  overflow: auto;
}
.g-ui-select-dropdown-top {
  top: auto;
  bottom: calc(100% + var(--g-ui-space-6));
}
.g-ui-select-item {
  padding: var(--g-ui-space-6) var(--g-ui-space-8);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
}
.g-ui-select-item:hover:not(.g-ui-select-item-active) {
  background: var(--g-ui-primary-subtle);
}
.g-ui-select-item-active {
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
}
.g-ui-select-item-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.g-ui-select-item-disabled:hover {
  background: transparent;
}
.g-ui-select-empty {
  padding: var(--g-ui-space-8) var(--g-ui-space-10);
  margin: var(--g-ui-space-4);
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.35;
  text-align: center;
  color: var(--g-ui-muted);
  background: var(--g-ui-bg-muted);
  cursor: default;
  user-select: none;
}
.g-ui-select-size-xs { font-size: 12px; height: 30px; padding: 0 var(--g-ui-space-10); }
.g-ui-select-size-sm { font-size: 13px; height: 36px; padding: 0 var(--g-ui-space-12); }
.g-ui-select-size-md { font-size: 14px; height: 42px; padding: 0 var(--g-ui-space-14); }
.g-ui-select-size-lg { font-size: 15px; height: 50px; padding: 0 var(--g-ui-space-16); }
.g-ui-select-size-xl { font-size: 16px; height: 60px; padding: 0 var(--g-ui-space-20); }

.g-ui-tabs { display: flex; flex-direction: column; }
.g-ui-tabs-list { display: flex; flex-wrap: wrap; gap: 0; }
.g-ui-tabs-tab {
  position: relative;
  padding: var(--g-ui-space-8) var(--g-ui-space-16);
  font-size: 13px;
  line-height: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: var(--g-ui-text);
  margin-bottom: calc(0px - var(--g-ui-space-2));
}
.g-ui-tabs-panel { padding-top: var(--g-ui-space-12); }
.g-ui-tabs-variant-default .g-ui-tabs-list {
  border-bottom: 2px solid var(--g-ui-border-muted);
}
.g-ui-tabs-variant-default .g-ui-tabs-tab {
  border-bottom: 2px solid var(--g-ui-border-muted);
  border-radius: 4px 4px 0 0;
}
.g-ui-tabs-variant-default .g-ui-tabs-tab:hover {
  background: var(--g-ui-bg-muted);
}
.g-ui-tabs-variant-default .g-ui-tabs-tab-active {
  border-color: var(--g-ui-primary);
  color: var(--g-ui-primary);
}
.g-ui-tabs-variant-outline .g-ui-tabs-list {
  border-bottom: 1px solid var(--g-ui-border-muted);
}
.g-ui-tabs-variant-outline .g-ui-tabs-tab {
  border: 1px solid transparent;
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
}
.g-ui-tabs-variant-outline .g-ui-tabs-tab-active {
  border-color: var(--g-ui-border);
  background: var(--g-ui-bg);
  color: var(--g-ui-primary);
}
.g-ui-tabs-variant-pills .g-ui-tabs-list {
  gap: var(--g-ui-space-8);
}
.g-ui-tabs-variant-pills .g-ui-tabs-tab {
  border-radius: 8px;
  background: transparent;
}
.g-ui-tabs-variant-pills .g-ui-tabs-tab:hover {
  background: var(--g-ui-bg-muted);
}
.g-ui-tabs-variant-pills .g-ui-tabs-tab-active {
  background: var(--g-ui-primary);
  color: var(--g-ui-primary-fg);
}

.g-ui-tabs-vertical {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--g-ui-space-16);
}
.g-ui-tabs-vertical .g-ui-tabs-list {
  flex-direction: column;
}
.g-ui-tabs-align-left .g-ui-tabs-list {
  justify-content: flex-start;
}
.g-ui-tabs-align-center .g-ui-tabs-list {
  justify-content: center;
}
.g-ui-tabs-align-right .g-ui-tabs-list {
  justify-content: flex-end;
}
.
.g-ui-tabs-size-xs .g-ui-tabs-tab {
  padding: var(--g-ui-space-6) var(--g-ui-space-10);
  font-size: 12px;
}
.g-ui-tabs-size-sm .g-ui-tabs-tab {
  padding: var(--g-ui-space-8) var(--g-ui-space-12);
  font-size:
}
.g-ui-tabs-size-md .g-ui-tabs-tab {
  padding: var(--g-ui-space-10) var(--g-ui-space-14);
  font-size: 16px;
}
.g-ui-tabs-size-lg .g-ui-tabs-tab {
  padding: var(--g-ui-space-12) var(--g-ui-space-16);
  font-size: 18px;
}
.g-ui-tabs-size-xl .g-ui-tabs-tab {
  padding: var(--g-ui-space-14) var(--g-ui-space-20);
  font-size: 20px;
}

.g-ui-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--g-ui-text);
  font-size: 13px;
}
.g-ui-table-with-border {
  border: 1px solid var(--g-ui-border);
  outline: 1px solid var(--g-ui-border);
  border-radius: var(--g-ui-radius);
  overflow: hidden;
}
.g-ui-table th,
.g-ui-table td {
  padding: var(--g-ui-space-10) var(--g-ui-space-12);
  text-align: left;
}
.g-ui-table th {
  font-weight: 800;
  color: var(--g-ui-muted);
}
.g-ui-table-column-borders th,
.g-ui-table-column-borders td {
  border-right: 1px solid var(--g-ui-border);
}
.g-ui-table-column-borders th:last-child,
.g-ui-table-column-borders td:last-child {
  border-right: 0;
}
.g-ui-table-row-borders th,
.g-ui-table-row-borders td {
  border-bottom: 1px solid var(--g-ui-border);
}
.g-ui-table-row-borders tbody tr:last-child td {
  border-bottom: 0;
}
.g-ui-table-striped tbody tr:nth-child(odd) { background: var(--g-ui-bg-subtle); }
.g-ui-table-hover tbody tr:hover { background: var(--g-ui-bg-muted); }

.g-ui-accordion {
  width: calc(100%);
  display: flex; 
  flex-direction: column; 
  border-bottom: 1px solid var(--g-ui-border);
}
.g-ui-accordion-header {
  box-sizing: border-box;
  padding: var(--g-ui-space-12) var(--g-ui-space-15);
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
}
.g-ui-accordion-content {
  padding: var(--g-ui-space-12);
}

.g-ui-tooltip {
  position: relative;
  display: inline-flex;
}
.g-ui-tooltip-content {
  position: absolute;
  bottom: calc(100% + var(--g-ui-space-8));
  left: 50%;
  transform: translateX(-50%);
  background: var(--g-ui-gray-900);
  color: var(--g-ui-gray-50);
  border: 0;
  padding: var(--g-ui-space-6) var(--g-ui-space-10);
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
  position: fixed;
  right: 0;
  width:10px;
  min-width: 180px;
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  box-shadow: var(--g-ui-shadow-sm);
  padding: var(--g-ui-space-4);
  z-index: 10000;
}
.g-ui-menu-left { left: 0; right: auto; }
.g-ui-menu-center { left: 50%; right: auto; transform: translateX(-50%); }
.g-ui-menu-right { right: 0; left: auto; }
.g-ui-menu-item {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
  padding: var(--g-ui-space-6) var(--g-ui-space-12);
  border-radius: 8px;
  cursor: pointer;
  color: var(--g-ui-text);
  font-size: 13px;
}
.g-ui-menu-item:hover { background: var(--g-ui-bg-subtle); }

.g-ui-menu-overlay {
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  inset: 0;
  z-index: 9999;
}

.g-ui-drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 998;
}
.g-ui-drawer-overlay-normal { background: var(--g-ui-overlay-normal); }
.g-ui-drawer-overlay-light { background: var(--g-ui-overlay-light); }
.g-ui-drawer-overlay-dark { background: var(--g-ui-overlay-dark); }
.g-ui-drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 320px;
  background: var(--g-ui-bg);
  border-left: 1px solid var(--g-ui-border-muted);
  box-shadow: var(--g-ui-shadow-lg);
  z-index: 999;
  padding: var(--g-ui-space-16);
}
.g-ui-drawer-right { right: 0; }
.g-ui-drawer-left { left: 0; border-left: 0; border-right: 1px solid var(--g-ui-border-muted); }
.g-ui-drawer-size-sm { width: 380px; }
.g-ui-drawer-size-md { width: 440px; }
.g-ui-drawer-size-lg { width: 620px; }
.g-ui-drawer-size-xl { width: 780px; }

.g-ui-notification {
  border-radius: var(--g-ui-radius);
  padding: var(--g-ui-space-10) var(--g-ui-space-12) var(--g-ui-space-10) var(--g-ui-space-22);
  background: var(--g-ui-surface);
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
  box-shadow: var(--g-ui-shadow-lg);
  position: relative;
  overflow: hidden;
}
.g-ui-notification-bordered {
  border: 1px solid var(--g-ui-border);
}
.g-ui-notification::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
  width: 6px;
  border-radius: 999px;
  background: var(--g-ui-primary);
}
.g-ui-notification-with-icon::before {
  display: none;
}
.g-ui-notification-body {
  flex: 1;
  overflow: hidden;
}
.g-ui-notification-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: var(--g-ui-primary);
  color: var(--g-ui-primary-fg);
}
.g-ui-notification-loader { margin-right: var(--g-ui-space-8); }
.g-ui-notification-close {
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--g-ui-fg-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.g-ui-notification-close span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.g-ui-notification-close svg{
  width: 24px;
  height: 24px;
  fill: var(--g-ui-fg-muted);
}

.g-ui-notification-title { font-weight: 500; font-size: 13px; line-height: 1.35; }
.g-ui-notification-primary::before { background: var(--g-ui-primary); }
.g-ui-notification-blue::before { background: var(--g-ui-blue-500); }
.g-ui-notification-success::before { background: var(--g-ui-success); }
.g-ui-notification-danger::before { background: var(--g-ui-danger); }
.g-ui-notification-primary .g-ui-notification-icon { background: var(--g-ui-primary); }
.g-ui-notification-blue .g-ui-notification-icon { background: var(--g-ui-blue-500); }
.g-ui-notification-success .g-ui-notification-icon { background: var(--g-ui-success); }
.g-ui-notification-danger .g-ui-notification-icon { background: var(--g-ui-danger); }

.g-ui-divider {
  width: 100%;
  border: 0;
  height: 1px;
  background: var(--g-ui-border);
  margin-top: var(--g-ui-space-9);
  margin-bottom: var(--g-ui-space-9);
}
.g-ui-divider-size-xs { height: 1px; }
.g-ui-divider-size-sm { height: 2px; }
.g-ui-divider-size-md { height: 3px; }
.g-ui-divider-size-lg { height: 4px; }
.g-ui-divider-size-xl { height: 5px; }
.g-ui-divider.label {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-10);
  color: var(--g-ui-muted);
  font-size: 12px;
  background: transparent;
}
.g-ui-divider.label::before,
.g-ui-divider.label::after {
  content: '';
  height: 1px;
  flex: 1;
  background: var(--g-ui-border);
}
.g-ui-divider-label-left.label::before { flex: 0 0 12px; }
.g-ui-divider-label-right.label::after { flex: 0 0 12px; }
.g-ui-divider-label-text {
  color: var(--g-ui-muted);
  font-size: 12px;
  padding: 0 var(--g-ui-space-10);
  position: relative;
  z-index: 1;
}
.g-ui-divider-vertical {
  width: 1px;
  height: 100%;
  background: var(--g-ui-border);
  margin: 0 var(--g-ui-space-10);
}

.g-ui-paper {
  background: var(--g-ui-surface);
  border: 0;
  border-radius: 10px;
}


.g-ui-textarea {
  min-height: 120px;
  resize: vertical;
  padding: var(--g-ui-space-8) 0;
  height: auto;
}
.g-ui-input-multiline {
  align-items: stretch;
  padding: 0 var(--g-ui-space-12);
  height: auto;
}
.g-ui-input-multiline .g-ui-input {
  padding: var(--g-ui-space-8) 0;
  height: auto;
}
.g-ui-number-field {
  width: 100%;
}
.g-ui-number-field-controls {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 30px;
}
.g-ui-number-field-control {
  width: 100%;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--g-ui-text);
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  line-height: 1;
}
.g-ui-number-field-control:first-child {
  border-bottom: 1px solid var(--g-ui-border);
}
.g-ui-number-field-control:hover {
  background: var(--g-ui-bg-subtle);
}

.g-ui-alert {
  border-radius: var(--g-ui-radius);
  border: 1px solid transparent;
  padding: var(--g-ui-space-16);
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-6);
}
.g-ui-alert-header {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
}
.g-ui-alert-icon {
  display: inline-flex;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: var(--g-ui-space-8);
}
.g-ui-alert-close {
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--g-ui-muted);
  cursor: pointer;
}
.g-ui-alert-title { font-weight: 700; }
.g-ui-alert-primary { background: var(--g-ui-primary-subtle); color: var(--g-ui-primary); border-color: transparent; }
.g-ui-alert-info { background: var(--g-ui-bg-info); color: var(--g-ui-info-fg); border-color: transparent; }
.g-ui-alert-success { background: var(--g-ui-bg-success); color: var(--g-ui-success-fg); border-color: transparent; }
.g-ui-alert-danger { background: var(--g-ui-bg-error); color: var(--g-ui-danger-fg); border-color: transparent; }
.g-ui-alert-warning { background: var(--g-ui-bg-warning); color: var(--g-ui-warning-fg); border-color: transparent; }

.g-ui-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--g-ui-bg-muted);
  color: var(--g-ui-text);
  overflow: hidden;
  border: 1px solid var(--g-ui-border);
  font-weight: 600;
}
.g-ui-avatar-size-xs { width: 16px; height: 16px; font-size: 8px; }
.g-ui-avatar-size-sm { width: 26px; height: 26px; font-size: 10px; }
.g-ui-avatar-size-md { width: 38px; height: 38px; font-size: 13px; }
.g-ui-avatar-size-lg { width: 56px; height: 56px; font-size: 18px; }
.g-ui-avatar-size-xl { width: 84px; height: 84px; font-size: 24px; }

.g-ui-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
}
.g-ui-icon-size-xs { font-size: 14px; }
.g-ui-icon-size-sm { font-size: 18px; }
.g-ui-icon-size-md { font-size: 22px; }
.g-ui-icon-size-lg { font-size: 28px; }
.g-ui-icon-size-xl { font-size: 36px; }
.g-ui-icon-color-primary { color: var(--g-ui-primary); }
.g-ui-icon-color-success { color: var(--g-ui-green-500); }
.g-ui-icon-color-warning { color: var(--g-ui-yellow-500); }
.g-ui-icon-color-error { color: var(--g-ui-red-500); }
.g-ui-icon-color-muted { color: var(--g-ui-fg-muted); }
.g-ui-avatar-img { width: 100%; height: 100%; object-fit: cover; }

.g-ui-kbd {
  display: inline-flex;
  align-items: center;
  padding: var(--g-ui-space-2) var(--g-ui-space-6);
  border-radius: 6px;
  border: 1px solid var(--g-ui-border-muted);
  border-bottom-width: 3px;
  background: var(--g-ui-bg-muted);
  font-size: 12px;
  color: var(--g-ui-text);
}

.g-ui-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  background: var(--g-ui-bg-muted);
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  padding: var(--g-ui-space-2) var(--g-ui-space-6);
  font-size: 11px;
  color: var(--g-ui-text);
}

.g-ui-blockquote {
  border-left: 5px solid var(--g-ui-primary);
  padding: var(--g-ui-space-24) var(--g-ui-space-38);
  background: var(--g-ui-bg-muted);
  color: var(--g-ui-text);
  border-radius: 4px;
}

.g-ui-grid {
  display: grid;
}
.g-ui-grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.g-ui-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.g-ui-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.g-ui-grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.g-ui-grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.g-ui-grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }

.g-ui-list {
  margin: 0;
  color: var(--g-ui-text);
  list-style: none;
  padding-left: 0;
}
.g-ui-list-item {
  list-style: none;
  padding: var(--g-ui-space-6) 0;
}
.g-ui-list-item-border {
  border-bottom: 1px solid var(--g-ui-border-muted);
}
.g-ui-list-item-section {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}
.g-ui-list-item-shell {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-10);
  grid-column: 2;
  flex-wrap: wrap;
}
.g-ui-list-item-content {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-2);
  flex: 1;
}
.g-ui-list-item-title {
  font-weight: 600;
}
.g-ui-list-item-body {
  color: var(--g-ui-muted);
}
.g-ui-list-unordered { padding-left: 0; }
.g-ui-list-ordered { padding-left: 0; counter-reset: g-ui-list; }
.g-ui-list-none { padding-left: 0; }
.g-ui-list-unordered > li,
.g-ui-list-ordered > li {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: var(--g-ui-space-8);
  align-items: center;
}
.g-ui-list-ordered > li:not(.g-ui-list-nested-item) { counter-increment: g-ui-list; }
.g-ui-list-unordered > li:not(.g-ui-list-nested-item)::before,
.g-ui-list-ordered > li:not(.g-ui-list-nested-item)::before {
  grid-column: 1;
  align-self: flex-start;
  justify-self: end;
  color: currentColor;
  position: relative;
  left: 3px;
}
.g-ui-list-unordered > li:not(.g-ui-list-nested-item)::before {
  content: '•';
}
.g-ui-list-ordered > li:not(.g-ui-list-nested-item)::before {
  content: counters(g-ui-list, '.') '.';
}
.g-ui-list-nested-item {
  list-style: none;
  padding-left: 0;
  grid-template-columns: 1fr;
  column-gap: 0;
}
.g-ui-list-nested-item::before {
  content: none;
}
.g-ui-list-unordered > li > :not(.g-ui-list-item-shell),
.g-ui-list-ordered > li > :not(.g-ui-list-item-shell) {
  grid-column: 2;
}
.g-ui-list > li > .g-ui-list {
  grid-column: 2;
  margin-top: var(--g-ui-space-6);
}
.g-ui-list-item-shell > .g-ui-list {
  flex-basis: 100%;
  margin-left: 0;
}
.g-ui-list .g-ui-list {
  margin-left: var(--g-ui-space-12);
}
.g-ui-list .g-ui-list-unordered,
.g-ui-list .g-ui-list-ordered {
  padding-left: 0;
}
.g-ui-list-with-padding { padding-left: var(--g-ui-space-36); }
.g-ui-list-size-xs { font-size: 12px; line-height: 1.4; }
.g-ui-list-size-sm { font-size: 13px; line-height: 1.45; }
.g-ui-list-size-md { font-size: 14px; line-height: 1.5; }
.g-ui-list-size-lg { font-size: 16px; line-height: 1.6; }
.g-ui-list-size-xl { font-size: 18px; line-height: 1.65; }

.g-ui-anchor {
  color: var(--g-ui-primary);
  text-decoration: none;
}
.g-ui-anchor:hover { text-decoration: underline; }

.g-ui-image {
  max-width: 100%;
  border-radius: var(--g-ui-radius);
}

.g-ui-progress {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: var(--g-ui-bg-muted);
  border: 0;
  overflow: hidden;
}
.g-ui-progress-bar {
  height: 100%;
  background: var(--g-ui-primary);
}
.g-ui-progress-size-xs { height: 3px; }
.g-ui-progress-size-sm { height: 5px; }
.g-ui-progress-size-md { height: 8px; }
.g-ui-progress-size-lg { height: 12px; }
.g-ui-progress-size-xl { height: 16px; }
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
  --g-ui-slider-size: 8px;
  /* height: calc(var(--g-ui-slider-size) * 2); */
  padding: 0 var(--g-ui-space-10);
  /* display: flex; */
  /* align-items: center; */
  position: relative;
}
.g-ui-range-slider {
  width: 100%;
  --g-ui-slider-size: 8px;
  /*height: calc(var(--g-ui-slider-size) * 2);*/
  padding: 0 var(--g-ui-slider-size);
  /*display: flex;*/
  /*align-items: center;*/
  position: relative;
}
.g-ui-slider-track {
  position: relative;
  width: 100%;
  height: var(--g-ui-slider-size);
  border-radius: 999px;
  background: var(--g-ui-bg-emphasized);
}
.g-ui-slider-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--g-ui-primary);
  border-radius: 999px;
}
.g-ui-slider-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--g-ui-slider-size) * 2);
  height: calc(var(--g-ui-slider-size) * 2);
  border-radius: 50%;
  background: var(--g-ui-surface);
  border: 4px solid var(--g-ui-primary);
  cursor: pointer;
}
.g-ui-slider-marks {
  position: absolute;
  top: calc(100% - var(--g-ui-space-8));
  left:10px;
  right:15px;
  height: 12px;
  box-sizing: border-box;
  padding: 0 var(--g-ui-slider-size);
}
.g-ui-slider-marks-placeholder {
  height: 18px;
}
.g-ui-slider-mark {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
}
.g-ui-slider-mark-label {
  font-size: 11px;
  color: var(--g-ui-muted);
}

.g-ui-slider-disabled .g-ui-slider-track { background: var(--g-ui-border); }
.g-ui-slider-disabled .g-ui-slider-bar { background: var(--g-ui-border-emphasized); }
.g-ui-slider-disabled .g-ui-slider-thumb { cursor: not-allowed; opacity: 0.6; }
.g-ui-slider-size-xs { --g-ui-slider-size: 4px; }
.g-ui-slider-size-sm { --g-ui-slider-size: 6px; }
.g-ui-slider-size-md { --g-ui-slider-size: 8px; }
.g-ui-slider-size-lg { --g-ui-slider-size: 10px; }
.g-ui-slider-size-xl { --g-ui-slider-size: 12px; }

.g-ui-skeleton {
  background: var(--g-ui-border-muted);
  animation: g-ui-skeleton-fade 1.5s ease-in-out infinite;
  border-radius: 4px;
}
@keyframes g-ui-skeleton-fade { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

.g-ui-chip {
  display: inline-flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 999px;
  cursor: pointer;
  background: transparent;
  color: var(--g-ui-text);
}
.g-ui-chip-size-xs { font-size: 12px; height: 20px; padding: 0 var(--g-ui-space-6); }
.g-ui-chip-size-sm { font-size: 13px; height: 21px; padding: 0 var(--g-ui-space-5); }
.g-ui-chip-size-md { font-size: 14px; height: 22px; padding: 0 var(--g-ui-space-6); }
.g-ui-chip-size-lg { font-size: 15px; height: 23px; padding: 0 var(--g-ui-space-7); }
.g-ui-chip-size-xl { font-size: 16px; height: 24px; padding: 0 var(--g-ui-space-8); }

.g-ui-chip-color-primary.g-ui-chip-variant-filled { background: var(--g-ui-bg-muted); color: var(--g-ui-text); border-color: transparent; }
.g-ui-chip-color-primary.g-ui-chip-variant-light { background: var(--g-ui-primary-subtle); color: var(--g-ui-primary); border: 1px solid var(--g-ui-primary-muted); }
.g-ui-chip-color-primary.g-ui-chip-variant-outline { background: var(--g-ui-surface); color: var(--g-ui-text); border-color: var(--g-ui-border); }
.g-ui-chip-color-primary.g-ui-chip-variant-filled:hover { background: var(--g-ui-bg-muted-hover, var(--g-ui-bg-muted)); }
.g-ui-chip-color-primary.g-ui-chip-variant-light:hover { background: var(--g-ui-primary-muted); }
.g-ui-chip-color-primary.g-ui-chip-variant-outline:hover { border-color: var(--g-ui-primary); color: var(--g-ui-primary); }
.g-ui-chip-color-primary.g-ui-chip-variant-filled.g-ui-chip-active,
.g-ui-chip-color-primary.g-ui-chip-variant-light.g-ui-chip-active,
.g-ui-chip-color-primary.g-ui-chip-variant-outline.g-ui-chip-active { background: var(--g-ui-primary); color: var(--g-ui-primary-fg); border-color: transparent; }

.g-ui-chip-color-success.g-ui-chip-variant-filled { background: var(--g-ui-bg-muted); color: var(--g-ui-text); border-color: transparent; }
.g-ui-chip-color-success.g-ui-chip-variant-light { background: var(--g-ui-success-subtle); color: var(--g-ui-success); border: 1px solid var(--g-ui-success-muted); }
.g-ui-chip-color-success.g-ui-chip-variant-outline { background: var(--g-ui-surface); color: var(--g-ui-text); border-color: var(--g-ui-border); }
.g-ui-chip-color-success.g-ui-chip-variant-filled:hover { background: var(--g-ui-bg-muted-hover, var(--g-ui-bg-muted)); }
.g-ui-chip-color-success.g-ui-chip-variant-light:hover { background: var(--g-ui-success-muted); }
.g-ui-chip-color-success.g-ui-chip-variant-outline:hover { border-color: var(--g-ui-success); color: var(--g-ui-success); }
.g-ui-chip-color-success.g-ui-chip-variant-filled.g-ui-chip-active,
.g-ui-chip-color-success.g-ui-chip-variant-light.g-ui-chip-active,
.g-ui-chip-color-success.g-ui-chip-variant-outline.g-ui-chip-active { background: var(--g-ui-success); color: var(--g-ui-success-fg); border-color: transparent; }

.g-ui-chip-color-warning.g-ui-chip-variant-filled { background: var(--g-ui-bg-muted); color: var(--g-ui-text); border-color: transparent; }
.g-ui-chip-color-warning.g-ui-chip-variant-light { background: var(--g-ui-warning-subtle); color: var(--g-ui-warning); border: 1px solid var(--g-ui-warning-muted); }
.g-ui-chip-color-warning.g-ui-chip-variant-outline { background: var(--g-ui-surface); color: var(--g-ui-text); border-color: var(--g-ui-border); }
.g-ui-chip-color-warning.g-ui-chip-variant-filled:hover { background: var(--g-ui-bg-muted-hover, var(--g-ui-bg-muted)); }
.g-ui-chip-color-warning.g-ui-chip-variant-light:hover { background: var(--g-ui-warning-muted); }
.g-ui-chip-color-warning.g-ui-chip-variant-outline:hover { border-color: var(--g-ui-warning); color: var(--g-ui-warning); }
.g-ui-chip-color-warning.g-ui-chip-variant-filled.g-ui-chip-active,
.g-ui-chip-color-warning.g-ui-chip-variant-light.g-ui-chip-active,
.g-ui-chip-color-warning.g-ui-chip-variant-outline.g-ui-chip-active { background: var(--g-ui-warning); color: var(--g-ui-warning-fg); border-color: transparent; }

.g-ui-chip-color-danger.g-ui-chip-variant-filled { background: var(--g-ui-bg-muted); color: var(--g-ui-text); border-color: transparent; }
.g-ui-chip-color-danger.g-ui-chip-variant-light { background: var(--g-ui-danger-subtle); color: var(--g-ui-danger); border: 1px solid var(--g-ui-danger-muted); }
.g-ui-chip-color-danger.g-ui-chip-variant-outline { background: var(--g-ui-surface); color: var(--g-ui-text); border-color: var(--g-ui-border); }
.g-ui-chip-color-danger.g-ui-chip-variant-filled:hover { background: var(--g-ui-bg-muted-hover, var(--g-ui-bg-muted)); }
.g-ui-chip-color-danger.g-ui-chip-variant-light:hover { background: var(--g-ui-danger-muted); }
.g-ui-chip-color-danger.g-ui-chip-variant-outline:hover { border-color: var(--g-ui-danger); color: var(--g-ui-danger); }
.g-ui-chip-color-danger.g-ui-chip-variant-filled.g-ui-chip-active,
.g-ui-chip-color-danger.g-ui-chip-variant-light.g-ui-chip-active,
.g-ui-chip-color-danger.g-ui-chip-variant-outline.g-ui-chip-active { background: var(--g-ui-danger); color: var(--g-ui-danger-fg); border-color: transparent; }

.g-ui-chip-color-info.g-ui-chip-variant-filled { background: var(--g-ui-bg-muted); color: var(--g-ui-text); border-color: transparent; }
.g-ui-chip-color-info.g-ui-chip-variant-light { background: var(--g-ui-info-subtle); color: var(--g-ui-info); border: 1px solid var(--g-ui-info-muted); }
.g-ui-chip-color-info.g-ui-chip-variant-outline { background: var(--g-ui-surface); color: var(--g-ui-text); border-color: var(--g-ui-border); }
.g-ui-chip-color-info.g-ui-chip-variant-filled:hover { background: var(--g-ui-bg-muted-hover, var(--g-ui-bg-muted)); }
.g-ui-chip-color-info.g-ui-chip-variant-light:hover { background: var(--g-ui-info-muted); }
.g-ui-chip-color-info.g-ui-chip-variant-outline:hover { border-color: var(--g-ui-info); color: var(--g-ui-info); }
.g-ui-chip-color-info.g-ui-chip-variant-filled.g-ui-chip-active,
.g-ui-chip-color-info.g-ui-chip-variant-light.g-ui-chip-active,
.g-ui-chip-color-info.g-ui-chip-variant-outline.g-ui-chip-active { background: var(--g-ui-info); color: var(--g-ui-info-fg); border-color: transparent; }


















.g-ui-segmented {
  display: inline-flex;
  border-radius: 10px;
  overflow: hidden;
  padding: var(--g-ui-space-4);
  background: var(--g-ui-bg);
  gap: var(--g-ui-space-4);
}
.g-ui-segmented-item {
  padding: var(--g-ui-space-4) var(--g-ui-space-14);
  cursor: pointer;
  background: transparent;
  color: var(--g-ui-text);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease;
}
.g-ui-segmented-active {
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
}
.g-ui-segmented-size-xs .g-ui-segmented-item { height: 24px ;padding: var(--g-ui-space-2) var(--g-ui-space-6); font-size: 12px; }
.g-ui-segmented-size-sm .g-ui-segmented-item { height: 30px ;padding: var(--g-ui-space-3) var(--g-ui-space-10); font-size: 13px; }
.g-ui-segmented-size-md .g-ui-segmented-item { height: 36px ;padding: var(--g-ui-space-4) var(--g-ui-space-14); font-size: 14px; }
.g-ui-segmented-size-lg .g-ui-segmented-item { height: 42px ;padding: var(--g-ui-space-7) var(--g-ui-space-16); font-size: 15px; }
.g-ui-segmented-size-xl .g-ui-segmented-item { height: 48px ;padding: var(--g-ui-space-10) var(--g-ui-space-20); font-size: 16px; }

.g-ui-pagination {
  display: inline-flex;
  gap: var(--g-ui-space-6);
  align-items: center;
}
.g-ui-pagination-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border-muted);
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
  cursor: pointer;
  font-size: 14px;
}
.g-ui-pagination-item .g-ui-icon,
.g-ui-pagination-item .g-ui-icon svg {
  fill: currentColor;
}
.g-ui-pagination-item-active {
  background: var(--g-ui-primary);
  border-color: var(--g-ui-primary);
  color: var(--g-ui-primary-fg);
}
.g-ui-pagination-item.g-ui-pagination-item-active:hover{
  background: var(--g-ui-primary-hover);
  border-color: var(--g-ui-primary-hover);
  color: var(--g-ui-primary-fg);
}
.g-ui-pagination-item:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-pagination-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: var(--g-ui-text-muted);
  font-size: 14px;
  user-select: none;
}
.g-ui-pagination-size-xs .g-ui-pagination-item,
.g-ui-pagination-size-xs .g-ui-pagination-ellipsis { min-width: 22px; height: 22px; font-size: 12px; }
.g-ui-pagination-size-sm .g-ui-pagination-item,
.g-ui-pagination-size-sm .g-ui-pagination-ellipsis { min-width: 26px; height: 26px; font-size: 12px; }
.g-ui-pagination-size-md .g-ui-pagination-item,
.g-ui-pagination-size-md .g-ui-pagination-ellipsis { min-width: 32px; height: 32px; font-size: 14px; }
.g-ui-pagination-size-lg .g-ui-pagination-item,
.g-ui-pagination-size-lg .g-ui-pagination-ellipsis { min-width: 38px; height: 38px; font-size: 15px; }
.g-ui-pagination-size-xl .g-ui-pagination-item,
.g-ui-pagination-size-xl .g-ui-pagination-ellipsis { min-width: 44px; height: 44px; font-size: 16px; }

.g-ui-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}
.g-ui-timeline[data-active-color="primary"] { --g-ui-timeline-active-color: var(--g-ui-primary); }
.g-ui-timeline[data-active-color="success"] { --g-ui-timeline-active-color: var(--g-ui-success); }
.g-ui-timeline[data-active-color="danger"] { --g-ui-timeline-active-color: var(--g-ui-danger); }
.g-ui-timeline[data-active-color="error"] { --g-ui-timeline-active-color: var(--g-ui-danger); }
.g-ui-timeline[data-active-color="warning"] { --g-ui-timeline-active-color: var(--g-ui-warning); }
.g-ui-timeline[data-active-color="info"] { --g-ui-timeline-active-color: var(--g-ui-info); }
.g-ui-timeline-track-segment {
  position: absolute;
  left: var(--g-ui-timeline-track-offset, 12px);
  width: var(--g-ui-timeline-line-width, 4px);
  background: var(--g-ui-border-muted);
  border-radius: 2px;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.g-ui-timeline-track-segment .g-ui-timeline-track-fill {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0%;
  min-height: 0;
  background: var(--g-ui-timeline-active-color, var(--g-ui-primary));
  border-radius: inherit;
  transition: height 0.25s ease;
  z-index: 1;
}
.g-ui-timeline-reverse .g-ui-timeline-track-fill {
  top: auto;
  bottom: 0;
}
.g-ui-timeline-align-right .g-ui-timeline-track-segment {
  left: auto;
  right: var(--g-ui-timeline-track-offset, 12px);
}
.g-ui-timeline-has-track .g-ui-timeline-item::before {
  display: none;
}
.g-ui-timeline-item {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: var(--g-ui-space-16);
  align-items: start;
  position: relative;
  padding-bottom: var(--g-ui-space-24);
  z-index: 1;
}
.g-ui-timeline-item .g-ui-timeline-dot {
  justify-self: center;
}
.g-ui-timeline-align-right {
  width: max-content;
  max-width: 100%;
}
.g-ui-timeline-align-right .g-ui-timeline-item {
  grid-template-columns: auto 28px;
  max-width: 100%;
}
.g-ui-timeline-align-right .g-ui-timeline-item .g-ui-timeline-dot {
  order: 2;
  justify-self: center;
}
.g-ui-timeline-align-right .g-ui-timeline-item .g-ui-timeline-content {
  order: 1;
  justify-self: end;
  text-align: right;
  min-width: 0;
}
.g-ui-timeline-align-right .g-ui-timeline-item::before {
  left: auto;
  right: var(--g-ui-timeline-track-offset, 12px);
}
.g-ui-timeline-item:last-child {
  padding-bottom: 0;
}
.g-ui-timeline-item::before {
  content: '';
  position: absolute;
  left: var(--g-ui-timeline-track-offset, 12px);
  top: var(--g-ui-timeline-pin-half, 10px);
  bottom: 0;
  width: var(--g-ui-timeline-line-width, 4px);
  background: var(--g-ui-border-muted);
}
.g-ui-timeline-item:last-child::before {
  display: none;
}
.g-ui-dot-wrapper {
  
}
.g-ui-timeline-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--g-ui-bg);
  border: 4px solid var(--g-ui-border-muted);
  margin-top: 0;
  position: relative;
  z-index: 1;
  transition: border-color 0.2s ease, background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.g-ui-timeline-pin-size-xs .g-ui-timeline-dot { width: 12px; height: 12px; border-width: 2px; }
.g-ui-timeline-pin-size-sm .g-ui-timeline-dot { width: 16px; height: 16px; border-width: 3px; }
.g-ui-timeline-pin-size-md .g-ui-timeline-dot { width: 20px; height: 20px; border-width: 4px; }
.g-ui-timeline-pin-size-lg .g-ui-timeline-dot { width: 24px; height: 24px; border-width: 4px; }
.g-ui-timeline-pin-size-xl .g-ui-timeline-dot { width: 28px; height: 28px; border-width: 4px; }
.g-ui-timeline-line-width-xs .g-ui-timeline-track-segment { width: 2px; left: 13px; }
.g-ui-timeline-line-width-sm .g-ui-timeline-track-segment { width: 3px; }
.g-ui-timeline-line-width-md .g-ui-timeline-track-segment { width: 4px; }
.g-ui-timeline-line-width-lg .g-ui-timeline-track-segment { width: 6px; left: 11px; }
.g-ui-timeline-line-width-xl .g-ui-timeline-track-segment { width: 10px; left: 9px; }
.g-ui-timeline-pin-radius-xs .g-ui-timeline-dot { border-radius: 2px; }
.g-ui-timeline-pin-radius-sm .g-ui-timeline-dot { border-radius: 4px; }
.g-ui-timeline-pin-radius-md .g-ui-timeline-dot { border-radius: 50%; }
.g-ui-timeline-pin-radius-lg .g-ui-timeline-dot { border-radius: 50%; }
.g-ui-timeline-pin-radius-xl .g-ui-timeline-dot { border-radius: 50%; }
.g-ui-timeline-dot-inner {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: inherit;
  position: absolute;
  inset: 0;
}
.g-ui-timeline-pin-mode-icon .g-ui-timeline-dot,
.g-ui-timeline-pin-mode-image .g-ui-timeline-dot,
.g-ui-timeline-pin-mode-custom .g-ui-timeline-dot {
  display: flex;
  align-items: center;
  justify-content: center;
}
.g-ui-timeline-pin-mode-icon .g-ui-timeline-dot .g-ui-timeline-pin-icon,
.g-ui-timeline-pin-mode-image .g-ui-timeline-dot .g-ui-timeline-pin-image,
.g-ui-timeline-pin-mode-custom .g-ui-timeline-dot > *:not(.g-ui-timeline-dot-inner) {
  position: relative;
  z-index: 1;
}
.g-ui-timeline-pin-mode-icon .g-ui-timeline-dot .g-ui-timeline-pin-icon {
  font-size: 12px;
  line-height: 1;
  color: inherit;
}
.g-ui-timeline-pin-size-sm .g-ui-timeline-pin-mode-icon .g-ui-timeline-dot .g-ui-timeline-pin-icon { font-size: 10px; }
.g-ui-timeline-pin-size-lg .g-ui-timeline-dot .g-ui-timeline-pin-icon { font-size: 14px; }
.g-ui-timeline-pin-size-xl .g-ui-timeline-dot .g-ui-timeline-pin-icon { font-size: 16px; }
.g-ui-timeline-pin-mode-icon .g-ui-timeline-dot .g-ui-timeline-dot-inner,
.g-ui-timeline-pin-mode-image .g-ui-timeline-dot .g-ui-timeline-dot-inner,
.g-ui-timeline-pin-mode-custom .g-ui-timeline-dot .g-ui-timeline-dot-inner {
  display: none;
}
.g-ui-timeline-pin-mode-image .g-ui-timeline-dot .g-ui-timeline-pin-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
.g-ui-timeline-item-completed .g-ui-timeline-dot {
  border-color: var(--g-ui-timeline-active-color, var(--g-ui-primary));
  background: var(--g-ui-timeline-active-color, var(--g-ui-primary));
}
.g-ui-timeline-item-active .g-ui-timeline-dot {
  border-color: var(--g-ui-timeline-active-color, var(--g-ui-primary));
  background: var(--g-ui-bg);
  box-shadow: 0 0 0 2px var(--g-ui-bg), 0 0 0 4px var(--g-ui-timeline-active-color, var(--g-ui-primary));
}
.g-ui-timeline-item-future .g-ui-timeline-dot {
  border-color: var(--g-ui-border-muted);
  background: var(--g-ui-bg);
}
.g-ui-timeline-clickable .g-ui-timeline-item {
  cursor: pointer;
}
.g-ui-timeline-clickable .g-ui-timeline-item:hover .g-ui-timeline-dot {
  border-color: var(--g-ui-primary-muted, var(--g-ui-timeline-active-color));
}
.g-ui-timeline-content {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-4);
}
.g-ui-timeline-title { font-weight: 600; }
.g-ui-timeline-desc { color: var(--g-ui-muted); font-size: 13px; }

.g-ui-stepper {
  display: flex;
  gap: var(--g-ui-space-12);
  align-items: center;
}
.g-ui-stepper-item {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
}
.g-ui-stepper-index {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--g-ui-border-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  background: var(--g-ui-bg);
}
.g-ui-stepper-active .g-ui-stepper-index {
  background: var(--g-ui-primary-subtle);
  border-color: var(--g-ui-primary);
  color: var(--g-ui-primary);
}
.g-ui-stepper-label { font-size: 14px; font-weight: 500; }

.g-ui-rating {
  display: inline-flex;
  gap: var(--g-ui-space-2);
}
.g-ui-rating-item {
  cursor: pointer;
  color: var(--g-ui-border);
}
.g-ui-rating-item-active {
  color: var(--g-ui-primary);
}
.g-ui-rating-size-xs { font-size: 14px; }
.g-ui-rating-size-sm { font-size: 18px; }
.g-ui-rating-size-md { font-size: 20px; }
.g-ui-rating-size-lg { font-size: 28px; }
.g-ui-rating-size-xl { font-size: 32px; }

.g-ui-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-6);
  border: 1px solid var(--g-ui-border-muted);
  border-radius: 999px;
  padding: var(--g-ui-space-4) var(--g-ui-space-10);
  font-size: 12px;
  color: var(--g-ui-text);
  background: var(--g-ui-bg);
}


.g-ui-calendar {
  width: 100%;
  border: 1px solid var(--g-ui-border);
  border-radius: var(--g-ui-radius);
  background: var(--g-ui-bg-panel);
  padding: var(--g-ui-space-12);
}
.g-ui-calendar-header-block {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: var(--g-ui-space-10);
}
.g-ui-calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.g-ui-calendar-title-group {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-6);
}
.g-ui-calendar-title-button {
  border: 0;
  background: transparent;
  padding: var(--g-ui-space-2) var(--g-ui-space-6);
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  color: var(--g-ui-text);
  cursor: pointer;
}
.g-ui-calendar-title-button:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-calendar-title {
  font-weight: 500;
  font-size: 14px;
  color: var(--g-ui-text);
  padding: var(--g-ui-space-2) var(--g-ui-space-6);
}
.g-ui-calendar-picker {
  padding-top: var(--g-ui-space-8);
  margin-top: var(--g-ui-space-6);
  border-top: 1px solid var(--g-ui-border-muted);
}
.g-ui-calendar-picker-months {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--g-ui-space-4);
}
.g-ui-calendar-picker-years {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: var(--g-ui-space-4);
  overflow-x: auto;
  padding-bottom: var(--g-ui-space-4);
  scrollbar-gutter: stable;
}
.g-ui-calendar-picker-cell {
  border: 0;
  background: var(--g-ui-bg-subtle);
  border-radius: 6px;
  padding: var(--g-ui-space-6) var(--g-ui-space-8);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: var(--g-ui-text);
  white-space: nowrap;
  flex-shrink: 0;
}
.g-ui-calendar-picker-months .g-ui-calendar-picker-cell {
  flex-shrink: 1;
  white-space: normal;
  text-align: center;
}
.g-ui-calendar-picker-cell:hover {
  background: var(--g-ui-bg-muted);
}
.g-ui-calendar-picker-cell-active,
.g-ui-calendar-picker-year-active,
.g-ui-calendar-picker-year-active:hover {
  background: var(--g-ui-primary);
  color: var(--g-ui-primary-fg);
}
.g-ui-calendar-nav-icon svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}


.g-ui-calendar-size-xs { width: 220px; }
.g-ui-calendar-size-sm { width: 260px; }
.g-ui-calendar-size-md { width: 300px; }
.g-ui-calendar-size-lg { width: 370px; }
.g-ui-calendar-size-xl { width: 420px; }

.g-ui-calendar-size-xs .g-ui-calendar-grid { gap: var(--g-ui-space-2); }
.g-ui-calendar-size-sm .g-ui-calendar-grid { gap: var(--g-ui-space-4); }
.g-ui-calendar-size-md .g-ui-calendar-grid { gap: var(--g-ui-space-6); }
.g-ui-calendar-size-lg .g-ui-calendar-grid { gap: var(--g-ui-space-8); }
.g-ui-calendar-size-xl .g-ui-calendar-grid { gap: var(--g-ui-space-10); }

.g-ui-calendar-size-xs .g-ui-calendar-cell { width: 26px; height: 26px; font-size: 12px; }
.g-ui-calendar-size-sm .g-ui-calendar-cell { width: 30px; height: 30px; font-size: 13px; }
.g-ui-calendar-size-md .g-ui-calendar-cell { width: 34px; height: 34px; font-size: 14px; }
.g-ui-calendar-size-lg .g-ui-calendar-cell { width: 42px; height: 34px; font-size: 16px; }
.g-ui-calendar-size-xl .g-ui-calendar-cell { width: 48px; height: 38px; font-size: 18px; }


.g-ui-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--g-ui-space-6);
}
.g-ui-calendar-cell {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--g-ui-text);
}
.g-ui-calendar-cell:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-calendar-cell-muted {
  color: var(--g-ui-muted);
}
.g-ui-calendar-cell-active,
.g-ui-calendar-cell-active:hover {
  background: var(--g-ui-primary);
  color: var(--g-ui-primary-fg);
}

/* EventCalendar */
.g-ui-event-calendar {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 480px;
  background: var(--g-ui-bg);
  border: 1px solid var(--g-ui-border);
  border-radius: var(--g-ui-radius);
  overflow: hidden;
}
.g-ui-event-calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--g-ui-space-10);
  padding: var(--g-ui-space-12) var(--g-ui-space-16);
  border-bottom: 1px solid var(--g-ui-border);
  background: var(--g-ui-bg);
}
.g-ui-event-calendar-nav-group {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-4);
}
.g-ui-event-calendar-nav {
  border-radius: 8px;
}
.g-ui-event-calendar-today {
  margin-left: var(--g-ui-space-8);
}
.g-ui-event-calendar-today-icon {
  margin-right: var(--g-ui-space-6);
}
.g-ui-event-calendar-title {
  font-weight: 600;
  font-size: 18px;
  color: var(--g-ui-text);
  min-width: 200px;
  text-align: center;
}
.g-ui-event-calendar-actions {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
}
.g-ui-event-calendar-view-option {
  padding: var(--g-ui-space-6) var(--g-ui-space-12);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--g-ui-text);
  cursor: pointer;
  background: transparent;
  border: 1px solid transparent;
}
.g-ui-event-calendar-view-option:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-event-calendar-view-option-active {
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
}
.g-ui-event-calendar-create-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-6);
}
.g-ui-event-calendar-month {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.g-ui-event-calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: var(--g-ui-space-8) var(--g-ui-space-16);
  border-bottom: 1px solid var(--g-ui-border);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--g-ui-muted);
}
.g-ui-event-calendar-weekday {
  text-align: center;
}
.g-ui-event-calendar-month-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(100px, 1fr);
  gap: 1px;
  padding: var(--g-ui-space-8);
  background: var(--g-ui-border);
  overflow: auto;
}
.g-ui-event-calendar-month-cell {
  background: var(--g-ui-bg);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: var(--g-ui-space-4);
}
.g-ui-event-calendar-month-cell-outside {
  background: var(--g-ui-bg-subtle);
}
.g-ui-event-calendar-month-cell-today {
  background: var(--g-ui-primary-subtle);
}
.g-ui-event-calendar-month-cell-header {
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--g-ui-text);
  cursor: pointer;
  padding: var(--g-ui-space-2) 0;
  border-radius: 4px;
  margin: -2px 0;
}
.g-ui-event-calendar-month-cell-header:hover {
  background: var(--g-ui-bg-muted);
}
.g-ui-event-calendar-month-cell-events {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 0;
  overflow: hidden;
}
.g-ui-event-calendar-month-event {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  border-left: 3px solid var(--g-ui-primary);
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-text);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.g-ui-event-calendar-month-event:hover {
  opacity: 0.9;
}
.g-ui-event-calendar-month-more {
  font-size: 11px;
  color: var(--g-ui-primary);
  cursor: pointer;
  padding: 2px 4px;
  margin-top: 2px;
}
.g-ui-event-calendar-month-more:hover {
  text-decoration: underline;
}
.g-ui-event-calendar-week {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: auto;
}
.g-ui-event-calendar-week-days {
  display: grid;
  grid-template-columns: 60px repeat(7, 1fr);
  border-bottom: 1px solid var(--g-ui-border);
  background: var(--g-ui-bg);
}
.g-ui-event-calendar-week-day-col {
  padding: var(--g-ui-space-8);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--g-ui-text);
}
.g-ui-event-calendar-week-time-col {
  width: 60px;
  flex-shrink: 0;
  font-size: 11px;
  color: var(--g-ui-muted);
  padding: var(--g-ui-space-4);
}
.g-ui-event-calendar-week-body {
  display: flex;
  flex: 1;
  min-height: 400px;
}
.g-ui-event-calendar-week-body .g-ui-event-calendar-week-time-col {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.g-ui-event-calendar-week-slot-label {
  height: 48px;
  font-size: 10px;
  color: var(--g-ui-muted);
  display: flex;
  align-items: flex-start;
  padding-top: 2px;
}
.g-ui-event-calendar-week-grid-cols {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  flex: 1;
  position: relative;
  border-left: 1px solid var(--g-ui-border);
}
.g-ui-event-calendar-week-day-col-body {
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--g-ui-border);
}
.g-ui-event-calendar-week-slot {
  height: 48px;
  border-bottom: 1px solid var(--g-ui-border-muted);
  cursor: pointer;
}
.g-ui-event-calendar-week-slot:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-event-calendar-week-event {
  position: absolute;
  left: 2px;
  right: 2px;
  border-left: 3px solid var(--g-ui-primary);
  background: var(--g-ui-primary-subtle);
  border-radius: 4px;
  padding: 4px 6px;
  overflow: hidden;
  cursor: pointer;
  font-size: 12px;
  color: var(--g-ui-text);
  pointer-events: auto;
}
.g-ui-event-calendar-week-event:hover {
  opacity: 0.95;
}
.g-ui-event-calendar-week-event-title {
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.g-ui-event-calendar-week-event-time {
  font-size: 10px;
  color: var(--g-ui-muted);
  display: block;
}
.g-ui-event-calendar-day {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: auto;
}
.g-ui-event-calendar-day-body {
  display: flex;
  flex: 1;
  min-height: 400px;
}
.g-ui-event-calendar-day-time-col {
  width: 60px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  color: var(--g-ui-muted);
  padding: var(--g-ui-space-4);
  border-right: 1px solid var(--g-ui-border);
}
.g-ui-event-calendar-day-slot-label {
  height: 48px;
  display: flex;
  align-items: flex-start;
  padding-top: 2px;
}
.g-ui-event-calendar-day-slots {
  flex: 1;
  position: relative;
  border-left: 1px solid var(--g-ui-border);
}
.g-ui-event-calendar-day-slot {
  height: 48px;
  border-bottom: 1px solid var(--g-ui-border-muted);
  cursor: pointer;
}
.g-ui-event-calendar-day-slot:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-event-calendar-day-event {
  position: absolute;
  left: 4px;
  right: 4px;
  border-left: 3px solid var(--g-ui-primary);
  background: var(--g-ui-primary-subtle);
  border-radius: 4px;
  padding: 6px 8px;
  overflow: hidden;
  cursor: pointer;
  font-size: 13px;
  color: var(--g-ui-text);
}
.g-ui-event-calendar-day-event:hover {
  opacity: 0.95;
}
.g-ui-event-calendar-day-event-title {
  font-weight: 500;
}
.g-ui-event-calendar-day-event-time {
  font-size: 11px;
  color: var(--g-ui-muted);
  display: block;
}
.g-ui-event-calendar-form {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-12);
}
.g-ui-event-calendar-form-row {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-6);
}
.g-ui-event-calendar-form-row-inline {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: var(--g-ui-space-12);
}
.g-ui-event-calendar-form-field {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-4);
  min-width: 140px;
}
.g-ui-event-calendar-form-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--g-ui-text);
}
.g-ui-event-calendar-form-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--g-ui-space-10);
  margin-top: var(--g-ui-space-8);
  padding-top: var(--g-ui-space-12);
  border-top: 1px solid var(--g-ui-border);
}
.g-ui-event-calendar-form-suggestions {
  max-height: 180px;
  overflow-y: auto;
  border: 1px solid var(--g-ui-border);
  border-radius: 8px;
  margin-top: var(--g-ui-space-4);
  background: var(--g-ui-bg);
}
.g-ui-event-calendar-form-suggestion-item {
  padding: var(--g-ui-space-10) var(--g-ui-space-12);
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid var(--g-ui-border-muted);
}
.g-ui-event-calendar-form-suggestion-item:last-child {
  border-bottom: 0;
}
.g-ui-event-calendar-form-suggestion-item:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-event-calendar-form-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--g-ui-space-6);
  margin-top: var(--g-ui-space-4);
}
.g-ui-event-calendar-form-chip {
  display: inline-flex;
  align-items: center;
  padding: var(--g-ui-space-4) var(--g-ui-space-8);
  border-radius: 6px;
  font-size: 13px;
  background: var(--g-ui-bg-muted);
  color: var(--g-ui-text);
}
.g-ui-event-calendar-form-chip-removable {
  cursor: pointer;
}
.g-ui-event-calendar-form-chip-removable:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-event-calendar-form-colors {
  display: flex;
  flex-wrap: wrap;
  gap: var(--g-ui-space-6);
  margin-top: var(--g-ui-space-4);
}
.g-ui-event-calendar-form-color-swatch {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
}
.g-ui-event-calendar-form-color-swatch:hover {
  transform: scale(1.1);
}
.g-ui-event-calendar-form-color-swatch-active {
  border-color: var(--g-ui-text);
  box-shadow: 0 0 0 2px var(--g-ui-bg);
}
.g-ui-event-calendar-view-modal {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-12);
}
.g-ui-event-calendar-view-modal-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--g-ui-text);
}
.g-ui-event-calendar-view-modal-meta {
  font-size: 14px;
  color: var(--g-ui-muted);
}
.g-ui-event-calendar-view-modal-date {
  display: block;
  margin-bottom: var(--g-ui-space-4);
}
.g-ui-event-calendar-view-modal-field {
  font-size: 14px;
  color: var(--g-ui-text);
  line-height: 1.5;
}
.g-ui-event-calendar-view-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--g-ui-space-10);
  margin-top: var(--g-ui-space-8);
  padding-top: var(--g-ui-space-12);
  border-top: 1px solid var(--g-ui-border);
}
.g-ui-event-calendar-view-modal-delete {
  color: var(--g-ui-danger);
}
.g-ui-event-calendar-view-modal-delete:hover {
  background: var(--g-ui-danger-subtle);
}

.g-ui-select-multi-root {
  position: relative;
  width: 100%;
}
.g-ui-select-multi-root .g-ui-input-wrapper {
  flex-wrap: wrap;
  align-items: center;
  gap: var(--g-ui-space-6);
}
.g-ui-select-multi-not-searchable .g-ui-input-wrapper {
  cursor: pointer;
}
.g-ui-select-multi-root .g-ui-input-size-xs { height: auto; min-height: 30px; padding: var(--g-ui-space-5) var(--g-ui-space-10); }
.g-ui-select-multi-root .g-ui-input-size-sm { height: auto; min-height: 36px; padding: var(--g-ui-space-6) var(--g-ui-space-12); }
.g-ui-select-multi-root .g-ui-input-size-md { height: auto; min-height: 42px; padding: var(--g-ui-space-8) var(--g-ui-space-14); }
.g-ui-select-multi-root .g-ui-input-size-lg { height: auto; min-height: 50px; padding: var(--g-ui-space-10) var(--g-ui-space-16); }
.g-ui-select-multi-root .g-ui-input-size-xl { height: auto; min-height: 60px; padding: var(--g-ui-space-13) var(--g-ui-space-20); }
.g-ui-select-multi-placeholder {
  color: var(--g-ui-muted);
}
.g-ui-select-multi-input {
  border: 0;
  background: transparent;
  color: var(--g-ui-text);
  min-width: 120px;
  flex: 1;
  position: absolute;
}
.g-ui-select-multi-input:focus {
  outline: none;
}
.g-ui-select-tag {
  border: 1px solid var(--g-ui-border);
  border-radius: 999px;
  padding: var(--g-ui-space-2) var(--g-ui-space-8);
  color: var(--g-ui-text);
}
.g-ui-select-multi-root .g-ui-input-size-xs .g-ui-select-tag { font-size: 11px; }
.g-ui-select-multi-root .g-ui-input-size-sm .g-ui-select-tag { font-size: 12px; }
.g-ui-select-multi-root .g-ui-input-size-md .g-ui-select-tag { font-size: 13px; }
.g-ui-select-multi-root .g-ui-input-size-lg .g-ui-select-tag { font-size: 14px; }
.g-ui-select-multi-root .g-ui-input-size-xl .g-ui-select-tag { font-size: 15px; }
.g-ui-select-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-6);
}
.g-ui-select-tag-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.g-ui-select-tag-remove svg {
  width: 12px;
  height: 12px;
  fill: currentColor;
}
.g-ui-select-item-check {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--g-ui-primary);
  line-height: 0;
}
.g-ui-select-item-check svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}
.g-ui-select-item-label {
  line-height: 1.4;
}

.g-ui-toast-stack {
  position: fixed;
  right: var(--g-ui-space-20);
  top: var(--g-ui-space-20);
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-12);
  z-index: 1001;
}
.g-ui-toast {
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  padding: var(--g-ui-space-10) var(--g-ui-space-12);
  background: var(--g-ui-bg);
  min-width: 220px;
  box-shadow: var(--g-ui-shadow-sm);
}
.g-ui-toast-title { font-weight: 600; }


.g-ui-drawer-shadowed {
  box-shadow: var(--g-ui-shadow);
}

.g-ui-notifications {
  position: fixed;
  right: var(--g-ui-space-20);
  top: var(--g-ui-space-20);
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-10);
  z-index: 1001;
}
.g-ui-notifications-position-top-left { top: var(--g-ui-space-20); left: var(--g-ui-space-20); right: auto; }
.g-ui-notifications-position-top-center { top: var(--g-ui-space-20); left: 50%; right: auto; transform: translateX(-50%); }
.g-ui-notifications-position-top-right { top: var(--g-ui-space-20); right: var(--g-ui-space-20); left: auto; }
.g-ui-notifications-position-bottom-left { bottom: var(--g-ui-space-20); left: var(--g-ui-space-20); right: auto; top: auto; flex-direction: column-reverse; }
.g-ui-notifications-position-bottom-center { bottom: var(--g-ui-space-20); left: 50%; right: auto; top: auto; transform: translateX(-50%); flex-direction: column-reverse; }
.g-ui-notifications-position-bottom-right { bottom: var(--g-ui-space-20); right: var(--g-ui-space-20); left: auto; top: auto; flex-direction: column-reverse; }

.g-ui-range {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--g-ui-space-10);
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
  top: calc(100% + var(--g-ui-space-8));
  left: 0;
  min-width: 220px;
  background: var(--g-ui-bg);
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  box-shadow: var(--g-ui-shadow-sm);
  padding: var(--g-ui-space-12) var(--g-ui-space-16);
  z-index: 50;
}
.g-ui-popper-dropdown-top {
  top: auto;
  bottom: calc(100% + var(--g-ui-space-8));
}

.g-ui-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-6);
  border-radius: 999px;
  border: 1px solid var(--g-ui-border);
  padding: var(--g-ui-space-4) var(--g-ui-space-10);
  font-size: 12px;
}

.g-ui-pagination-compact .g-ui-pagination-item {
  min-width: 26px;
  height: 26px;
  font-size: 12px;
}


.g-ui-password-toggle {
  border: 0;
  background: transparent;
  color: var(--g-ui-muted);
  cursor: pointer;
  font-size: 12px;
}

.g-ui-copy-button {
  border: 1px solid var(--g-ui-border-muted);
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
  border-radius: 8px;
  padding: var(--g-ui-space-6) var(--g-ui-space-10);
  cursor: pointer;
  font-size: 12px;
}
.g-ui-copy-button:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-copy-button-done {
  color: var(--g-ui-success);
  border-color: rgba(18,184,134,0.5);
}

.g-ui-progress-ring {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
}
.g-ui-progress-ring-hole {
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  background: var(--g-ui-bg-panel);
}
.g-ui-progress-ring-primary { --g-ui-progress-ring-fill: var(--g-ui-primary); }
.g-ui-progress-ring-success { --g-ui-progress-ring-fill: var(--g-ui-success); }
.g-ui-progress-ring-danger { --g-ui-progress-ring-fill: var(--g-ui-danger); }
.g-ui-progress-ring-warning { --g-ui-progress-ring-fill: var(--g-ui-warning); }
.g-ui-progress-ring:not(.g-ui-progress-ring-indeterminate) {
  background: conic-gradient(
    var(--g-ui-progress-ring-fill, var(--g-ui-primary)) 0deg calc(var(--g-ui-progress-ring-value, 0) * 3.6deg),
    var(--g-ui-border-muted) calc(var(--g-ui-progress-ring-value, 0) * 3.6deg) 360deg
  );
}
.g-ui-progress-ring-indeterminate {
  border: 4px solid var(--g-ui-border-muted);
  border-top-color: var(--g-ui-progress-ring-fill, var(--g-ui-primary));
  animation: g-ui-spin 1s linear infinite;
}
.g-ui-progress-ring-indeterminate .g-ui-progress-ring-hole {
  inset: 4px;
}
.g-ui-progress-ring-size-sm { width: 32px; height: 32px; }
.g-ui-progress-ring-size-sm .g-ui-progress-ring-hole { inset: 6px; }
.g-ui-progress-ring-size-sm.g-ui-progress-ring-indeterminate .g-ui-progress-ring-hole { inset: 3px; }
.g-ui-progress-ring-size-md { width: 48px; height: 48px; }
.g-ui-progress-ring-size-lg { width: 64px; height: 64px; }
.g-ui-progress-ring-size-lg .g-ui-progress-ring-hole { inset: 10px; }
.g-ui-progress-ring-size-lg.g-ui-progress-ring-indeterminate .g-ui-progress-ring-hole { inset: 5px; }

.g-ui-toast-close {
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--g-ui-muted);
  cursor: pointer;
}
.g-ui-toast-close svg {
  width: 16px;
  height: 16px;
  fill: var(--g-ui-muted);
}

.g-ui-toast-row {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
}

.g-ui-autocomplete {
  position: relative;
  width: 100%;
}
.g-ui-autocomplete-dropdown {
  position: absolute;
  top: calc(100% + var(--g-ui-space-4));
  left: 0;
  right: 0;
  z-index: 100;
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  background: var(--g-ui-bg-panel);
  box-shadow: var(--g-ui-shadow-md);
}
.g-ui-autocomplete-dropdown-top {
  top: auto;
  bottom: calc(100% + var(--g-ui-space-4));
}
.g-ui-autocomplete-list {
  overflow: auto;
  padding: var(--g-ui-space-4);
}
.g-ui-autocomplete-item {
  padding: var(--g-ui-space-6) var(--g-ui-space-8);
  border-radius: var(--g-ui-radius);
  cursor: pointer;
  font-size: var(--g-ui-font-size-sm);
}
.g-ui-autocomplete-item:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-autocomplete-item-active {
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
}
.g-ui-autocomplete-disabled {
  pointer-events: none;
  opacity: 0.7;
}

.g-ui-select-search {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-8);
}
.g-ui-input-size-sm .g-ui-search-input-left-section { width: 16px; height: 16px; }
.g-ui-input-size-md .g-ui-search-input-left-section { width: 20px; height: 20px; }
.g-ui-input-size-lg .g-ui-search-input-left-section { width: 24px; height: 24px; }
.g-ui-input-size-xl .g-ui-search-input-left-section { width: 28px; height: 28px; }
.g-ui-search-input-left-section {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--g-ui-muted);
  font-size: 16px;
  fill: var(--g-ui-muted);
}
.g-ui-search-input-left-section svg {
  width: 100%;
  height: 100%;
  fill: inherit;
}

.g-ui-select-search-input {
  width: 100%;
  border-radius: var(--g-ui-radius);
  border: 1px solid var(--g-ui-border-muted);
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
  padding: var(--g-ui-space-8) var(--g-ui-space-10);
}
.g-ui-select-search-list {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-6);
  max-height: 160px;
  overflow: auto;
}
.g-ui-select-search-item {
  padding: var(--g-ui-space-6) var(--g-ui-space-8);
  border-radius: 8px;
  cursor: pointer;
}
.g-ui-select-search-item:hover {
  background: var(--g-ui-bg-subtle);
}

.g-ui-switch-group {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-8);
}

.g-ui-segmented-scroll {
  overflow-x: auto;
  max-width: 100%;
}

.g-ui-range-picker {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--g-ui-space-8);
  align-items: center;
}
.g-ui-range-picker-separator {
  color: var(--g-ui-fg-muted);
  font-size: var(--g-ui-font-size-sm);
  line-height: 1;
  flex-shrink: 0;
}

.g-ui-toast-auto {
  border-color: var(--g-ui-primary);
}

.g-ui-flex {
  display: flex;
}
.g-ui-flex-column { flex-direction: column; }
.g-ui-flex-row { flex-direction: row; }
.g-ui-flex-wrap { flex-wrap: wrap; }

.g-ui-navlink-root {
  display: flex;
  flex-direction: column;
}
.g-ui-navlink {
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
  padding: var(--g-ui-space-8) var(--g-ui-space-12);
  border-radius: var(--g-ui-radius);
  color: var(--g-ui-text);
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}
.g-ui-navlink-body {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-2);
  flex: 1;
}
.g-ui-navlink-description {
  font-size: 12px;
  color: var(--g-ui-muted);
  font-weight: 400;
}
.g-ui-navlink-section {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.g-ui-navlink-variant-subtle:hover { background: var(--g-ui-bg-subtle); }
.g-ui-navlink-variant-light:hover { background: var(--g-ui-primary-muted); }
.g-ui-navlink-variant-filled:hover { background: var(--g-ui-primary-hover); color: var(--g-ui-primary-fg); }
.g-ui-navlink-active.g-ui-navlink-variant-subtle {
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
}
.g-ui-navlink-active.g-ui-navlink-variant-light {
  background: var(--g-ui-primary-muted);
  color: var(--g-ui-primary);
}
.g-ui-navlink-active.g-ui-navlink-variant-filled {
  background: var(--g-ui-primary);
  color: var(--g-ui-primary-fg);
}
.g-ui-navlink-disabled {
  opacity: 0.6;
  pointer-events: none;
}
.g-ui-navlink-children {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-4);
}
.g-ui-navlink-padding-none { padding: 0; }
.g-ui-navlink-padding-sm { padding: var(--g-ui-space-8); }
.g-ui-navlink-padding-md { padding: var(--g-ui-space-12); }
.g-ui-navlink-padding-lg { padding: var(--g-ui-space-16); }
.g-ui-navlink-padding-xl { padding: var(--g-ui-space-20); }
.g-ui-navlink-padding-h-sm { padding: var(--g-ui-space-8) var(--g-ui-space-8) ; }
.g-ui-navlink-padding-h-md { padding: var(--g-ui-space-8) var(--g-ui-space-12) ; }
.g-ui-navlink-padding-h-lg { padding: var(--g-ui-space-8) var(--g-ui-space-20) ; }
.g-ui-navlink-padding-h-xl { padding: var(--g-ui-space-8) var(--g-ui-space-24) ; }

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
  border: 2px solid var(--g-ui-bg);
}
.g-ui-indicator-size-xs .g-ui-indicator-badge { width: 6px; height: 6px; border-width: 1px; }
.g-ui-indicator-size-sm .g-ui-indicator-badge { width: 8px; height: 8px; border-width: 2px; }
.g-ui-indicator-size-md .g-ui-indicator-badge { width: 10px; height: 10px; border-width: 2px; }
.g-ui-indicator-size-lg .g-ui-indicator-badge { width: 12px; height: 12px; border-width: 2px; }
.g-ui-indicator-size-xl .g-ui-indicator-badge { width: 14px; height: 14px; border-width: 3px; }
.g-ui-indicator-position-top-right .g-ui-indicator-badge { top: -4px; right: -4px; bottom: auto; left: auto; }
.g-ui-indicator-position-top-left .g-ui-indicator-badge { top: -4px; left: -4px; bottom: auto; right: auto; }
.g-ui-indicator-position-bottom-right .g-ui-indicator-badge { bottom: -4px; right: -4px; top: auto; left: auto; }
.g-ui-indicator-position-bottom-left .g-ui-indicator-badge { bottom: -4px; left: -4px; top: auto; right: auto; }
.g-ui-indicator-color-danger .g-ui-indicator-badge { background: var(--g-ui-danger); }
.g-ui-indicator-color-success .g-ui-indicator-badge { background: var(--g-ui-success); }
.g-ui-indicator-color-warning .g-ui-indicator-badge { background: var(--g-ui-warning); }
.g-ui-indicator-color-info .g-ui-indicator-badge { background: var(--g-ui-info); }

.g-ui-burger {
  width: 28px;
  height: 28px;
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
.g-ui-burger span:nth-child(1) { top: 6px; }
.g-ui-burger span:nth-child(2) { top: 13px; }
.g-ui-burger span:nth-child(3) { top: 20px; }
.g-ui-burger-open span:nth-child(1) { top: 7px; transform: rotate(45deg); }
.g-ui-burger-open span:nth-child(2) { opacity: 0; }
.g-ui-burger-open span:nth-child(3) { top: 7px; transform: rotate(-45deg); }

.g-ui-loading-overlay {
  position: absolute;
  inset: 0;
  background: var(--g-ui-overlay-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.g-ui-grid-system {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
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
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  padding: 0;
}
.g-ui-scroll-area-sm { max-height: 120px; }
.g-ui-scroll-area-md { max-height: 200px; }
.g-ui-scroll-area-lg { max-height: 320px; }
.g-ui-scroll-area-auto { max-height: auto; }

.g-ui-pin-input {
  display: inline-flex;
  align-items: center;
  cursor: text;
  box-sizing: border-box;
}
.g-ui-pin-input-wrapper {
  display: flex;
  gap: var(--g-ui-space-8);
  box-sizing: border-box;
}
.g-ui-pin-input-field {
  width: 40px;
  height: 40px;
  padding: 0;
  text-align: center;
  font-size: var(--g-ui-font-md);
  font-weight: 500;
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.g-ui-pin-input-field::placeholder {
  color: var(--g-ui-muted);
  opacity: 0.5;
}
.g-ui-pin-input-field:focus {
  border-color: var(--g-ui-primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--g-ui-primary) 20%, transparent);
}
.g-ui-pin-input-field:disabled {
  background: var(--g-ui-bg-subtle);
  color: var(--g-ui-muted);
  cursor: not-allowed;
}
.g-ui-pin-input-error {
  border-color: var(--g-ui-danger);
}
.g-ui-pin-input-error:focus {
  border-color: var(--g-ui-danger);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--g-ui-danger) 20%, transparent);
}
.g-ui-pin-input.g-ui-input-size-xs .g-ui-pin-input-field { width: 28px; height: 28px; font-size: var(--g-ui-font-xs); }
.g-ui-pin-input.g-ui-input-size-sm .g-ui-pin-input-field { width: 34px; height: 34px; font-size: var(--g-ui-font-sm); }
.g-ui-pin-input.g-ui-input-size-md .g-ui-pin-input-field { width: 40px; height: 40px; font-size: var(--g-ui-font-md); }
.g-ui-pin-input.g-ui-input-size-lg .g-ui-pin-input-field { width: 48px; height: 48px; font-size: var(--g-ui-font-lg); }
.g-ui-pin-input.g-ui-input-size-xl .g-ui-pin-input-field { width: 56px; height: 56px; font-size: var(--g-ui-font-xl); }

.g-ui-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-8);
}

.g-ui-avatar-group {
  display: inline-flex;
  align-items: center;
}
.g-ui-avatar-group .g-ui-avatar {
  margin-left: calc(0px - var(--g-ui-space-8));
  border: 2px solid var(--g-ui-bg);
}
.g-ui-avatar-group .g-ui-avatar:first-child {
  margin-left: 0;
}

.g-ui-badge-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--g-ui-space-6);
}

.g-ui-radio {
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-6);
}
.g-ui-radio-control {
  display: inline-flex;
  align-items: center;
  gap: var(--g-ui-space-10);
  cursor: pointer;
}
.g-ui-radio-input {
  appearance: none;
  width: var(--g-ui-control-size, 16px);
  height: var(--g-ui-control-size, 16px);
  border-radius: 50%;
  border: 1px solid var(--g-ui-border);
  background: var(--g-ui-bg);
  position: relative;
  transition: background-color .12s ease, border-color .12s ease;
}
.g-ui-radio-input:focus-visible {
  outline: 2px solid var(--g-ui-primary);
  outline-offset: 2px;
}
.g-ui-radio-input:checked {
  border-color: var(--g-ui-primary);
}
.g-ui-radio-input:checked::after {
  content: '';
  position: absolute;
  width: var(--g-ui-control-inner-size, 8px);
  height: var(--g-ui-control-inner-size, 8px);
  border-radius: 50%;
  background: var(--g-ui-primary);
  top: var(--g-ui-control-inner-offset, 3px);
  left: var(--g-ui-control-inner-offset, 3px);
}
.g-ui-radio-label { font-size: 14px; }
.g-ui-radio-description { font-size: 12px; color: var(--g-ui-muted); }
.g-ui-radio-size-xs { --g-ui-control-size: 16px; --g-ui-control-inner-size: 6px; --g-ui-control-inner-offset: 4px; }
.g-ui-radio-size-sm { --g-ui-control-size: 20px; --g-ui-control-inner-size: 8px; --g-ui-control-inner-offset: 5px; }
.g-ui-radio-size-md { --g-ui-control-size: 24px; --g-ui-control-inner-size: 10px; --g-ui-control-inner-offset: 6px; }
.g-ui-radio-size-lg { --g-ui-control-size: 30px; --g-ui-control-inner-size: 14px; --g-ui-control-inner-offset: 7px; }
.g-ui-radio-size-xl { --g-ui-control-size: 36px; --g-ui-control-inner-size: 16px; --g-ui-control-inner-offset: 9px; }

.g-ui-breadcrumbs {
  display: inline-flex;
  gap: var(--g-ui-space-8);
  align-items: center;
  color: var(--g-ui-muted);
  font-size: 13px;
  flex-wrap: wrap;
}
.g-ui-breadcrumbs-separator { opacity: 0.6; }

.g-ui-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.g-ui-space { display: block; width: var(--g-ui-space-16); height: var(--g-ui-space-16); }
.g-ui-space-xs { width: var(--g-ui-space-8); height: var(--g-ui-space-8); }
.g-ui-space-sm { width: var(--g-ui-space-12); height: var(--g-ui-space-12); }
.g-ui-space-md { width: var(--g-ui-space-16); height: var(--g-ui-space-16); }
.g-ui-space-lg { width: var(--g-ui-space-24); height: var(--g-ui-space-24); }
.g-ui-space-xl { width: var(--g-ui-space-32); height: var(--g-ui-space-32); }

.g-ui-collapse-hidden { display: none; }

.g-ui-action-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: transparent;
  color: var(--g-ui-text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.g-ui-action-icon-size-xs { width: 18px; height: 18px; }
.g-ui-action-icon-size-sm { width: 22px; height: 22px; }
.g-ui-action-icon-size-md { width: 28px; height: 28px; }
.g-ui-action-icon-size-lg { width: 34px; height: 34px; }
.g-ui-action-icon-size-xl { width: 44px; height: 44px; }

.g-ui-action-icon-size-xs .g-ui-icon { font-size: 12px; }
.g-ui-action-icon-size-sm .g-ui-icon { font-size: 14px; }
.g-ui-action-icon-size-md .g-ui-icon { font-size: 16px; }
.g-ui-action-icon-size-lg .g-ui-icon { font-size: 20px; }
.g-ui-action-icon-size-xl .g-ui-icon { font-size: 24px; }

.g-ui-action-icon-filled {
  background: var(--g-ui-primary);
  border-color: transparent;
  color: var(--g-ui-primary-fg);
}
.g-ui-action-icon-subtle {
  background: transparent;
  border-color: var(--g-ui-border);
}
.g-ui-action-icon-light {
  background: var(--g-ui-primary-subtle);
  border-color: var(--g-ui-primary-muted);
  color: var(--g-ui-primary);
}
.g-ui-action-icon-outline {
  background: transparent;
  border-color: var(--g-ui-primary);
  color: var(--g-ui-primary);
}
.g-ui-action-icon-filled:hover { background: var(--g-ui-primary-hover); }
.g-ui-action-icon-light:hover { background: var(--g-ui-primary-muted); }
.g-ui-action-icon-outline:hover { background: var(--g-ui-primary-subtle); }
.g-ui-action-icon-subtle:hover { background: var(--g-ui-bg-muted); }



.g-ui-action-icon-color-primary.g-ui-action-icon-filled {
  background: var(--g-ui-primary);
  border-color: transparent;
  color: var(--g-ui-primary-fg);
}
.g-ui-action-icon-color-primary.g-ui-action-icon-subtle {
  background: transparent;
  border-color: var(--g-ui-border);
}
.g-ui-action-icon-color-primary.g-ui-action-icon-light {
  background: var(--g-ui-primary-subtle);
  border-color: var(--g-ui-primary-muted);
  color: var(--g-ui-primary);
}
.g-ui-action-icon-color-primary.g-ui-action-icon-outline {
  background: transparent;
  border-color: var(--g-ui-primary);
  color: var(--g-ui-primary);
}
.g-ui-action-icon-color-primary.g-ui-action-icon-filled:hover { background: var(--g-ui-primary-hover); }
.g-ui-action-icon-color-primary.g-ui-action-icon-light:hover { background: var(--g-ui-primary-muted); }
.g-ui-action-icon-color-primary.g-ui-action-icon-outline:hover { background: var(--g-ui-primary-subtle); }
.g-ui-action-icon-color-primary.g-ui-action-icon-subtle:hover { background: var(--g-ui-bg-muted); }


.g-ui-action-icon-color-success.g-ui-action-icon-filled {
  background: var(--g-ui-success);
  border-color: transparent;
  color: var(--g-ui-success-fg);
}
.g-ui-action-icon-color-success.g-ui-action-icon-subtle {
  background: transparent;
  border-color: var(--g-ui-border);
}
.g-ui-action-icon-color-success.g-ui-action-icon-light {
  background: var(--g-ui-success-subtle);
  border-color: var(--g-ui-success-muted);
  color: var(--g-ui-success);
}
.g-ui-action-icon-color-success.g-ui-action-icon-outline {
  background: transparent;
  border-color: var(--g-ui-success);
  color: var(--g-ui-success);
}
.g-ui-action-icon-color-success.g-ui-action-icon-filled:hover { background: var(--g-ui-success-hover); }
.g-ui-action-icon-color-success.g-ui-action-icon-light:hover { background: var(--g-ui-success-muted); }
.g-ui-action-icon-color-success.g-ui-action-icon-outline:hover { background: var(--g-ui-success-subtle); }
.g-ui-action-icon-color-success.g-ui-action-icon-subtle:hover { background: var(--g-ui-bg-muted); }

.g-ui-action-icon-color-danger.g-ui-action-icon-filled {
  background: var(--g-ui-danger);
  border-color: transparent;
  color: var(--g-ui-danger-fg);
}
.g-ui-action-icon-color-danger.g-ui-action-icon-subtle {
  background: transparent;
  border-color: var(--g-ui-border);
}
.g-ui-action-icon-color-danger.g-ui-action-icon-light {
  background: var(--g-ui-danger-subtle);
  border-color: var(--g-ui-danger-muted);
  color: var(--g-ui-danger);
}
.g-ui-action-icon-color-danger.g-ui-action-icon-outline {
  background: transparent;
  border-color: var(--g-ui-danger);
  color: var(--g-ui-danger);
}
.g-ui-action-icon-color-danger.g-ui-action-icon-filled:hover { background: var(--g-ui-danger-hover); }
.g-ui-action-icon-color-danger.g-ui-action-icon-light:hover { background: var(--g-ui-danger-muted); }
.g-ui-action-icon-color-danger.g-ui-action-icon-outline:hover { background: var(--g-ui-danger-subtle); }
.g-ui-action-icon-color-danger.g-ui-action-icon-subtle:hover { background: var(--g-ui-bg-muted); }

.g-ui-action-icon-color-warning.g-ui-action-icon-filled {
  background: var(--g-ui-warning);
  border-color: transparent;
  color: var(--g-ui-warning-fg);
}
.g-ui-action-icon-color-warning.g-ui-action-icon-subtle {
  background: transparent;
  border-color: var(--g-ui-border);
}
.g-ui-action-icon-color-warning.g-ui-action-icon-light {
  background: var(--g-ui-warning-subtle);
  border-color: var(--g-ui-warning-muted);
  color: var(--g-ui-warning);
}
.g-ui-action-icon-color-warning.g-ui-action-icon-outline {
  background: transparent;
  border-color: var(--g-ui-warning);
  color: var(--g-ui-warning);
}
.g-ui-action-icon-color-warning.g-ui-action-icon-filled:hover { background: var(--g-ui-warning-hover); }
.g-ui-action-icon-color-warning.g-ui-action-icon-light:hover { background: var(--g-ui-warning-muted); }
.g-ui-action-icon-color-warning.g-ui-action-icon-outline:hover { background: var(--g-ui-warning-subtle); }
.g-ui-action-icon-color-warning.g-ui-action-icon-subtle:hover { background: var(--g-ui-bg-muted); }

.g-ui-action-icon-color-info.g-ui-action-icon-filled {
  background: var(--g-ui-info);
  border-color: transparent;
  color: var(--g-ui-info-fg);
}
.g-ui-action-icon-color-info.g-ui-action-icon-subtle {
  background: transparent;
  border-color: var(--g-ui-border);
}
.g-ui-action-icon-color-info.g-ui-action-icon-light {
  background: var(--g-ui-info-subtle);
  border-color: var(--g-ui-info-muted);
  color: var(--g-ui-info);
}
.g-ui-action-icon-color-info.g-ui-action-icon-outline {
  background: transparent;
  border-color: var(--g-ui-info);
  color: var(--g-ui-info);
}
.g-ui-action-icon-color-info.g-ui-action-icon-filled:hover { background: var(--g-ui-info-hover); }
.g-ui-action-icon-color-info.g-ui-action-icon-light:hover { background: var(--g-ui-info-muted); }
.g-ui-action-icon-color-info.g-ui-action-icon-outline:hover { background: var(--g-ui-info-subtle); }
.g-ui-action-icon-color-info.g-ui-action-icon-subtle:hover { background: var(--g-ui-bg-muted); }


.g-ui-popover {
  position: relative;
  display: inline-flex;
}
.g-ui-popover-dropdown {
  position: absolute;
  top: calc(100% + var(--g-ui-space-8));
  left: 0;
  min-width: 220px;
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border-muted);
  border-radius: 10px;
  box-shadow: var(--g-ui-shadow-sm);
  padding: var(--g-ui-space-10) var(--g-ui-space-12);
  z-index: 50;
}
.g-ui-popover-dropdown-top {
  top: auto;
  bottom: calc(100% + var(--g-ui-space-8));
}
.g-ui-popover-right { left: auto; right: 0; }
.g-ui-popover-center { left: 50%; transform: translateX(-50%); }

.g-ui-hover-card {
  position: relative;
  display: inline-flex;
}
.g-ui-hover-card-dropdown {
  position: absolute;
  top: calc(100% + var(--g-ui-space-8));
  left: 0;
  min-width: 220px;
  background: var(--g-ui-surface);
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  box-shadow: var(--g-ui-shadow-sm);
  padding: var(--g-ui-space-12) var(--g-ui-space-16);
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
.g-ui-affix-bottom-right { right: var(--g-ui-space-20); bottom: var(--g-ui-space-20); }
.g-ui-affix-bottom-left { left: var(--g-ui-space-20); bottom: var(--g-ui-space-20); }
.g-ui-affix-top-right { right: var(--g-ui-space-20); top: var(--g-ui-space-20); }
.g-ui-affix-top-left { left: var(--g-ui-space-20); top: var(--g-ui-space-20); }
.g-ui-affix-center-center { left: 50%; top: 50%; transform: translate(-50%, -50%); }
.g-ui-affix-top-center { left: 50%; top: var(--g-ui-space-20); transform: translateX(-50%); }
.g-ui-affix-bottom-center { left: 50%; bottom: var(--g-ui-space-20); transform: translateX(-50%); }
.g-ui-affix-left-center { left: var(--g-ui-space-20); top: 50%; transform: translateY(-50%); }
.g-ui-affix-right-center { right: var(--g-ui-space-20); top: 50%; transform: translateY(-50%); }


.g-ui-fieldset {
  border: 1px solid var(--g-ui-border-muted);
  border-radius: var(--g-ui-radius);
  padding: var(--g-ui-space-14);
}
.g-ui-legend {
  padding: 0 var(--g-ui-space-6);
  color: var(--g-ui-muted);
  font-size: 12px;
}

.g-ui-appbar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--g-ui-space-12);
  padding: 0 var(--g-ui-space-16);
  background: var(--g-ui-bg);
  border-bottom: 1px solid var(--g-ui-border);
  z-index: 100;
  position: relative;
}
.g-ui-appbar-static { position: static; }
.g-ui-appbar-sticky { position: sticky; top: 0; }
.g-ui-appbar-fixed { position: fixed; top: 0; left: 0; right: 0; }

.g-ui-sidebar {
  width: 260px;
  min-width: 260px;
  background: var(--g-ui-bg-panel);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.g-ui-sidebar-border-right { border-right: 1px solid var(--g-ui-border); }
.g-ui-sidebar-position-right { border-right: 0; border-left: 1px solid var(--g-ui-border-muted); }
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
  background: var(--g-ui-overlay-normal);
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
  gap: var(--g-ui-space-10);
  padding: var(--g-ui-space-8) var(--g-ui-space-12);
  border-radius: 8px;
  cursor: pointer;
  color: var(--g-ui-text);
  text-decoration: none;
  font-size: 14px;
}
.g-ui-sidebar-item:hover {
  background: var(--g-ui-bg-subtle);
}
.g-ui-sidebar-item-active {
  background: var(--g-ui-primary-subtle);
  color: var(--g-ui-primary);
}
.g-ui-sidebar-item-active:hover { background: var(--g-ui-primary-muted); }
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
  border: 3px solid var(--g-ui-border-muted);
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
  margin: 0 var(--g-ui-space-3);
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
  margin: 0 var(--g-ui-space-2);
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


.g-ui-grid-table {
  display: grid;
  background: var(--g-ui-bg-panel);
  border-radius: var(--g-ui-radius);
  padding: var(--g-ui-space-12);
  padding-bottom: var(--g-ui-space-12);
}
.g-ui-grid-table-row {
  display: contents;
}
.g-ui-grid-table-cell {
  padding: var(--g-ui-space-8);
  border-bottom: 1px solid var(--g-ui-border-muted);
}
.g-ui-grid-table-row-header .g-ui-grid-table-cell {
  font-weight: 200;
}

.g-ui-grid-table-sort-icon {
  opacity: 0.5;
}

.g-ui-grid-table-sticky .g-ui-grid-table-row-header .g-ui-grid-table-cell {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--g-ui-bg-panel, #fff);
}

.g-ui-grid-table-sticky .g-ui-grid-table-row-header .g-ui-grid-table-cell:first-child {
  border-radius: var(--g-ui-radius) 0 0 0;
}
.g-ui-grid-table-sticky .g-ui-grid-table-row-header .g-ui-grid-table-cell:last-child {
  border-radius: 0 var(--g-ui-radius) 0 0;
}

.g-ui-grid-table-sticky .g-ui-grid-table-row-header .g-ui-grid-table-cell-sortable {
  cursor: pointer;
  user-select: none;
}
.g-ui-grid-table-sticky .g-ui-grid-table-row-header .g-ui-grid-table-cell-sortable:hover {
  background: var(--g-ui-bg-hover, rgba(0,0,0,0.04));
}

.g-ui-bottombar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--g-ui-space-4);
  padding: var(--g-ui-space-4) var(--g-ui-space-8);
  background: var(--g-ui-bg);
  border-top: 1px solid var(--g-ui-border);
  z-index: 100;
  box-sizing: border-box;
}
.g-ui-bottombar-grow .g-ui-bottombar-action { flex: 1; }

.g-ui-bottombar-action {
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: var(--g-ui-space-6) var(--g-ui-space-12);
  border-radius: var(--g-ui-radius-sm);
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
  color: var(--g-ui-text-muted);
  font-size: var(--g-ui-fz-xs);
  min-width: 48px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
.g-ui-bottombar-action:hover { background: var(--g-ui-hover); }
.g-ui-bottombar-action:active { background: var(--g-ui-active); }
.g-ui-bottombar-action-active { color: var(--g-ui-primary); }
.g-ui-bottombar-action-active:hover { background: var(--g-ui-primary-light-hover); }
.g-ui-bottombar-action-disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
}

.g-ui-bottombar-action-variant-filled.g-ui-bottombar-action-active {
  background: var(--g-ui-primary);
  color: var(--g-ui-white);
}
.g-ui-bottombar-action-variant-filled.g-ui-bottombar-action-active:hover {
  background: var(--g-ui-primary-dark);
}

.g-ui-bottombar-action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
}
.g-ui-bottombar-action-label {
  font-size: 12px;
  line-height: 1.2;
  white-space: nowrap;
  text-align: center;
}


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
