import { forwardRef, ReactElement, Ref } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { WithChildren } from "../../Types/dist/types";
import styles from "./Popover.module.css";

interface Props extends WithChildren {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /*
  if true, interaction with outside elements will be disabled
  and only popover content will be visible to screen readers.
  */
  modal?: boolean;
  trigger: ReactElement;
  arrowFill?: string;
  classNames?: {
    trigger?: string;
    group?: string;
  };
}

const PopoverContent = forwardRef(
  ({ children, arrowFill = "currentColor", ...props }: any, forwardedRef) => (
    <PopoverPrimitive.Content
      sideOffset={5}
      {...props}
      ref={forwardedRef as Ref<HTMLDivElement>}
    >
      {children}
      <PopoverPrimitive.Arrow
        className={styles.arrow}
        style={{ color: arrowFill }}
      />
    </PopoverPrimitive.Content>
  )
);

function Popover(props: Props) {
  const { children, trigger, classNames, arrowFill } = props;

  const groupClassnames = [styles.group, classNames?.group]
    .filter(Boolean)
    .join(" ");
  const triggerClassnames = [styles.trigger, classNames?.trigger]
    .filter(Boolean)
    .join(" ");

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger className={triggerClassnames}>
        {trigger}
      </PopoverPrimitive.Trigger>
      <PopoverContent className={groupClassnames} arrowFill={arrowFill}>
        {children}
      </PopoverContent>
    </PopoverPrimitive.Root>
  );
}

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = PopoverContent;

export default Popover;
