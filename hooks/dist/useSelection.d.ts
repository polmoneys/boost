import { ChangeEvent } from "react";
declare type ObjectBoolean = Record<string, boolean>;
declare function useSelection<T extends ObjectBoolean>(items: T): [
    {
        output: T;
        all: boolean;
        mixed: boolean | "mixed";
    },
    {
        onFollowerChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onLeadChange: () => void;
        isSelected: (slice: string) => boolean;
    }
];
export default useSelection;
