import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return (
        <div className="w-full min-h-svh bg-main flex justify-center items-center">
            <Outlet />
        </div>
    )
};

export default AuthLayout;