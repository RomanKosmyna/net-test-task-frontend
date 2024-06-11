import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "@features/home/components/MainLayout";
import AuthLayout from "@features/auth/components/AuthLayout";
import LoginForm from "@features/auth/components/LoginForm";
import RegisterForm from "@features/auth/components/RegisterForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainLayout />
            },
            {
                path: "/auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginForm />
                    },
                    {
                        path: "register",
                        element: <RegisterForm />
                    }
                ]
            }
        ]
    }
]);