const HTMLtag = [
  "section",
  "article",
  "nav",
  "aside",
  "header",
  "footer",
  "ul",
  "div",
  "form",
] as const;
type HTMLTags = typeof HTMLtag[number];

interface AsProps {
  as: HTMLTags;
}

export default AsProps;
