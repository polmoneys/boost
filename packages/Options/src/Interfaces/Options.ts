import { ReactNode } from "react";

type Options = Array<{
  value: string;
  label: string | ReactNode;
  id: string;
  href?: string;
  icon?: ReactNode;
}>;

export default Options;
