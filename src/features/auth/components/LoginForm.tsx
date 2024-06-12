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
        <div className="w-[500px] bg-card shadow-darkBorder p-5 mx-5 tablet:mx-0 rounded-lg flex flex-col items-center">
            <h1 className="text-heading text-[45px] font-medium">Sign In</h1>
            <AccountStatusNavigation
                text="Do not have an account yet?"
                linkRoute="/auth/register"
                linkText="Create one"
            />
            <div className="w-full mt-7">
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
                            <div className="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    className="bg-lightBlue hover:bg-darkerLightBlue transition-opacity hover:opacity-90
                                    rounded-md px-8 py-2 text-heading font-bold"
                                >
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