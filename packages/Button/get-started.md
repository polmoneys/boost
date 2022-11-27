## Button


```tsx

interface Props extends ComponentProps<"button"> {
    children: string | ReactNode;
    variant?: "" | "text" | "icon";
    autofocus?: boolean;
    // Adds focus ring for keyboard interactions. defaults to false
    keyboard?: boolean;
    // Adds focus ring for non-keyboard interactions. defaults to false
    nonKeyboard?: boolean;
}

```


## Usage


```jsx

 
<Button className="accent">Confirm</Button>

<Button variant="icon">
    <IconCheck/>
</Button>


```


## Ring


Build upon ```<Unit>```, [more info](https://github.com/polmoneys/boost/tree/master/packages/Unit/src/Unit.tsx) you can 'turn off' focus ring styles  


```jsx

 
<Button 
keyboard={false}
nonKeyboard={false}
className="accent">Confirm</Button>


```