const HTMLtag = [
  "label",
  "span",
  "p",
  "b",
  "em",
  "strong",
  "time",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
] as const;
type HTMLTags = typeof HTMLtag[number];

interface AsProps {
  as: HTMLTags;
}

export default AsProps;
