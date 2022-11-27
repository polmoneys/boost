import { useState } from "react";

function useSet(initialState = []) {
  const [collection, setCollection] = useState(
    () => new Set<string>(initialState)
  );

  const add = (newItem: string) =>
    setCollection(oldTags => new Set([...oldTags, newItem]));

  const empty = () => setCollection(new Set(initialState));

  const remove = (newItem: string) => {
    setCollection(oldTags => {
      const newSet = new Set(oldTags);
      newSet.delete(newItem);
      return newSet;
    });
  };

  // const difference = (a: any, b: any) => new Set([...a].filter(x => !b.has(x)));
  // const intersection = (a: any, b: any) =>
  //   new Set([...a].filter(x => b.has(x)));

  const has = (key: string) => collection.has(key);

  return {
    items: [...collection] as Array<string>,
    size: collection.size,
    empty,
    add,
    remove,
    has,
  };
}

export default useSet;
