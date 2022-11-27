## Checkbox


```tsx

type Props = {
  label: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  isMixed?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // Customize elements & states
  classNames?: {
    checkbox?: {
      checked?: string;
      unchecked?: string;
      mixed?: string;
    };
  };
  // Customize icon color & states
  icon?: {
    checked: string;
    unchecked: string;
    mixed: string;
  };
};

```


## Usage


```jsx


const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] = useSelection( {
   mayo: false,
   mustard: true,
   ketchup: false,
});

return ( 
<Group>
   <Checkbox
      isMixed={mixed === "mixed"}
      checked={mixed !== "mixed" && mixed === true}
      label={
      mixed === "mixed"
         ? "Some selected"
         : all
         ? "Unselect all"
         : "Select all"
      }
      name="parent"
      value="parent"
      id="parent-checkbox-test"
      onChange={ev => onLeadChange()}
   />

   {Object.entries(output).map(([value, state]) => (
      <div key={value}>
         <Checkbox
            name={value.toString()}
            label={value.toString()}
            id={`${value.toString()}-test-checkbox`}
            checked={state as boolean}
            value={value}
            onChange={ev => onFollowerChange(ev)}
            classNames={{
            checkbox: {
               checked: "surface -accent",
               mixed: "surface -gray",
               unchecked: "surface -gray",
            },
            }}
         />
      </div>
   ))}
</Group>)


```
