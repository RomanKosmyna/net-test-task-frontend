import { Form } from "@components/Form/Form";
import { InputField } from "@components/Form/InputField";
import AccountStatusNavigation from "./AccountStatusNavigation";
import GuestLink from "./GuestLink";
import { useAuth } from "src/providers/useAuth";
import { loginSchema } from "src/validation/loginSchema";

type LoginFormsInputs = {
    username: string;
    password: string;
};

const LoginForm = () => {
    const { loginUser } = useAuth();

    const handleLogin = (data: LoginFormsInputs) => {
        loginUser(data);
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
                <Form schema={loginSchema} onSubmit={handleLogin}>
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