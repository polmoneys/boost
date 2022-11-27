interface Props {
    label: string;
    min?: number;
    max: number;
    value: number;
    height: `${string}px`;
    items: Array<{
        label: string;
        color: string;
        value: `${string}%`;
    }>;
    className?: string;
}
declare function Meter(props: Props): JSX.Element;
export default Meter;
