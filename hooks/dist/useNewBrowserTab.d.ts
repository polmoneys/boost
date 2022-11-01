declare type BooleanAsString = "yes" | "no";
export interface Props {
    url: string;
    title: string;
    /** X axis */
    left?: number;
    /** Y axis */
    top?: number;
    /** width */
    width?: number;
    /** height */
    height?: number;
    config?: {
        menubar: BooleanAsString;
        location: BooleanAsString;
        resizable: BooleanAsString;
        scrollbars: BooleanAsString;
        status: BooleanAsString;
    };
}
declare function useNewBrowserTab(props: Props): () => void;
export default useNewBrowserTab;
