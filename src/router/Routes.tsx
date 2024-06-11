import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "@features/url/components/MainLayout";
import AuthLayout from "@features/auth/components/AuthLayout";
import LoginForm from "@features/auth/components/LoginForm";
import RegisterForm from "@features/auth/components/RegisterForm";
import UrlPage from "@features/url/components/UrlPage";

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
                        element: <UrlPage />
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