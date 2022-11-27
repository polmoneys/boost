## Fence

Fences a component with intersection observer cappabilities so that a callback triggers when **in viewport view**.

Build upon ```react-intersection-observer```.


```tsx

interface Props extends AsProps {
  children: ReactNode;
  onChange?: (on: boolean) => void;
  options?: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  };
  className?: string;
}

```

## Usage


```jsx

  const [hasFenceBeenCrossed, setFenceCrossStatus] = useState(false);

 
<Fence
    as="li"
    options={{
    threshold: 0.8,
    triggerOnce: true,
    }}
    onChange={(isOn: boolean) => setFenceCrossStatus(isOn)}
>

    <Shape
        sides={hasFenceBeenCrossed ? 5 : 3}
        size={200}
    />

</Fence>


```



