import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";


type InputFieldProps = FieldWrapperPassThroughProps & {
    type?: 'text' | 'password';
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
    const { type = 'text', label, registration, error } = props;

    return (
        <FieldWrapper label={label} error={error}>
            <input
            className="text-black"
                type={type}
                {...registration}
            />
        </FieldWrapper>
    );
};