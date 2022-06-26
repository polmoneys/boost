declare const HTMLtag: readonly ["section", "article", "nav", "aside", "header", "footer", "label", "p", "h1", "h2", "h3", "ul", "li", "div", "form"];
declare type HTMLTags = typeof HTMLtag[number];
interface AsProps {
    as: HTMLTags;
}
export default AsProps;
