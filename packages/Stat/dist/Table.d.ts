interface Item {
    label: string;
    value?: string;
}
interface Props {
    label: string;
    th: Array<Item>;
    tr: Array<Array<Item>>;
    classNames?: {
        group?: string;
        viewport?: string;
    };
}
declare function Table(props: Props): JSX.Element;
export default Table;
