## Options

Build upon ```@szhsin/react-menu```.


```tsx


interface Props {
   options: OptionsProps;
   onChange?: (selection: string) => void;
   // Trigger button
   triggerOn?: ReactNode;
   triggerOff?: ReactNode;
   ssr?: boolean;
   // Add utility classes
   classNames?: {
      group?: string;
      button?: string;
      item?: string;
   };
   disabled?: boolean;
}


```


## Usage


```jsx


  <Options
      classNames={{
         group: "accent p $",
         button: "accent px $$",
         item: "accent p $",
      }}
      onChange={opt => console.log(opt)}
      options={[
         {
            id: "0",
            value: "draft",
         },
         {
            id: "1",
            value: "live",
         },
         {
            id: "2",
            value: "unknown",
         },
         {
            id: "3",
            value: "published",
         },
      ]}
      />


```
