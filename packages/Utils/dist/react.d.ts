import { ReactNode, ElementType } from "react";
/**
 * Utility to merge 'local' and/or forwardRef...
 * ...for complex components.
 * Usage: ref={mergeRefs(localUseRef, refForwarded)}
 *
 */
export declare const mergeRefs: (...refs: any) => any;
export declare const addProps: (children: ReactNode | undefined, props: Record<string, unknown>) => ReactNode | undefined;
export declare const hasChild: (children: ReactNode | undefined, child: ElementType) => boolean;
export declare const pickChild: (children: ReactNode | undefined, targetChild: ElementType) => [ReactNode | undefined, ReactNode | undefined];
export declare const pickChildByProps: (children: ReactNode | undefined, key: string, value: any) => [ReactNode | undefined, ReactNode | undefined];
export declare const pickChildrenFirst: (children: ReactNode | undefined) => ReactNode | undefined;
export declare const setChildrenProps: (children: ReactNode | undefined, props: Record<string, unknown>, targetComponents?: Array<ElementType>) => ReactNode | undefined;
