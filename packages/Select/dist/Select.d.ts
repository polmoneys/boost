import Value from "./Interfaces/Value";
import Option from "./Interfaces/Option";
declare type Props<T extends Value> = {
    options: Option<T>[];
    value: T;
    onChange: (value: T) => void;
    classNames?: {
        root?: string;
        select?: string;
    };
    placeholder: string;
};
declare function Select<T extends Value>(props: Props<T>): JSX.Element;
export default Select;
