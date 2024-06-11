import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "@features/home/components/MainLayout";
import AuthLayout from "@features/auth/components/AuthLayout";
import LoginForm from "@features/auth/components/LoginForm";
import RegisterForm from "@features/auth/components/RegisterForm";
import HomePage from "@features/home/components/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        element: <HomePage />
                    }
                ]
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