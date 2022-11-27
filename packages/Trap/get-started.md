## Trap


Wraps a component with focus trap capabilities for **toolbars** and **dialogs**.  Build upon ```@react-aria/focus```.


```tsx


interface Props {
  children: ReactNode;
  initial?: boolean;
  options?: OptionsProps;
}


```


## Usage


```jsx


const [trapped,setTrap] = useState(false);

return(
<Group>
   <Button onClick={() => setTrap(true)}>Open trap</Button>


   <Trap initial={trapped}>

      {trapped && (
         <Group
            gap="var(--gap-3)"
            options={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            }}
         >
            <Button variant="icon" onClick={() => ({})}>
               <IconIg />
            </Button>
            <Button variant="icon" onClick={() => ({})}>
               <IconTwitter />
            </Button>

            <Button variant="icon" onClick={() => setTrap(false)}>
               <IconCross />
            </Button>
         </Group>
      )}
      
   </Trap>
</Group>
)


```
