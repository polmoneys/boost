## ScrollUnit

Build upon ```@radix-ui/react-scroll-area```.


```tsx


interface Props {
  children: ReactNode;
  dir?: "ltr" | "rtl";
  classNames?: {
    root?: string;
    viewport?: string;
  };
  type?: "auto" | "always" | "scroll" | "hover";
}


```


## Usage


```jsx

<ScrollUnit
   type="hover"
   classNames={{
      root: "scroll",
      viewport: "accent p $$",
   }}
>
   {tags.map(tag => (
      <HelveticaNeue className="tag" key={tag}>
         {tag}
      </HelveticaNeue>
   ))}
</ScrollUnit>


```
