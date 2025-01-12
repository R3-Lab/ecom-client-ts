import { User, RequestsUserCreateUser, RequestsUserUpdateUser } from "./types";
import { AppStoreCart } from "../shopping_cart";
export declare const getMe: () => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const getUsers: ({ limit, offset, }: {
    limit?: number;
    offset?: number;
}) => Promise<User[]>;
export declare const createUser: (user: RequestsUserCreateUser) => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const getUserById: (userId: string) => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const updateUser: (userId: string, user: RequestsUserUpdateUser) => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaUser>;
export declare const deleteUser: (userId: string) => Promise<void>;
export declare const getCart: () => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaShoppingCart>;
export declare const addToCart: (product_id: string, quantity: number) => Promise<void>;
export declare const updateCartItem: (cart_item_id: string, quantity: number) => Promise<void>;
export declare const deleteCartItem: (cart_item_id?: string) => Promise<void>;
export declare const getCartButForClient: () => Promise<AppStoreCart | undefined>;
export declare const mergeLocalCart: (cart: AppStoreCart) => Promise<void>;
export declare const createSession: () => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaCheckoutSession>;
