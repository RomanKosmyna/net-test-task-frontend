import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@providers/useAuth";

type Props = { children: React.ReactNode };

export default function ProtectectedRoute({ children }: Props) {
    const location = useLocation();
    const { isLoggedIn } = useAuth();

    return isLoggedIn() ? (
        <>{children}</>
    ) : (
        <Navigate to="/auth/login" state={{ from: location }} />
    )
}