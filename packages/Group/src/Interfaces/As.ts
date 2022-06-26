const HTMLtag = [
  "section",
  "article",
  "nav",
  "aside",
  "header",
  "footer",
  "label",
  "p",
  "h1",
  "h2",
  "h3",
  "ul",
  "li",
  "div",
  "form",
] as const;
type HTMLTags = typeof HTMLtag[number];

interface AsProps {
  as: HTMLTags;
}

export default AsProps;
