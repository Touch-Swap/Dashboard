"use client";

import type { AuthProvider } from "@refinedev/core";
import Cookies from "js-cookie";

const mockUsers = [
  {
    name: "Admin",
    email: "johndoe@mail.com",
    roles: ["admin"],
    avatar: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg",
    password:"touchswap-app-12"
  },
  {
    name: "Admin2",
    email: "janedoe@mail.com",
    roles: ["editor"],
    avatar: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg",
    password:"touchswap-app-12"
  },
];

export const authProvider: AuthProvider = {
  login: async ({ email, username, password, remember }) => {
    let user = mockUsers.find((user)=> user.email === email)
    if(user?.password !== password) user = undefined
    if (user) {
      Cookies.set("auth", JSON.stringify(user), {
        expires: 30, // 30 days
        path: "/",
      });
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    Cookies.remove("auth", { path: "/" });
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser.roles;
    }
    return null;
  },
  getIdentity: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser;
    }
    return null;
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
};
