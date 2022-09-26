import { useReducer, useMemo, useState, useCallback } from "react";
function binaryReducer(state, action) {
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
function useBinary(initialState) {
  const [state, dispatch] = useReducer(binaryReducer, initialState);
  const actions = useMemo(() => ({
    on: () => dispatch("ON"),
    off: () => dispatch("OFF"),
    toggle: () => dispatch("TOGGLE")
  }), []);
  return { state, actions };
}
function useImageSize() {
  const [imageSize, setImageSize] = useState(null);
  const getImageSize = (event) => {
    const target = event.target;
    setImageSize({ width: target.naturalWidth, height: target.naturalHeight });
  };
  return [imageSize, getImageSize];
}
const useList = (initial) => {
  const [items, setItems] = useState(initial);
  return [
    items,
    {
      setItems,
      clearItems: useCallback(() => setItems(() => []), []),
      addItem: useCallback((item) => setItems((v) => [...v, item]), []),
      removeItemById: useCallback((id) => setItems((oldItems) => oldItems.filter((oldItem) => oldItem && oldItem.uuid !== id)), []),
      removeItemByIndex: useCallback((index) => setItems((oldItems) => oldItems.filter((oldItem, i) => i !== index)), [])
    }
  ];
};
export { useBinary, useImageSize, useList };
