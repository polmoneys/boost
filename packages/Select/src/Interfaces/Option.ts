import Value from "./Value";

type Option<T extends Value> = {
  value: T;
  label: string;
};

export default Option;
