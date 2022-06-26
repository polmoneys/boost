interface Props {
    sides?: number;
    size?: number;
    fill?: string;
    transforms?: string;
}
declare function Shape(props: Props): JSX.Element;
declare namespace Shape {
    var Triangle: (props: Props) => JSX.Element;
    var Square: (props: Props) => JSX.Element;
    var Circle: (props: Props) => JSX.Element;
    var Freeze: import("react").MemoExoticComponent<(props: Props) => JSX.Element>;
}
export default Shape;
