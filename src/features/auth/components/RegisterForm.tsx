import { Form } from "@components/Form/Form";
import { InputField } from "@components/Form/InputField";
import AccountStatusNavigation from "./AccountStatusNavigation";
import GuestLink from "./GuestLink";
import { useAuth } from "src/providers/useAuth";
import { registerSchema } from "src/validation/registerSchema";

type RegisterFormsInputs = {
    username: string;
    password: string;
};

export default function RegisterForm() {
    const { registerUser } = useAuth();

    const handleRegister = (data: RegisterFormsInputs) => {
        registerUser(data);
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
                <Form schema={registerSchema} onSubmit={handleRegister}>
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