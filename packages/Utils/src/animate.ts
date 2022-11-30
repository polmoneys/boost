export function requestAnimationFramePromise() {
  return new Promise(resolve => requestAnimationFrame(resolve));
}
// TODO: element: any => REACT.CURRENT REF
function transitionEndPromise(element: any) {
  if (!element || element === null) {
    return new Promise<void>(resolve => {
      resolve();
    });
  } else {
    return new Promise<void>(resolve => {
      const node = element.current;
      node.addEventListener("transitionend", function f(event: Event) {
        if (event.target !== node) return;
        node.removeEventListener("transitionend", f);
        resolve();
      });
    });
  }
}

export function animate(element: any, newStyles: Record<string, string>) {
  if (!element || element === null) {
    return transitionEndPromise(element).then(_ =>
      requestAnimationFramePromise()
    );
  } else {
    Object.assign(element.current.style, newStyles);
    return transitionEndPromise(element).then(_ =>
      requestAnimationFramePromise()
    );
  }
}
