import { joiResolver } from "@hookform/resolvers/joi";
import { Schema } from "joi";
import { FieldValues, SubmitHandler, UseFormProps, UseFormReturn, useForm } from "react-hook-form";

type FormProps<TFormValues extends FieldValues, Schema> = {
    className?: string;
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
    options?: UseFormProps<TFormValues>;
    id?: string;
    schema?: Schema;
};
  
  export const Form = <
    TFormValues extends Record<string, unknown> = Record<string, unknown>
  >({
    onSubmit,
    children,
    className,
    options,
    id,
    schema,
  }: FormProps<TFormValues, Schema>) => {
    const methods = useForm<TFormValues>({ ...options, resolver: schema && joiResolver(schema) });
    return (
      <form
        className={`${className}`}
        onSubmit={methods.handleSubmit(onSubmit)}
        id={id}
      >
        {children(methods)}
      </form>
    );
  };