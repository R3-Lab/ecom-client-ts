import { RequestsUserLoginUser, RequestsUserSignUpUser } from "./types";
export declare const login: (data: RequestsUserLoginUser) => Promise<void>;
export declare const register: (data: RequestsUserSignUpUser) => Promise<void>;
export declare const logout: () => Promise<void>;
