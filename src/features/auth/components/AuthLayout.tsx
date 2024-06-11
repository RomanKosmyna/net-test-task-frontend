import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return (
        <div className="w-full min-h-svh flex justify-center bg-main">
            <Outlet />
        </div>
    )
};

export default AuthLayout;