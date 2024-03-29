import { useMemo, useState } from "react";

type Updater = string | ((currentState: string) => string);

type Handlers = {
  update: (updater: Updater) => void;
  reset: () => void;
  empty: () => void;
};

function useString(initialState: string = ""): [string, Handlers] {
  if (typeof initialState !== "string") {
    throw new Error("`initialState` argument must be a string");
  }

  const [state, setState] = useState<string>(initialState);

  const handlers = useMemo(
    () => ({
      update: (updater: Updater) => {
        setState(s => {
          if (typeof updater === "function") {
            return String(updater(s));
          }

          return String(updater);
        });
      },
      reset: () => {
        setState(initialState);
      },
      empty: () => {
        setState("");
      },
    }),
    [initialState]
  );

  return [state, handlers];
}

export default useString;
