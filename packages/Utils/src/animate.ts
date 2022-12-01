/**
 * 🎡 🎢 🎠 port of this fab post https://dassur.ma/things/raf-promise/
 */

function transitionEndPromise(element: any) {
  return new Promise<void>(resolve => {
    const node = element;
    node.addEventListener("transitionend", function f(event: any) {
      if (event.target !== node) return;
      node.removeEventListener("transitionend", f);
      resolve();
    });
  });
}

export function timeline() {
  return new Promise(resolve => requestAnimationFrame(resolve));
}

export function animate(element: any, stylz: Record<string, string>) {
  Object.assign(element.current.style, stylz);
  return transitionEndPromise(element.current).then(() => timeline());
}
