import { Fragment } from "react";

export const Color = () => (
  <Fragment>
    <span className="loc">{`.color-accent {`}</span>
    <span className="loc -indent">{`color: var(--accent) !important;`}</span>
    <span className="loc -indent">{`fill: var(--accent);`}</span>
    <span className="loc -indent">{`stroke-color: var(--accent);`}</span>
    <span className="loc -indent">{`&.-border {`}</span>
    <span className="loc -indent-max">{`  border-color: var(--accent);`}</span>
    <span className="loc -indent-max">
      {`  border-width: var(--border-width);`}
    </span>
    <span className="loc -indent-max">{`border-style: solid;`}</span>
    <span className="loc -indent">{`}`}</span>
    {`}`}
  </Fragment>
);

export const Accent = () => (
  <Fragment>
    <span className="loc">{`.accent {`}</span>
    <span className="loc -indent">{`background-color: var(--accent) !important;`}</span>
    <span className="loc -indent">{`border-color: var(--accent);`}</span>
    <span className="loc -indent">{`border-width: var(--border-width);`}</span>
    <span className="loc -indent">{`border-style: solid;`}</span>

    <span className="loc -indent">{`& polygon {`}</span>
    <span className="loc -indent-max">{`fill: var(--accent);`}</span>
    <span className="loc -indent">{`}`}</span>

    <span className="loc -indent">{`&::selection {`}</span>
    <span className="loc -indent-max">{`color: var(--accent);`}</span>
    <span className="loc -indent-max">{`background-color: var(--black);`}</span>
    <span className="loc -indent">{`}`}</span>

    <span className="loc -indent">{`&::-webkit-input-placeholder {`}</span>
    <span className="loc -indent-max">{`color: var(--black);`}</span>
    <span className="loc -indent">{`}`}</span>

    <span className="loc -indent">{`&::after {`}</span>
    <span className="loc -indent-max">{`background-color: var(--black);`}</span>
    <span className="loc -indent">{`}`}</span>

    <span className="loc -indent">{`&.-hover:hover {`}</span>
    <span className="loc -indent-max">{`filter: brightness(var(--bright));`}</span>
    <span className="loc -indent">{`}`}</span>

    <span className="loc -indent">{` &.-focus:focus, &:focus {`}</span>
    <span className="loc -indent-max">{`outline-color: var(--accent) !important;`}</span>
    <span className="loc -indent">{`}`}</span>

    {`}`}
  </Fragment>
);
