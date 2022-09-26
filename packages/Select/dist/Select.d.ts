declare type OptionValue = string | number;
declare type Option<T extends OptionValue> = {
    value: T;
    label: string;
};
declare type Props<T extends OptionValue> = {
    options: Option<T>[];
    value: T;
    onChange: (value: T) => void;
};
declare function Select<T extends OptionValue>(props: Props<T>): JSX.Element;
export default Select;
