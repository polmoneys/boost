import { ReactNode, ComponentProps } from "react";
interface Props extends ComponentProps<"ul"> {
    children: string | ReactNode;
    label: string;
    zebra?: boolean;
}
declare function List(props: Props): JSX.Element;
declare namespace List {
    var Item: (props: PropsItem) => JSX.Element;
    var Divider: ({ children }: {
        children?: ReactNode;
    }) => JSX.Element;
}
interface PropsItem extends ComponentProps<"li"> {
    children: string | ReactNode;
    description?: string;
    start?: ReactNode;
    end?: ReactNode;
}
export default List;
