import React from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterCredentialsDTO, register } from "@features/auth/api/registerUser";
import { LoginCredentialsDTO, login } from "@features/auth/api/loginUser";
import { Bounce, toast } from "react-toastify";

import { UserContextType, UserProfile } from "./types";

const UserContext = createContext<UserContextType>({} as UserContextType);

type Props = { children: React.ReactNode };

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + token);
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    registerData: RegisterCredentialsDTO,
  ) => {
    try {
      const response = await register(registerData);

      localStorage.setItem("token", response?.token);

      const userObject = {
        userName: response?.userName,
      }

      localStorage.setItem("user", JSON.stringify(userObject));

      setToken(response?.token);
      setUser(userObject!);

      toast.success('You have successfully registered', {
        position: "bottom-center",
        className: "toast-success-message",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        transition: Bounce,
      });
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      toast.error(errorMessage, {
        position: "bottom-center",
        className: "toast-error-message",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        transition: Bounce,
      });
    }
  };

  const loginUser = async (
    loginData: LoginCredentialsDTO,
  ) => {
    try {
      const response = await login(loginData);

      localStorage.setItem("token", response?.token);

      const userObject = {
        userName: response?.userName,
      }

      localStorage.setItem("user", JSON.stringify(userObject));

      setToken(response?.token);
      setUser(userObject!);

      toast.success('You have successfully logged in', {
        position: "bottom-center",
        className: "toast-success-message",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        transition: Bounce,
      });
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      toast.error(errorMessage, {
        position: "bottom-center",
        className: "toast-error-message",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        transition: Bounce,
      });
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/auth/login");
  };

  return (
    <UserContext.Provider
      value={{ user, token, registerUser, loginUser, isLoggedIn, logout }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);