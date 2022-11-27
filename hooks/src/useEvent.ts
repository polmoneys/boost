import { useEffect, useRef } from "react";

/*

USAGE
-----

useEvent('mousemove', handler);
const handler = useCallback(
    ({ clientX, clientY }) => {
    setStateX({ x: clientX, y: clientY });
    },
    [stateX]
);

 */

const useEvent = (eventName: string, handler: any, element = window) => {
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
};

export default useEvent;
