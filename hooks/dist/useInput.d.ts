import { ChangeEvent } from "react";
import * as yup from "yup";
export declare const VALIDATE_URL: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
export declare const VALIDATE_USERNAME: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
export declare type SchemaURL = yup.InferType<typeof VALIDATE_URL>;
export declare type SchemaUsername = yup.InferType<typeof VALIDATE_USERNAME>;
interface Props {
    initial: string;
    validation?: any;
    errorMessage?: string;
}
declare type InputChange = ChangeEvent<HTMLInputElement>;
declare type OnChange = (event: InputChange | string) => void;
declare const UseInput: (props: Props) => [string, OnChange, undefined | string];
export default UseInput;
