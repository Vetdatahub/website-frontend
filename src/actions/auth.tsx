"use server";
import { cookies } from "next/headers";

import axiosInstance from "../utils/axiosInstance";

export const loginIn = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post("/api/accounts/login", {
            email,
            password
        });

        const cookieStore = await cookies();

        cookieStore.set("accessToken", response.data.accessToken, {
            httpOnly: true,
            maxAge: 60 * 60,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        });

        return { success: true, data: response.data };
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

// export const logOut = async () => {
//     try {
//         await axiosInstance.get("/users/logout", { withCredentials: true });

//         const cookieStore = cookies();
//         cookieStore.delete("accessToken");

//         return { success: true };
//     } catch (error) {
//         console.error("Logout error:", error);
//         throw error;
//     }
// };

export const refreshAuth = async () => {
    try {
        const response = await axiosInstance.get("/api/accounts/token/refresh/", {
            withCredentials: true
        });

        const cookieStore = await cookies();

        cookieStore.set("accessToken", response.data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60,
            sameSite: "lax"
        });

        return { success: true };
    } catch (error) {
        console.error("Refresh auth error:", error);
        throw error;
    }
};
