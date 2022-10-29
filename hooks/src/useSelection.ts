import { ChangeEvent, useCallback, useMemo, useState } from "react";

type ObjectBoolean = Record<string, boolean>;

/*
export const DEMO_CHECKBOXES = {
  mayo: true,
  mustard: true,
  ketchup: false,
};

  const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] =
    useMixedState(DEMO_CHECKBOXES);

     <Shelf wrap gap="2rem">
              <Checkbox
                name="all-condiments"
                value="condiments"
                checked={mixed}
                onChange={onLeadChange}
              >
                <Stack align="start">
                  <HelveticaNeueBold
                    dangerousColor="var(--teal-4)"
                    aria-hidden={all ? false : true}
                  >
                    Unselect all
                  </HelveticaNeueBold>
                  <HelveticaNeueBold
                    dangerousColor="var(--teal-4)"
                    aria-hidden={!all ? false : true}
                  >
                    Select all
                  </HelveticaNeueBold>
                </Stack>
              </Checkbox>

              {Object.entries(output).map(([value, state]) => (
                <div key={value}>
                  <Checkbox
                    name={value.toString().toLowerCase()}
                    value={value}
                    checked={state as boolean}
                    onChange={onFollowerChange}
                  >
                    <HelveticaNeueBold>{value}</HelveticaNeueBold>
                  </Checkbox>
                </div>
              ))}
            </Shelf>

*/
function useSelection<T extends ObjectBoolean>(
  items: T
): [
  {
    output: T;
    all: boolean;
    mixed: boolean | "mixed";
  },
  {
    onFollowerChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onLeadChange: () => void;
  }
] {
  if (process.env.NODE_ENV === "development") {
    console.warn("[onLeadChange] spread to the commanding CheckBox");
  }

  const [mixedState, dispatchUpdate] = useState<{ [key: string]: boolean }>(
    items
  );

  const allChecked = useMemo(() => {
    return Object.keys(mixedState).every(
      (condiment: string) => mixedState[condiment] === true
    );
  }, [mixedState]);

  const someChecked = useMemo(() => {
    return allChecked
      ? false
      : Object.keys(mixedState).some(
          (condiment: string) => mixedState[condiment] === true
        );
  }, [mixedState, allChecked]);

  const parentIsChecked = useMemo(() => {
    return allChecked ? true : someChecked ? "mixed" : false;
  }, [someChecked, allChecked]);

  const onLeadChange = useCallback(() => {
    return dispatchUpdate(
      Object.keys(mixedState).reduce(
        (state, condiment) => ({
          ...state,
          [condiment]: !allChecked,
        }),
        {}
      )
    );
  }, [allChecked, mixedState]);

  const onFollowerChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target;
      return dispatchUpdate({
        ...mixedState,
        [value]: checked,
      });
    },
    [mixedState]
  );
  //   const matchSelection = useCallback(
  //     (id: Uuid) => {
  //       return items.map(item => item.uuid).includes(id);
  //     },
  //     [items]
  //   );
  // matchSelection,
  // updateSelection: useCallback(
  //   (id: Uuid) => {
  //     if (matchSelection(id)) {
  //       if (allowUnselected) {
  //         setSelection(previousSelection =>
  //           previousSelection.filter(inSelection => id !== inSelection)
  //         );
  //       } else {
  //         console.warn("allowUnselected is false. Cannot unselect item");
  //       }
  //     } else {
  //       if (allowMultiple) {
  //         setSelection(previousSelection => [...previousSelection, id]);
  //       } else {
  //         setSelection([id]);
  //       }
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [items, allowMultiple, selection]
  // ),
  return [
    {
      output: mixedState as T,
      all: allChecked,
      mixed: parentIsChecked,
    },
    { onFollowerChange, onLeadChange },
  ];
}

export default useSelection;
