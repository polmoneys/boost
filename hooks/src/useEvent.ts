import { useEffect, useRef } from "react";

function useEvent(
  eventName: string,
  handler: any,
  element: Element | HTMLElement | Window = window
) {
  const savedHandler = useRef();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    //@ts-ignore
    const eventListener = (event: any) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default useEvent;
