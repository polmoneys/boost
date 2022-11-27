## Input

```HTMLInput``` with sugar for **onChange**.

```tsx

interface Props extends Omit<ComponentProps<"input">, "onChange"> {
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   onChangeValue?: (value: string) => void;
   id: string;
   // id of element describing error
   errorElementId?: string;
   label: string;
   // Customize
   classNames?: {
   root?: string;
   input?: string;
   focusWithin?: string;
   };
   autocomplete?:
   | "off"
   | "on"
   | "honorific-prefix"
   | "new-password"
   | "current-password"
   | "one-time-code"
   | "cc-name"
   | "cc-number"
   | "cc-exp"
   | "cc-exp-month"
   | "cc-exp-year"
   | "cc-csc";
   inputmode?: "text" | "numeric" | "tel" | "search" | "email" | "url";
   enterkeyhint?:
   | "enter"
   | "done"
   | "go"
   | "next"
   | "previous"
   | "search"
   | "send";
}

```

## Usage


```jsx

 const [value, onChange, error] = useInput({
    initial: "",
    validation: VALIDATE_USERNAME,
  });

return (
<Group>

   <Input
   autoFocus
   value={value}
   onChange={e => {
      const nextValue = e.target.value;
      onChange(nextValue);
   }}
   id="test-error-input"
   errorElementId="test-error-input-error"
   label="Username"
   placeholder="Type username"
   onChangeValue={val => console.log(val)}
   classNames={{ input: "accent-error px $$" }}
   />

   {error !== undefined && (
      <HelveticaNeueBold className="errors-input" aria-live="polite">
         <IconCross size="lg" />
         <span id="test-error-input-error">
         {error !== undefined ? error : ""}
         </span>
      </HelveticaNeueBold>
   )}
</Group>
)

```
