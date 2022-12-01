export const scrollToElement = (selector: string) => {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView();
  }
};
