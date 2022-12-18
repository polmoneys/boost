export const getProp = (prop: string) =>
  getComputedStyle(document.documentElement, null).getPropertyValue(prop);

export const setProp = (prop: string, replacement: string) =>
  document.documentElement.style.setProperty(prop, replacement);

export const isApiSupported = (api: string) => api in window;

export const gridSupport = () => window.CSS && CSS.supports("display:grid");

//  console.log(CSS.supports("width:clamp(2rem, 10vmax, 10rem)"));

export const isHoverableDevice = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)");

export const ponyfills = () => {
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      "use strict";
      if (typeof start !== "number") {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
    };
  }
};
