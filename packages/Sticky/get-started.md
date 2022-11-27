## Sticky

```tsx


interface Props extends AsProps {
  children: string | ReactNode;
  options?: {
    top: number;
    left: number;
  };
  className?: string;
}


```


## Usage


```jsx


<Sticky as="div" className="accent p $$">
   <h2>I will stick to the top</h2>
</Sticky>


```
