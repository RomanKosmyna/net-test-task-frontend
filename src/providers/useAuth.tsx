import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterCredentialsDTO, register } from "@features/auth/api/registerUser";
import { createContext, useEffect, useState } from "react";

import { UserContextType, UserProfile } from "./types";
import { Bounce, toast } from "react-toastify";

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

      toast.success('User successfully registered!', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      toast.error(errorMessage, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  };

  // const loginUser = async (
  //   loginData: LoginCredentialsDTO,
  //   toast: any
  // ) => {
  //   try {
  //     const response = await login(loginData);

  //     localStorage.setItem("token", response?.token);

  //     const userObject = {
  //       userName: response?.userName,
  //       email: response?.email
  //     }

  //     localStorage.setItem("user", JSON.stringify(userObject));

  //     setToken(response?.token);
  //     setUser(userObject!);

  //     toast({
  //       title: "Login Status",
  //       description: "You have successfully logged in.",
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true
  //     });
  //     navigate("/");
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : String(error);

  //     toast({
  //       title: 'Login Error',
  //       description: errorMessage,
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, token, registerUser, isLoggedIn, logout }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);