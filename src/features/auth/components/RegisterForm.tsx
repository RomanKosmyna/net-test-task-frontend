import Joi from "joi";
import { Form } from "@components/Form/Form";
import { InputField } from "@components/Form/InputField";
import AccountStatusNavigation from "./AccountStatusNavigation";
import GuestLink from "./GuestLink";

type RegisterFormsInputs = {
    username: string;
    email: string;
    password: string;
};

const schema = Joi.object({
    username: Joi.string()
        .min(4)
        .max(8)
        .required()
        .messages({
            'string.empty': `This field cannot be empty`,
            'string.min': `Username should have a minimum length of 4`,
            'string.max': `Username should have a maximum length of 8`,
            'any.required': `This field is required`
        }),
    password: Joi.string()
        .min(6)
        .max(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
        .required()
        .messages({
            'string.empty': `This field cannot be empty`,
            'string.min': `Password should have a minimum length of 6`,
            'string.max': `Password should have a maximum length of 12`,
            'object.regex': `Password should have one uppercase, one lowercase, one digit, and one special character`,
            "string.pattern.base": "Password should have one uppercase, one lowercase, one digit, and one special character",
            'any.required': `This field is required`
        }),
});

export default function RegisterForm() {
    const handleRegister = (data: RegisterFormsInputs) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Register</h1>
            <AccountStatusNavigation
                text="Already have an account?"
                linkRoute="/auth/login"
                linkText="Log In"
            />
            <div>
                <Form schema={schema} onSubmit={handleRegister}>
                    {({ register, formState }) => (
                        <>
                            <InputField
                                type="text"
                                label="Username"
                                error={formState.errors.username}
                                registration={register("username")}
                            />
                            <InputField
                                type="password"
                                label="Password"
                                error={formState.errors.password}
                                registration={register("password")}
                            />
                            <div className="flex justify-center">
                                <button type="submit">
                                    Register
                                </button>
                            </div>
                        </>
                    )}
                </Form>
                <GuestLink />
            </div>
        </div>
    )
}