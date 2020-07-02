import valifatejs from "validate.js";
import registerFormValidate from "./registerFormValidate";

export type FieldNames = "email" | "password" | "city";

type FieldType = {
    name: FieldNames,
    value: string,
    error?: string
};

type ValidateInputType = {
    name: FieldNames,
    value: string
};

const validateInput = ({ name, value }: ValidateInputType): string => {
    const result = valifatejs(
        { [name]: value },
        { [name]: registerFormValidate[name] }
    );

    return !!result ? result[name][0] : "";
};

type ValidationStateType = (data: { input: FieldType, value: string }) => FieldType;

export const getInputValidationState: ValidationStateType = ({ input, value }) => {
    return {
        ...input,
        value,
        error: validateInput({ name: input.name, value })
    }
};

