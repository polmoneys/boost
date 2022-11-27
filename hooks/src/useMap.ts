import { useState } from "react";

function useMap(initialState = []) {
  const [collection, setCollection] = useState(() => new Map(initialState));

  const add = (key: any, value: any) =>
    setCollection(oldItems => {
      const newMap = new Map(oldItems);
      newMap.set(key, value);
      return newMap;
    });
  const empty = () => setCollection(new Map());

  const remove = (key: any) =>
    setCollection(oldItems => {
      const newMap = new Map(oldItems);
      newMap.delete(key);
      return newMap;
    });

  const has = (key: string) => collection.has(key);

  return {
    items: [...collection],
    size: collection.size,
    empty,
    add,
    remove,
    has,
  };
}

export default useMap;
