/*
  const css = `
  :root {
      --${id}-loaded:1;
    --${id}-bg: ${param.bg};
  }
  [pictopic-state="active"] {
      background-color: var(--${id}-bg);
  }
 `;
*/

interface Props {
  id: string;
  styles: string;
}

function insertCss(id: string, styles: string) {
  const d = document,
    head = d.head || d.getElementsByTagName("head")[0];

  if (d.getElementById(id)) {
    d.getElementById(id)?.remove();
  }

  let styleEl = d.createElement("style") as any;
  styleEl.id = id;

  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = styles;
  } else {
    styleEl.appendChild(d.createTextNode(styles));
  }
  head.appendChild(styleEl);
}

function useAttachStylesheet(props: Props) {
  return insertCss(props.id, props.styles);
}

export default useAttachStylesheet;
