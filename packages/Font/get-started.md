## Font


```tsx


interface Props extends AriaAttributes, AsProps {
  size?: Sizes;
  children: string;
  className?: string;
  /** truncate (px) */
  truncate?: number;
  /** for numbers */
  numeric?: boolean;
  /** flow */
  hyphenate?: boolean;
  /** break long word  */
  breakWord?: boolean;
  /** Last resort */
  dangerousColor?: string;
  /** Last resort */
  dangerousTransform?: string;
}


```


## Usage

Create your own variants with CSS module and export/consume them.


```jsx


// Family variants
const HelveticaNeue = Compose(styles.helveticaNeue);
const HelveticaNeueMedium = Compose(styles.medium);
const HelveticaNeueBold = Compose(styles.bold);
const HelveticaNeueThin = Compose(styles.thin);
const Grotesk = Compose(styles.grotesk);

// Size variants
const HelveticaNeueBoldXL = ComposeSize(HelveticaNeueBold, "xl");
const HelveticaNeueBoldS = ComposeSize(HelveticaNeueBold, "s");


```



