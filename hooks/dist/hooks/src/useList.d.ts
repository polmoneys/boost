import { v4 as uuidv4 } from "uuid";
declare type Uuid = typeof uuidv4;
declare type ObjectLike = Record<string, string | Uuid>;
interface ListItem extends ObjectLike {
    uuid: Uuid;
}
declare const useList: <T extends ListItem>(initial: Array<ListItem>) => readonly [ListItem[], {
    readonly setItems: import("react").Dispatch<import("react").SetStateAction<ListItem[]>>;
    readonly clearItems: () => void;
    readonly addItem: (item: ListItem) => void;
    readonly removeItemById: (id: Uuid) => void;
    readonly removeItemByIndex: (index: number) => void;
    readonly isInList: (id: Uuid) => boolean;
}];
export default useList;
