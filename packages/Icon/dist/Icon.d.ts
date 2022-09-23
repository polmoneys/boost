interface Props {
    disabled?: boolean;
    variant?: "outline" | "solid";
    d?: string;
    size?: "sm" | "md" | "lg";
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}
declare function Icon(props: Props): JSX.Element;
declare const IconPlus: (props: Props) => JSX.Element;
declare const IconMinus: (props: Props) => JSX.Element;
declare const IconCross: (props: Props) => JSX.Element;
declare const IconCheck: (props: Props) => JSX.Element;
declare const IconDash: (props: Props) => JSX.Element;
declare const IconSlash: (props: Props) => JSX.Element;
declare const IconCaretUp: (props: Props) => JSX.Element;
declare const IconCaretDown: (props: Props) => JSX.Element;
declare const IconDotsX: (props: Props) => JSX.Element;
declare const IconDotsY: (props: Props) => JSX.Element;
export default Icon;
export { IconPlus, IconMinus, IconCross, IconCheck, IconDash, IconSlash, IconCaretUp, IconCaretDown, IconDotsX, IconDotsY, };
