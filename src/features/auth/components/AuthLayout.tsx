import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return (
        <main className="w-full min-h-svh flex justify-center">
            <h1>Auth</h1>
            <Outlet />
        </main>
    )
};

export default AuthLayout;