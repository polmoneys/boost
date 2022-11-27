## Radio


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


   const [publishStatus, setStatus] = useState<StatusMachine>("draft");

return(
<Radio.Group
   initial={publishStatus}
   onChange={(selection: string) =>
      setStatus(selection as StatusMachine)
   }
   gap=".4em"
   renderLabel={({
      checked,
      checkboxLabel,
   }: {
      checked: boolean;
      checkboxLabel: string;
   }) => (
      <Fragment>
         {checked ? <FiCheck size={48} /> : <FiMinus size={48} />}
         {checkboxLabel}
      </Fragment>
   )}
>
   <Radio
      name="draft"
      value="draft"
      id="radio-draft"
      classNames={{
         group: "accent-black",
         checked: "accent-black -selected",
      }}
   />
   <Radio
      name="live"
      value="live"
      id="radio-live"
      classNames={{
         input: "accent",
         checked: "accent",
      }}
   />
   <Radio
      name="unknown"
      value="unknown"
      id="radio-unknown"
      classNames={{
         group: "accent-error",
         checked: "accent-error -selected",
      }}
   />
   <Radio name="published" value="published" id="radio-published" />
</Radio.Group>
)


```
