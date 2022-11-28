interface Props {
    onEndPTR?: () => void;
    durationPTR: number;
    element?: Element;
}
declare function usePullToRefresh(props: Props): {
    isPulling: boolean;
};
export default usePullToRefresh;
