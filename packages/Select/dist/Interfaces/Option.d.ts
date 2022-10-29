import Value from "./Value";
declare type Option<T extends Value> = {
    value: T;
    label: string;
};
export default Option;
