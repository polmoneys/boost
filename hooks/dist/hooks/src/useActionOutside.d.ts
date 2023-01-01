import { RefObject } from "react";
declare type AnyEvent = MouseEvent | TouchEvent;
declare function useActionOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: AnyEvent) => void): void;
export default useActionOutside;
