declare const HTMLtag: readonly ["section", "article", "nav", "aside", "header", "footer", "ul", "li", "div", "form"];
declare type HTMLTags = typeof HTMLtag[number];
interface AsProps {
    as: HTMLTags;
}
export default AsProps;
