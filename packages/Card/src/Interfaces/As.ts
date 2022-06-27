const HTMLtag = ["section", "article", "li", "div", "form"] as const;
type HTMLTags = typeof HTMLtag[number];

interface AsProps {
  as: HTMLTags;
}

export default AsProps;
