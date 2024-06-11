import Joi from "joi";
import { Form } from "@components/Form/Form";
import { InputField } from "@components/Form/InputField";
import AccountStatusNavigation from "./AccountStatusNavigation";
import GuestLink from "./GuestLink";

type LoginFormsInputs = {
    username: string;
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

const LoginForm = () => {
    const handleLogin = (data: LoginFormsInputs) => {
        console.log(data);
    };
    
    return (
        <div>
            <h1>Sign In</h1>
            <AccountStatusNavigation
                text="Do not have an account yet?"
                linkRoute="/auth/register"
                linkText="Create one"
            />
            <div>
                <Form schema={schema} onSubmit={handleLogin}>
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
                            <div>
                                <button type="submit">
                                    Log In
                                </button>
                            </div>
                        </>
                    )
                    }
                </Form >
                <GuestLink />
            </div >
        </div >
    )
};

export default LoginForm;