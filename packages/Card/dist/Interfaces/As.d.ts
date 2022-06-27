declare const HTMLtag: readonly ["section", "article", "li", "div", "form"];
declare type HTMLTags = typeof HTMLtag[number];
interface AsProps {
    as: HTMLTags;
}
export default AsProps;
