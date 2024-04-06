"use server";
import { cookies } from "next/headers";
import { fetcher } from "./index";
export const login = async (data) => {
    const { headers, error } = await fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
    if (error) {
        console.error("Failed to login", error);
        throw new Error(error.message);
    }
    getTokenAndSetCookie(headers);
};
export const register = async (data) => {
    const { error, headers } = await fetcher("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
    });
    if (error) {
        console.error("Failed to register", error);
        throw new Error(error.message);
    }
    getTokenAndSetCookie(headers);
};
export const logout = async () => {
    cookies().set("token", "", {
        secure: process.env.NODE_ENV === "production",
        maxAge: 0,
        path: "/",
    });
};
const getTokenAndSetCookie = (headers) => {
    const authHeader = headers.get("Authorization");
    if (!authHeader) {
        throw new Error("No auth header");
    }
    const token = authHeader.split(" ")[1];
    cookies().set("token", token, {
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // One week
        path: "/",
    });
};
