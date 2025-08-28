"use server";
import { cookies } from "next/headers";

import axiosInstance from "../utils/axiosInstance";

export const loginIn = async (username: string, password: string) => {
    try {
        const response = await axiosInstance.post("/api/accounts/token/", {
            username,
            password
        });
        console.log("Login response:", response.data);

        const cookieStore = await cookies();

        cookieStore.set("accessToken", response.data.access, {
            httpOnly: true,
            maxAge: 60 * 10,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        });

        cookieStore.set("refreshToken", response.data.refresh, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 7 days
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        });

        return { success: true, data: response.data };
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};


export const refreshAuth = async () => {
    try {
        const response = await axiosInstance.post("/api/accounts/token/refresh/", {
            withCredentials: true
        });

        const cookieStore = await cookies();

        cookieStore.set("accessToken", response.data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 10,
            sameSite: "lax"
        });

        return { success: true };
    } catch (error) {
        console.error("Refresh auth error:", error);
        throw error;
    }
};
