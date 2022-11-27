import {
  cloneElement,
  ReactNode,
  ElementType,
  Children,
  isValidElement,
} from "react";

const { map, count, toArray } = Children;

/**
 * Utility to merge 'local' and/or forwardRef...
 * ...for complex components.
 * Usage: ref={mergeRefs(localUseRef, refForwarded)}
 *
 */

export const mergeRefs = (...refs: any) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return (inst: any) => {
    for (const ref of filteredRefs) {
      if (typeof ref === "function") {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};

export const addProps = (
  children: ReactNode | undefined,
  props: Record<string, unknown>
): ReactNode | undefined => {
  return isValidElement(children) && cloneElement(children, props);
};

export const hasChild = (
  children: ReactNode | undefined,
  child: ElementType
): boolean => {
  const types = map(children, item => {
    if (!isValidElement(item)) return null;
    return item.type;
  });

  return (types || []).includes(child);
};

export const pickChild = (
  children: ReactNode | undefined,
  targetChild: ElementType
): [ReactNode | undefined, ReactNode | undefined] => {
  let target: ReactNode[] = [];
  const withoutTargetChildren = map(children, item => {
    if (!isValidElement(item)) return item;
    if (item.type === targetChild) {
      target.push(item);
      return null;
    }
    return item;
  });

  const targetChildren = target.length >= 0 ? target : undefined;

  return [withoutTargetChildren, targetChildren];
};

export const pickChildByProps = (
  children: ReactNode | undefined,
  key: string,
  value: any
): [ReactNode | undefined, ReactNode | undefined] => {
  let target: ReactNode[] = [];
  const isArray = Array.isArray(value);
  const withoutPropChildren = map(children, item => {
    if (!isValidElement(item)) return null;
    if (!item.props) return item;
    if (isArray) {
      if (value.includes(item.props[key])) {
        target.push(item);
        return null;
      }
      return item;
    }
    if (item.props[key] === value) {
      target.push(item);
      return null;
    }
    return item;
  });

  const targetChildren = target.length >= 0 ? target : undefined;

  return [withoutPropChildren, targetChildren];
};

export const pickChildrenFirst = (
  children: ReactNode | undefined
): ReactNode | undefined => {
  return toArray(children)[0];
};

export const setChildrenProps = (
  children: ReactNode | undefined,
  props: Record<string, unknown>,
  targetComponents: Array<ElementType> = []
): ReactNode | undefined => {
  if (count(children) === 0) return [];
  const allowAll = targetComponents.length === 0;
  const clone = (child: React.ReactElement, props = {}) =>
    cloneElement(child, props);

  return map(children, item => {
    if (!isValidElement(item)) return item;
    if (allowAll) return clone(item, props);

    const isAllowed = targetComponents.find(child => child === item.type);
    if (isAllowed) return clone(item, props);
    return item;
  });
};
