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
                type={type}
                className={`w-full h-[45px] flex-grow tablet:flex-grow-0 px-3 py-2 border bg-main 
                    border-inputBorder rounded-md focus:outline-none focus:ring-blue-500 
                    focus:border-blue-500 sm:text-sm text-white font-medium`}
                {...registration}
            />
        </FieldWrapper>
    );
};