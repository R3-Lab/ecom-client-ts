import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Color, Material, Product, Size } from "./api/types";
import { addToCart, deleteCartItem, getCart, updateCartItem } from "./api/user";

export type AppStoreCart = {
  id?: string;
  items: AppStoreCartItem[];
};

export type AppStoreCartProduct = Pick<
  Product,
  "id" | "images" | "name" | "category" | "type"
>;

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
  updateItemQuantity: (product_id: string, n: 1 | -1) => void;
  removeItem: (product_id: string) => void;
};

export const useAppStore = create<AppStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        cart: {
          items: [],
        },
        set_cart: (cart) => {
          set({ cart });
        },
        addItem: async (args) => {
          await addToCart(args.product.id, 1);
          const dbCart = await getCart();
          const item: AppStoreCartItem = {
            quantity: 1,
            ...args,
            id: dbCart?.items.find(
              (item) => item.product_id === args.product.id,
            )?.id,
          };
          if (get().cart) {
            set((state) => {
              const { cart } = state;
              const maybeExistsItem = cart.items.find(
                (item) => item.product.id === args.product.id,
              );
              if (maybeExistsItem) {
                maybeExistsItem.quantity += 1;
                return {
                  cart: {
                    ...state.cart!,
                    items: [...state.cart!.items],
                  },
                };
              }
              return {
                cart: {
                  ...state.cart!,
                  items: [...state.cart!.items, item],
                },
              };
            });
          } else {
            set({
              cart: {
                id: dbCart?.id,
                items: [item],
              },
            });
          }
        },
        removeItem: async (product_id) => {
          const itemCardId = get().cart!.items.find(
            (item) => item.product.id === product_id,
          )?.id;
          await deleteCartItem(itemCardId);
          set((state) => ({
            cart: {
              ...state.cart!,
              items: state.cart!.items.filter(
                (item) => item.product.id !== product_id,
              ),
            },
          }));
        },
        updateItemQuantity: async (product_id, n) => {
          const items = get().cart!.items;
          const item = items.find((item) => item.product.id === product_id);
          if (!item) {
            return;
          }
          item.quantity += n;

          const itemCardId = get().cart!.items.find(
            (item) => item.product.id === product_id,
          )?.id;

          if (item.quantity <= 0) {
            await deleteCartItem(itemCardId);
            set((state) => ({
              cart: {
                ...state.cart!,
                items: state.cart!.items.filter(
                  (item) => item.product.id !== product_id,
                ),
              },
            }));
          } else {
            if (itemCardId) await updateCartItem(itemCardId, item.quantity);
            set((state) => ({
              cart: {
                ...state.cart!,
                items: [...state.cart!.items],
              },
            }));
          }
        },
      }),
      {
        name: "app-storage",
      },
    ),
  ),
);
