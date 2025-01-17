import { Color, Material, Product, Size } from "./api/types";
export type AppStoreCart = {
    id?: string;
    items: AppStoreCartItem[];
};
export type AppStoreCartProduct = Pick<Product, "id" | "images" | "name" | "category" | "type">;
export type AppStoreCartItem = {
    id?: string;
    quantity: number;
    unit_price: number;
    product: AppStoreCartProduct;
    color?: Color;
    size?: Size;
    material?: Material;
};
type AddAppStoreCartItem = {
    product: AppStoreCartProduct;
    unit_price: number;
    color?: Color;
    size?: Size;
    material?: Material;
};
type AppStoreProps = {
    token?: string;
    cart: AppStoreCart;
    set_cart: (cart: AppStoreCart) => void;
    addItem: (args: AddAppStoreCartItem) => void;
    updateItemQuantity: (product_id: string, n: 1 | -1 | number) => void;
    removeItem: (product_id: string) => void;
};
export declare const useAppStore: import("zustand").UseBoundStore<Omit<Omit<import("zustand").StoreApi<AppStoreProps>, "setState"> & {
    setState(partial: AppStoreProps | Partial<AppStoreProps> | ((state: AppStoreProps) => AppStoreProps | Partial<AppStoreProps>), replace?: false, action?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }): void;
    setState(state: AppStoreProps | ((state: AppStoreProps) => AppStoreProps), replace: true, action?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }): void;
}, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<AppStoreProps, AppStoreProps>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: AppStoreProps) => void) => () => void;
        onFinishHydration: (fn: (state: AppStoreProps) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<AppStoreProps, AppStoreProps>>;
    };
}>;
export {};
