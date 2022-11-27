import { useState, useMemo } from "react";

type Updater = number | ((currentState: number) => number);

type Handlers = {
  update: (updater: Updater) => void;
  reset: () => void;
  zero: () => void;
};

function useNumber(initialState: number = 0): [number, Handlers] {
  if (typeof initialState !== "number") {
    throw new Error("`initialState` argument must be a number");
  }

  const [state, setState] = useState<number>(initialState);

  const handlers = useMemo(
    () => ({
      update: (updater: Updater) => {
        setState(s => {
          if (typeof updater === "function") {
            return Number(updater(s));
          }

          return Number(updater);
        });
      },
      reset: () => {
        setState(initialState);
      },
      zero: () => {
        setState(0);
      },
    }),
    [initialState]
  );

  return [state, handlers];
}

export default useNumber;
