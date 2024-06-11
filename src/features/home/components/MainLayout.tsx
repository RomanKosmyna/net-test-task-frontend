import Header from "@components/Navigation/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return (
        <div className="w-full min-h-svh flex items-center flex-col">
            <Header />
            <Outlet />
        </div>
    )
}

export default MainLayout;