interface Props {
    items: Array<{
        label: string;
        id: string;
    }>;
    itemHeight: number;
    onDrop?: (position: {
        x: number;
        y: number;
    }) => void;
    onDropValue?: (start: string, end: string) => void;
}
declare function Sortable(props: Props): JSX.Element;
export default Sortable;
