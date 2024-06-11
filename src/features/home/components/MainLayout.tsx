import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return (
        <main className="w-full min-h-svh flex items-center flex-col bg-main">
            <h1>Main</h1>
            <Outlet />
        </main>
    )
}

export default MainLayout;