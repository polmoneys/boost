## Group

Groups HTMLElements/Components with CSS layout sugar like **gap** for both **flexbox** or **grid**. Intrinsic sizes available with **size** prop.  


```tsx

interface Props extends AsProps, VariantProps {
   children: ReactNode;
   gap?: string;
   size?: string;
   options?:
      | {
         stretch?: boolean;
         alignItems?: string;
         justifyContent?: string;
         wrap?: string;
         direction?: string;
         placeItems?: never;
         DONOTStyle: Dictionary;

      }
      | {
         placeItems?: string;
         alignItems?: never;
         stretch?: never;
         justifyContent?: never;
         wrap?: never;
         direction?: never;
         DONOTStyle: Dictionary;

      };
   className?: string;
}

```

## Usage


```jsx

 
<Group as="ul" gap="var(--gap-5)" variant="grid" size="480px">
</Group>


<Group
   as="form"
   gap="var(--gap-3)"
   options={{
      direction: "column",
   }}
>
</Group>




```
