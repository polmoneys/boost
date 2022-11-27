## Layers

Avoid content layout shifts by using CSS **grid**.  


```tsx

interface Props extends AsProps {
   align?: "start" | "end" | "center";
   children: ReactNode;
   className?: string;
}

```

## Usage


```jsx


const [tab, setTab] = useState({active:'circle'});


return (
<Layers as="ul">

   <Group as="li" aria-hidden={tab === 'circle' ? false : true}>
      <Button onClick={() => setTab(prev => !prev)}>
         Show Circle
      </Button>
      <Shape.Triangle />
   </Group>

   <Group as="li" aria-hidden={tab !== 'circle' ? false : true}>
      <Button onClick={() => setTab(prev => !prev)} >
         Show Triangle
      </Button>
      <Shape.Circle />
   </Group>

</Layers>
)


```
