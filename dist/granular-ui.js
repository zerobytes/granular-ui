// src/theme/styles.js
var STYLE_ID = "granular-ui-styles";
var poppins400 = new URL("./fonts/Poppins-400.ttf", import.meta.url).href;
var poppins500 = new URL("./fonts/Poppins-500.ttf", import.meta.url).href;
var poppins600 = new URL("./fonts/Poppins-600.ttf", import.meta.url).href;
var poppins700 = new URL("./fonts/Poppins-700.ttf", import.meta.url).href;
var arimo400 = new URL("./fonts/Arimo-400.ttf", import.meta.url).href;
var arimo500 = new URL("./fonts/Arimo-500.ttf", import.meta.url).href;
var arimo600 = new URL("./fonts/Arimo-600.ttf", import.meta.url).href;
var arimo700 = new URL("./fonts/Arimo-700.ttf", import.meta.url).href;
var inter400 = new URL("./fonts/Inter-400.woff2", import.meta.url).href;
var inter500 = new URL("./fonts/Inter-500.woff2", import.meta.url).href;
var inter600 = new URL("./fonts/Inter-600.woff2", import.meta.url).href;
var inter700 = new URL("./fonts/Inter-700.woff2", import.meta.url).href;
var css = `
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
  --g-ui-bg: var(--g-ui-gray-950);
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
  --g-ui-radius: 4px;
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
  --g-ui-bg: var(--g-ui-white);
  --g-ui-bg-subtle: var(--g-ui-gray-50);
  --g-ui-bg-muted: var(--g-ui-gray-100);
  --g-ui-bg-emphasized: var(--g-ui-gray-200);
  --g-ui-bg-inverted: var(--g-ui-gray-950);
  --g-ui-bg-panel: var(--g-ui-white);
  --g-ui-bg-error: var(--g-ui-red-50);
  --g-ui-bg-warning: var(--g-ui-orange-50);
  --g-ui-bg-success: var(--g-ui-green-50);
  --g-ui-bg-info: var(--g-ui-blue-50);
  
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
  
  --g-ui-border: var(--g-ui-gray-350);
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
  --g-ui-primary-subtle: rgba(99, 102, 241, 0.06);
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
  color: var(--g-ui-text);
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
.g-ui-gap-xs { gap: var(--g-ui-space-4); }
.g-ui-gap-sm { gap: var(--g-ui-space-8); }
.g-ui-gap-md { gap: var(--g-ui-space-12); }
.g-ui-gap-lg { gap: var(--g-ui-space-16); }
.g-ui-gap-xl { gap: var(--g-ui-space-20); }
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
  border: 1px solid var(--g-ui-border);
}
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
  background: var(--g-ui-bg);
  box-shadow: var(--g-ui-shadow-sm);
  padding: var(--g-ui-space-6);
  display: flex;
  flex-direction: column;
  gap: var(--g-ui-space-4);
  z-index: 60;
  max-height: 240px;
  overflow: auto;
}
.g-ui-select-item {
  padding: var(--g-ui-space-6) var(--g-ui-space-8);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--g-ui-space-8);
}
.g-ui-select-item:hover {
  background: var(--g-ui-bg-subtle);
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
.g-ui-alert-blue { background: var(--g-ui-blue-subtle); color: var(--g-ui-blue-fg); border-color: transparent; }
.g-ui-alert-success { background: var(--g-ui-green-subtle); color: var(--g-ui-green-fg); border-color: transparent; }
.g-ui-alert-danger { background: var(--g-ui-red-subtle); color: var(--g-ui-red-fg); border-color: transparent; }
.g-ui-alert-warning { background: var(--g-ui-orange-subtle); color: var(--g-ui-orange-fg); border-color: transparent; }

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
}
.g-ui-list-unordered > li:not(.g-ui-list-nested-item)::before {
  content: '\u2022';
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
  height: calc(var(--g-ui-slider-size) * 2);
  padding: 0 var(--g-ui-slider-size);
  display: flex;
  align-items: center;
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
  background: var(--g-ui-bg-muted);
}
.g-ui-segmented-item {
  padding: var(--g-ui-space-4) var(--g-ui-space-14);
  cursor: pointer;
  background: transparent;
  color: var(--g-ui-text);
  border-radius: 8px;
}
.g-ui-segmented-active {
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
}
.g-ui-segmented-size-xs .g-ui-segmented-item { padding: var(--g-ui-space-2) var(--g-ui-space-6); font-size: 12px; }
.g-ui-segmented-size-sm .g-ui-segmented-item { padding: var(--g-ui-space-3) var(--g-ui-space-10); font-size: 13px; }
.g-ui-segmented-size-md .g-ui-segmented-item { padding: var(--g-ui-space-4) var(--g-ui-space-14); font-size: 14px; }
.g-ui-segmented-size-lg .g-ui-segmented-item { padding: var(--g-ui-space-7) var(--g-ui-space-16); font-size: 15px; }
.g-ui-segmented-size-xl .g-ui-segmented-item { padding: var(--g-ui-space-10) var(--g-ui-space-20); font-size: 16px; }

.g-ui-pagination {
  display: inline-flex;
  gap: var(--g-ui-space-6);
  align-items: center;
}
.g-ui-pagination-item {
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border-muted);
  background: var(--g-ui-bg);
  color: var(--g-ui-text);
  cursor: pointer;
  font-size: 14px;
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
.g-ui-pagination-size-xs .g-ui-pagination-item { min-width: 22px; height: 22px; font-size: 12px; }
.g-ui-pagination-size-sm .g-ui-pagination-item { min-width: 26px; height: 26px; font-size: 12px; }
.g-ui-pagination-size-md .g-ui-pagination-item { min-width: 32px; height: 32px; font-size: 14px; }
.g-ui-pagination-size-lg .g-ui-pagination-item { min-width: 38px; height: 38px; font-size: 15px; }
.g-ui-pagination-size-xl .g-ui-pagination-item { min-width: 44px; height: 44px; font-size: 16px; }

.g-ui-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}
.g-ui-timeline-track-segment {
  position: absolute;
  left: 8px;
  width: 4px;
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
  right: 12px;
}
.g-ui-timeline-line-width-xs .g-ui-timeline-track-segment { width: 2px; }
.g-ui-timeline-line-width-sm .g-ui-timeline-track-segment { width: 3px; }
.g-ui-timeline-line-width-md .g-ui-timeline-track-segment { width: 4px; }
.g-ui-timeline-line-width-lg .g-ui-timeline-track-segment { width: 6px; }
.g-ui-timeline-line-width-xl .g-ui-timeline-track-segment { width: 8px; }
.g-ui-timeline-has-track .g-ui-timeline-item::before {
  display: none;
}
.g-ui-timeline-item {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: var(--g-ui-space-16);
  align-items: center;
  position: relative;
  padding-bottom: var(--g-ui-space-24);
  z-index: 1;
}
.g-ui-timeline-align-right .g-ui-timeline-item {
  grid-template-columns: auto 28px;
}
.g-ui-timeline-align-right .g-ui-timeline-item .g-ui-timeline-dot {
  order: 2;
  justify-self: center;
}
.g-ui-timeline-align-right .g-ui-timeline-item .g-ui-timeline-content {
  order: 1;
  text-align: right;
}
.g-ui-timeline-align-right .g-ui-timeline-item::before {
  left: auto;
  right: 8px;
}
.g-ui-timeline-item:last-child {
  padding-bottom: 0;
}
.g-ui-timeline-item::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 20px;
  bottom: 0;
  width: 4px;
  background: var(--g-ui-border-muted);
}
.g-ui-timeline-item:last-child::before {
  display: none;
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
  background: var(--g-ui-bg);
  padding: var(--g-ui-space-12);
}
.g-ui-calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--g-ui-space-10);
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
.g-ui-select-multi {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--g-ui-border);
  background: var(--g-ui-surface);
  color: var(--g-ui-text);
  padding: var(--g-ui-space-10) var(--g-ui-space-12);
  min-height: 44px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--g-ui-space-6);
  align-items: center;
}
.g-ui-select-multi-placeholder {
  color: var(--g-ui-muted);
}
.g-ui-select-multi-input {
  border: 0;
  background: transparent;
  color: var(--g-ui-text);
  min-width: 120px;
  flex: 1;
}
.g-ui-select-multi-input:focus {
  outline: none;
}
.g-ui-select-multi-size-xs { font-size: 12px; min-height: 30px; padding: var(--g-ui-space-5) var(--g-ui-space-10); }
.g-ui-select-multi-size-sm { font-size: 13px; min-height: 36px; padding: var(--g-ui-space-6) var(--g-ui-space-12); }
.g-ui-select-multi-size-md { font-size: 14px; min-height: 42px; padding: var(--g-ui-space-8) var(--g-ui-space-14); }
.g-ui-select-multi-size-lg { font-size: 15px; min-height: 50px; padding: var(--g-ui-space-10) var(--g-ui-space-16); }
.g-ui-select-multi-size-xl { font-size: 16px; min-height: 60px; padding: var(--g-ui-space-13) var(--g-ui-space-20); }
.g-ui-select-tag {
  border: 1px solid var(--g-ui-border);
  border-radius: 999px;
  padding: var(--g-ui-space-2) var(--g-ui-space-8);
  color: var(--g-ui-text);
}
.g-ui-select-multi-size-xs .g-ui-select-tag { font-size: 11px; }
.g-ui-select-multi-size-sm .g-ui-select-tag { font-size: 12px; }
.g-ui-select-multi-size-md .g-ui-select-tag { font-size: 13px; }
.g-ui-select-multi-size-lg .g-ui-select-tag { font-size: 14px; }
.g-ui-select-multi-size-xl .g-ui-select-tag { font-size: 15px; }
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

.g-ui-tabs-vertical {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--g-ui-space-16);
}
.g-ui-tabs-vertical .g-ui-tabs-list {
  flex-direction: column;
}

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
  background: var(--g-ui-bg);
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
  border-radius: 0;
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
  background: var(--g-ui-bg);
  padding: 0;
}
.g-ui-scroll-area::-webkit-scrollbar { width: 10px; height: 10px; }
.g-ui-scroll-area::-webkit-scrollbar-track { background: transparent; }
.g-ui-scroll-area::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--g-ui-muted) 30%, transparent);
  border-radius: 999px;
}
.g-ui-scroll-area:hover::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--g-ui-muted) 50%, transparent); }
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
  background: var(--g-ui-bg);
  border-right: 1px solid var(--g-ui-border);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
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
.g-ui-grid-table-cell-sortable {
  cursor: pointer;
  user-select: none;
}
.g-ui-grid-table-cell-sortable:hover {
  background: var(--g-ui-bg-hover, rgba(0,0,0,0.04));
}
.g-ui-grid-table-sort-icon {
  opacity: 0.5;
}
.g-ui-grid-table-sticky .g-ui-grid-table-row-header .g-ui-grid-table-cell {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--g-ui-bg, #fff);
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
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);
}

// src/theme/theme.js
var themeVars = /* @__PURE__ */ new Set([
  "--g-ui-bg",
  "--g-ui-bg-subtle",
  "--g-ui-bg-muted",
  "--g-ui-bg-emphasized",
  "--g-ui-bg-inverted",
  "--g-ui-bg-panel",
  "--g-ui-fg",
  "--g-ui-fg-muted",
  "--g-ui-fg-subtle",
  "--g-ui-fg-inverted",
  "--g-ui-border",
  "--g-ui-border-subtle",
  "--g-ui-border-emphasized",
  "--g-ui-border-inverted",
  "--g-ui-primary",
  "--g-ui-primary-hover",
  "--g-ui-primary-active",
  "--g-ui-primary-subtle",
  "--g-ui-primary-muted",
  "--g-ui-primary-emphasized",
  "--g-ui-success",
  "--g-ui-success-hover",
  "--g-ui-success-active",
  "--g-ui-success-subtle",
  "--g-ui-success-muted",
  "--g-ui-danger",
  "--g-ui-danger-hover",
  "--g-ui-danger-active",
  "--g-ui-danger-subtle",
  "--g-ui-danger-muted",
  "--g-ui-warning",
  "--g-ui-warning-hover",
  "--g-ui-warning-active",
  "--g-ui-warning-subtle",
  "--g-ui-warning-muted",
  "--g-ui-info",
  "--g-ui-info-hover",
  "--g-ui-info-active",
  "--g-ui-info-subtle",
  "--g-ui-info-muted",
  "--g-ui-shadow-xs",
  "--g-ui-shadow-sm",
  "--g-ui-shadow-md",
  "--g-ui-shadow-lg",
  "--g-ui-shadow-xl",
  "--g-ui-shadow-2xl",
  "--g-ui-radius",
  "--g-ui-font",
  // Legacy
  "--g-ui-surface",
  "--g-ui-text",
  "--g-ui-muted",
  "--g-ui-primary-strong",
  "--g-ui-shadow"
]);
function setThemeVars(vars = {}, target = document?.documentElement) {
  if (!target) return;
  for (const [key, value] of Object.entries(vars)) {
    const cssKey = key.startsWith("--") ? key : `--g-ui-${key}`;
    if (!themeVars.has(cssKey)) continue;
    target.style.setProperty(cssKey, String(value));
  }
}
function setThemeMode(mode = "dark", target = document?.documentElement) {
  if (!target) return;
  target.classList.remove("g-ui-theme-dark", "g-ui-theme-light");
  target.classList.add(mode === "light" ? "g-ui-theme-light" : "g-ui-theme-dark");
}
function getThemeMode(target = document?.documentElement) {
  return target.classList.contains("g-ui-theme-light") ? "light" : "dark";
}

// src/utils.js
import { Renderer, isSignal, isState, isStatePath, isComputed, resolve, computed, after, concat } from "@granularjs/core";
function isReactive(value) {
  return isSignal(value) || isState(value) || isStatePath(value) || isComputed(value);
}
function cx(...values) {
  return concat(...values, { separator: " ", filterFalsy: true });
}
function toPx(value) {
  if (value == null || value === "") return void 0;
  return typeof value === "number" ? `${value}px` : value;
}
function splitPropsChildren(args, defaults) {
  const props = {};
  const children = [];
  const isPropsObject = (value) => !!value && typeof value === "object" && !Array.isArray(value) && !Renderer.isRenderable(value) && !Renderer.isDomNode(value) && !isSignal(value) && !isState(value) && !isStatePath(value) && !isComputed(value);
  for (const arg of args) {
    if (isPropsObject(arg)) Object.assign(props, arg);
    else children.push(arg);
  }
  if (defaults && typeof defaults === "object") {
    for (const key of Object.keys(defaults)) {
      if (props[key] === void 0) props[key] = defaults[key];
    }
  }
  return { props: computed(props), rawProps: props, children };
}
function resolveValue(value) {
  return resolve(value);
}
function resolveBool(value) {
  return !!resolve(value);
}
function classVar(prefix, value, fallback) {
  const normalize = (v) => {
    const resolved = resolve(v);
    const finalValue = resolved == null || resolved === "" ? fallback : resolved;
    return finalValue == null || finalValue === "" ? "" : `${prefix}${finalValue}`;
  };
  if (isReactive(value)) {
    return after(value).compute((v) => normalize(v));
  }
  return normalize(value);
}
function classFlag(name, value) {
  if (isReactive(value)) {
    return after(value).compute((v) => resolve(v) ? name : "");
  }
  return resolve(value) ? name : "";
}
function classMap(value, map2, fallback) {
  const getClass = (v) => map2[v] || null;
  if (isReactive(value)) {
    return after(value).compute((v) => getClass(resolve(v ?? fallback)));
  }
  return getClass(resolve(value ?? fallback));
}

// src/components/Button.js
import { Button as HtmlButton, Span, when, after as after2 } from "@granularjs/core";
function Button(...args) {
  const { props, children } = splitPropsChildren(args, { variant: "filled", size: "md", justify: "center" });
  const {
    variant,
    color,
    size,
    fullWidth,
    loading,
    leftSection,
    rightSection,
    className,
    disabled,
    justify,
    ...rest
  } = props;
  const isDisabled = after2(disabled, loading).compute(([disabled2, loading2]) => disabled2 || loading2);
  return HtmlButton(
    {
      ...rest,
      disabled: isDisabled,
      className: cx(
        "g-ui-button",
        classVar("g-ui-button-variant-", variant, "filled"),
        classVar("g-ui-button-color-", color, "primary"),
        classVar("g-ui-justify-", justify, "center"),
        classVar("g-ui-button-size-", size, "md"),
        classFlag("g-ui-button-full", fullWidth),
        classFlag("g-ui-button-loading", loading),
        className
      )
    },
    when(leftSection, () => Span({ className: "g-ui-button-section-left" }, leftSection)),
    when(loading, () => Span("Loading..."), () => children),
    when(rightSection, () => Span({ className: "g-ui-button-section-right" }, rightSection))
  );
}

// src/components/Text.js
import { Span as Span2 } from "@granularjs/core";
function Text(...args) {
  const { props, children } = splitPropsChildren(args, { size: "md" });
  const { size, weight, color, dimmed, align, ellipsis, decoration, className, style, ...rest } = props;
  const weightClass = classMap(weight, {
    bold: "g-ui-text-weight-700",
    semibold: "g-ui-text-weight-600",
    medium: "g-ui-text-weight-500",
    700: "g-ui-text-weight-700",
    600: "g-ui-text-weight-600",
    500: "g-ui-text-weight-500",
    400: "g-ui-text-weight-400"
  });
  const colorClass = classMap(color, {
    primary: "g-ui-text-primary",
    success: "g-ui-text-success",
    danger: "g-ui-text-danger",
    muted: "g-ui-text-dimmed"
  });
  const alignClass = classMap(align, {
    center: "g-ui-text-align-center",
    right: "g-ui-text-align-right",
    left: "g-ui-text-align-left"
  });
  const decorationClass = classMap(decoration, {
    underline: "g-ui-text-decoration-underline",
    "line-through": "g-ui-text-decoration-line-through",
    overline: "g-ui-text-decoration-overline",
    none: "g-ui-text-decoration-none"
  });
  return Span2(
    {
      ...rest,
      style,
      className: cx(
        "g-ui-text",
        classVar("g-ui-text-size-", size, "md"),
        classFlag("g-ui-text-dimmed", dimmed),
        classFlag("g-ui-text-ellipsis", ellipsis),
        weightClass,
        colorClass,
        alignClass,
        decorationClass,
        className
      )
    },
    children
  );
}

// src/components/Title.js
import { H1, H2, H3, H4, H5, H6 } from "@granularjs/core";
var map = { 1: H1, 2: H2, 3: H3, 4: H4, 5: H5, 6: H6 };
function Title(...args) {
  const { props, children } = splitPropsChildren(args, { order: 2 });
  const { order, className, style, ...rest } = props;
  const orderValue = resolveValue(order) || 2;
  const Tag2 = map[orderValue] || H2;
  return Tag2(
    {
      ...rest,
      className: cx("g-ui-title", classVar("g-ui-title-order-", order, 2), className)
    },
    children
  );
}

// src/components/Container.js
import { Div } from "@granularjs/core";
function Container(...args) {
  const { props, children } = splitPropsChildren(args, { size: "md" });
  const { size, fluid, className, style, ...rest } = props;
  return Div(
    {
      ...rest,
      style,
      className: cx(
        "g-ui-container",
        classFlag("g-ui-container-fluid", fluid),
        classVar("g-ui-container-size-", size, "md"),
        className
      )
    },
    children
  );
}

// src/components/Stack.js
import { Div as Div2 } from "@granularjs/core";
function Stack(...args) {
  const { props, children } = splitPropsChildren(args, { gap: "md" });
  const { gap, align, justify, className, style, ...rest } = props;
  const justifyClass = classMap(justify, {
    between: "g-ui-justify-between",
    center: "g-ui-justify-center",
    end: "g-ui-justify-end",
    start: "g-ui-justify-start"
  });
  return Div2(
    {
      ...rest,
      style,
      className: cx(
        "g-ui-stack",
        classVar("g-ui-gap-", gap, "md"),
        classVar("g-ui-align-", align),
        justifyClass,
        className
      )
    },
    children
  );
}

// src/components/Group.js
import { Div as Div3 } from "@granularjs/core";
function Group(...args) {
  const { props, children } = splitPropsChildren(args, { gap: "md", align: "center" });
  const { gap, align, justify, position, noWrap, className, style, ...rest } = props;
  const positionClass = classMap(position, {
    apart: "g-ui-justify-between",
    center: "g-ui-justify-center",
    right: "g-ui-justify-end",
    left: "g-ui-justify-start"
  });
  return Div3(
    {
      ...rest,
      style,
      className: cx(
        "g-ui-group",
        classVar("g-ui-gap-", gap, "md"),
        classVar("g-ui-align-", align, "center"),
        classVar("g-ui-justify-", justify, "none"),
        positionClass,
        classFlag("g-ui-no-wrap", noWrap),
        className
      )
    },
    children
  );
}

// src/components/Card.js
import { Div as Div4, list, when as when2, after as after3, Span as Span3 } from "@granularjs/core";
function Card(...args) {
  const { props, children } = splitPropsChildren(args, { padding: "md", radius: "md", shadow: "none", border: "default" });
  const { title, content, actions, border, padding, radius, shadow, className, style, ...rest } = props;
  return Div4(
    { style },
    when2(title, () => Div4({ className: "g-ui-card-title" }, title)),
    when2(content, () => Div4({ className: "g-ui-card-content" }, content)),
    {
      className: cx(
        "g-ui-card",
        classVar("g-ui-card-border-", border, "md"),
        classVar("g-ui-card-padding-", padding, "md"),
        classVar("g-ui-card-radius-", radius, "md"),
        classVar("g-ui-card-shadow-", shadow, "md"),
        className
      ),
      ...rest
    },
    children,
    when2(actions, () => Div4(
      { className: "g-ui-card-actions" },
      list(actions, (action) => Button(
        {
          className: "g-ui-card-action",
          onClick: (e) => action.get().onClick?.(e),
          leftSection: action.leftSection,
          rightSection: action.rightSection,
          size: after3(action.size).compute((s) => s || "sm"),
          variant: after3(action.variant).compute((v) => v || "outline"),
          ...action.get().props || {}
        },
        action.label
      ))
    ))
  );
}

// src/components/Badge.js
import { Span as Span4 } from "@granularjs/core";
function Badge(...args) {
  const { props, children } = splitPropsChildren(args, { variant: "filled", size: "md" });
  const { variant, size, className, dot, style, ...rest } = props;
  const dotClass = classMap(variant, { dot: "g-ui-badge-dot" });
  return Span4(
    {
      ...rest,
      className: cx(
        "g-ui-badge",
        classVar("g-ui-badge-variant-", variant, "filled"),
        classVar("g-ui-badge-size-", size, "md"),
        classFlag("g-ui-badge-dot", dot),
        dotClass,
        className
      )
    },
    children
  );
}

// src/components/TextInput.js
import { Div as Div5, Input, Textarea as HtmlTextarea, Label, Span as Span5, when as when3, state, after as after4, isState as isState2 } from "@granularjs/core";
function TextInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md" });
  const {
    label,
    description,
    error,
    size,
    leftSection,
    rightSection,
    className,
    inputClassName,
    multiline,
    value: computed_value,
    ...rest
  } = props;
  const { value: raw_value, node, onChange, onInput, onFocus, onBlur, onKeyDown, onKeyUp, onClick } = rawProps;
  const isValueTwoWay = isState2(raw_value) && !onChange && !onInput;
  const currentState = isValueTwoWay ? raw_value : state(resolveValue(computed_value) ?? "");
  after4(computed_value).change((next) => {
    if (isValueTwoWay) return;
    currentState.set(resolveValue(next) ?? "");
  });
  const handleInput = (ev) => {
    const next = ev?.target?.value ?? "";
    if (next === computed_value.get()) return;
    currentState.set(next);
    onChange?.(ev);
    onInput?.(ev);
  };
  const isMultiline = resolveBool(multiline);
  const Control = isMultiline ? HtmlTextarea : Input;
  const finalInputClassName = cx(inputClassName, isMultiline && "g-ui-textarea");
  const input = Control({
    ...rest,
    node,
    value: currentState,
    onInput: handleInput,
    onChange: handleInput,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    onClick,
    className: cx("g-ui-input", finalInputClassName)
  });
  return Div5(
    { className: cx("g-ui-text-input", className) },
    when3(label, () => Label({ className: "g-ui-text-input-label" }, label)),
    when3(description, () => Span5({ className: "g-ui-text-input-description" }, description)),
    Div5(
      {
        className: cx(
          "g-ui-input-wrapper",
          classFlag("g-ui-input-multiline", multiline),
          classVar("g-ui-input-size-", size, "md"),
          classFlag("g-ui-input-error", error)
        )
      },
      when3(leftSection, () => Div5({ className: "g-ui-input-section" }, leftSection)),
      input,
      when3(rightSection, () => Div5({ className: "g-ui-input-section" }, rightSection))
    ),
    when3(error, () => Div5({ className: "g-ui-text-input-error-text" }, error))
  );
}

// src/components/Textarea.js
function Textarea(...args) {
  const { props } = splitPropsChildren(args, { size: "md" });
  const { size, leftSection, rightSection, className, ...rest } = props;
  return TextInput({
    ...rest,
    size,
    className,
    leftSection,
    rightSection,
    multiline: true
  });
}

// src/components/NumberField.js
import { Div as Div6, Span as Span6, when as when4, after as after5, state as state2 } from "@granularjs/core";
function NumberField(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    size: "md",
    step: 1,
    allowDecimal: true,
    allowNegative: true,
    clampBehavior: "blur",
    hideControls: false,
    decimalSeparator: ".",
    thousandSeparator: "",
    format: null,
    prefix: "",
    suffix: ""
  });
  const {
    value,
    min,
    max,
    step,
    size,
    allowDecimal,
    allowNegative,
    decimalSeparator,
    thousandSeparator,
    decimalScale,
    clampBehavior,
    hideControls,
    format,
    locale,
    currency,
    formatOptions,
    prefix,
    suffix,
    leftSection,
    rightSection,
    className,
    onChange: computed_onChange,
    onInput: computed_onInput,
    ...rest
  } = props;
  const { onChange: _onChange, onInput: _onInput, onBlur, onFocus, onKeyDown } = rawProps;
  const onChange = (e) => {
    _onChange?.(e.target?.value ?? "");
    _onInput?.(e.target?.value ?? "");
  };
  const onInput = onChange;
  const currentState = state2("");
  const escapeRegExp = (value2) => String(value2 ?? "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const getScale = () => {
    const allowDec = !!resolveValue(allowDecimal);
    if (!allowDec) return 0;
    const resolved = resolveValue(decimalScale);
    if (resolved != null && resolved !== "" && Number.isFinite(Number(resolved))) return Math.max(0, Number(resolved));
    const fmt = resolveValue(format);
    if (fmt === "currency" || fmt === "percent") return 2;
    return 0;
  };
  const parseNumber = (raw) => {
    const decSep = resolveValue(decimalSeparator) ?? ".";
    const thousSep = resolveValue(thousandSeparator) ?? "";
    let rawValue = String(raw ?? "");
    if (thousSep) {
      rawValue = rawValue.split(thousSep).join("");
    }
    if (!rawValue || rawValue === "-" || rawValue === decSep || rawValue.endsWith(decSep)) return null;
    const normalized = rawValue.replace(decSep, ".");
    const num = Number(normalized);
    if (!Number.isFinite(num)) return null;
    return num;
  };
  const addThousandSeparators = (intPart) => {
    const thousSep = resolveValue(thousandSeparator) ?? "";
    if (!thousSep) return intPart;
    return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousSep);
  };
  const formatNumber = (num) => {
    const decSep = resolveValue(decimalSeparator) ?? ".";
    const scale = getScale();
    const numeric = Number(num);
    if (!Number.isFinite(numeric)) return "";
    const sign = numeric < 0 ? "-" : "";
    const abs = Math.abs(numeric);
    let [int, dec = ""] = String(abs).split(".");
    const formattedInt = addThousandSeparators(int);
    if (scale > 0) {
      const trimmed = dec.slice(0, scale).padEnd(scale, "0");
      return `${sign}${formattedInt}${decSep}${trimmed}`;
    }
    return `${sign}${formattedInt}`;
  };
  const formatWithIntl = (num, kind) => {
    try {
      const resolvedLocale = resolveValue(locale);
      const resolvedCurrency = resolveValue(currency) ?? "USD";
      const options = resolveValue(formatOptions) ?? {};
      const scale = getScale();
      const style = kind === "currency" ? "currency" : "decimal";
      const formatter = new Intl.NumberFormat(resolvedLocale, {
        style,
        currency: resolvedCurrency,
        ...scale > 0 ? { minimumFractionDigits: scale, maximumFractionDigits: scale } : { maximumFractionDigits: 0 },
        ...options
      });
      return formatter.format(num);
    } catch {
      return formatNumber(num);
    }
  };
  const clampValue2 = (num) => {
    let next = num;
    const minValue = resolveValue(min);
    const maxValue = resolveValue(max);
    if (minValue != null && Number.isFinite(Number(minValue))) next = Math.max(next, Number(minValue));
    if (maxValue != null && Number.isFinite(Number(maxValue))) next = Math.min(next, Number(maxValue));
    if (!resolveValue(allowNegative) && next < 0) next = 0;
    return next;
  };
  const resolveSuffix = () => {
    const suffixValue = resolveValue(suffix) ?? "";
    const fmt = resolveValue(format);
    if (!suffixValue && fmt === "percent") return "%";
    return suffixValue;
  };
  const buildVisual = (raw, sign, fmt) => {
    const prefixValue = resolveValue(prefix) ?? "";
    const suffixValue = resolveSuffix();
    const normalizedRaw = String(raw ?? "").replace(/\u00A0/g, " ");
    const normalizedPrefix = String(prefixValue ?? "").replace(/\u00A0/g, " ");
    const normalizedSuffix = String(suffixValue ?? "").replace(/\u00A0/g, " ");
    const hasPrefix = normalizedPrefix && normalizedRaw.startsWith(normalizedPrefix);
    const hasSuffix = normalizedSuffix && normalizedRaw.endsWith(normalizedSuffix);
    const finalPrefix = hasPrefix ? "" : prefixValue;
    const finalSuffix = hasSuffix ? "" : suffixValue;
    return `${sign ?? ""}${finalPrefix}${raw}${finalSuffix}`;
  };
  const makeSanitizedFromDigits = (digitsValue, sign) => {
    const scale = getScale();
    const sep = resolveValue(decimalSeparator) ?? ".";
    const digits = String(digitsValue ?? "").replace(/\D/g, "");
    const baseDigits = digits || "0";
    const padded = scale > 0 ? baseDigits.padStart(scale + 1, "0") : baseDigits;
    const rawInt = scale > 0 ? padded.slice(0, -scale) : padded;
    const intPart = rawInt.replace(/^0+(?=\d)/, "") || "0";
    const decPart = scale > 0 ? padded.slice(-scale) : "";
    const sanitized = scale > 0 ? `${intPart}${sep}${decPart}` : intPart;
    return `${sign ?? ""}${sanitized}`;
  };
  const stripAffixes = (raw) => {
    const prefixValue = resolveValue(prefix) ?? "";
    const suffixValue = resolveSuffix();
    let out = String(raw ?? "");
    const normalizedPrefix = String(prefixValue ?? "").replace(/\u00A0/g, " ");
    const normalizedSuffix = String(suffixValue ?? "").replace(/\u00A0/g, " ");
    if (normalizedPrefix) {
      const normalizedOut = out.replace(/\u00A0/g, " ");
      if (normalizedOut.startsWith(normalizedPrefix)) out = out.slice(prefixValue.length);
    }
    if (normalizedSuffix) {
      const normalizedOut = out.replace(/\u00A0/g, " ");
      if (normalizedOut.endsWith(normalizedSuffix)) out = out.slice(0, -suffixValue.length);
    }
    return out;
  };
  const sanitizeFromInput = (rawInput) => {
    const allowNeg = !!resolveValue(allowNegative);
    const body = stripAffixes(rawInput);
    const sign = allowNeg && body.includes("-") ? "-" : "";
    const digits = body.replace(/\D/g, "");
    let sanitized = makeSanitizedFromDigits(digits, sign);
    if (resolveValue(clampBehavior) === "strict") {
      const parsed = parseNumber(sanitized);
      if (parsed != null) {
        const clamped = clampValue2(parsed);
        const clampedSign = clamped < 0 ? "-" : "";
        sanitized = `${clampedSign}${formatNumber(Math.abs(clamped))}`;
      }
    }
    return sanitized;
  };
  const normalizeIncoming = (next) => {
    if (next == null || next === "") return makeSanitizedFromDigits("", "");
    if (typeof next === "number" && Number.isFinite(next)) {
      const clamped = resolveValue(clampBehavior) === "strict" ? clampValue2(next) : next;
      const sign2 = clamped < 0 ? "-" : "";
      return `${sign2}${formatNumber(Math.abs(clamped))}`;
    }
    const inputText = stripAffixes(next);
    const sep = resolveValue(decimalSeparator) ?? ".";
    const allowNeg = !!resolveValue(allowNegative);
    const sign = allowNeg && String(inputText).includes("-") ? "-" : "";
    const filtered = String(inputText ?? "").replace(new RegExp(`[^0-9${escapeRegExp(sep)}]`, "g"), "");
    const parsed = parseNumber(`${sign}${filtered}`);
    if (parsed != null) {
      const clamped = resolveValue(clampBehavior) === "strict" ? clampValue2(parsed) : parsed;
      const clampedSign = clamped < 0 ? "-" : "";
      return `${clampedSign}${formatNumber(Math.abs(clamped))}`;
    }
    return sanitizeFromInput(next);
  };
  let lastExternalValue = void 0;
  const updateFromExternal = (next) => {
    const resolved = resolveValue(next);
    if (resolved === void 0) return;
    const normalized = normalizeIncoming(resolved);
    if (normalized === currentState.get()) return;
    lastExternalValue = normalized;
    currentState.set(normalized);
  };
  updateFromExternal(value);
  after5(value).change((next) => {
    updateFromExternal(next);
  });
  after5(currentState).change((next) => {
    if (next === lastExternalValue) {
      lastExternalValue = void 0;
      return;
    }
    lastExternalValue = void 0;
    const parsed = parseNumber(next);
    if (parsed == null) {
      onChange?.(next ?? "");
      return;
    }
    onChange?.(parsed);
  });
  const hasRightSection = after5(rightSection).compute((next) => next != null && next !== false);
  const showControls = after5(hideControls, hasRightSection).compute(
    ([nextHidden, nextRight]) => !resolveValue(nextHidden) && !nextRight
  );
  const inputMode = after5(allowDecimal).compute((next) => resolveValue(next) ? "decimal" : "numeric");
  const inputFormat = after5(
    format,
    prefix,
    suffix,
    allowDecimal,
    allowNegative,
    decimalSeparator,
    thousandSeparator,
    decimalScale,
    clampBehavior,
    min,
    max,
    locale,
    currency,
    formatOptions
  ).compute(() => ({
    mode: "both",
    format: (raw) => {
      const sanitized = sanitizeFromInput(raw);
      const fmt = resolveValue(format);
      const allowNeg = !!resolveValue(allowNegative);
      const sign = allowNeg && sanitized.startsWith("-") ? "-" : "";
      const parsed = parseNumber(sanitized);
      let visual = sanitized.replace(sign, "");
      if (parsed != null) {
        const abs = Math.abs(parsed);
        if (typeof fmt === "function") {
          try {
            visual = fmt(abs);
          } catch {
            visual = formatNumber(abs);
          }
        } else if (fmt === "currency") {
          visual = formatWithIntl(abs, "currency");
        } else if (fmt === "decimal") {
          const resolvedLocale = resolveValue(locale);
          const resolvedOptions = resolveValue(formatOptions);
          visual = resolvedLocale || resolvedOptions ? formatWithIntl(abs, "decimal") : formatNumber(abs);
        } else if (fmt === "percent") {
          visual = formatNumber(abs);
        } else {
          visual = formatNumber(abs);
        }
      }
      return { value: sanitized, raw: sanitized, visual: buildVisual(visual, sign, fmt) };
    }
  }));
  const stepBy = (direction) => {
    const current = parseNumber(currentState.get());
    const delta = Number(resolveValue(step) ?? 1);
    const base = current == null ? 0 : current;
    const next = clampValue2(base + delta * direction);
    currentState.set(formatNumber(next));
  };
  const setCaretToEnd = (target) => {
    if (!target || typeof target.setSelectionRange !== "function") return;
    const setToEnd = () => {
      try {
        const end = String(target.value ?? "").length;
        target.setSelectionRange(end, end);
      } catch {
      }
    };
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(setToEnd);
    } else {
      setToEnd();
    }
  };
  const handleInput = (ev) => {
    onInput?.(ev);
    const target = ev?.target;
    if (!target) return;
    setCaretToEnd(target);
  };
  const handleBlur = (ev) => {
    onBlur?.(ev);
    if (resolveValue(clampBehavior) !== "blur") return;
    const parsed = parseNumber(currentState.get());
    if (parsed == null) return;
    const clamped = clampValue2(parsed);
    currentState.set(formatNumber(clamped));
  };
  const handleFocus = (ev) => {
    onFocus?.(ev);
    setCaretToEnd(ev?.target);
  };
  const handleKeyDown = (ev) => {
    onKeyDown?.(ev);
    const target = ev?.target;
    if (!target) return;
    const prefixValue = resolveValue(prefix) ?? "";
    const suffixValue = resolveSuffix();
    if (suffixValue && typeof target.selectionEnd === "number") {
      target.selectionEnd = Math.min(target.selectionEnd, String(target.value ?? "").length - suffixValue.length);
    }
    if (prefixValue && typeof target.selectionStart === "number") {
      target.selectionStart = Math.max(target.selectionStart, prefixValue.length);
    }
  };
  const controls = Div6(
    { className: "g-ui-number-field-controls" },
    Span6({ className: "g-ui-number-field-control", onClick: () => stepBy(1) }, "+"),
    Span6({ className: "g-ui-number-field-control", onClick: () => stepBy(-1) }, "\u2212")
  );
  const controlsWrapper = Div6({ className: "g-ui-number-field-controls-wrapper" }, controls);
  const finalRightSection = after5(showControls, rightSection).compute(([nextControls, nextRight]) => {
    if (nextControls) return controlsWrapper;
    return nextRight;
  });
  return TextInput({
    ...rest,
    size,
    className: cx("g-ui-number-field", className),
    leftSection,
    rightSection: finalRightSection,
    type: "text",
    inputMode,
    inputClassName: cx("g-ui-input-number"),
    value: currentState,
    format: inputFormat,
    onInput: handleInput,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown
  });
}

// src/components/NumberInput.js
function NumberInput(...args) {
  return NumberField(...args);
}

// src/components/Modal.js
import { Div as Div7, Button as HtmlButton2, portal, when as when5, after as after6 } from "@granularjs/core";

// src/theme/icons.js
var forwardSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>';
var backwardSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>';
var checkedSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg>';
var indeterminateSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="M240-446.67v-66.66h480v66.66H240Z"/></svg>';
var closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="M312-265.33 265.33-312l168-168-168-167L312-693.67l168 168 167-168L693.67-647l-168 167 168 168L647-265.33l-167-168-168 168Z"/></svg>';
var searchSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>';
var plusSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>';
var editSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360v-80h240v80H480Zm0 160v-80h320v80H480Zm0 160v-80h320v80H480ZM360-360v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm160-320h280l-36-37 37-37v74H520Zm-160 0h80v-80h-80v80ZM120-600v-160l160-160h160l-80 80H200v240h-80Zm80-240v-80 80Z"/></svg>';
var deleteSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
var calendarTodaySvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z"/></svg>';
var keyboardArrowDownSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>';

// src/components/Modal.js
function Modal(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { size: "md", centered: true, overlay: "normal" });
  const {
    opened,
    title,
    size,
    centered,
    overlay,
    position,
    className,
    style
  } = props;
  const { onClose } = rawProps;
  const positionClass = after6(position, centered).compute(([pos, isCentered]) => {
    const value = pos ?? (isCentered === false ? "top-center" : "center");
    return `g-ui-modal-position-${value}`;
  });
  return when5(
    opened,
    () => portal(
      Div7(
        {
          className: cx(
            "g-ui-modal-overlay",
            classVar("g-ui-modal-overlay-", overlay, "normal"),
            positionClass
          ),
          onClick: (ev) => {
            if (ev.target === ev.currentTarget) onClose?.();
          }
        },
        Div7(
          {
            className: cx("g-ui-modal", classVar("g-ui-modal-size-", size, "md"), className)
          },
          Div7(
            { className: "g-ui-modal-header" },
            when5(title, () => Div7({ className: "g-ui-modal-title" }, title)),
            when5(
              onClose,
              () => HtmlButton2(
                {
                  type: "button",
                  className: "g-ui-button g-ui-button-variant-subtle g-ui-button-size-xs g-ui-modal-close",
                  onClick: onClose,
                  innerHTML: closeSvg
                }
              )
            )
          ),
          children
        )
      )
    )
  );
}

// src/components/Loading.js
import { Div as Div8, Span as Span7, after as after7, when as when6 } from "@granularjs/core";
function Loading(...args) {
  const { props } = splitPropsChildren(args, { variant: "spinner", size: "md" });
  const { variant, size, className } = props;
  const isDots = after7(variant).compute((next) => next === "dots");
  const isBars = after7(variant).compute((next) => next === "bars");
  return when6(
    isDots,
    () => Div8({
      className: cx("g-ui-loading g-ui-dots", classVar("g-ui-loading-size-", size, "md"), className)
    }),
    () => when6(
      isBars,
      () => Div8(
        { className: cx("g-ui-loading g-ui-bars", classVar("g-ui-loading-size-", size, "md"), className) },
        Span7(""),
        Span7(""),
        Span7("")
      ),
      () => Div8(
        {
          className: cx("g-ui-loading", classVar("g-ui-loading-size-", size, "md"), className)
        },
        Div8({ className: "g-ui-spinner" })
      )
    )
  );
}

// src/components/Checkbox.js
import { Div as Div9, Input as Input2, Label as Label2, Span as Span8, when as when7, state as state3, after as after8 } from "@granularjs/core";
function Checkbox(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md" });
  const { checked, label, description, size, indeterminate, className, style, inputProps, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state3(resolveBool(checked));
  after8(checked).change((next) => {
    if (next == null) return;
    currentState.set(!!next);
    onChange?.(next);
  });
  const control = Label2(
    { className: "g-ui-checkbox-control" },
    Input2({
      type: "checkbox",
      indeterminate,
      checked: currentState,
      className: cx(
        "g-ui-checkbox-input",
        classVar("g-ui-checkbox-size-", size, "md"),
        inputProps?.className
      ),
      ...rest
    }),
    when7(
      currentState,
      () => Div9({ className: "g-ui-checkbox-checked", innerHTML: checkedSvg }),
      () => {
        if (!currentState.get() && indeterminate.get()) {
          return Div9({ className: "g-ui-checkbox-indeterminate", innerHTML: indeterminateSvg });
        }
      }
    ),
    when7(label, () => Span8({ className: "g-ui-checkbox-label" }, label))
  );
  return Div9(
    { className: cx("g-ui-checkbox", classVar("g-ui-checkbox-size-", size, "md"), className) },
    control,
    when7(description, () => Span8({ className: "g-ui-checkbox-description" }, description))
  );
}

// src/components/Switch.js
import { Input as Input3, Label as Label3, Span as Span9, when as when8, after as after10, state as state5 } from "@granularjs/core";

// src/components/SwitchGroup.js
import { Div as Div10, context, state as state4, after as after9 } from "@granularjs/core";
var switchGroupContext = context({ name: null, selected: null });
function SwitchGroup(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { className, name, selected, onChange: _onChange, ...rest } = props;
  const { onChange } = rawProps;
  const scope = switchGroupContext.scope({ name: name?.get(), selected: selected?.get() });
  after9(scope.selected).change((next) => {
    onChange?.(next);
  });
  after9(selected).change((next) => {
    if (next === scope.selected.get()) return;
    scope.set().selected = next;
  });
  return scope.serve(Div10({ ...rest, className: cx("g-ui-switch-group", className) }, children));
}

// src/components/Switch.js
function Switch(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md" });
  const { label, size, className, style, inputProps, checked, value, ...rest } = props;
  const { onChange } = rawProps;
  const checkedState = state5(checked);
  const switchGroupState = switchGroupContext.state();
  const switchGroupInfo = after10(switchGroupState).compute((value2) => {
    return {
      name: value2.name,
      type: value2.name ? "radio" : "checkbox"
    };
  });
  after10(switchGroupState.selected).change((selected) => {
    checkedState.set(selected === value.get());
  });
  after10(checkedState).change((next) => {
    onChange?.(next);
    if (!next) return;
    const selectedState = switchGroupState.get().selected;
    switchGroupState.set().selected = value.get();
  });
  return Label3(
    { className: cx("g-ui-switch", classVar("g-ui-switch-size-", size, "md"), className) },
    Input3({
      type: switchGroupInfo.type,
      name: switchGroupInfo.name,
      value,
      checked: checkedState,
      className: cx("g-ui-switch-input", classVar("g-ui-switch-size-", size, "md"), inputProps?.className),
      ...rest
    }),
    when8(label, () => Span9({ className: "g-ui-switch-label" }, label))
  );
}

// src/components/Select.js
import { Div as Div11, Span as Span11, when as when9, state as state6, after as after11 } from "@granularjs/core";

// src/components/Icon.js
import { Span as Span10 } from "@granularjs/core";
function Icon(...args) {
  const { props, children } = splitPropsChildren(args, { size: "md" });
  return Span10(
    {
      ...props,
      className: cx(
        "g-ui-icon",
        classVar("g-ui-icon-size-", props.size, "md"),
        classVar("g-ui-icon-color-", props.color),
        props.className
      )
    },
    ...children
  );
}

// src/components/Select.js
function Select(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: "md" });
  const { data, value, size, leftSection, rightSection, placeholder, className, ...rest } = props;
  const { onChange } = rawProps;
  const open = state6(false);
  const currentState = state6(resolveValue(value) ?? "");
  after11(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved === void 0) return;
    currentState.set(resolved ?? "");
  });
  const selectValue = (next) => {
    currentState.set(next);
    onChange?.(next);
    open.set(false);
  };
  const valueClass = after11(currentState).compute((current) => {
    if (!current) return "g-ui-select-placeholder";
    return "";
  });
  const displayLabel = after11(currentState).compute((current) => {
    const items = resolveValue(data) ?? [];
    const match = items.find((item) => item.value === current);
    if (current) return match?.label ?? "";
    return placeholder ?? "";
  });
  return Div11(
    { ...rest, className: cx("g-ui-select-root", className) },
    Div11(
      { className: cx("g-ui-input-wrapper", classVar("g-ui-input-size-", size, "md")) },
      when9(leftSection, () => Div11({ className: "g-ui-input-section" }, leftSection)),
      Div11(
        {
          className: cx("g-ui-select", valueClass),
          onClick: () => open.set(!open.get())
        },
        Span11({ className: "g-ui-select-value" }, displayLabel)
      ),
      when9(
        rightSection,
        () => Div11({ className: "g-ui-input-section" }, rightSection),
        () => Span11({ className: "g-ui-select-caret" }, Icon({ innerHTML: keyboardArrowDownSvg }))
      )
    ),
    when9(
      open,
      () => Div11(
        { className: "g-ui-select-dropdown" },
        (resolveValue(data) ?? []).map(
          (item) => Div11(
            {
              className: cx(
                "g-ui-select-item",
                after11(currentState).compute((current) => {
                  if (current === item.value) return "g-ui-select-item-active";
                  return "";
                })
              ),
              onClick: () => selectValue(item.value)
            },
            item.label
          )
        )
      )
    )
  );
}

// src/components/Tabs.js
import { Button as Button2, Div as Div12, state as state7, after as after12, list as list2, when as when10 } from "@granularjs/core";
function Tabs(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    tabs: [],
    orientation: "horizontal",
    variant: "default",
    sticky: true
  });
  const { value, tabs, orientation, variant, sticky, className, style } = props;
  const { onChange } = rawProps;
  const currentState = state7(resolveValue(value) ?? resolveValue(tabs)?.[0]?.value ?? "");
  const sentinelNode = state7();
  const listNode = state7();
  const spacerHeight = state7(0);
  const stickyLeft = state7(0);
  const stickyWidth = state7(0);
  const stickyTop = state7(0);
  const isSticky = state7(false);
  const lastScrollTop = state7(0);
  let listening = false;
  let rafId = null;
  let initScheduled = false;
  const listenerTargets = /* @__PURE__ */ new Set();
  after12(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const setValue = (next) => {
    currentState.set(next);
    onChange?.(next);
  };
  const getScrollParents = (node) => {
    const parents = [];
    let current = node?.parentElement;
    while (current) {
      const style2 = getComputedStyle(current);
      const overflow = `${style2.overflow}${style2.overflowY}${style2.overflowX}`;
      if (/(auto|scroll)/.test(overflow)) {
        parents.push(current);
      }
      current = current.parentElement;
    }
    return parents;
  };
  const getScrollRoot = (node) => getScrollParents(node)[0] ?? null;
  const getRootTop = (root) => root ? root.getBoundingClientRect().top : 0;
  const getScrollTop = (root) => root ? root.scrollTop : window.scrollY || window.pageYOffset || 0;
  const getScrollDirection = (current, last) => {
    if (current > last) return "down";
    if (current < last) return "up";
    return "none";
  };
  const getNextSticky = (direction, sentinelTop, rootTop, currentSticky) => {
    if (direction === "down" && sentinelTop < rootTop) return true;
    if (direction === "up" && sentinelTop >= rootTop) return false;
    return currentSticky;
  };
  const updateSticky = () => {
    const sentinelEl = sentinelNode.get();
    const listEl = listNode.get();
    if (!sentinelEl || !listEl) return;
    if (!resolveBool(sticky)) {
      isSticky.set(false);
      spacerHeight.set(0);
      return;
    }
    if (typeof window === "undefined") return;
    const sentinelRect = sentinelEl.getBoundingClientRect();
    const listRect = listEl.getBoundingClientRect();
    const root = getScrollRoot(sentinelEl);
    const rootTop = getRootTop(root);
    const currentScrollTop = getScrollTop(root);
    const direction = getScrollDirection(currentScrollTop, lastScrollTop.get());
    lastScrollTop.set(currentScrollTop);
    const nextSticky = getNextSticky(direction, sentinelRect.top, rootTop, isSticky.get());
    spacerHeight.set(listRect.height);
    stickyLeft.set(sentinelRect.left);
    stickyWidth.set(sentinelRect.width);
    stickyTop.set(rootTop);
    if (nextSticky !== isSticky.get()) {
      isSticky.set(nextSticky);
    }
  };
  const scheduleUpdate = () => {
    if (rafId != null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      updateSticky();
    });
  };
  const addListenerTarget = (target) => {
    if (!target || listenerTargets.has(target)) return;
    listenerTargets.add(target);
    target.addEventListener("scroll", scheduleUpdate, { passive: true });
  };
  const initListeners = () => {
    if (listening) return;
    const sentinelEl = sentinelNode.get();
    const listEl = listNode.get();
    if (!sentinelEl || !listEl) return;
    if (typeof window === "undefined") return;
    listening = true;
    updateSticky();
    addListenerTarget(window);
    window.addEventListener("resize", scheduleUpdate);
    getScrollParents(sentinelEl).forEach(addListenerTarget);
  };
  after12(listNode, sentinelNode, sticky).change(initListeners);
  if (!initScheduled && typeof window !== "undefined") {
    initScheduled = true;
    setTimeout(() => initListeners(), 0);
  }
  const stickyStyle = after12(isSticky, stickyLeft, stickyWidth, stickyTop).compute((values) => {
    const [active, left, width, top] = values;
    if (!active) {
      return {
        position: "static",
        top: "auto",
        left: "auto",
        width: "auto",
        zIndex: "auto",
        background: "transparent"
      };
    }
    return {
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      background: "var(--g-ui-surface)",
      zIndex: 100
    };
  });
  const spacerStyle = after12(isSticky, spacerHeight).compute((values) => {
    const [active, height] = values;
    return { height: active ? `${height}px` : "0px" };
  });
  return Div12(
    Div12(
      {
        className: cx(
          "g-ui-tabs",
          classMap(orientation, { vertical: "g-ui-tabs-vertical" }),
          classVar("g-ui-tabs-variant-", variant, "default"),
          props.className ?? className
        )
      },
      Div12({ node: sentinelNode }),
      Div12({ style: spacerStyle }),
      Div12(
        { node: listNode, className: "g-ui-tabs-list", style: stickyStyle },
        list2(
          tabs,
          (tab) => Button2(
            {
              className: after12(currentState, tab.value).compute(
                ([v, tabVal]) => cx("g-ui-tabs-tab", tabVal === v && "g-ui-tabs-tab-active")
              ),
              onClick: () => setValue(tab.get().value)
            },
            tab.label
          )
        )
      ),
      Div12(
        { className: "g-ui-tabs-panel" },
        when10(currentState, () => tabs.get()?.find((tab) => tab.value === currentState.get())?.content ?? null)
      )
    )
  );
}

// src/components/Table.js
import { Table as HtmlTable, Thead, Tbody, Tr, Th, Td, list as list3, when as when11, after as after13 } from "@granularjs/core";
function Table(...args) {
  const { props } = splitPropsChildren(args, { headers: [], rows: [] });
  const {
    headers,
    rows,
    striped,
    highlightOnHover,
    withBorder,
    withColumnBorders,
    withRowBorders,
    className,
    style,
    ...rest
  } = props;
  const hasHeaders = after13(headers).compute((next) => next.length > 0);
  return HtmlTable(
    {
      ...rest,
      className: cx(
        "g-ui-table",
        classFlag("g-ui-table-striped", striped),
        classFlag("g-ui-table-hover", highlightOnHover),
        classFlag("g-ui-table-with-border", withBorder),
        classFlag("g-ui-table-column-borders", withColumnBorders),
        classFlag("g-ui-table-row-borders", withRowBorders),
        className
      )
    },
    when11(hasHeaders, () => Thead(
      TableRow(headers, true)
    )),
    Tbody(list3(rows, (row) => TableRow(row, false)))
  );
}
var TableRow = (row, header) => {
  const isArray = after13(row).compute((next) => Array.isArray(next));
  const ObjectRow = (row2) => {
    const cells = after13(row2).compute((next) => Object.values(next));
    return ArrayRow(cells);
  };
  const ArrayRow = (row2) => {
    return list3(row2, (next) => {
      console.log("INFO ABOUT NEXT", header);
      return header ? TableHeaderCell(next) : TableCell(next);
    });
  };
  return Tr(
    when11(
      isArray,
      () => ArrayRow(row),
      () => ObjectRow(row)
    )
  );
};
var TableCell = (content) => {
  return Td(content);
};
var TableHeaderCell = (content) => {
  return Th(content);
};

// src/components/Accordion.js
import { Div as Div13 } from "@granularjs/core";
import { state as state8, when as when12, after as after14 } from "@granularjs/core";
function Accordion(...args) {
  const { props, children } = splitPropsChildren(args, { opened: false });
  const { opened, className, ...rest } = props;
  const openedState = state8(resolveBool(opened));
  after14(opened).change((next) => {
    openedState.set(resolveBool(next));
  });
  const toggle = () => {
    openedState.set(!openedState.get());
  };
  const header = children[0];
  const content = children[1];
  return Div13(
    { ...rest, className: cx("g-ui-accordion", className) },
    Div13({ className: "g-ui-accordion-header", onClick: toggle }, header),
    when12(openedState, () => Div13({ className: "g-ui-accordion-content" }, content))
  );
}

// src/components/Tooltip.js
import { Span as Span12 } from "@granularjs/core";
function Tooltip(...args) {
  const { props, children } = splitPropsChildren(args);
  const { label, className, style } = props;
  return Span12(
    { className: cx("g-ui-tooltip", className) },
    children,
    Span12({ className: "g-ui-tooltip-content" }, label)
  );
}

// src/components/Menu.js
import { Div as Div14, when as when13, after as after15, state as state9, portal as portal2 } from "@granularjs/core";
var menuControlStore = state9({ currentOpenState: null });
function Menu(...args) {
  const mainNode = state9();
  const dropdownNode = state9();
  const dropdownStyle = state9({});
  const { props, rawProps, children } = splitPropsChildren(args, { position: "right" });
  const { opened, content, position, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state9(resolveValue(opened) ?? false);
  after15(opened).change((value) => {
    const resolved = resolveValue(value);
    if (resolved == null) return;
    currentState.set(!!resolved);
    if (!!resolved) {
      closeOldSetCurrent();
    }
  });
  const closeOldSetCurrent = () => {
    if (menuControlStore.get().currentOpenState === currentState) return;
    menuControlStore.get().currentOpenState?.set(false);
    menuControlStore.set().currentOpenState = currentState;
  };
  if (opened.get()) {
    closeOldSetCurrent();
  }
  const parsePosition = (value) => {
    const raw = String(value ?? "right").toLowerCase();
    const parts = raw.split("-").filter(Boolean);
    if (parts.length === 1) {
      const single = parts[0];
      if (single === "top" || single === "bottom") return { placement: single, align: "center" };
      if (single === "left" || single === "right") return { placement: "bottom", align: single };
      if (single === "center") return { placement: "bottom", align: "center" };
      return { placement: "bottom", align: "right" };
    }
    const [first, second] = parts;
    if (first === "top" || first === "bottom") {
      return { placement: first, align: second || "center" };
    }
    if (first === "left" || first === "right") {
      return { placement: first, align: second || "center" };
    }
    return { placement: "bottom", align: "right" };
  };
  const updatePosition = () => {
    const trigger = mainNode.get();
    const dropdown = dropdownNode.get();
    if (!trigger || !dropdown) return;
    if (typeof window === "undefined") return;
    const rect = trigger.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();
    const positionValue = resolveValue(position) ?? "right";
    const spaceVar = getComputedStyle(document.documentElement).getPropertyValue("--g-ui-space-20");
    const margin = Number.parseFloat(spaceVar) || 20;
    const viewportWidth = window.innerWidth || 0;
    const viewportHeight = window.innerHeight || 0;
    const maxLeft = Math.max(margin, viewportWidth - dropdownRect.width - margin);
    const maxTop = Math.max(margin, viewportHeight - dropdownRect.height - margin);
    const { placement, align } = parsePosition(positionValue);
    const gap = 8;
    let top = rect.bottom + gap;
    let left = rect.left;
    if (placement === "top" || placement === "bottom") {
      top = placement === "top" ? rect.top - dropdownRect.height - gap : rect.bottom + gap;
      if (align === "center") {
        left = rect.left + rect.width / 2 - dropdownRect.width / 2;
      } else if (align === "right") {
        left = rect.right - dropdownRect.width;
      } else {
        left = rect.left;
      }
    } else if (placement === "left" || placement === "right") {
      left = placement === "left" ? rect.left - dropdownRect.width - gap : rect.right + gap;
      if (align === "center") {
        top = rect.top + rect.height / 2 - dropdownRect.height / 2;
      } else if (align === "bottom") {
        top = rect.bottom - dropdownRect.height;
      } else {
        top = rect.top;
      }
    }
    left = Math.max(margin, Math.min(left, maxLeft));
    top = Math.max(margin, Math.min(top, maxTop));
    dropdownStyle.set({
      top: `${top}px`,
      left: `${left}px`
    });
  };
  const setOpen = (next) => {
    currentState.set(next);
    onChange?.(next);
    if (next) {
      closeOldSetCurrent();
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(() => updatePosition());
      } else {
        setTimeout(() => updatePosition(), 0);
      }
    }
  };
  const toggle = () => setOpen(!currentState.get());
  const close = () => setOpen(false);
  return Div14(
    { ...rest, node: mainNode, className: cx("g-ui-menu", className) },
    Div14({ onClick: toggle }, children),
    when13(
      currentState,
      () => portal2(
        Div14(
          Div14({ className: "g-ui-menu-overlay", onClick: close }),
          Div14(
            { className: "g-ui-menu-dropdown", node: dropdownNode, style: dropdownStyle },
            content
          )
        )
      )
    )
  );
}

// src/components/Drawer.js
import { Div as Div15, portal as portal3, when as when14 } from "@granularjs/core";
function Drawer(...args) {
  const { props, children } = splitPropsChildren(args, {
    position: "right",
    size: "md",
    overlay: "normal",
    shadowed: true
  });
  const { opened, onClose, position, size, overlay, shadowed, className, style } = props;
  return when14(
    opened,
    () => portal3(
      Div15(
        { className: cx("g-ui-drawer-overlay", classVar("g-ui-drawer-overlay-", overlay, "normal")), onClick: onClose },
        Div15(
          {
            className: cx(
              "g-ui-drawer",
              classMap(shadowed, { true: "g-ui-drawer-shadowed" }, true),
              classVar("g-ui-drawer-", position, "right"),
              classVar("g-ui-drawer-size-", size, "md"),
              className
            ),
            onClick: (ev) => ev.stopPropagation()
          },
          children
        )
      )
    )
  );
}

// src/components/Notification.js
import { Button as Button3, Div as Div16, Span as Span13, when as when15, after as after16 } from "@granularjs/core";
function Notification(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { color: "blue", withCloseButton: true });
  const {
    title,
    color,
    icon,
    loading,
    withCloseButton,
    withBorder,
    className,
    style
  } = props;
  const { onClose } = rawProps;
  const showLoader = after16(icon, loading).compute(([nextIcon, nextLoading]) => !nextIcon && !!nextLoading);
  const withIcon = after16(icon, loading).compute(([nextIcon, nextLoading]) => !!nextIcon || !!nextLoading);
  return Div16(
    {
      className: cx(
        "g-ui-notification",
        [withBorder, "g-ui-notification-bordered"],
        [color, (value) => `g-ui-notification-${value}`],
        [withIcon, "g-ui-notification-with-icon"],
        className
      )
    },
    when15(icon, () => Span13({ className: "g-ui-notification-icon" }, icon)),
    when15(showLoader, () => Loading({ size: "sm", className: "g-ui-notification-loader" })),
    Div16(
      { className: "g-ui-notification-body" },
      when15(title, () => Div16({ className: "g-ui-notification-title" }, title)),
      children
    ),
    when15(
      withCloseButton,
      () => Button3({ type: "button", className: "g-ui-notification-close", onClick: () => onClose?.() }, Span13({ innerHTML: closeSvg }))
    )
  );
}

// src/components/Divider.js
import { Div as Div17, when as when16 } from "@granularjs/core";
function Divider(...args) {
  const { props } = splitPropsChildren(args, { labelPosition: "center" });
  const { label, labelPosition, vertical, className, ...rest } = props;
  return Div17(
    {
      ...rest,
      className: cx(
        "g-ui-divider",
        classFlag("label", label),
        classVar("g-ui-divider-label-", labelPosition, "center"),
        classFlag("g-ui-divider-vertical", vertical),
        className
      )
    },
    when16(label, () => Text({ className: "g-ui-divider-label-text", size: "sm" }, label))
  );
}

// src/components/Paper.js
import { Div as Div18 } from "@granularjs/core";
function Paper(...args) {
  const { props, children } = splitPropsChildren(args, { padding: "md", radius: "md", shadow: "none" });
  const { padding, radius, shadow, className, ...rest } = props;
  return Div18(
    {
      ...rest,
      className: cx(
        "g-ui-paper",
        [padding, (value) => `g-ui-card-padding-${value}`],
        [radius, (value) => `g-ui-card-radius-${value}`],
        [shadow, (value) => `g-ui-card-shadow-${value}`],
        className
      )
    },
    children
  );
}

// src/components/Alert.js
import { Button as Button4, Div as Div19, Span as Span14, after as after17, when as when17 } from "@granularjs/core";
function Alert(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { color: "blue" });
  const {
    title,
    color,
    icon,
    withCloseButton,
    className,
    ...rest
  } = props;
  const { onClose } = rawProps;
  const hasContent = after17(title, withCloseButton).compute(([title2, showClose]) => {
    return title2 || showClose;
  });
  const hasIcon = after17(icon).compute((icon2) => {
    return icon2 !== void 0;
  });
  return Div19(
    { ...rest, className: cx("g-ui-alert", [color, (value) => `g-ui-alert-${value}`], className) },
    Div19(
      { className: "g-ui-alert-header" },
      when17(icon, () => Span14({ className: "g-ui-alert-icon" }, icon)),
      when17(title, () => Div19({ className: "g-ui-alert-title" }, title)),
      when17(withCloseButton, () => Button4({ type: "button", className: "g-ui-alert-close", onClick: () => onClose?.() }, "\xD7"))
    ),
    children
  );
}

// src/components/Avatar.js
import { Div as Div20, Img, when as when18 } from "@granularjs/core";
function Avatar(...args) {
  const { props, children } = splitPropsChildren(args, { size: "md", alt: "" });
  const { src, size, alt, className, ...rest } = props;
  return Div20(
    { ...rest, className: cx("g-ui-avatar", [size, (value) => `g-ui-avatar-size-${value}`], className) },
    when18(src, () => Img({ className: "g-ui-avatar-img", src, alt }), () => {
      return children;
    })
  );
}

// src/components/Kbd.js
import { Span as Span15 } from "@granularjs/core";
function Kbd(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Span15({ ...rest, className: cx("g-ui-kbd", className) }, children);
}

// src/components/Code.js
import { Code as HtmlCode } from "@granularjs/core";
function Code(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return HtmlCode({ ...rest, className: cx("g-ui-code", className) }, children);
}

// src/components/Blockquote.js
import { Blockquote as HtmlBlockquote } from "@granularjs/core";
function Blockquote(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return HtmlBlockquote({ ...rest, className: cx("g-ui-blockquote", className) }, children);
}

// src/components/SimpleGrid.js
import { Div as Div21 } from "@granularjs/core";
function SimpleGrid(...args) {
  const { props, children } = splitPropsChildren(args, { cols: 3, gap: "md" });
  const { cols, gap, className, ...rest } = props;
  return Div21(
    { ...rest, className: cx("g-ui-grid", [gap, (value) => `g-ui-gap-${value}`], [cols, (value) => `g-ui-grid-cols-${value}`], className) },
    children
  );
}

// src/components/List.js
import { Ul, Ol, Li, Div as Div22, Span as Span16, after as after18, when as when19, isSignal as isSignal2, isState as isState3, isStatePath as isStatePath2, isComputed as isComputed2 } from "@granularjs/core";
function List(...args) {
  const { props, children } = splitPropsChildren(args, { type: "none", size: "md" });
  const { type, size, withPadding, className, ...rest } = props;
  const typeClass = classMap(type, {
    ordered: "g-ui-list-ordered",
    unordered: "g-ui-list-unordered",
    none: "g-ui-list-none"
  });
  const isOrdered = after18(type).compute((next) => next === "ordered");
  const isListNode = (value) => value && typeof value === "object" && typeof value.tagName === "string" && (value.tagName.toLowerCase() === "ul" || value.tagName.toLowerCase() === "ol");
  const isListItemNode = (value) => value && typeof value === "object" && typeof value.tagName === "string" && value.tagName.toLowerCase() === "li";
  const wrapChild = (child) => {
    console.log(
      "INFO ABOUT ITEM",
      child,
      typeof child,
      typeof child?.tagName,
      child?.tagName?.toLowerCase()
    );
    const wrapValue = (value) => {
      if (value?.nodeType === "granular-list-node") return value;
      if (value == null || value === false) return null;
      if (Array.isArray(value)) return value.map((item) => wrapValue(item));
      if (isListItemNode(value)) return value;
      if (isListNode(value)) return Li({ className: "g-ui-list-nested-item" }, value);
      return Li(Span16({ className: "g-ui-list-item-shell" }, value));
    };
    if (isSignal2(child) || isState3(child) || isStatePath2(child) || isComputed2(child)) {
      return after18(child).compute((next) => wrapValue(next));
    }
    return wrapValue(child);
  };
  const listChildren = when19(children, () => children.map((child) => wrapChild(child)));
  const listProps = {
    ...rest,
    className: cx(
      "g-ui-list",
      classVar("g-ui-list-size-", size, "md"),
      classFlag("g-ui-list-with-padding", withPadding),
      typeClass,
      className
    )
  };
  return when19(
    isOrdered,
    () => Ol(listProps, listChildren),
    () => Ul(listProps, listChildren)
  );
}
function ListItem(...args) {
  const { props, children } = splitPropsChildren(args, { withBorder: false });
  const { leftSection, rightSection, title, body, withBorder, className, ...rest } = props;
  const hasStructured = after18(title, body).compute(([nextTitle, nextBody]) => !!nextTitle || !!nextBody);
  return Li(
    {
      ...rest,
      className: cx("g-ui-list-item", classFlag("g-ui-list-item-border", withBorder), className)
    },
    Div22(
      { className: "g-ui-list-item-shell" },
      when19(leftSection, () => Span16({ className: "g-ui-list-item-section g-ui-list-item-section-left" }, leftSection)),
      when19(
        hasStructured,
        () => Div22(
          { className: "g-ui-list-item-content" },
          when19(title, () => Div22({ className: "g-ui-list-item-title" }, title)),
          when19(body, () => Div22({ className: "g-ui-list-item-body" }, body))
        ),
        () => children
      ),
      when19(rightSection, () => Span16({ className: "g-ui-list-item-section g-ui-list-item-section-right" }, rightSection))
    )
  );
}
List.Item = ListItem;

// src/components/Anchor.js
import { A } from "@granularjs/core";
function Anchor(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return A({ ...rest, className: cx("g-ui-anchor", className) }, children);
}

// src/components/Image.js
import { Img as Img2 } from "@granularjs/core";
function Image(...args) {
  const { props } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Img2({ ...rest, className: cx("g-ui-image", className) });
}

// src/components/Progress.js
import { Div as Div23 } from "@granularjs/core";
function Progress(...args) {
  const { props } = splitPropsChildren(args, { value: 0, color: "primary", size: "md" });
  const { value, color, size, className, ...rest } = props;
  return Div23(
    {
      ...rest,
      className: cx(
        "g-ui-progress",
        classVar("g-ui-progress-size-", size, "md"),
        [value, (next) => {
          const pct = Math.max(0, Math.min(100, Number(next) || 0));
          const bucket = Math.round(pct / 5) * 5;
          return `g-ui-progress-${bucket}`;
        }],
        [color, (next) => {
          if (next) return `g-ui-progress-${next}`;
          return "";
        }],
        className
      )
    },
    Div23({ className: "g-ui-progress-bar" })
  );
}

// src/components/Slider.js
import { Div as Div24, after as after19, state as state10, when as when20, list as list4 } from "@granularjs/core";
function Slider(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    size: "md",
    min: 0,
    max: 100,
    step: 1
  });
  const { onChange } = rawProps;
  const {
    value,
    marks,
    size,
    min,
    max,
    step,
    disabled,
    className,
    ...rest
  } = props;
  const currentState = state10(resolveValue(value ?? min));
  const hasMarks = after19(marks).compute((m) => m && m.length > 0);
  after19(value).change((next) => {
    if (next == null) return;
    currentState.set(resolveValue(next));
  });
  const getBounds = () => {
    const minValue = Number(resolveValue(min));
    const maxValue = Number(resolveValue(max));
    if (!Number.isFinite(minValue) || !Number.isFinite(maxValue)) {
      return { minValue: 0, maxValue: 100 };
    }
    return { minValue: Math.min(minValue, maxValue), maxValue: Math.max(minValue, maxValue) };
  };
  const getStep = () => {
    const stepValue = Number(resolveValue(step));
    if (Number.isFinite(stepValue) && stepValue > 0) return stepValue;
    return 1;
  };
  const setValue = (next) => {
    const { minValue, maxValue } = getBounds();
    const stepValue = getStep();
    const clamped = Math.max(minValue, Math.min(maxValue, Number(next)));
    const stepped = Math.round((clamped - minValue) / stepValue) * stepValue + minValue;
    if (stepped === currentState.get()) return;
    currentState.set(stepped);
    onChange?.(stepped);
  };
  const percent = after19(currentState).compute((v) => {
    const { minValue, maxValue } = getBounds();
    const range = maxValue - minValue;
    if (range <= 0) return 0;
    const pct = (Number(v ?? minValue) - minValue) / range * 100;
    return Math.max(0, Math.min(100, pct));
  });
  const updateFromEvent = (ev, getRect) => {
    const rect = getRect?.();
    if (!rect || rect.width === 0) return;
    const x = Math.min(Math.max(ev.clientX - rect.left, 0), rect.width);
    const ratio = x / rect.width;
    const { minValue, maxValue } = getBounds();
    setValue(minValue + ratio * (maxValue - minValue));
  };
  const startDrag = (ev) => {
    if (resolveBool(disabled)) return;
    ev.preventDefault?.();
    const trackEl = ev.currentTarget;
    const getRect = () => trackEl.getBoundingClientRect();
    trackEl.setPointerCapture?.(ev.pointerId);
    updateFromEvent(ev, getRect);
    const handleMove = (moveEv) => updateFromEvent(moveEv, getRect);
    const handleUp = () => {
      trackEl.releasePointerCapture?.(ev.pointerId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };
  return Div24(
    {
      ...rest,
      className: cx(
        "g-ui-slider",
        classVar("g-ui-slider-size-", size, "md"),
        classFlag("g-ui-slider-disabled", disabled),
        className
      )
    },
    Div24(
      { className: "g-ui-slider-track", onPointerDown: startDrag },
      Div24({
        className: "g-ui-slider-bar",
        style: after19(percent).compute((p) => ({ width: `${p}%` }))
      }),
      Div24({
        className: "g-ui-slider-thumb",
        style: after19(percent).compute((p) => ({ left: `${p}%` }))
      })
    ),
    when20(hasMarks, () => Div24({ className: "g-ui-slider-marks-placeholder" })),
    when20(marks, () => Div24(
      { className: "g-ui-slider-marks" },
      list4(marks, (mark) => SliderMark({ mark, getBounds }))
    ))
  );
}
var SliderMark = ({ mark, getBounds }) => {
  const { minValue, maxValue } = getBounds();
  const range = maxValue - minValue;
  const value = after19(mark).compute((m) => m.value ?? m);
  const label = after19(mark).compute((m) => m.label ?? String(m.value) ?? value);
  const markValue = Number(value);
  let pct = 0;
  if (range > 0) pct = (markValue - minValue) / range * 100;
  return Div24(
    {
      className: "g-ui-slider-mark",
      style: { left: `${Math.max(0, Math.min(100, pct))}%` }
    },
    Div24({ className: "g-ui-slider-mark-label" }, label)
  );
};

// src/components/Skeleton.js
import { Div as Div25, after as after20 } from "@granularjs/core";
function Skeleton(...args) {
  const { props } = splitPropsChildren(args, { height: "md", width: "full" });
  const { height, width, className, ...rest } = props;
  const customStyle = after20(height, width).compute(([h, w]) => {
    const style = {};
    if (!isNaN(h)) style.height = `${h}px`;
    if (!isNaN(w)) style.width = `${w}px`;
    return style;
  });
  return Div25({
    ...rest,
    style: { width: customStyle.width, height: customStyle.height, ...rest.style || {} },
    className: cx(
      "g-ui-skeleton",
      [height, (value) => `g-ui-skeleton-h-${value}`],
      [width, (value) => `g-ui-skeleton-w-${value}`],
      className
    )
  });
}

// src/components/Chip.js
import { Button as Button5, after as after21, state as state11 } from "@granularjs/core";
function Chip(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { size: "md", variant: "filled", color: "primary" });
  const { checked, size, variant, color, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state11(!!checked);
  after21(checked).change((next) => {
    if (next == null) return;
    currentState.set(!!next);
  });
  const setChecked = (next) => {
    currentState.set(next);
    onChange?.(next);
  };
  return Button5(
    {
      ...rest,
      type: "button",
      className: cx(
        "g-ui-chip",
        classVar("g-ui-chip-size-", size, "md"),
        classVar("g-ui-chip-variant-", variant, "filled"),
        classVar("g-ui-chip-color-", color, "primary"),
        after21(currentState).compute((current) => {
          if (current) return "g-ui-chip-active";
          return "";
        }),
        className
      ),
      onClick: () => setChecked(!currentState.get())
    },
    children
  );
}

// src/components/SegmentedControl.js
import { Div as Div26, after as after22, state as state12, list as list5 } from "@granularjs/core";
function SegmentedControl(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: "sm" });
  const { value, data, size, scroll, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state12(resolveValue(value));
  after22(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const setValue = (next) => {
    currentState.set(next);
    onChange?.(next);
  };
  return Div26(
    { ...rest, className: cx(scroll && "g-ui-segmented-scroll") },
    Div26(
      { className: cx("g-ui-segmented", classVar("g-ui-segmented-size-", size, "sm"), className) },
      list5(data, ((item) => Div26(
        {
          className: cx(
            "g-ui-segmented-item",
            after22(currentState).compute((current) => {
              if (item.get().value === current) return "g-ui-segmented-active";
              return "";
            })
          ),
          onClick: () => setValue(item.get().value)
        },
        item.label
      )))
    )
  );
}

// src/components/Pagination.js
import { Button as Button6, Div as Div27, state as state13, after as after23 } from "@granularjs/core";
function Pagination(...args) {
  const { props, rawProps } = splitPropsChildren(args, { total: 1, size: "md" });
  const { page, total, size, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state13(resolveValue(page) ?? 1);
  after23(page).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const setPage = (next) => {
    const totalValue2 = Number(resolveValue(total)) || 1;
    const clamped = Math.max(1, Math.min(totalValue2, next));
    currentState.set(clamped);
    onChange?.(clamped);
  };
  const items = [];
  const totalValue = Number(resolveValue(total)) || 1;
  for (let i = 1; i <= totalValue; i += 1) items.push(i);
  return Div27(
    {
      ...rest,
      className: cx("g-ui-pagination", classVar("g-ui-pagination-size-", size, "md"), props.className ?? className)
    },
    Button6(
      {
        className: "g-ui-pagination-item",
        onClick: () => setPage((currentState.get?.() ?? currentState) - 1),
        disabled: after23(currentState).compute((v) => v <= 1)
      },
      "<"
    ),
    items.map(
      (i) => Button6(
        {
          className: after23(currentState).compute(
            (v) => cx("g-ui-pagination-item", i === v && "g-ui-pagination-item-active")
          ),
          onClick: () => setPage(i)
        },
        String(i)
      )
    ),
    Button6(
      {
        className: "g-ui-pagination-item",
        onClick: () => setPage((currentState.get?.() ?? currentState) + 1),
        disabled: after23(currentState).compute((v) => v >= total)
      },
      ">"
    )
  );
}

// src/components/Radio.js
import { Div as Div29, Input as Input4, Label as Label4, Span as Span17, when as when21, after as after25, state as state14 } from "@granularjs/core";

// src/components/RadioGroup.js
import { Div as Div28, context as context2, after as after24 } from "@granularjs/core";
var radioGroupContext = context2({ name: "", selected: null });
function RadioGroup(...args) {
  const { props, children, rawProps } = splitPropsChildren(args);
  const { className, name, selected, onChange: _onChange, ...rest } = props;
  const { onChange } = rawProps;
  const scope = radioGroupContext.scope({ name: name?.get(), selected: selected?.get() });
  console.log("selected?.get()", selected?.get());
  after24(name).change((next) => {
    scope.set().name = next;
  });
  after24(selected).change((next) => {
    if (next === scope.selected.get()) return;
    scope.set().selected = next;
  });
  after24(scope.selected).change((next) => {
    onChange?.(next);
  });
  return scope.serve(Div28({ ...rest, className: cx("g-ui-stack g-ui-gap-sm", className) }, children));
}

// src/components/Radio.js
function Radio(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md" });
  const { label, name, value, checked, description, size, className, inputProps, ...rest } = props;
  const { onChange } = rawProps;
  const checkedState = state14(checked?.get() ?? false);
  const radioGroupState = radioGroupContext.state();
  const inputName = after25(radioGroupState.name, name).compute(([radioGroupName, inputGroupName]) => radioGroupName || inputGroupName);
  after25(checked, radioGroupState.selected).change((values) => {
    const [checkedValue, selectedValue] = values;
    if (radioGroupState.get().name) {
      checkedState.set(selectedValue === value.get());
    } else {
      checkedState.set(checkedValue);
    }
  });
  after25(checkedState).change((next) => {
    onChange?.(next);
    if (!next) return;
    if (radioGroupState.get().name) {
      radioGroupState.set().selected = value.get();
    }
  });
  const control = Label4(
    { className: "g-ui-radio-control" },
    Input4({
      type: "radio",
      name: inputName,
      value,
      checked: checkedState,
      className: cx("g-ui-radio-input", classVar("g-ui-radio-size-", size, "md"), inputProps?.className),
      ...rest
    }),
    when21(label, () => Span17({ className: "g-ui-radio-label" }, label))
  );
  return Div29(
    { className: cx("g-ui-radio", classVar("g-ui-radio-size-", size, "md"), className) },
    control,
    when21(description, () => Span17({ className: "g-ui-radio-description" }, description))
  );
}

// src/components/Breadcrumbs.js
import { Nav, Span as Span18 } from "@granularjs/core";
function Breadcrumbs(...args) {
  const { props, children } = splitPropsChildren(args, { separator: "/" });
  const { separator, className, ...rest } = props;
  const items = [];
  if (Array.isArray(children)) items.push(...children);
  else items.push(children);
  const filtered = items.filter(Boolean);
  const nodes = [];
  filtered.forEach((item, idx) => {
    nodes.push(item);
    if (idx < filtered.length - 1) {
      nodes.push(Span18({ className: "g-ui-breadcrumbs-separator" }, separator));
    }
  });
  return Nav({ ...rest, className: cx("g-ui-breadcrumbs", className) }, nodes);
}

// src/components/Center.js
import { Div as Div30 } from "@granularjs/core";
function Center(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div30({ ...rest, className: cx("g-ui-center", className) }, children);
}

// src/components/Space.js
import { Div as Div31 } from "@granularjs/core";
function Space(...args) {
  const { props } = splitPropsChildren(args, { size: "md" });
  const { size, className, ...rest } = props;
  return Div31({ ...rest, className: cx("g-ui-space", [size, (value) => `g-ui-space-${value}`], className) });
}

// src/components/Collapse.js
import { Div as Div32, when as when22 } from "@granularjs/core";
function Collapse(...args) {
  const { props, children } = splitPropsChildren(args);
  const { opened, className, ...rest } = props;
  return when22(opened, () => Div32({ ...rest, className: cx("g-ui-collapse", className) }, children));
}

// src/components/ActionIcon.js
import { Button as Button7 } from "@granularjs/core";
function ActionIcon(...args) {
  const { props, children } = splitPropsChildren(args, { size: "md", variant: "filled" });
  const { size, variant, color, className, ...rest } = props;
  return Button7(
    {
      ...rest,
      type: "button",
      className: cx(
        "g-ui-action-icon",
        classVar("g-ui-action-icon-size-", size, "md"),
        classVar("g-ui-action-icon-color-", color, "primary"),
        classVar("g-ui-action-icon-", variant, "filled"),
        className
      )
    },
    children
  );
}

// src/components/Popover.js
import { Div as Div33, when as when23, after as after26, state as state15 } from "@granularjs/core";
function Popover(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { position: "left" });
  const { opened, position, content, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state15(resolveValue(opened) ?? false);
  after26(opened).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(!!resolved);
  });
  const setOpen = (next) => {
    currentState.set(next);
    onChange?.(next);
  };
  return Div33(
    { ...rest, className: cx("g-ui-popover", props.className ?? className) },
    Div33({ onClick: () => setOpen(!currentState.get()) }, children),
    when23(
      currentState,
      () => Div33(
        {
          className: cx(
            "g-ui-popover-dropdown",
            position === "right" && "g-ui-popover-right",
            position === "center" && "g-ui-popover-center"
          )
        },
        content
      )
    )
  );
}

// src/components/HoverCard.js
import { Div as Div34 } from "@granularjs/core";
function HoverCard(...args) {
  const { props, children } = splitPropsChildren(args, { position: "left" });
  const { position, content, className, ...rest } = props;
  return Div34(
    { ...rest, className: cx("g-ui-hover-card", className) },
    children,
    Div34({
      className: cx(
        "g-ui-hover-card-dropdown",
        [position, (value) => {
          if (value === "right") return "g-ui-hover-card-right";
          return "";
        }],
        [position, (value) => {
          if (value === "center") return "g-ui-hover-card-center";
          return "";
        }]
      )
    }, content)
  );
}

// src/components/Affix.js
import { Div as Div35 } from "@granularjs/core";
function Affix(...args) {
  const { props, children } = splitPropsChildren(args, { position: "bottom-right" });
  const { position, className, ...rest } = props;
  return Div35(
    { ...rest, className: cx("g-ui-affix", [position, (value) => `g-ui-affix-${value}`], className) },
    children
  );
}

// src/components/Fieldset.js
import { Fieldset as HtmlFieldset, Legend, when as when24 } from "@granularjs/core";
function Fieldset(...args) {
  const { props, children } = splitPropsChildren(args);
  const { legend, className, ...rest } = props;
  return HtmlFieldset(
    { ...rest, className: cx("g-ui-fieldset", className) },
    when24(legend, () => Legend({ className: "g-ui-legend" }, legend)),
    children
  );
}

// src/components/AppBar.js
import { Div as Div36 } from "@granularjs/core";
function AppBar(...args) {
  const { props, children } = splitPropsChildren(args, { position: "sticky" });
  const { position, className, ...rest } = props;
  return Div36(
    {
      ...rest,
      className: cx("g-ui-appbar", classVar("g-ui-appbar-", position, "sticky"), className)
    },
    children
  );
}

// src/components/Sidebar.js
import { Div as Div37, portal as portal4, after as after27, isSignal as isSignal3, isState as isState4, isStatePath as isStatePath3, state as state16, when as when25 } from "@granularjs/core";
function Sidebar(...args) {
  const { props, children } = splitPropsChildren(args, {
    position: "left",
    size: "md",
    blur: true,
    fixed: false,
    minWidth: "button"
  });
  return when25(
    props.fixed,
    () => FixedSidebar(props, children),
    () => DrawerSidebar(props, children)
  );
}
var DrawerSidebar = (props, children) => {
  const {
    open,
    onClose,
    position,
    size,
    blur,
    fixed,
    minWidth,
    className,
    ...rest
  } = props;
  const mounted = state16(false);
  const openState = state16(false);
  const transitionMs = 220;
  const applyOpen = (next) => {
    if (next) {
      mounted.set(true);
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(() => openState.set(true));
      } else {
        setTimeout(() => openState.set(true), 0);
      }
      return;
    }
    openState.set(false);
    setTimeout(() => mounted.set(false), transitionMs);
  };
  applyOpen(!!open.get());
  after27(open).change((next) => applyOpen(!!next));
  const overlayClass = after27(openState, blur).compute((values) => {
    const [open2, blur2] = values;
    return cx(
      "g-ui-sidebar-overlay",
      open2 && "g-ui-sidebar-overlay-open",
      !blur2 && "g-ui-sidebar-overlay-noblur"
    );
  });
  const drawerClass = after27(
    size,
    position,
    openState,
    className
  ).compute((values) => {
    const [size2, position2, open2, className2] = values;
    const positionClass = position2 === "right" ? "g-ui-sidebar-drawer-right g-ui-sidebar-position-right" : "g-ui-sidebar-drawer-left";
    return cx(
      "g-ui-sidebar",
      "g-ui-sidebar-drawer",
      `g-ui-sidebar-size-${size2}`,
      positionClass,
      open2 && "g-ui-sidebar-drawer-open",
      resolveValue(className2)
    );
  });
  return when25(
    mounted,
    () => portal4(
      Div37(
        { className: overlayClass, onClick: onClose },
        Div37(
          { className: drawerClass, onClick: (ev) => ev.stopPropagation() },
          children
        )
      )
    )
  );
};
var FixedSidebar = (props, children) => {
  const {
    open,
    position,
    size,
    minWidth,
    className,
    ...rest
  } = props;
  const classNameComposition = after27(
    size,
    position,
    open,
    minWidth,
    className
  ).compute((values) => {
    const [size2, position2, open2, minWidth2, className2] = values;
    const minWidthValue = minWidth2 || "button";
    let minWidthClass = null;
    if (minWidthValue === "button") minWidthClass = "g-ui-sidebar-min-button";
    else if (minWidthValue === "xs") minWidthClass = "g-ui-sidebar-min-xs";
    else if (minWidthValue === "sm") minWidthClass = "g-ui-sidebar-min-sm";
    else if (minWidthValue === "md") minWidthClass = "g-ui-sidebar-min-md";
    const classNameString = cx(
      "g-ui-sidebar g-ui-sidebar-fixed",
      `g-ui-sidebar-size-${size2 || "md"}`,
      minWidthClass,
      open2 && "g-ui-sidebar-fixed-open",
      className2
    );
    return classNameString;
  });
  return Div37(
    {
      ...rest,
      className: classNameComposition
    },
    children
  );
};

// src/components/Timeline.js
import { Div as Div38, when as when26, list as list6, after as after28, resolve as resolve2, state as state17, Img as Img3, Span as Span19 } from "@granularjs/core";
var PIN_CENTER_OFFSET = { xs: 6, sm: 8, md: 10, lg: 12, xl: 14 };
function resolveActiveColor(color) {
  if (color == null || color === "") return "var(--g-ui-primary)";
  const s = String(color).trim();
  if (s.startsWith("#")) return s;
  return `var(--g-ui-${s})`;
}
function getWeights(items) {
  const list11 = items ?? [];
  return list11.map((item) => {
    if (item == null) return 1;
    const w = Number(item.weight);
    return Number.isFinite(w) && w >= 0 ? w : 1;
  });
}
function getWeightContext(items) {
  const n = (items ?? []).length;
  if (n < 2) return { totalWeight: 0, cumulativeWeights: [0] };
  const weights = getWeights(items);
  const segmentWeights = weights.slice(0, n - 1);
  const totalWeight = segmentWeights.reduce((s, w) => s + w, 0);
  const cumulativeWeights = [0];
  for (let i = 0; i < segmentWeights.length; i++) {
    cumulativeWeights.push(cumulativeWeights[i] + segmentWeights[i]);
  }
  return { totalWeight, cumulativeWeights };
}
function progressToActiveStepWeighted(progressPct, cumulativeWeights, totalWeight, n) {
  if (n < 1 || totalWeight <= 0) return 0;
  const pct = Math.max(0, Math.min(100, progressPct));
  for (let k = n - 1; k >= 0; k--) {
    const threshold = cumulativeWeights[k] / totalWeight * 100;
    if (pct >= threshold) return k;
  }
  return 0;
}
function computeActiveStepAndFill(mode, active, progress, elapsedMs, stepDurationsMs, totalDurationMs, items) {
  const m = mode;
  const n = (items ?? []).length;
  if (n === 0) return { activeStep: 0, progressPct: 0 };
  if (m === "step") {
    const step = Math.max(0, Math.min(n - 1, Math.floor(active ?? 0)));
    return { activeStep: step, progressPct: 0 };
  }
  if (m === "percent") {
    const pct = Math.max(0, Math.min(100, Number(progress) || 0));
    const ctx = getWeightContext(items);
    const step = progressToActiveStepWeighted(pct, ctx.cumulativeWeights, ctx.totalWeight, n);
    return { activeStep: step, progressPct: pct };
  }
  if (m === "time") {
    const elapsed = Number(elapsedMs) || 0;
    const durations = stepDurationsMs;
    const total = totalDurationMs;
    let totalDuration = 0;
    if (Array.isArray(durations) && durations.length >= n) {
      totalDuration = durations.slice(0, n).reduce((s, d) => s + (Number(d) || 0), 0);
    } else if (typeof total === "number" && total > 0) {
      totalDuration = total;
    }
    if (totalDuration <= 0) return { activeStep: 0, progressPct: 0 };
    const segment = totalDuration / n;
    let step = 0;
    if (Array.isArray(durations) && durations.length >= n) {
      let cumulative = 0;
      for (let i = 0; i < n; i++) {
        cumulative += Number(durations[i]) || 0;
        if (elapsed < cumulative) {
          step = i;
          break;
        }
        step = i;
      }
    } else {
      step = Math.min(n - 1, Math.floor(elapsed / segment));
    }
    const progressPct = Math.min(100, elapsed / totalDuration * 100);
    const ctx = getWeightContext(items);
    const stepWeighted = progressToActiveStepWeighted(progressPct, ctx.cumulativeWeights, ctx.totalWeight, n);
    return { activeStep: stepWeighted, progressPct };
  }
  return { activeStep: 0, progressPct: 0 };
}
function computeSegmentFillPercent(mode, activeStep, progressPct, segmentIndex, n, weightContext) {
  if (n < 2 || segmentIndex < 0 || segmentIndex >= n - 1) return 0;
  if (mode === "step") {
    return activeStep > segmentIndex ? 100 : 0;
  }
  const { totalWeight, cumulativeWeights } = weightContext ?? getWeightContext([]);
  if (totalWeight <= 0) return 0;
  const segmentStart = cumulativeWeights[segmentIndex] / totalWeight * 100;
  const segmentEnd = cumulativeWeights[segmentIndex + 1] / totalWeight * 100;
  if (progressPct <= segmentStart) return 0;
  if (progressPct >= segmentEnd) return 100;
  const range = segmentEnd - segmentStart;
  return range <= 0 ? 0 : (progressPct - segmentStart) / range * 100;
}
var timelineIdCounter = 0;
function measureSegmentLayout(timelineId) {
  const el = document.getElementById(timelineId);
  if (!el) return [];
  const itemEls = el.querySelectorAll(".g-ui-timeline-item");
  if (itemEls.length < 2) return [];
  const pinSize = el.dataset.pinSize || "md";
  const offset = PIN_CENTER_OFFSET[pinSize] ?? PIN_CENTER_OFFSET.md;
  const segments = [];
  for (let i = 0; i < itemEls.length - 1; i++) {
    const top = itemEls[i].offsetTop + offset;
    const height = itemEls[i + 1].offsetTop - itemEls[i].offsetTop;
    segments.push({ top, height });
  }
  return segments;
}
function Timeline(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    items: [],
    mode: "step",
    active: 0,
    progress: 0,
    elapsedMs: 0,
    stepDurationsMs: null,
    totalDurationMs: null,
    clickable: false,
    pinRadius: "md",
    reverseActive: false,
    lineWidth: "md",
    pinSize: "md",
    activeColor: "primary",
    align: "left",
    pinMode: "default"
  });
  const {
    items,
    mode,
    active,
    progress,
    elapsedMs,
    stepDurationsMs,
    totalDurationMs,
    clickable,
    pinRadius,
    reverseActive,
    lineWidth,
    pinSize,
    activeColor,
    align,
    pinMode,
    className,
    ...rest
  } = props;
  const { onChange } = rawProps;
  const activeColorResolved = after28(activeColor).compute((c) => resolveActiveColor(resolve2(c)));
  const timelineId = `g-ui-timeline-${++timelineIdCounter}`;
  const segmentLayout = state17([]);
  const state_ = after28(mode, active, progress, elapsedMs, stepDurationsMs, totalDurationMs, items).compute(
    (values) => {
      const [mode2, active2, progress2, elapsedMs2, stepDurationsMs2, totalDurationMs2, items2] = values;
      return computeActiveStepAndFill(
        mode2,
        active2,
        progress2,
        elapsedMs2,
        stepDurationsMs2,
        totalDurationMs2,
        items2
      );
    }
  );
  const reverseTrackLayout = after28(segmentLayout, reverseActive).compute((segs, rev) => {
    if (!resolve2(rev) || !segs?.length) return null;
    const first = segs[0];
    let totalHeight = 0;
    for (const s of segs) totalHeight += s.height;
    return { top: first.top, height: totalHeight };
  });
  const reverseFillHeight = after28(state_).compute(
    (s) => s?.progressPct != null ? `${Math.max(0, Math.min(100, s.progressPct))}%` : "0%"
  );
  const showTrack = after28(mode).compute((m) => {
    const v = resolve2(m);
    return v === "time" || v === "percent" || v === "step";
  });
  const resolvedMode = after28(mode).compute((m) => resolve2(m));
  function scheduleMeasure() {
    setTimeout(() => {
      const segments = measureSegmentLayout(timelineId);
      if (segments.length) segmentLayout.set(segments);
    }, 0);
  }
  after28(items).change(() => scheduleMeasure());
  after28(pinSize).change(() => scheduleMeasure());
  scheduleMeasure();
  return Div38(
    {
      ...rest,
      id: timelineId,
      "data-pin-size": after28(pinSize).compute((s) => resolve2(s) ?? "md"),
      style: after28(activeColorResolved).compute((c) => ({
        "--g-ui-timeline-active-color": c || "var(--g-ui-primary)"
      })),
      className: cx(
        "g-ui-timeline",
        after28(mode).compute((m) => m ? `g-ui-timeline-mode-${resolve2(m)}` : ""),
        after28(showTrack).compute((show) => show ? "g-ui-timeline-has-track" : ""),
        after28(clickable).compute((c) => resolve2(c) ? "g-ui-timeline-clickable" : ""),
        after28(reverseActive).compute((r) => resolve2(r) ? "g-ui-timeline-reverse" : ""),
        after28(align).compute((a) => resolve2(a) === "right" ? "g-ui-timeline-align-right" : ""),
        classVar("g-ui-timeline-pin-radius-", pinRadius, "md"),
        classVar("g-ui-timeline-line-width-", lineWidth, "md"),
        classVar("g-ui-timeline-pin-size-", pinSize, "md"),
        after28(pinMode).compute((p) => p ? `g-ui-timeline-pin-mode-${resolve2(p)}` : ""),
        className
      )
    },
    when26(
      showTrack,
      () => after28(reverseActive).compute((rev) => {
        if (resolve2(rev)) {
          return Div38(
            {
              className: "g-ui-timeline-track-segment g-ui-timeline-track-reverse",
              style: after28(reverseTrackLayout).compute(
                (l) => l ? { top: `${l.top}px`, height: `${l.height}px` } : {}
              )
            },
            Div38({
              className: "g-ui-timeline-track-fill",
              style: after28(reverseFillHeight).compute((h) => h ? { height: h } : { height: "0%" })
            })
          );
        }
        return list6(segmentLayout, (seg, idx) => {
          const segStyle = after28(seg).compute(
            (s) => s ? { top: `${s.top}px`, height: `${s.height}px` } : {}
          );
          const fillPct = after28(state_, idx, items, resolvedMode).compute(([s, i, its, m]) => {
            const itsList = its ?? [];
            const n = itsList.length;
            const weightContext = getWeightContext(itsList);
            return computeSegmentFillPercent(
              m,
              s?.activeStep ?? 0,
              s?.progressPct ?? 0,
              resolve2(i) ?? 0,
              n,
              weightContext
            );
          });
          const fillHeight = after28(fillPct).compute((p) => `${Math.max(0, Math.min(100, p))}%`);
          return Div38(
            {
              className: "g-ui-timeline-track-segment",
              style: after28(segStyle).compute((x) => x)
            },
            Div38({
              className: "g-ui-timeline-track-fill",
              style: after28(fillHeight).compute((h) => h ? { height: h } : { height: "0%" })
            })
          );
        });
      })
    ),
    list6(items, (item, idx) => {
      const itemState = after28(state_, idx).compute(([s, i]) => {
        const step = s?.activeStep ?? 0;
        const index = resolve2(i) ?? 0;
        if (index < step) return "completed";
        if (index === step) return "active";
        return "future";
      });
      const itemClass = after28(itemState).compute((st) => st ? `g-ui-timeline-item-${st}` : "");
      const handleClick = resolve2(clickable) && typeof onChange === "function" ? () => {
        const i = resolve2(idx);
        if (typeof i === "number") onChange(i);
      } : void 0;
      const pinModeVal = after28(pinMode).compute((p) => resolve2(p) ?? "default");
      const pinExtra = after28(pinModeVal, item).compute((mode2, it) => {
        const m = mode2 ?? "default";
        if (m === "icon" && (it?.icon != null || it?.pinIcon != null))
          return Span19(
            { className: "g-ui-timeline-pin-icon material-symbols-outlined" },
            it.icon ?? it.pinIcon ?? ""
          );
        if (m === "image" && (it?.image != null || it?.pinImage != null || it?.src != null))
          return Img3({
            className: "g-ui-timeline-pin-image",
            src: it.image ?? it.pinImage ?? it.src,
            alt: it.pinImageAlt ?? ""
          });
        if (m === "custom" && it?.pinContent != null) return it.pinContent;
        return null;
      });
      const hasPinExtra = after28(pinModeVal, item).compute((mode2, it) => {
        const m = mode2 ?? "default";
        if (m === "icon") return it?.icon != null || it?.pinIcon != null;
        if (m === "image") return it?.image != null || it?.pinImage != null || it?.src != null;
        if (m === "custom") return it?.pinContent != null;
        return false;
      });
      const dotBlock = Div38(
        { className: "g-ui-timeline-dot" },
        Div38({ className: "g-ui-timeline-dot-inner" }),
        when26(hasPinExtra, () => pinExtra)
      );
      const contentBlock = Div38(
        { className: "g-ui-timeline-content" },
        when26(item.title, () => Div38({ className: "g-ui-timeline-title" }, item.title)),
        when26(
          item.description,
          () => Div38({ className: "g-ui-timeline-desc" }, item.description)
        ),
        item.content
      );
      return Div38(
        {
          className: cx("g-ui-timeline-item", itemClass),
          style: after28(activeColorResolved).compute(
            (c) => c ? { "--g-ui-timeline-active-color": c } : void 0
          ),
          onClick: handleClick,
          role: handleClick ? "button" : void 0,
          tabIndex: handleClick ? 0 : void 0
        },
        dotBlock,
        contentBlock
      );
    })
  );
}

// src/components/Stepper.js
import { Div as Div39, list as list7 } from "@granularjs/core";
function Stepper(...args) {
  const { props } = splitPropsChildren(args, { active: 0, items: [] });
  const { active, items, className, ...rest } = props;
  return Div39(
    { ...rest, className: cx("g-ui-stepper", className) },
    list7(
      items,
      (item, idx) => Div39(
        { className: cx("g-ui-stepper-item", [active, (value) => {
          console.log("value", value, "idx", idx);
          if (idx.get() === value) return "g-ui-stepper-active";
          return "";
        }]) },
        Div39({ className: "g-ui-stepper-index" }, String(idx + 1)),
        Div39({ className: "g-ui-stepper-label" }, item.label)
      )
    )
  );
}

// src/components/Rating.js
import { Span as Span20, after as after29, state as state18 } from "@granularjs/core";
function Rating(...args) {
  const { props, rawProps } = splitPropsChildren(args, { value: 0, max: 5, size: "md" });
  const { value, max, size, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state18(resolveValue(value));
  after29(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const setValue = (next) => {
    currentState.set(next);
    onChange?.(next);
  };
  const items = [];
  const maxValue = Number(resolveValue(max)) || 0;
  for (let i = 1; i <= maxValue; i += 1) items.push(i);
  return Span20(
    {
      ...rest,
      className: cx("g-ui-rating", classVar("g-ui-rating-size-", size, "md"), props.className ?? className)
    },
    items.map(
      (i) => Span20(
        {
          className: cx(
            "g-ui-rating-item",
            after29(currentState).compute((current) => {
              if (i <= current) return "g-ui-rating-item-active";
              return "";
            })
          ),
          onClick: () => setValue(i)
        },
        "\u2605"
      )
    )
  );
}

// src/components/Tag.js
import { Span as Span21 } from "@granularjs/core";
function Tag(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Span21({ ...rest, className: cx("g-ui-tag", className) }, children);
}

// src/components/Calendar.js
import { Button as Button8, Div as Div40, state as state19, after as after30 } from "@granularjs/core";
var weekDays = ["S", "M", "T", "W", "T", "F", "S"];
function Calendar(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md" });
  const { value, className, size, ...rest } = props;
  const { onChange } = rawProps;
  const resolveDate2 = (next) => {
    const resolved = resolveValue(next);
    if (resolved instanceof Date) return resolved;
    if (resolved == null) return null;
    const parsed = new Date(resolved);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed;
  };
  const currentState = state19(resolveDate2(value) ?? /* @__PURE__ */ new Date());
  const viewState = state19(new Date(currentState.get()));
  after30(value).change((next) => {
    const resolved = resolveDate2(next);
    if (resolved == null) return;
    currentState.set(resolved);
    viewState.set(new Date(resolved));
  });
  const createDate = (year, month, day) => {
    const maxDay = new Date(year, month + 1, 0).getDate();
    return new Date(year, month, Math.min(day, maxDay));
  };
  const setDate = (day) => {
    const current = viewState.get();
    const next = createDate(current.getFullYear(), current.getMonth(), day);
    currentState.set(next);
    viewState.set(next);
    onChange?.(next);
  };
  const shiftMonth = (delta) => {
    const current = viewState.get();
    const next = createDate(current.getFullYear(), current.getMonth() + delta, current.getDate());
    viewState.set(next);
  };
  const shiftYear = (delta) => {
    const current = viewState.get();
    const next = createDate(current.getFullYear() + delta, current.getMonth(), current.getDate());
    viewState.set(next);
  };
  const monthLabel = after30(viewState).compute((current) => current.toLocaleString("default", { month: "long" }));
  const yearLabel = after30(viewState).compute((current) => String(current.getFullYear()));
  const gridCells = after30(viewState, currentState).compute(([current, selected]) => {
    const year = current.getFullYear();
    const month = current.getMonth();
    const first = new Date(year, month, 1);
    const start = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < start; i += 1) cells.push({ muted: true, label: "" });
    for (let d = 1; d <= daysInMonth; d += 1) cells.push({ label: d });
    return [
      ...weekDays.map((d) => Div40({ className: "g-ui-calendar-cell g-ui-calendar-cell-muted" }, d)),
      ...cells.map(
        (c) => Div40(
          {
            className: cx(
              "g-ui-calendar-cell",
              c.muted && "g-ui-calendar-cell-muted",
              c.label && selected.getFullYear() === year && selected.getMonth() === month && c.label === selected.getDate() && "g-ui-calendar-cell-active"
            ),
            onClick: () => c.label && setDate(c.label)
          },
          c.label
        )
      )
    ];
  });
  return Div40(
    { ...rest, className: cx("g-ui-calendar", className, classVar("g-ui-calendar-size-", size, "md")) },
    Div40(
      { className: "g-ui-calendar-header" },
      ActionIcon(
        { size: "xs", variant: "subtle", className: "g-ui-calendar-nav", onClick: () => shiftMonth(-1) },
        Icon({ size: "sm", className: "g-ui-calendar-nav-icon", innerHTML: backwardSvg })
      ),
      Div40(
        { className: "g-ui-calendar-title-group" },
        Button8({ type: "button", className: "g-ui-calendar-title-button", onClick: () => shiftMonth(1) }, monthLabel),
        Button8({ type: "button", className: "g-ui-calendar-title-button", onClick: () => shiftYear(1) }, yearLabel)
      ),
      ActionIcon(
        { size: "xs", variant: "subtle", className: "g-ui-calendar-nav", onClick: () => shiftMonth(1) },
        Icon({ size: "sm", className: "g-ui-calendar-nav-icon", innerHTML: forwardSvg })
      )
    ),
    Div40({ className: "g-ui-calendar-grid" }, gridCells)
  );
}

// src/components/MultiSelect.js
import { Div as Div41, Span as Span22, Input as Input5, when as when27, after as after31, state as state20 } from "@granularjs/core";
function MultiSelect(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: "md", searchable: true });
  const { value, data, size, className, placeholder, searchable, ...rest } = props;
  const { onChange, onSearchChange } = rawProps;
  const currentState = state20(resolveValue(value) ?? []);
  const searchState = state20("");
  const openState = state20(false);
  const rootNode = state20(null);
  const normalizeData = (items) => {
    const resolved = resolveValue(items) ?? [];
    return resolved.map((item) => {
      if (typeof item === "string") return { value: item, label: item };
      if (item && typeof item === "object") return item;
      return { value: String(item), label: String(item) };
    });
  };
  after31(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  let outsideCleanup = null;
  after31(openState).change((next) => {
    if (outsideCleanup) {
      outsideCleanup();
      outsideCleanup = null;
    }
    if (!next) return;
    const handler = (ev) => {
      const root = rootNode.get();
      if (!root) return;
      if (root.contains(ev.target)) return;
      openState.set(false);
    };
    document.addEventListener("mousedown", handler);
    outsideCleanup = () => document.removeEventListener("mousedown", handler);
  });
  after31(searchState).change((next) => {
    onSearchChange?.(next);
  });
  const toggle = (val) => {
    const selected = currentState.get() ?? [];
    const next = selected.includes(val) ? selected.filter((v) => v !== val) : selected.concat(val);
    currentState.set(next);
    onChange?.(next);
  };
  const normalizedData = after31(data).compute((nextData) => normalizeData(nextData));
  const filteredItems = after31(normalizedData, searchState).compute(([items, query]) => {
    const q = String(resolveValue(query) ?? "").toLowerCase().trim();
    if (!q) return items;
    return items.filter((item) => String(item.label ?? "").toLowerCase().includes(q));
  });
  const isEmpty = after31(currentState, searchState).compute(([nextSelected, query]) => {
    const list11 = resolveValue(nextSelected) ?? [];
    const q = String(resolveValue(query) ?? "");
    return !list11.length && !q;
  });
  const isSearchable = after31(searchable).compute((next) => !!next);
  return Div41(
    { ...rest, node: rootNode, className: cx("g-ui-select-multi-root", className) },
    Div41(
      {
        className: cx("g-ui-select-multi", classVar("g-ui-select-multi-size-", size, "md")),
        onClick: () => openState.set(true)
      },
      after31(normalizedData, currentState).compute(([items, current]) => {
        const list11 = resolveValue(current) ?? [];
        return list11.map((val) => {
          const match = (items ?? []).find((entry) => entry.value === val);
          const label = match?.label ?? val;
          return Span22(
            {
              className: "g-ui-select-tag"
            },
            Span22(
              {
                className: "g-ui-select-tag-label",
                onClick: (ev) => {
                  ev?.stopPropagation?.();
                }
              },
              label
            ),
            Span22({
              className: "g-ui-select-tag-remove",
              innerHTML: closeSvg,
              onClick: (ev) => {
                ev?.stopPropagation?.();
                toggle(val);
              }
            })
          );
        });
      }),
      when27(isEmpty, () => Span22({ className: "g-ui-select-multi-placeholder" }, placeholder ?? "Select...")),
      when27(
        isSearchable,
        () => Input5({
          className: "g-ui-select-multi-input",
          value: searchState,
          onInput: (ev) => searchState.set(ev.target?.value ?? ""),
          onFocus: () => openState.set(true)
        })
      )
    ),
    when27(
      openState,
      () => Div41(
        { className: "g-ui-select-dropdown" },
        after31(filteredItems).compute((items) => {
          if (!items.length) {
            return Div41({ className: "g-ui-select-item" }, "Nothing found");
          }
          return items.map(
            (item) => Div41(
              {
                className: cx(
                  "g-ui-select-item",
                  item.disabled && "g-ui-select-item-disabled",
                  after31(currentState).compute((current) => {
                    const list11 = resolveValue(current) ?? [];
                    return list11.includes(item.value) ? "g-ui-select-item-active" : "";
                  })
                ),
                onClick: () => {
                  if (item.disabled) return;
                  toggle(item.value);
                }
              },
              Span22({
                className: "g-ui-select-item-check",
                innerHTML: after31(currentState).compute((current) => {
                  const list11 = resolveValue(current) ?? [];
                  return list11.includes(item.value) ? checkedSvg : "";
                })
              }),
              Span22({ className: "g-ui-select-item-label" }, item.label)
            )
          );
        })
      )
    )
  );
}

// src/components/ToastStack.js
import { Div as Div43, when as when29, list as list8, portal as portal5 } from "@granularjs/core";

// src/components/Toast.js
import { Div as Div42, Button as Button9, when as when28, state as state21 } from "@granularjs/core";
function Toast(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { title, className, ...rest } = props;
  const { onClose } = rawProps;
  const visible = state21(true);
  const close = () => {
    visible.set(false);
    onClose?.();
    console.log("close");
  };
  return when28(visible, () => Div42(
    { ...rest, className: cx("g-ui-toast", className) },
    Div42(
      { className: "g-ui-toast-row" },
      when28(title, () => Div42({ className: "g-ui-toast-title" }, title)),
      Button9(
        { className: "g-ui-toast-close", onClick: close },
        Icon({ innerHTML: closeSvg })
      )
    ),
    children
  ));
}

// src/components/ToastStack.js
function ToastStack(...args) {
  const { props, rawProps } = splitPropsChildren(args, { items: [] });
  const { items, className, timeout, ...rest } = props;
  const { onClose } = rawProps;
  return portal5(Div43(
    { ...rest, className: cx("g-ui-toast-stack", className) },
    list8(
      items,
      (item) => Toast({ title: item.title, onClose: () => onClose?.(item) }, item.message)
    )
  ));
}

// src/components/DatePicker.js
function DatePicker(...args) {
  const { props } = splitPropsChildren(args);
  return Calendar(props);
}

// src/components/Notifications.js
import { Div as Div44, when as when30, after as after32 } from "@granularjs/core";
function Notifications(...args) {
  const { props, rawProps } = splitPropsChildren(args, { items: [], position: "top-right" });
  const { items, position, className, ...rest } = props;
  const { onRemove } = rawProps;
  const timers = /* @__PURE__ */ new Map();
  const getId = (item, index) => item?.id ?? item?.key ?? index;
  const notifications = after32(items).compute((nextItems) => {
    const list11 = resolveValue(nextItems) ?? [];
    const active = /* @__PURE__ */ new Set();
    list11.forEach((item, index) => {
      const id = getId(item, index);
      active.add(id);
      if (item?.autoClose && !timers.has(id)) {
        const timeout = setTimeout(() => {
          timers.delete(id);
          onRemove?.(item);
        }, item.autoClose);
        timers.set(id, timeout);
      }
    });
    for (const [id, handle] of timers.entries()) {
      if (!active.has(id)) {
        clearTimeout(handle);
        timers.delete(id);
      }
    }
    return list11.map(
      (item, index) => Notification(
        {
          key: getId(item, index),
          title: item.title,
          color: item.color,
          icon: item.icon,
          loading: item.loading,
          withCloseButton: item.withCloseButton,
          withBorder: item.withBorder,
          onClose: () => {
            item.onClose?.();
            onRemove?.(item);
          }
        },
        item.message ?? item.body ?? item.content ?? item.text
      )
    );
  });
  return Div44(
    {
      ...rest,
      className: cx("g-ui-notifications", classVar("g-ui-notifications-position-", position, "top-right"), className)
    },
    notifications
  );
}

// src/components/RangeSlider.js
import { Div as Div45, after as after33, state as state22, when as when31 } from "@granularjs/core";
function RangeSlider(...args) {
  const { props, rawProps } = splitPropsChildren(args, { min: 0, max: 100, step: 1, size: "md" });
  const { value, marks, min, max, step, size, disabled, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state22(resolveValue(value ?? [min, max]));
  const getBounds = () => {
    const minValue = Number(resolveValue(min));
    const maxValue = Number(resolveValue(max));
    if (!Number.isFinite(minValue) || !Number.isFinite(maxValue)) {
      return { minValue: 0, maxValue: 100 };
    }
    return { minValue: Math.min(minValue, maxValue), maxValue: Math.max(minValue, maxValue) };
  };
  const getStep = () => {
    const stepValue = Number(resolveValue(step));
    if (Number.isFinite(stepValue) && stepValue > 0) return stepValue;
    return 1;
  };
  const normalize = (vals) => {
    const { minValue, maxValue } = getBounds();
    const stepValue = getStep();
    let list11 = [minValue, maxValue];
    if (Array.isArray(vals)) list11 = vals;
    const first = Math.max(minValue, Math.min(maxValue, Number(list11[0])));
    const second = Math.max(minValue, Math.min(maxValue, Number(list11[1])));
    const low = Math.round(Math.min(first, second) / stepValue) * stepValue;
    const high = Math.round(Math.max(first, second) / stepValue) * stepValue;
    return [low, high];
  };
  after33(value).change((next) => {
    if (next == null) return;
    currentState.set(normalize(next));
  });
  const setValue = (next) => {
    const normalized = normalize(next);
    if (normalized?.[0] === currentState.get()?.[0] && normalized?.[1] === currentState.get()?.[1]) {
      return;
    }
    currentState.set(normalized);
    onChange?.(normalized);
  };
  const percent = after33(currentState).compute((vals) => {
    const { minValue, maxValue } = getBounds();
    const range = maxValue - minValue;
    const [low, high] = normalize(vals);
    if (range <= 0) return { lowPct: 0, highPct: 0 };
    const lowPct = (low - minValue) / range * 100;
    const highPct = (high - minValue) / range * 100;
    return {
      lowPct: Math.max(0, Math.min(100, lowPct)),
      highPct: Math.max(0, Math.min(100, highPct))
    };
  });
  const updateFromEvent = (ev, getRect, thumb) => {
    const rect = getRect?.();
    if (!rect || rect.width === 0) return;
    const x = Math.min(Math.max(ev.clientX - rect.left, 0), rect.width);
    const ratio = x / rect.width;
    const { minValue, maxValue } = getBounds();
    const nextValue = minValue + ratio * (maxValue - minValue);
    let current = currentState;
    if (typeof currentState.get === "function") current = currentState.get();
    const [low, high] = normalize(current);
    if (thumb === "low") setValue([nextValue, high]);
    else setValue([low, nextValue]);
  };
  const startDrag = (ev, forcedThumb, trackEl) => {
    if (resolveBool(disabled)) return;
    ev.preventDefault?.();
    const track = trackEl || ev.currentTarget;
    const getRect = () => track.getBoundingClientRect();
    const rect = getRect();
    let percentValue = percent;
    if (typeof percent.get === "function") percentValue = percent.get();
    const { lowPct, highPct } = percentValue;
    const clickPct = (ev.clientX - rect.left) / rect.width * 100;
    let thumb = forcedThumb;
    if (!thumb) {
      const isLow = Math.abs(clickPct - lowPct) <= Math.abs(clickPct - highPct);
      thumb = "high";
      if (isLow) thumb = "low";
    }
    track.setPointerCapture?.(ev.pointerId);
    updateFromEvent(ev, getRect, thumb);
    const handleMove = (moveEv) => updateFromEvent(moveEv, getRect, thumb);
    const handleUp = () => {
      track.releasePointerCapture?.(ev.pointerId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };
  return Div45(
    {
      ...rest,
      className: cx(
        "g-ui-range-slider",
        classVar("g-ui-slider-size-", size, "md"),
        classFlag("g-ui-slider-disabled", disabled),
        props.className ?? className
      )
    },
    Div45(
      { className: "g-ui-slider-track", onPointerDown: (ev) => startDrag(ev) },
      Div45({
        className: "g-ui-slider-bar",
        style: after33(percent).compute(({ lowPct, highPct }) => ({
          left: `${lowPct}%`,
          width: `${Math.max(0, highPct - lowPct)}%`
        }))
      }),
      Div45({
        className: "g-ui-slider-thumb",
        style: after33(percent).compute(({ lowPct }) => ({ left: `${lowPct}%` })),
        onPointerDown: (ev) => {
          ev.stopPropagation?.();
          startDrag(ev, "low", ev.currentTarget.parentElement);
        }
      }),
      Div45({
        className: "g-ui-slider-thumb",
        style: after33(percent).compute(({ highPct }) => ({ left: `${highPct}%` })),
        onPointerDown: (ev) => {
          ev.stopPropagation?.();
          startDrag(ev, "high", ev.currentTarget.parentElement);
        }
      })
    ),
    when31(marks, () => Div45(
      { className: "g-ui-slider-marks" },
      marks.map((mark) => SliderMark({ mark, getBounds }))
    ))
  );
}

// src/components/DateInput.js
import { state as state23, after as after34 } from "@granularjs/core";
function DateInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md", format: { pattern: "dddd-dd-dd" } });
  const {
    value,
    size,
    calendarSize,
    leftSection,
    rightSection,
    className,
    format,
    minDate,
    maxDate,
    ...rest
  } = props;
  const { onChange } = rawProps;
  const resolveDate2 = (next) => {
    const resolved = resolveValue(next);
    if (resolved instanceof Date) return resolved;
    if (resolved == null || resolved === "") return null;
    const parsed = new Date(resolved);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed;
  };
  const isSameDay2 = (left, right) => left && right && left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate();
  const formatDate2 = (date) => {
    if (!date) return "";
    const year = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const parseDate = (text) => {
    const digits = String(text ?? "").replace(/\D/g, "");
    if (digits.length < 8) return null;
    const year = Number(digits.slice(0, 4));
    const month = Number(digits.slice(4, 6));
    const day = Number(digits.slice(6, 8));
    if (!year || !month || !day) return null;
    const candidate = new Date(year, month - 1, day);
    if (candidate.getFullYear() !== year || candidate.getMonth() !== month - 1 || candidate.getDate() !== day) {
      return null;
    }
    const min = resolveDate2(minDate);
    if (min && candidate < min) return null;
    const max = resolveDate2(maxDate);
    if (max && candidate > max) return null;
    return candidate;
  };
  const currentDate = state23(resolveDate2(value));
  const textValue = state23(formatDate2(currentDate.get()));
  const opened = state23(false);
  after34(value).change((next) => {
    const resolved = resolveDate2(next);
    if (isSameDay2(resolved, currentDate.get())) return;
    if (resolved == null) {
      currentDate.set(null);
      textValue.set("");
      return;
    }
    currentDate.set(resolved);
    textValue.set(formatDate2(resolved));
  });
  after34(textValue).change((next) => {
    const parsed = parseDate(next);
    if (!parsed) return;
    if (isSameDay2(parsed, currentDate.get())) return;
    currentDate.set(parsed);
    onChange?.(parsed);
  });
  const setDate = (next) => {
    if (!next) return;
    if (isSameDay2(next, currentDate.get())) return;
    currentDate.set(next);
    textValue.set(formatDate2(next));
    onChange?.(next);
    opened.set(false);
  };
  return Popover(
    {
      opened,
      onChange: (next) => opened.set(!!next),
      content: Calendar({ size: classVar("", calendarSize, "xs"), value: currentDate, onChange: setDate }),
      className: "g-ui-date-input-popover"
    },
    TextInput({
      ...rest,
      size,
      className: cx("g-ui-dateinput", className),
      leftSection,
      rightSection,
      type: "text",
      inputMode: "numeric",
      format,
      value: textValue,
      onChange: (next) => textValue.set(next)
    })
  );
}

// src/components/Popper.js
import { Div as Div46, when as when32, after as after35, state as state24 } from "@granularjs/core";
function Popper(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { opened, content, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state24(resolveValue(opened) ?? false);
  after35(opened).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(!!resolved);
  });
  const setOpen = (next) => {
    currentState.set(next);
    onChange?.(next);
  };
  return Div46(
    { ...rest, className: cx("g-ui-popper", className) },
    Div46({ onClick: () => setOpen(!currentState.get()) }, children),
    when32(currentState, () => Div46({ className: "g-ui-popper-dropdown" }, content))
  );
}

// src/components/PasswordInput.js
import { Button as Button10, after as after36, when as when33, state as state25 } from "@granularjs/core";
function PasswordInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md" });
  const { size, className, rightSection, ...rest } = props;
  const { onChange } = rawProps;
  const visible = state25(false);
  const inputType = after36(visible).compute((next) => {
    if (next) return "text";
    return "password";
  });
  const computedRightSection = after36(rightSection).compute(
    (next) => next ?? Button10(
      { className: "g-ui-password-toggle", onClick: () => visible.set(!visible.get()) },
      when33(visible, () => "Hide", () => "Show")
    )
  );
  return TextInput({
    ...rest,
    size,
    className,
    onChange,
    rightSection: computedRightSection,
    type: inputType
  });
}

// src/components/SearchInput.js
import { Span as Span23, Div as Div47 } from "@granularjs/core";
function SearchInput(...args) {
  const { props } = splitPropsChildren(args, { size: "md" });
  const { size, className, ...rest } = props;
  return TextInput({
    ...rest,
    size,
    className,
    leftSection: Div47({ className: "g-ui-search-input-left-section", innerHTML: searchSvg }),
    type: "text",
    inputMode: "search"
  });
}

// src/components/CopyButton.js
import { Button as Button11, after as after37, when as when34 } from "@granularjs/core";
import { state as state26 } from "@granularjs/core";
function CopyButton(...args) {
  const { props, children } = splitPropsChildren(args, { value: "", timeout: 1500 });
  const { value, timeout, className, ...rest } = props;
  const copied = state26(false);
  const buttonClass = after37(copied).compute(
    (next) => cx("g-ui-copy-button", next && "g-ui-copy-button-done", className)
  );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(String(value));
      copied.set(true);
      setTimeout(() => copied.set(false), timeout);
    } catch {
    }
  };
  return Button11(
    {
      ...rest,
      className: buttonClass,
      onClick: copy,
      type: "button"
    },
    when34(children?.length, () => children, () => when34(copied, () => "Copied", () => "Copy"))
  );
}

// src/components/ProgressRing.js
import { Div as Div48, after as after38, resolve as resolve3 } from "@granularjs/core";
function clampValue(v) {
  const n = Number(v);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n));
}
function ProgressRing(...args) {
  const { props } = splitPropsChildren(args, { size: "md", value: null, color: "primary" });
  const { size, value, color, className, ...rest } = props;
  const hasValue = after38(value).compute((v) => v != null && v !== "");
  const ringValue = after38(value).compute((v) => clampValue(v));
  const style = after38(ringValue, hasValue).compute(([val, has]) => {
    if (!has) return {};
    const num = Number(val);
    const deg = Number.isNaN(num) ? 0 : Math.max(0, Math.min(360, num * 3.6));
    return {
      background: `conic-gradient(var(--g-ui-progress-ring-fill, var(--g-ui-primary)) 0deg ${deg}deg, var(--g-ui-border-muted) ${deg}deg 360deg)`
    };
  });
  const indeterminateClass = after38(hasValue).compute((has) => has ? "" : "g-ui-progress-ring-indeterminate");
  const ariaValueNow = after38(hasValue, value).compute(([has, v]) => has ? clampValue(v) : void 0);
  return Div48(
    {
      ...rest,
      className: cx(
        "g-ui-progress-ring",
        classVar("g-ui-progress-ring-", color, "primary"),
        [size, (s) => `g-ui-progress-ring-size-${resolve3(s) ?? "md"}`],
        indeterminateClass,
        className
      ),
      style,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": ariaValueNow
    },
    Div48({ className: "g-ui-progress-ring-hole" })
  );
}

// src/components/Autocomplete.js
import { Div as Div50, state as state27, after as after39, list as list9, when as when35 } from "@granularjs/core";

// src/components/ScrollArea.js
import { Div as Div49 } from "@granularjs/core";
function ScrollArea(...args) {
  const { props, children } = splitPropsChildren(args, { size: "md" });
  const { size, className, ...rest } = props;
  return Div49(
    { ...rest, className: cx("g-ui-scroll-area", [size, (value) => `g-ui-scroll-area-${value}`], className) },
    children
  );
}

// src/components/Autocomplete.js
function getByPath(obj, path) {
  if (path == null || path === "") return obj;
  const keys = String(path).trim().split(".");
  let v = obj;
  for (const k of keys) v = v?.[k];
  return v;
}
function defaultFilter(query, item, getLabel) {
  const label = getLabel(item);
  return String(label ?? "").toLowerCase().includes(String(query ?? "").toLowerCase());
}
function Autocomplete(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    data: [],
    size: "md",
    valuePath: "value",
    labelPath: "label"
  });
  const {
    data,
    value,
    size,
    valuePath,
    labelPath,
    filter,
    placeholder,
    label,
    description,
    error,
    leftSection,
    rightSection,
    className,
    inputClassName,
    disabled,
    ...rest
  } = props;
  const { onChange, renderItem } = rawProps;
  const opened = state27(false);
  const query = state27("");
  const currentValue = state27(resolveValue(value));
  after39(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved === currentValue.get()) return;
    currentValue.set(resolved);
  });
  const dataResolved = after39(data).compute((d) => Array.isArray(d) ? d : []);
  const selectedItem = after39(dataResolved, currentValue, valuePath).compute(([items, val, vPath]) => {
    if (val === void 0 || val === null) return null;
    const getVal = (it) => vPath == null || vPath === "" ? it : getByPath(it, vPath);
    return items.find((it) => getVal(it) === val) ?? null;
  });
  const displayText = after39(selectedItem, opened, query, labelPath).compute(([sel, isOpen, q, lPath]) => {
    const getLabelCur = (item) => lPath == null || lPath === "" ? String(item ?? "") : String(getByPath(item, lPath) ?? "");
    if (isOpen) return q ?? "";
    return sel ? getLabelCur(sel) : "";
  });
  const filteredItems = after39(dataResolved, query, filter, labelPath).compute(([items, q, filterVal, lPath]) => {
    const getLabelCur = (item) => lPath == null || lPath === "" ? String(item ?? "") : String(getByPath(item, lPath) ?? "");
    const fn = resolveValue(filterVal) ?? defaultFilter;
    return items.filter((item) => fn(q, item, getLabelCur));
  });
  const selectItem = (item) => {
    const vPath = resolveValue(valuePath);
    const val = vPath == null || vPath === "" ? item : getByPath(item, vPath);
    currentValue.set(val);
    query.set("");
    opened.set(false);
    onChange?.(val);
  };
  const open = () => {
    if (resolveValue(disabled)) return;
    opened.set(true);
    const sel = selectedItem.get();
    const lPath = resolveValue(labelPath);
    const getLabelCur = (item) => lPath == null || lPath === "" ? String(item ?? "") : String(getByPath(item, lPath) ?? "");
    query.set(sel ? getLabelCur(sel) : "");
  };
  const close = () => {
    opened.set(false);
    const sel = selectedItem.get();
    const lPath = resolveValue(labelPath);
    const getLabelCur = (item) => lPath == null || lPath === "" ? String(item ?? "") : String(getByPath(item, lPath) ?? "");
    query.set(sel ? getLabelCur(sel) : "");
  };
  const { onChange: _omitOnChange, ...restForInput } = rest;
  const inputProps = {
    ...restForInput,
    size,
    label,
    description,
    error,
    leftSection,
    rightSection,
    placeholder: resolveValue(placeholder) ?? void 0,
    disabled,
    value: displayText,
    onInput: (ev) => query.set(ev?.target?.value ?? ""),
    onFocus: open,
    onClick: open,
    onBlur: () => setTimeout(() => close(), 150)
  };
  const getValueForItem = (item) => {
    const vPath = resolveValue(valuePath);
    return vPath == null || vPath === "" ? item : getByPath(item, vPath);
  };
  const itemActiveClass = (item) => after39(currentValue, valuePath).compute(([v, vPath]) => {
    const getVal = (it) => vPath == null || vPath === "" ? it : getByPath(it, vPath);
    return getVal(item) === v ? "g-ui-autocomplete-item-active" : "";
  });
  const renderOption = (item) => {
    if (renderItem && typeof renderItem === "function") {
      const node = renderItem(item);
      if (node != null)
        return Div50(
          {
            className: cx("g-ui-autocomplete-item", itemActiveClass(item)),
            onClick: () => selectItem(item),
            role: "option"
          },
          node
        );
    }
    return Div50(
      {
        className: cx("g-ui-autocomplete-item", itemActiveClass(item)),
        onClick: () => selectItem(item),
        role: "option"
      },
      after39(labelPath).compute(
        (lPath) => lPath == null || lPath === "" ? String(item ?? "") : String(getByPath(item, lPath) ?? "")
      )
    );
  };
  return Div50(
    { className: cx("g-ui-autocomplete", className, classFlag("g-ui-autocomplete-disabled", disabled)) },
    TextInput({
      ...inputProps,
      className: cx("g-ui-autocomplete-input-wrapper", inputProps.className),
      inputClassName: cx("g-ui-autocomplete-input", inputClassName)
    }),
    when35(
      opened,
      () => Div50(
        {
          className: "g-ui-autocomplete-dropdown",
          role: "listbox"
        },
        ScrollArea(
          { className: "g-ui-autocomplete-list", style: { maxHeight: "240px" } },
          list9(filteredItems, (item) => renderOption(item))
        )
      )
    )
  );
}

// src/components/SelectSearch.js
function SelectSearch(...args) {
  return Autocomplete(...args);
}

// src/components/RangePicker.js
import { Div as Div51, Span as Span24, state as state28, after as after40 } from "@granularjs/core";
function resolveDate(v) {
  const resolved = resolveValue(v);
  if (resolved instanceof Date) return resolved;
  if (resolved == null || resolved === "") return null;
  const d = new Date(resolved);
  return Number.isNaN(d.getTime()) ? null : d;
}
function toDatePair(value) {
  const raw = resolveValue(value);
  if (raw == null) return [null, null];
  const arr = Array.isArray(raw) ? raw : [raw];
  return [resolveDate(arr[0]), resolveDate(arr[1])];
}
function isSameDay(a, b) {
  if (!a || !b) return a === b;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function RangePicker(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: "md" });
  const { value, size, minDate, maxDate, className, placeholderMin, placeholderMax, ...rest } = props;
  const { onChange } = rawProps;
  const [initialStart, initialEnd] = toDatePair(value);
  const startState = state28(initialStart);
  const endState = state28(initialEnd);
  after40(value).change((next) => {
    const [s, e] = toDatePair(next);
    if (isSameDay(s, startState.get()) && isSameDay(e, endState.get())) return;
    startState.set(s);
    endState.set(e);
  });
  const notify = () => {
    const s = startState.get();
    const e = endState.get();
    onChange?.([s ?? null, e ?? null]);
  };
  const setStart = (date) => {
    const end = endState.get();
    if (date && end && date > end) endState.set(date);
    startState.set(date);
    notify();
  };
  const setEnd = (date) => {
    const start = startState.get();
    if (date && start && date < start) startState.set(date);
    endState.set(date);
    notify();
  };
  return Div51(
    { ...rest, className: cx("g-ui-range-picker", props.className ?? className) },
    DateInput({
      ...rest,
      size,
      value: startState,
      onChange: setStart,
      maxDate: endState,
      placeholder: resolveValue(placeholderMin) ?? void 0
    }),
    Span24({ className: "g-ui-range-picker-separator" }, "\u2013"),
    DateInput({
      ...rest,
      size,
      value: endState,
      onChange: setEnd,
      minDate: startState,
      placeholder: resolveValue(placeholderMax) ?? void 0
    })
  );
}

// src/components/Flex.js
import { Div as Div52 } from "@granularjs/core";
function Flex(...args) {
  const { props, children } = splitPropsChildren(args, { align: "center", direction: "row" });
  const { direction, wrap, align, justify, gap, className, ...rest } = props;
  return Div52(
    {
      ...rest,
      className: cx(
        "g-ui-flex",
        [direction, (value) => {
          if (value === "column") return "g-ui-flex-column";
          return "g-ui-flex-row";
        }],
        [wrap, "g-ui-flex-wrap"],
        [align, (value) => value && `g-ui-align-${value}`],
        [justify, (value) => value && `g-ui-justify-${value}`],
        [gap, (value) => value && `g-ui-gap-${value}`],
        className
      )
    },
    children
  );
}

// src/components/NavLink.js
import { A as A2, Div as Div53, Span as Span25, when as when36, after as after41, state as state29 } from "@granularjs/core";
function NavLink(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { variant: "subtle", childrenOffset: 24 });
  const {
    label,
    description,
    leftSection,
    rightSection,
    active,
    disabled,
    variant,
    childrenOffset,
    opened,
    defaultOpened,
    className,
    padding,
    ...rest
  } = props;
  const { onClick, onChange } = rawProps;
  const hasChildren = children.length > 0;
  const openState = state29(resolveValue(opened) ?? resolveValue(defaultOpened) ?? false);
  after41(opened).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    openState.set(!!resolved);
  });
  const childrenStyle = after41(childrenOffset).compute((next) => ({
    paddingLeft: toPx(resolveValue(next ?? 24)) ?? "24px"
  }));
  const handleClick = (ev) => {
    if (resolveValue(disabled)) {
      ev?.preventDefault?.();
      return;
    }
    if (hasChildren) {
      const next = !openState.get();
      openState.set(next);
      onChange?.(next);
    }
    onClick?.(ev);
  };
  return Div53(
    { className: cx("g-ui-navlink-root", className) },
    A2(
      {
        ...rest,
        className: cx(
          "g-ui-navlink",
          classVar("g-ui-navlink-variant-", variant, "subtle"),
          classFlag("g-ui-navlink-active", active),
          classFlag("g-ui-navlink-disabled", disabled),
          classVar("g-ui-navlink-padding-", padding, "md")
        ),
        onClick: handleClick
      },
      when36(leftSection, () => Span25({ className: "g-ui-navlink-section g-ui-navlink-left" }, leftSection)),
      Div53(
        { className: "g-ui-navlink-body" },
        when36(label, () => Div53({ className: "g-ui-navlink-label" }, label)),
        when36(description, () => Div53({ className: "g-ui-navlink-description" }, description))
      ),
      when36(rightSection, () => Span25({ className: "g-ui-navlink-section g-ui-navlink-right" }, rightSection))
    ),
    hasChildren ? when36(openState, () => Div53({ className: "g-ui-navlink-children", style: childrenStyle }, children)) : null
  );
}

// src/components/Indicator.js
import { Div as Div54, when as when37 } from "@granularjs/core";
function Indicator(...args) {
  const { props, children } = splitPropsChildren(args, { show: true, position: "top-right", color: "danger", size: "md" });
  const { show, position, color, size, className, ...rest } = props;
  return Div54(
    {
      ...rest,
      className: cx(
        "g-ui-indicator",
        classVar("g-ui-indicator-position-", position, "top-right"),
        classVar("g-ui-indicator-color-", color, "danger"),
        classVar("g-ui-indicator-size-", size, "md"),
        className
      )
    },
    children,
    when37(show, () => Div54({ className: "g-ui-indicator-badge" }))
  );
}

// src/components/Burger.js
import { Span as Span26 } from "@granularjs/core";
function Burger(...args) {
  const { props } = splitPropsChildren(args);
  const { opened, className, ...rest } = props;
  return Span26(
    { ...rest, className: cx("g-ui-burger", [opened, "g-ui-burger-open"], className) },
    Span26(""),
    Span26(""),
    Span26("")
  );
}

// src/components/LoadingOverlay.js
import { Div as Div55, when as when38 } from "@granularjs/core";
function LoadingOverlay(...args) {
  const { props } = splitPropsChildren(args);
  const { visible, ...rest } = props;
  return when38(visible, () => Div55({ ...rest, className: "g-ui-loading-overlay" }, Loading({})));
}

// src/components/Grid.js
import { Div as Div56 } from "@granularjs/core";
function Grid(...args) {
  const { props, children } = splitPropsChildren(args, { gap: "md" });
  const { className, gap, ...rest } = props;
  return Div56({ ...rest, className: cx("g-ui-grid-system", [gap, (value) => `g-ui-gap-${value}`], className) }, children);
}

// src/components/Col.js
import { Div as Div57 } from "@granularjs/core";
function Col(...args) {
  const { props, children } = splitPropsChildren(args, { span: 12 });
  const { span, className, ...rest } = props;
  return Div57({ ...rest, className: cx([span, (value) => `g-ui-col-span-${value}`], className) }, children);
}

// src/components/PinInput.js
import { Div as Div58, Input as Input6, after as after42, state as state30, when as when39, list as list10 } from "@granularjs/core";
function PinInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    length: 4,
    size: "md",
    type: "alphanumeric",
    mask: false,
    placeholder: "\u25CB",
    disabled: false,
    error: false,
    oneTimeCode: false
  });
  const {
    length,
    value,
    size,
    type,
    mask,
    placeholder,
    disabled,
    error,
    oneTimeCode,
    className
  } = props;
  const { onChange, onComplete } = rawProps;
  const currentLength = state30(resolveValue(length) ?? 4);
  const getLength = () => currentLength.get();
  after42(length).change((next) => {
    const newLen = resolveValue(next) ?? 4;
    const oldLen = currentLength.get();
    if (newLen === oldLen) return;
    currentLength.set(newLen);
    const currentValues = currentState.get();
    const currentNodes = inputNodes.get();
    currentState.set(Array.from({ length: newLen }, (_, i) => currentValues[i] ?? ""));
    inputNodes.set(Array.from({ length: newLen }, (_, i) => currentNodes[i] ?? null));
  });
  const inputNodes = state30(Array.from({ length: getLength() }, () => null));
  const currentState = state30(
    Array.from({ length: getLength() }, (_, i) => {
      const initial = resolveValue(value);
      if (typeof initial === "string") return initial[i] ?? "";
      if (Array.isArray(initial)) return initial[i] ?? "";
      return "";
    })
  );
  after42(value).change((next) => {
    if (next == null) return;
    const len = getLength();
    if (typeof next === "string") {
      currentState.set(Array.from({ length: len }, (_, i) => next[i] ?? ""));
    } else if (Array.isArray(next)) {
      currentState.set(Array.from({ length: len }, (_, i) => next[i] ?? ""));
    }
  });
  const getValueString = () => currentState.get().join("");
  const setValue = (next) => {
    currentState.set(next);
    const str = next.join("");
    onChange?.(str);
    if (next.every((v) => v !== "") && next.length === getLength()) {
      onComplete?.(str);
    }
  };
  const focusInput = (index) => {
    const len = getLength();
    const nodes = inputNodes.get();
    if (index >= 0 && index < len && nodes[index]) {
      nodes[index].focus();
      nodes[index].select();
    }
  };
  const getTypeRegex = () => {
    const t = resolveValue(type);
    if (t === "number") return /^[0-9]$/;
    if (t instanceof RegExp) return t;
    return /^[a-zA-Z0-9]$/;
  };
  const handleInput = (idx, ev) => {
    const inputValue = ev.target.value;
    const regex = getTypeRegex();
    if (inputValue.length > 1) {
      handlePaste(idx, inputValue);
      return;
    }
    if (inputValue && !regex.test(inputValue)) {
      ev.target.value = currentState.get()[idx] ?? "";
      return;
    }
    const current = currentState.get().slice();
    current[idx] = inputValue;
    setValue(current);
    if (inputValue && idx < getLength() - 1) {
      focusInput(idx + 1);
    }
  };
  const handlePaste = (startIdx, pastedValue) => {
    const regex = getTypeRegex();
    const chars = pastedValue.split("").filter((c) => regex.test(c));
    const current = currentState.get().slice();
    const len = getLength();
    chars.forEach((char, i) => {
      const targetIdx = startIdx + i;
      if (targetIdx < len) {
        current[targetIdx] = char;
      }
    });
    setValue(current);
    const nextEmpty = current.findIndex((v, i) => i >= startIdx && v === "");
    if (nextEmpty >= 0) {
      focusInput(nextEmpty);
    } else {
      focusInput(Math.min(startIdx + chars.length, len - 1));
    }
  };
  const handleKeyDown = (idx, ev) => {
    if (ev.key === "Backspace") {
      const current = currentState.get().slice();
      if (current[idx] === "" && idx > 0) {
        ev.preventDefault();
        current[idx - 1] = "";
        setValue(current);
        focusInput(idx - 1);
      } else if (current[idx] !== "") {
        current[idx] = "";
        setValue(current);
      }
    } else if (ev.key === "ArrowLeft" && idx > 0) {
      ev.preventDefault();
      focusInput(idx - 1);
    } else if (ev.key === "ArrowRight" && idx < getLength() - 1) {
      ev.preventDefault();
      focusInput(idx + 1);
    }
  };
  const handleFocus = (idx, ev) => {
    ev.target.select();
  };
  const handleContainerClick = () => {
    const current = currentState.get();
    const firstEmpty = current.findIndex((v) => v === "");
    if (firstEmpty >= 0) {
      focusInput(firstEmpty);
    } else {
      focusInput(current.length - 1);
    }
  };
  const inputType = after42(mask).compute((m) => resolveValue(m) ? "password" : "text");
  const inputMode = after42(type).compute((t) => resolveValue(t) === "number" ? "numeric" : "text");
  const autoComplete = after42(oneTimeCode).compute((o) => resolveValue(o) ? "one-time-code" : "off");
  const isDisabled = after42(disabled).compute((d) => !!resolveValue(d));
  const hasError = after42(error).compute((e) => !!resolveValue(e));
  const indices = after42(currentLength).compute(
    (len) => Array.from({ length: len }, (_, i) => i)
  );
  const renderInput = (idx) => Input6({
    className: cx(
      "g-ui-pin-input-field",
      when39(hasError, () => "g-ui-pin-input-error")
    ),
    type: inputType,
    inputMode,
    autocomplete: autoComplete,
    maxLength: 2,
    placeholder: when39(isDisabled, () => "", () => placeholder),
    disabled: isDisabled,
    value: after42(currentState, idx).compute(([values, i]) => values[i] ?? ""),
    node: inputNodes[idx.get()],
    onInput: (ev) => handleInput(idx.get(), ev),
    onChange: (ev) => handleInput(idx.get(), ev),
    onKeyDown: (ev) => handleKeyDown(idx.get(), ev),
    onFocus: (ev) => handleFocus(idx.get(), ev)
  });
  return Div58(
    {
      className: cx(
        "g-ui-pin-input",
        classVar("g-ui-input-size-", size, "md"),
        className
      ),
      onClick: handleContainerClick
    },
    Div58(
      { className: "g-ui-pin-input-wrapper" },
      list10(indices, renderInput)
    )
  );
}

// src/components/CheckboxGroup.js
import { Div as Div59 } from "@granularjs/core";
function CheckboxGroup(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div59({ ...rest, className: cx("g-ui-checkbox-group", className) }, children);
}

// src/components/AvatarGroup.js
import { Div as Div60 } from "@granularjs/core";
function AvatarGroup(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div60({ ...rest, className: cx("g-ui-avatar-group", className) }, children);
}

// src/components/BadgeGroup.js
import { Div as Div61 } from "@granularjs/core";
function BadgeGroup(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div61({ ...rest, className: cx("g-ui-badge-group", className) }, children);
}

// src/components/GridTable.js
import { Div as Div62, Span as Span27, after as after43, context as context3 } from "@granularjs/core";
var sizeContext = context3([]);
var tableContext = context3({ sort: null, onSort: null });
function GridTable(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { sizes: [], sort: null, stickyHeader: false });
  const { className, sizes: sizesProp, sort: sortProp, stickyHeader: stickyProp, ...rest } = props;
  const { onSort } = rawProps;
  const sizes = sizeContext.scope(sizesProp.get());
  after43(sizesProp).change((v) => sizes.set(v));
  const table = tableContext.scope({ sort: sortProp.get(), onSort: onSort || null });
  after43(sortProp).change((v) => table.set().sort = v);
  return sizes.serve(table.serve(Div62({
    className: cx(
      "g-ui-grid-table",
      classFlag("g-ui-grid-table-sticky", stickyProp),
      className
    ),
    style: {
      gridTemplateColumns: after43(sizes).compute(
        (s) => Array.isArray(s) ? s.join(" ") : ""
      )
    },
    ...rest
  }, children)));
}
GridTable.GridRow = (...args) => {
  const { props, children } = splitPropsChildren(args, {});
  const { className, header, ...rest } = props;
  return Div62(
    {
      className: cx(
        "g-ui-grid-table-row",
        classFlag("g-ui-grid-table-row-header", header),
        className
      ),
      ...rest
    },
    ...children
  );
};
GridTable.GridCell = function(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, {});
  const { className, sort: _sort, ...rest } = props;
  const sortKey = rawProps.sort;
  if (sortKey) {
    const table = tableContext.state();
    const direction = after43(table.sort).compute(
      (s) => s?.key === sortKey ? s.direction : null
    );
    const handleSort = () => {
      const current = table.get().sort;
      let next;
      if (current?.key === sortKey) {
        next = current.direction === "asc" ? { key: sortKey, direction: "desc" } : null;
      } else {
        next = { key: sortKey, direction: "asc" };
      }
      table.set().sort = next;
      const { onSort } = table.get();
      if (onSort) onSort(next);
    };
    return Div62(
      {
        className: cx("g-ui-grid-table-cell", "g-ui-grid-table-cell-sortable", className),
        onClick: handleSort,
        ...rest
      },
      children,
      Span27(
        { className: "g-ui-grid-table-sort-icon" },
        after43(direction).compute(
          (d) => d === "asc" ? " \u2191" : d === "desc" ? " \u2193" : ""
        )
      )
    );
  }
  return Div62(
    {
      className: cx("g-ui-grid-table-cell", className),
      ...rest
    },
    children
  );
};

// src/components/BottomBar.js
import { Button as Button12, Div as Div63, Span as Span28, when as when40 } from "@granularjs/core";
function BottomBar(...args) {
  const { props, children } = splitPropsChildren(args, { grow: true });
  const { grow, className, ...rest } = props;
  return Div63(
    {
      ...rest,
      className: cx(
        "g-ui-bottombar",
        classFlag("g-ui-bottombar-grow", grow),
        className
      )
    },
    children
  );
}
BottomBar.Action = function BottomBarAction(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { variant: "subtle" });
  const { icon, label, active, disabled, variant, className, ...rest } = props;
  const { onClick } = rawProps;
  return Button12(
    {
      ...rest,
      className: cx(
        "g-ui-bottombar-action",
        classVar("g-ui-bottombar-action-variant-", variant, "subtle"),
        classFlag("g-ui-bottombar-action-active", active),
        classFlag("g-ui-bottombar-action-disabled", disabled),
        className
      ),
      onClick,
      disabled
    },
    when40(icon, () => Span28({ className: "g-ui-bottombar-action-icon" }, icon)),
    when40(label, () => Span28({ className: "g-ui-bottombar-action-label" }, label)),
    children
  );
};

// src/components/EventCalendar.js
import {
  Div as Div64,
  Button as Button13,
  state as state31,
  after as after44,
  when as when41,
  portal as portal6,
  Input as Input7,
  Label as Label5,
  Span as Span29
} from "@granularjs/core";
var WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var VIEW_OPTIONS = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" }
];
function toDate(v) {
  if (v instanceof Date) return v;
  if (v == null) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}
function normalizeEvent(ev) {
  const start = toDate(ev.start);
  const end = toDate(ev.end);
  if (!start || !end) return null;
  return {
    ...ev,
    id: ev.id ?? `${start.getTime()}-${ev.title ?? "event"}`,
    title: ev.title ?? "",
    start,
    end,
    allDay: !!ev.allDay,
    description: ev.description ?? "",
    location: ev.location ?? "",
    attendees: Array.isArray(ev.attendees) ? ev.attendees : [],
    color: ev.color ?? null
  };
}
function getEventsInRange(events, rangeStart, rangeEnd) {
  const start = toDate(rangeStart).getTime();
  const end = toDate(rangeEnd).getTime();
  return events.map(normalizeEvent).filter(Boolean).filter((ev) => ev.end.getTime() > start && ev.start.getTime() < end);
}
function getEventsForDay(events, day) {
  const d = new Date(day);
  d.setHours(0, 0, 0, 0);
  const start = d.getTime();
  d.setHours(23, 59, 59, 999);
  const end = d.getTime();
  return getEventsInRange(events, start, end);
}
function weekStart(date, firstDayOfWeek) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day - firstDayOfWeek + 7) % 7;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}
function formatTime(date, locale = "default") {
  return date.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit", hour12: true });
}
function formatDate(date, locale = "default") {
  return date.toLocaleDateString(locale, { weekday: "short", month: "short", day: "numeric" });
}
function formatMonthYear(date, locale = "default") {
  return date.toLocaleDateString(locale, { month: "long", year: "numeric" });
}
function formatWeekRange(weekStartDate, locale = "default") {
  const end = new Date(weekStartDate);
  end.setDate(end.getDate() + 6);
  return `${weekStartDate.toLocaleDateString(locale, { month: "short", day: "numeric" })} \u2013 ${end.toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" })}`;
}
function durationPct(start, end, dayStart, dayEnd) {
  const dayStartMs = new Date(start).setHours(dayStart, 0, 0, 0);
  const dayEndMs = new Date(start).setHours(dayEnd, 0, 0, 0);
  const total = (dayEnd - dayStart) * 60;
  const s = Math.max(start.getTime(), dayStartMs);
  const e = Math.min(end.getTime(), dayEndMs);
  const mins = (e - s) / 6e4;
  const top = (s - dayStartMs) / 6e4 / total * 100;
  const height = mins / total * 100;
  return { top, height };
}
function EventCalendar(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    defaultView: "month",
    firstDayOfWeek: 0,
    locale: "default",
    hourSlotDuration: 30,
    minTime: 6,
    maxTime: 22,
    eventCreationColorOptions: []
  });
  const {
    events: eventsProp = [],
    defaultView,
    firstDayOfWeek,
    locale,
    hourSlotDuration,
    minTime,
    maxTime,
    eventCreationColorOptions,
    className,
    ...rest
  } = props;
  const {
    onCreateEventRequest,
    onViewEventRequest,
    onUpdateEventRequest,
    onRemoveEventRequest,
    eventCreationEmailLookup,
    eventCreationLocationsCallback,
    eventCreationCalendarsCallback,
    onSlotClick,
    onDateRangeChange
  } = rawProps;
  const viewMode = state31(resolveValue(defaultView) ?? "month");
  const currentDate = state31(/* @__PURE__ */ new Date());
  const modalState = state31(null);
  const selectedEvent = state31(null);
  const createDraft = state31({
    title: "",
    start: null,
    end: null,
    allDay: false,
    description: "",
    location: "",
    attendees: [],
    color: null
  });
  const eventsList = after44(eventsProp).compute((v) => Array.isArray(v) ? v : []);
  const viewDate = currentDate.get();
  const weekStartDate = weekStart(viewDate, resolveValue(firstDayOfWeek) ?? 0);
  const dayStart = resolveValue(minTime) ?? 6;
  const dayEnd = resolveValue(maxTime) ?? 22;
  const slotDuration = resolveValue(hourSlotDuration) ?? 30;
  const goPrev = () => {
    const d = new Date(currentDate.get());
    if (viewMode.get() === "month") d.setMonth(d.getMonth() - 1);
    else if (viewMode.get() === "week") d.setDate(d.getDate() - 7);
    else d.setDate(d.getDate() - 1);
    currentDate.set(d);
    onDateRangeChange?.({ start: d, end: d, view: viewMode.get() });
  };
  const goNext = () => {
    const d = new Date(currentDate.get());
    if (viewMode.get() === "month") d.setMonth(d.getMonth() + 1);
    else if (viewMode.get() === "week") d.setDate(d.getDate() + 7);
    else d.setDate(d.getDate() + 1);
    currentDate.set(d);
    onDateRangeChange?.({ start: d, end: d, view: viewMode.get() });
  };
  const goToday = () => {
    const d = /* @__PURE__ */ new Date();
    currentDate.set(d);
    onDateRangeChange?.({ start: d, end: d, view: viewMode.get() });
  };
  const openCreateModal = (start, end, allDay = false) => {
    const s = start ? new Date(start) : new Date(currentDate.get());
    const e = end ? new Date(end) : new Date(s.getTime() + 60 * 60 * 1e3);
    if (allDay) {
      s.setHours(0, 0, 0, 0);
      e.setHours(23, 59, 59, 999);
    }
    createDraft.set({
      title: "",
      start: s,
      end: e,
      allDay,
      description: "",
      location: "",
      attendees: [],
      color: null
    });
    modalState.set("create");
  };
  const openViewModal = (event) => {
    selectedEvent.set(normalizeEvent(event));
    modalState.set("view");
    onViewEventRequest?.(event);
  };
  const openEditModal = () => {
    const ev = selectedEvent.get();
    if (!ev) return;
    createDraft.set({
      title: ev.title,
      start: new Date(ev.start),
      end: new Date(ev.end),
      allDay: ev.allDay,
      description: ev.description ?? "",
      location: ev.location ?? "",
      attendees: [...ev.attendees || []],
      color: ev.color ?? null
    });
    modalState.set("edit");
  };
  const closeModal = () => {
    modalState.set(null);
    selectedEvent.set(null);
  };
  const handleSlotClick = (date, hour, allDay) => {
    if (onSlotClick) {
      onSlotClick({ date, hour, allDay });
      return;
    }
    const start = new Date(date);
    if (allDay) {
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setHours(23, 59, 59, 999);
      openCreateModal(start, end, true);
    } else {
      start.setHours(hour, 0, 0, 0);
      const end = new Date(start.getTime() + slotDuration * 60 * 1e3);
      openCreateModal(start, end, false);
    }
  };
  const handleCreateSubmit = () => {
    const draft = createDraft.get();
    if (!draft.start || !draft.end) return;
    onCreateEventRequest?.(
      {
        title: draft.title,
        start: draft.start,
        end: draft.end,
        allDay: draft.allDay,
        description: draft.description,
        location: draft.location,
        attendees: draft.attendees,
        color: draft.color
      },
      () => {
        closeModal();
      }
    );
  };
  const handleUpdateSubmit = () => {
    const ev = selectedEvent.get();
    const draft = createDraft.get();
    if (!ev || !draft.start || !draft.end) return;
    onUpdateEventRequest?.(
      ev,
      {
        title: draft.title,
        start: draft.start,
        end: draft.end,
        allDay: draft.allDay,
        description: draft.description,
        location: draft.location,
        attendees: draft.attendees,
        color: draft.color
      },
      () => closeModal()
    );
  };
  const handleRemoveRequest = () => {
    const ev = selectedEvent.get();
    if (!ev) return;
    onRemoveEventRequest?.(ev, () => closeModal());
  };
  const titleLabel = after44(viewMode, currentDate).compute(([view, date]) => {
    if (view === "month") return formatMonthYear(date, resolveValue(locale));
    if (view === "week") return formatWeekRange(weekStart(date, resolveValue(firstDayOfWeek) ?? 0), resolveValue(locale));
    return formatDate(date, resolveValue(locale));
  });
  const header = Div64(
    { className: "g-ui-event-calendar-header" },
    Div64(
      { className: "g-ui-event-calendar-nav-group" },
      ActionIcon(
        { size: "sm", variant: "subtle", onClick: goPrev, className: "g-ui-event-calendar-nav" },
        Icon({ size: "sm", innerHTML: backwardSvg })
      ),
      ActionIcon(
        { size: "sm", variant: "subtle", onClick: goNext, className: "g-ui-event-calendar-nav" },
        Icon({ size: "sm", innerHTML: forwardSvg })
      ),
      Button13(
        { type: "button", variant: "subtle", size: "sm", className: "g-ui-event-calendar-today", onClick: goToday },
        Icon({ size: "sm", className: "g-ui-event-calendar-today-icon", innerHTML: calendarTodaySvg }),
        "Today"
      )
    ),
    Div64({ className: "g-ui-event-calendar-title" }, titleLabel),
    Div64(
      { className: "g-ui-event-calendar-actions" },
      VIEW_OPTIONS.map(
        (opt) => Div64(
          {
            className: cx(
              "g-ui-event-calendar-view-option",
              after44(viewMode).compute((v) => v === opt.value ? "g-ui-event-calendar-view-option-active" : "")
            ),
            onClick: () => {
              viewMode.set(opt.value);
              onDateRangeChange?.({ start: currentDate.get(), end: currentDate.get(), view: opt.value });
            }
          },
          opt.label
        )
      ),
      Button13(
        {
          type: "button",
          variant: "filled",
          size: "sm",
          className: "g-ui-event-calendar-create-btn",
          onClick: () => openCreateModal(currentDate.get(), null, false)
        },
        Icon({ size: "sm", innerHTML: plusSvg }),
        "Create"
      )
    )
  );
  const monthGrid = after44(currentDate, eventsList, firstDayOfWeek).compute(([date, events, firstDay]) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const first = new Date(year, month, 1);
    const startDow = (first.getDay() - (firstDay ?? 0) + 7) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const rows = [];
    let dayCount = 1;
    let nextMonthDay = 1;
    const totalCells = Math.ceil((startDow + daysInMonth) / 7) * 7;
    const dayCells = [];
    for (let i = 0; i < totalCells; i += 1) {
      let day;
      let isCurrentMonth;
      let dateObj;
      if (i < startDow) {
        day = prevMonthDays - startDow + i + 1;
        dateObj = new Date(year, month - 1, day);
        isCurrentMonth = false;
      } else if (dayCount <= daysInMonth) {
        day = dayCount;
        dateObj = new Date(year, month, day);
        isCurrentMonth = true;
        dayCount += 1;
      } else {
        day = nextMonthDay;
        dateObj = new Date(year, month + 1, day);
        isCurrentMonth = false;
        nextMonthDay += 1;
      }
      const dayEvents = getEventsForDay(events, dateObj);
      const isToday = dateObj.getDate() === (/* @__PURE__ */ new Date()).getDate() && dateObj.getMonth() === (/* @__PURE__ */ new Date()).getMonth() && dateObj.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear();
      dayCells.push(
        Div64(
          {
            key: dateObj.getTime(),
            className: cx(
              "g-ui-event-calendar-month-cell",
              !isCurrentMonth && "g-ui-event-calendar-month-cell-outside",
              isToday && "g-ui-event-calendar-month-cell-today"
            )
          },
          Div64(
            {
              className: "g-ui-event-calendar-month-cell-header",
              onClick: () => handleSlotClick(dateObj, 0, true)
            },
            Span29({ className: "g-ui-event-calendar-month-cell-day" }, dateObj.getDate())
          ),
          Div64(
            { className: "g-ui-event-calendar-month-cell-events" },
            dayEvents.slice(0, 3).map(
              (ev) => Div64(
                {
                  key: ev.id,
                  className: "g-ui-event-calendar-month-event",
                  style: ev.color ? { borderLeftColor: ev.color, backgroundColor: `${ev.color}20` } : {},
                  onClick: (e) => {
                    e.stopPropagation();
                    openViewModal(ev);
                  }
                },
                ev.title || "(No title)"
              )
            ),
            when41(
              dayEvents.length > 3,
              () => Div64(
                {
                  className: "g-ui-event-calendar-month-more",
                  onClick: (e) => {
                    e.stopPropagation();
                    openViewModal(dayEvents[3]);
                  }
                },
                `+${dayEvents.length - 3} more`
              )
            )
          )
        )
      );
    }
    return dayCells;
  });
  const monthView = Div64(
    { className: "g-ui-event-calendar-month" },
    Div64(
      { className: "g-ui-event-calendar-weekdays" },
      WEEKDAY_LABELS.map((label) => Div64({ key: label, className: "g-ui-event-calendar-weekday" }, label))
    ),
    Div64({ className: "g-ui-event-calendar-month-grid" }, monthGrid)
  );
  const timeSlots = [];
  for (let h = dayStart; h < dayEnd; h += 1) {
    for (let s = 0; s < 60; s += slotDuration) {
      timeSlots.push(h + s / 60);
    }
  }
  const weekDays2 = after44(currentDate, firstDayOfWeek).compute(([date, firstDay]) => {
    const start = weekStart(date, firstDay ?? 0);
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  });
  const weekView = Div64(
    { className: "g-ui-event-calendar-week" },
    after44(weekDays2).compute(
      (days) => Div64(
        { className: "g-ui-event-calendar-week-days" },
        Div64({ className: "g-ui-event-calendar-week-time-col" }, ""),
        (days || []).map(
          (d) => Div64(
            { key: d.getTime(), className: "g-ui-event-calendar-week-day-col" },
            Div64({ className: "g-ui-event-calendar-week-day-header" }, formatDate(d, resolveValue(locale)))
          )
        )
      )
    ),
    Div64(
      { className: "g-ui-event-calendar-week-body" },
      Div64(
        { className: "g-ui-event-calendar-week-time-col" },
        timeSlots.map((h) => {
          const hour = Math.floor(h);
          const min = (h - hour) * 60;
          const label = `${hour <= 12 ? hour : hour - 12}:${min === 0 ? "00" : min} ${hour < 12 ? "AM" : "PM"}`;
          return Div64({ key: h, className: "g-ui-event-calendar-week-slot-label" }, label);
        })
      ),
      after44(weekDays2, eventsList).compute(([days, events]) => {
        if (!days || !days.length) return null;
        const rangeStart = days[0];
        const rangeEnd = new Date(days[6]);
        rangeEnd.setHours(23, 59, 59, 999);
        const inRange = getEventsInRange(events, rangeStart, rangeEnd);
        return Div64(
          { className: "g-ui-event-calendar-week-grid-cols" },
          days.map(
            (day) => Div64(
              { key: day.getTime(), className: "g-ui-event-calendar-week-day-col g-ui-event-calendar-week-day-col-body" },
              timeSlots.map(
                (h) => Div64({
                  key: h,
                  className: "g-ui-event-calendar-week-slot",
                  onClick: () => handleSlotClick(day, h, false)
                })
              ),
              inRange.filter(
                (ev) => !ev.allDay && ev.start.getDate() === day.getDate() && ev.start.getMonth() === day.getMonth() && ev.start.getFullYear() === day.getFullYear()
              ).map((ev) => {
                const { top, height } = durationPct(ev.start, ev.end, dayStart, dayEnd);
                return Div64(
                  {
                    key: ev.id,
                    className: "g-ui-event-calendar-week-event",
                    style: {
                      top: `${top}%`,
                      height: `${height}%`,
                      borderLeftColor: ev.color || "var(--g-ui-primary)"
                    },
                    onClick: (e) => {
                      e.stopPropagation();
                      openViewModal(ev);
                    }
                  },
                  Div64({ className: "g-ui-event-calendar-week-event-title" }, ev.title || "(No title)"),
                  when41(
                    !ev.allDay,
                    () => Span29({ className: "g-ui-event-calendar-week-event-time" }, `${formatTime(ev.start, resolveValue(locale))} \u2013 ${formatTime(ev.end, resolveValue(locale))}`)
                  )
                );
              })
            )
          )
        );
      })
    )
  );
  const dayView = Div64(
    { className: "g-ui-event-calendar-day" },
    Div64(
      { className: "g-ui-event-calendar-day-body" },
      Div64(
        { className: "g-ui-event-calendar-day-time-col" },
        timeSlots.map((h) => {
          const hour = Math.floor(h);
          const min = (h - hour) * 60;
          const label = `${hour <= 12 ? hour : hour - 12}:${min === 0 ? "00" : min} ${hour < 12 ? "AM" : "PM"}`;
          return Div64({ key: h, className: "g-ui-event-calendar-day-slot-label" }, label);
        })
      ),
      Div64(
        { className: "g-ui-event-calendar-day-slots" },
        timeSlots.map(
          (h) => Div64({
            key: h,
            className: "g-ui-event-calendar-day-slot",
            onClick: () => handleSlotClick(currentDate.get(), h, false)
          })
        ),
        after44(eventsList, currentDate).compute(([events, day]) => {
          if (!day) return [];
          const dayEvs = getEventsForDay(events, day).filter((e) => !e.allDay);
          return dayEvs.map((ev) => {
            const { top, height } = durationPct(ev.start, ev.end, dayStart, dayEnd);
            return Div64(
              {
                key: ev.id,
                className: "g-ui-event-calendar-day-event",
                style: {
                  top: `${top}%`,
                  height: `${height}%`,
                  borderLeftColor: ev.color || "var(--g-ui-primary)"
                },
                onClick: (e) => {
                  e.stopPropagation();
                  openViewModal(ev);
                }
              },
              Div64({ className: "g-ui-event-calendar-day-event-title" }, ev.title || "(No title)"),
              Span29({ className: "g-ui-event-calendar-day-event-time" }, `${formatTime(ev.start, resolveValue(locale))} \u2013 ${formatTime(ev.end, resolveValue(locale))}`)
            );
          });
        })
      )
    )
  );
  const createEditForm = (isEdit) => {
    const draft = createDraft.get();
    const today = /* @__PURE__ */ new Date();
    const defaultStart = draft.start || today;
    const defaultEnd = draft.end || new Date(today.getTime() + 60 * 60 * 1e3);
    const titleState = state31(draft.title);
    const startDateState = state31(defaultStart.toISOString().slice(0, 10));
    const startTimeState = state31(
      !draft.allDay && defaultStart ? defaultStart.toTimeString().slice(0, 5) : "09:00"
    );
    const endDateState = state31(defaultEnd.toISOString().slice(0, 10));
    const endTimeState = state31(
      !draft.allDay && defaultEnd ? defaultEnd.toTimeString().slice(0, 5) : "10:00"
    );
    const allDayState = state31(draft.allDay);
    const descState = state31(draft.description);
    const locationState = state31(draft.location);
    const attendeesState = state31(draft.attendees || []);
    const emailLookupQuery = state31("");
    const emailLookupResults = state31([]);
    const locationOptions = state31([]);
    const locationQuery = state31("");
    const colorOptions = Array.isArray(eventCreationColorOptions) ? eventCreationColorOptions : [];
    const colorState = state31(draft.color);
    const applyDraft = () => {
      const start = /* @__PURE__ */ new Date(startDateState.get() + "T" + (allDayState.get() ? "00:00:00" : startTimeState.get() + ":00"));
      const end = /* @__PURE__ */ new Date(endDateState.get() + "T" + (allDayState.get() ? "23:59:59" : endTimeState.get() + ":00"));
      createDraft.set({
        title: titleState.get(),
        start,
        end,
        allDay: allDayState.get(),
        description: descState.get(),
        location: locationState.get(),
        attendees: attendeesState.get(),
        color: colorState.get()
      });
    };
    const doEmailLookup = (query) => {
      emailLookupQuery.set(query);
      if (!eventCreationEmailLookup || !query.trim()) {
        emailLookupResults.set([]);
        return;
      }
      Promise.resolve(eventCreationEmailLookup(query.trim())).then((list11) => emailLookupResults.set(Array.isArray(list11) ? list11 : [])).catch(() => emailLookupResults.set([]));
    };
    const addAttendee = (item) => {
      const current = attendeesState.get();
      if (current.some((a) => (a.email || a.id) === (item.email || item.id))) return;
      attendeesState.set([...current, { id: item.id, email: item.email ?? item.label, label: item.label }]);
      emailLookupQuery.set("");
      emailLookupResults.set([]);
    };
    const removeAttendee = (index) => {
      const next = [...attendeesState.get()];
      next.splice(index, 1);
      attendeesState.set(next);
    };
    const loadLocations = () => {
      if (!eventCreationLocationsCallback) return;
      Promise.resolve(eventCreationLocationsCallback(locationQuery.get())).then((list11) => locationOptions.set(Array.isArray(list11) ? list11 : [])).catch(() => locationOptions.set([]));
    };
    return Div64(
      { className: "g-ui-event-calendar-form" },
      Div64(
        { className: "g-ui-event-calendar-form-row" },
        TextInput({
          label: "Title",
          placeholder: "Event title",
          value: titleState,
          onInput: (ev) => titleState.set(ev?.target?.value ?? "")
        })
      ),
      Div64(
        { className: "g-ui-event-calendar-form-row g-ui-event-calendar-form-row-inline" },
        Checkbox({
          label: "All day",
          checked: allDayState,
          onChange: (v) => allDayState.set(v)
        })
      ),
      Div64(
        { className: "g-ui-event-calendar-form-row g-ui-event-calendar-form-row-inline" },
        Div64(
          { className: "g-ui-event-calendar-form-field" },
          Label5({ className: "g-ui-event-calendar-form-label" }, "Start"),
          Input7({
            type: "date",
            className: "g-ui-input g-ui-input-size-md",
            value: startDateState,
            onInput: (ev) => startDateState.set(ev?.target?.value ?? "")
          }),
          when41(
            !allDayState,
            () => Input7({
              type: "time",
              className: "g-ui-input g-ui-input-size-md",
              value: startTimeState,
              onInput: (ev) => startTimeState.set(ev?.target?.value ?? "")
            })
          )
        ),
        Div64(
          { className: "g-ui-event-calendar-form-field" },
          Label5({ className: "g-ui-event-calendar-form-label" }, "End"),
          Input7({
            type: "date",
            className: "g-ui-input g-ui-input-size-md",
            value: endDateState,
            onInput: (ev) => endDateState.set(ev?.target?.value ?? "")
          }),
          when41(
            !allDayState,
            () => Input7({
              type: "time",
              className: "g-ui-input g-ui-input-size-md",
              value: endTimeState,
              onInput: (ev) => endTimeState.set(ev?.target?.value ?? "")
            })
          )
        )
      ),
      when41(
        eventCreationLocationsCallback,
        () => Div64(
          { className: "g-ui-event-calendar-form-row" },
          Label5({ className: "g-ui-event-calendar-form-label" }, "Location"),
          TextInput({
            placeholder: "Search or type location",
            value: locationQuery,
            onInput: (ev) => {
              locationQuery.set(ev?.target?.value ?? "");
              loadLocations();
            },
            onFocus: loadLocations
          }),
          when41(
            after44(locationOptions).compute((o) => o && o.length > 0),
            () => Div64(
              { className: "g-ui-event-calendar-form-suggestions" },
              locationOptions.get().map(
                (loc) => Div64(
                  {
                    key: loc.id ?? loc.label,
                    className: "g-ui-event-calendar-form-suggestion-item",
                    onClick: () => {
                      locationState.set(loc.label ?? loc.id);
                      locationQuery.set("");
                      locationOptions.set([]);
                    }
                  },
                  loc.label ?? loc.id
                )
              )
            )
          ),
          when41(
            after44(locationState).compute((v) => !!v),
            () => Span29({ className: "g-ui-event-calendar-form-chip" }, locationState)
          )
        )
      ),
      when41(
        eventCreationEmailLookup,
        () => Div64(
          { className: "g-ui-event-calendar-form-row" },
          Label5({ className: "g-ui-event-calendar-form-label" }, "Add guests"),
          TextInput({
            placeholder: "Type email to search",
            value: emailLookupQuery,
            onInput: (ev) => doEmailLookup(ev?.target?.value ?? "")
          }),
          Div64(
            { className: "g-ui-event-calendar-form-chips" },
            attendeesState.get().map(
              (a, i) => Span29(
                {
                  key: (a.email || a.id) + i,
                  className: "g-ui-event-calendar-form-chip g-ui-event-calendar-form-chip-removable",
                  onClick: () => removeAttendee(i)
                },
                a.label || a.email || a.id,
                " \xD7"
              )
            )
          ),
          when41(
            after44(emailLookupResults).compute((r) => r && r.length > 0),
            () => Div64(
              { className: "g-ui-event-calendar-form-suggestions" },
              emailLookupResults.get().map(
                (item) => Div64(
                  {
                    key: item.id ?? item.email,
                    className: "g-ui-event-calendar-form-suggestion-item",
                    onClick: () => addAttendee(item)
                  },
                  item.label ?? item.email ?? item.id
                )
              )
            )
          )
        )
      ),
      Div64(
        { className: "g-ui-event-calendar-form-row" },
        Textarea({
          label: "Description",
          placeholder: "Add description",
          value: descState,
          onInput: (ev) => descState.set(ev?.target?.value ?? "")
        })
      ),
      when41(
        colorOptions.length > 0,
        () => Div64(
          { className: "g-ui-event-calendar-form-row" },
          Label5({ className: "g-ui-event-calendar-form-label" }, "Color"),
          Div64(
            { className: "g-ui-event-calendar-form-colors" },
            colorOptions.map(
              (opt) => Div64(
                {
                  key: opt.value ?? opt.id ?? opt,
                  className: cx(
                    "g-ui-event-calendar-form-color-swatch",
                    after44(colorState).compute((c) => c === (opt.value ?? opt.id ?? opt) ? "g-ui-event-calendar-form-color-swatch-active" : "")
                  ),
                  style: { backgroundColor: opt.color ?? opt.value ?? opt },
                  onClick: () => colorState.set(opt.value ?? opt.id ?? opt)
                }
              )
            )
          )
        )
      ),
      Div64(
        { className: "g-ui-event-calendar-form-actions" },
        Button13({ variant: "subtle", onClick: closeModal }, "Cancel"),
        Button13(
          {
            variant: "filled",
            onClick: () => {
              applyDraft();
              if (isEdit) handleUpdateSubmit();
              else handleCreateSubmit();
            }
          },
          isEdit ? "Save" : "Create"
        )
      )
    );
  };
  const viewModalContent = () => {
    const ev = selectedEvent.get();
    if (!ev) return null;
    return Div64(
      { className: "g-ui-event-calendar-view-modal" },
      Div64({ className: "g-ui-event-calendar-view-modal-title" }, ev.title || "(No title)"),
      Div64(
        { className: "g-ui-event-calendar-view-modal-meta" },
        ev.allDay ? Span29({ className: "g-ui-event-calendar-view-modal-date" }, formatDate(ev.start, resolveValue(locale)) + (ev.start.getTime() !== ev.end.getTime() ? ` \u2013 ${formatDate(ev.end, resolveValue(locale))}` : "")) : Span29(
          { className: "g-ui-event-calendar-view-modal-date" },
          `${formatDate(ev.start, resolveValue(locale))} \xB7 ${formatTime(ev.start, resolveValue(locale))} \u2013 ${formatTime(ev.end, resolveValue(locale))}`
        )
      ),
      when41(ev.location, () => Div64({ className: "g-ui-event-calendar-view-modal-field" }, "Location: ", ev.location)),
      when41(ev.description, () => Div64({ className: "g-ui-event-calendar-view-modal-field" }, ev.description)),
      when41(
        ev.attendees?.length,
        () => Div64(
          { className: "g-ui-event-calendar-view-modal-field" },
          "Guests: ",
          ev.attendees.map((a) => a.label || a.email || a.id).join(", ")
        )
      ),
      Div64(
        { className: "g-ui-event-calendar-view-modal-actions" },
        Button13({ variant: "subtle", size: "sm", onClick: openEditModal }, Icon({ size: "sm", innerHTML: editSvg }), " Edit"),
        Button13(
          { variant: "subtle", size: "sm", onClick: handleRemoveRequest, className: "g-ui-event-calendar-view-modal-delete" },
          Icon({ size: "sm", innerHTML: deleteSvg }),
          " Delete"
        ),
        Button13({ variant: "filled", size: "sm", onClick: closeModal }, "Close")
      )
    );
  };
  return Div64(
    { ...rest, className: cx("g-ui-event-calendar", className) },
    header,
    when41(
      viewMode,
      (v) => v === "month",
      () => monthView
    ),
    when41(
      viewMode,
      (v) => v === "week",
      () => weekView
    ),
    when41(
      viewMode,
      (v) => v === "day",
      () => dayView
    ),
    when41(
      modalState,
      (m) => m === "create",
      () => Modal(
        {
          opened: true,
          title: "New event",
          size: "lg",
          onClose: closeModal
        },
        createEditForm(false)
      )
    ),
    when41(
      modalState,
      (m) => m === "view",
      () => Modal(
        {
          opened: true,
          title: "Event",
          size: "md",
          onClose: closeModal
        },
        viewModalContent()
      )
    ),
    when41(
      modalState,
      (m) => m === "edit",
      () => Modal(
        {
          opened: true,
          title: "Edit event",
          size: "lg",
          onClose: closeModal
        },
        createEditForm(true)
      )
    )
  );
}

