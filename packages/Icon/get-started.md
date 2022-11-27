## Icon


```tsx

interface Props {
   variant?: "outline" | "solid";
   size?: "sm" | "md" | "lg";
   // customize
   fill?: string;
   stroke?: string;
   strokeWidth?: number;
   disabled?: boolean;
   // internal use only
   d?: string;
}


```


## Usage


```jsx


<IconCheck size="sm" />
<IconCheck />
<IconCheck size="lg" />

<IconCheck size="sm" variant="outline" />
<IconCheck variant="outline" />
<IconCheck size="lg" variant="outline" />

<IconCheck size="sm" variant="solid" />
<IconCheck variant="solid" />
<IconCheck size="lg" variant="solid" />


```
