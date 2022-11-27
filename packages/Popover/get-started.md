## Popover

Build upon ```@radix-ui/react-popover```.


```tsx


interface Props {
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /*
  The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
  */
  modal?: boolean;
  trigger: ReactElement;
  classNames?: {
    trigger?: string;
    root?: string;
  };
}


```


## Usage


```jsx


<Popover
   trigger={<Popover.Trigger>HEYYYEYE</Popover.Trigger>}
   classNames={{
    trigger: "accent p $$",
   }}
>
   <Shape.Circle />

   <HelveticaNeue>
   Lorem ipsun dolor sit amet indisciplinctur gloria at rosae
   pantocrator. Lorem{" "}
   <Link href="https://Google.com" data-tooltip="Search on google">
      link
   </Link>{" "}
   anae shandy cante oremus.
   </HelveticaNeue>
   <Shape.Circle />
   
</Popover>


```
