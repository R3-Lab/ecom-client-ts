import { NextRequest } from "next/server";
import { Components, Paths } from "./openapi";
export declare const API_BASE: string;
export declare const SITE_ID: string;
export { Components, Paths };
type FetcherResponse<T> = {
    data?: T;
    error?: FetchError;
    headers: Headers;
};
type FetchError = {
    message: string;
    status: number;
};
export declare const fetcher: <T>(path: string, options?: RequestInit) => Promise<FetcherResponse<T>>;
type SessionType = {
    token: string | undefined;
    site_id: string | undefined;
    payload: JWTPayload | undefined;
};
type JWTPayload = {
    id: string;
    username: string;
    email: string;
    exp: number;
};
export declare const getSession: (req?: NextRequest) => Promise<SessionType>;
export declare const setSiteIdSession: (site_id?: string, current_path?: string) => Promise<void>;