// src/hooks/useDisclosure.js
import { state as state32 } from "@granularjs/core";
function useDisclosure(initial = false) {
  const opened = state32(!!initial);
  return [
    opened,
    {
      open: () => opened.set(true),
      close: () => opened.set(false),
      toggle: () => opened.set(!opened.get())
    }
  ];
}

// src/index.js
ensureStyles();
export {
  Accordion,
  ActionIcon,
  Affix,
  Alert,
  Anchor,
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Badge,
  BadgeGroup,
  Blockquote,
  BottomBar,
  Breadcrumbs,
  Burger,
  Button,
  Calendar,
  Card,
  Center,
  Checkbox,
  CheckboxGroup,
  Chip,
  Code,
  Col,
  Collapse,
  Container,
  CopyButton,
  DateInput,
  DatePicker,
  Divider,
  Drawer,
  EventCalendar,
  Fieldset,
  Flex,
  Grid,
  GridTable,
  Group,
  HoverCard,
  Icon,
  Image,
  Indicator,
  Kbd,
  List,
  Loading,
  LoadingOverlay,
  Menu,
  Modal,
  MultiSelect,
  NavLink,
  Notification,
  Notifications,
  NumberField,
  NumberInput,
  Pagination,
  Paper,
  PasswordInput,
  PinInput,
  Popover,
  Popper,
  Progress,
  ProgressRing,
  Radio,
  RadioGroup,
  RangePicker,
  RangeSlider,
  Rating,
  ScrollArea,
  SearchInput,
  SegmentedControl,
  Select,
  SelectSearch,
  Sidebar,
  SimpleGrid,
  Skeleton,
  Slider,
  Space,
  Stack,
  Stepper,
  Switch,
  SwitchGroup,
  Table,
  Tabs,
  Tag,
  Text,
  TextInput,
  Textarea,
  Timeline,
  Title,
  Toast,
  ToastStack,
  Tooltip,
  classFlag,
  classMap,
  classVar,
  cx,
  getThemeMode,
  setThemeMode,
  setThemeVars,
  splitPropsChildren,
  useDisclosure
};
//# sourceMappingURL=granular-ui.js.map
