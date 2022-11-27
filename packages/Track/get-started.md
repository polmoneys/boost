## Track


```tsx


export interface Props extends AsProps {
  children: ReactNode;
  className?: string;
  gap?: string;
  options?: {
   container: HTMLElement;
   slider: HTMLElement;
   hasTouchEvent?: boolean;
   smoothAmount?: number;
   dragSpeed?: number;
   mouseEnter?: () => void;
   mouseUp?: () => void;
   mouseLeave?: () => void;
   mouseDown?: () => void;
  };
  maskSize: string;
}


```


## Usage


```jsx


<Track as="div" maskSize="1400px">
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
</Track>


```
