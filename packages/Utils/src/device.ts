export const getProp = (prop: string) =>
  getComputedStyle(document.documentElement, null).getPropertyValue(prop);

export const isApiSupported = (api: string) => api in window;

export const gridSupport = () => window.CSS && CSS.supports("display:grid");

//  console.log(CSS.supports("width:clamp(2rem, 10vmax, 10rem)"));

export const isHoverableDevice = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)");
