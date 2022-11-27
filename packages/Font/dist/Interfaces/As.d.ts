declare const HTMLtag: readonly ["label", "span", "p", "b", "em", "strong", "time", "h1", "h2", "h3", "h4", "h5", "h6"];
declare type HTMLTags = typeof HTMLtag[number];
interface AsProps {
    as?: HTMLTags;
}
export default AsProps;
