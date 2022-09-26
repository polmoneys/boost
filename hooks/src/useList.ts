import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Uuid = typeof uuidv4;
type ObjectLike = Record<string, string | Uuid>;

interface ListItem extends ObjectLike {
  uuid: Uuid;
}

const useList = <T extends ListItem>(initial: Array<ListItem>) => {
  const [items, setItems] = useState(initial);
  return [
    items,
    {
      setItems,
      clearItems: useCallback(() => setItems(() => []), []),
      addItem: useCallback((item: ListItem) => setItems(v => [...v, item]), []),
      removeItemById: useCallback(
        (id: Uuid) =>
          setItems(oldItems =>
            oldItems.filter(oldItem => oldItem && oldItem.uuid !== id)
          ),
        []
      ),
      removeItemByIndex: useCallback(
        (index: number) =>
          setItems(oldItems => oldItems.filter((oldItem, i) => i !== index)),
        []
      ),
    },
  ] as const;
};
export default useList;
