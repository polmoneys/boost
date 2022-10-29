import { ChangeEvent, useState } from "react";

/*
export const VALIDATE_URL = yup.string().url();
export const VALIDATE_USERNAME = yup.string().max(8, "8 chars max");
export type SchemaURL = yup.InferType<typeof VALIDATE_URL>;
export type SchemaUsername = yup.InferType<typeof VALIDATE_USERNAME>;

  const [ value, setValue, {valid,errors}] = useInput({
    initial?:string;
    validation: 'url' | 'username' | (val)=> val.length > 0 ;
  })
  <label
          {...(labelHidden && { className: styles.hiddenLabel })}
          htmlFor={id}
        >
          {label}
  </label>
  <input
      label="Username"
      id="username"
      name="username"
      validation={VALIDATE_USERNAME}
      onChange={HandleChange}
      aria-describedby={`${id}-error`}
    />

  <p id={`${id}-error`} aria-live="polite"></p>
*/

interface Props {
  initial: string;
  validation?: "url" | "username" | any;
  errorMessage?: string;
}
type InputChange = ChangeEvent<HTMLInputElement>;
type OnChange = (event: InputChange | string) => void;

const UseInput = (props: Props): [string, OnChange, undefined | string] => {
  const { initial = "", validation, errorMessage } = props;

  const [value, setValue] = useState<string>(initial);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange: OnChange = (data: string | InputChange) => {
    const value = typeof data === "string" ? data : data.target.value;

    // if (!isNil(validation)) {
    //   return validation.isValid(value).then((valid: boolean) => {
    //     if (valid) {
    //       setValue(value);
    //       return;
    //     } else {
    //       if (!isNil(errorMessage)) setError(errorMessage);
    //       return;
    //     }
    //   });
    // }

    setValue(value);
  };

  return [value, onChange, error];
};

export default UseInput;
