import { User, RequestsUserCreateUser, RequestsUserUpdateUser } from "./types";
export declare const getMe: () => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const getUsers: ({ limit, offset, }: {
    limit?: number;
    offset?: number;
}) => Promise<User[]>;
export declare const createUser: (user: RequestsUserCreateUser) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const getUserById: (userId: string) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const updateUser: (userId: string, user: RequestsUserUpdateUser) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const deleteUser: (userId: string) => Promise<void>;
export declare const getCart: () => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaShoppingCart>;
export declare const addToCart: (product_id: string, quantity: number) => Promise<void>;
export declare const updateCartItem: (cart_item_id: string, quantity: number) => Promise<void>;
export declare const deleteCartItem: (cart_item_id?: string) => Promise<void>;
export declare const createSession: () => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaCheckoutSession>;
