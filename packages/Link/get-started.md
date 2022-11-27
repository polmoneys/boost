## Link

```tsx


interface Props extends ComponentProps<"a"> {
   href: string;
  children: string | ReactNode;
  variant?:  "" | "button" ;
  // adds rel & target
  newTab?: boolean;
  // adds cheap css tooltip
  tooltip?: string;
}


```


## Usage


```jsx

 
<HelveticaNeue>
   Search on 
   <Link href="https://Google.com" >
   Google
   </Link>.
</HelveticaNeue>

<Link
   href="https://Google.com"
   tooltip="Search on google"
   variant="button"
   className="accent"
>
   Go explore
</Link>


```
