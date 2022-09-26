import { useMemo, useReducer } from "react";

export type BinaryState = "on" | "off";

function binaryReducer(state: BinaryState, action: "ON" | "OFF" | "TOGGLE") {
  switch (action) {
    case "ON":
      return "on";
    case "OFF":
      return "off";
    case "TOGGLE":
      return state === "on" ? "off" : "on";
    default:
      return state;
  }
}

function useBinary(initialState: BinaryState) {
  const [state, dispatch] = useReducer(binaryReducer, initialState);
  const actions = useMemo(
    () => ({
      on: () => dispatch("ON"),
      off: () => dispatch("OFF"),
      toggle: () => dispatch("TOGGLE"),
    }),
    []
  );
  return { state, actions };
}

export default useBinary;
