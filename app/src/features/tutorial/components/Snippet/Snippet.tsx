import { HelveticaNeueS } from "font-react";
import { ReactNode } from "react";
import { Accent, Color } from "./Snippets";

interface Props {
  title: string;
  children: ReactNode;
}

function Snippet(props: Props) {
  const { title, children } = props;

  return (
    <div className="accent-light p $">
      <HelveticaNeueS>{title}</HelveticaNeueS>
      <code className="color-accent">{children}</code>
    </div>
  );
}

export default Snippet;

Snippet.Color = () => (
  <Snippet title="// Utility classes with postcss">
    <Color />
  </Snippet>
);

Snippet.Accent = () => (
  <Snippet title="// Utility classes with postcss">
    <Accent />
  </Snippet>
);
