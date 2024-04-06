"use server";
import { revalidatePath } from "next/cache";
import { fetcher, getSession } from "./index";
export const getMe = async () => {
    const { data, error } = await fetcher("/users/me");
    if (error) {
        console.error("Failed to get user", error);
        throw new Error(error.message);
    }
    return data;
};
// Get users
export const getUsers = async ({ limit, offset, }) => {
    const { site_id } = await getSession();
    const queryParams = new URLSearchParams();
    if (site_id) {
        queryParams.append("ecommerce_site_id", site_id);
    }
    if (limit) {
        queryParams.append("limit", limit.toString());
    }
    if (offset) {
        queryParams.append("offset", offset.toString());
    }
    const { data, error } = await fetcher(`/users?${queryParams}`);
    if (error) {
        console.error("Failed to get users", error);
        throw new Error(error.message);
    }
    return data;
};
// Create a user
export const createUser = async (user) => {
    const { data, error } = await fetcher("/users/create", {
        method: "POST",
        body: JSON.stringify(user),
    });
    if (error) {
        console.error("Failed to create user", error);
        throw new Error(error.message);
    }
    return data;
};
// Get a user from an id
export const getUserById = async (userId) => {
    const { data, error } = await fetcher(`/users/${userId}`);
    if (error) {
        console.error(`Failed to get user with id ${userId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Update a user
export const updateUser = async (userId, user) => {
    const { data, error } = await fetcher(`/users/${userId}`, {
        method: "PUT",
        body: JSON.stringify(user),
    });
    if (error) {
        console.error(`Failed to update user with id ${userId}`, error);
        throw new Error(error.message);
    }
    // revalidatePath(paths.dashboard.user.account(userId))
    // revalidatePath(paths.dashboard.user.list)
    return data;
};
// Delete a user
export const deleteUser = async (userId) => {
    const { error } = await fetcher(`/users/${userId}`, {
        method: "DELETE",
    });
    if (error) {
        console.error(`Failed to delete user with id ${userId}`, error);
        throw new Error(error.message);
    }
};
export const getCart = async () => {
    const { payload } = await getSession();
    if (!payload) {
        return;
    }
    const { data, error } = await fetcher(`/users/${payload.id}/cart`);
    if (error) {
        if (error.status === 404) {
            return;
        }
        console.error("Failed to get cart", error);
        throw new Error(error.message);
    }
    return data;
};
export const addToCart = async (product_id, quantity) => {
    const { payload } = await getSession();
    if (!payload) {
        return;
    }
    const { error } = await fetcher(`/users/${payload.id}/cart`, {
        method: "POST",
        body: JSON.stringify({ product_id, quantity }),
    });
    if (error) {
        console.error("Failed to add to cart", error);
        throw new Error(error.message);
    }
    revalidatePath("/", "layout");
    revalidatePath("/cart", "layout");
    revalidatePath("/cart");
};
export const updateCartItem = async (cart_item_id, quantity) => {
    const { payload } = await getSession();
    if (!payload) {
        return;
    }
    const { error } = await fetcher(`/users/${payload.id}/cart`, {
        method: "PUT",
        body: JSON.stringify({ cart_item_id, quantity }),
    });
    if (error) {
        console.error("Failed to update cart", error);
        throw new Error(error.message);
    }
    revalidatePath("/", "layout");
    revalidatePath("/cart", "layout");
    revalidatePath("/cart");
};
export const deleteCartItem = async (cart_item_id) => {
    if (!cart_item_id) {
        return;
    }
    const { payload } = await getSession();
    if (!payload) {
        return;
    }
    const { error } = await fetcher(`/users/${payload.id}/cart`, {
        method: "DELETE",
        body: JSON.stringify({ cart_item_id }),
    });
    if (error) {
        console.error("Failed to delete cart", error);
        throw new Error(error.message);
    }
    revalidatePath("/", "layout");
    revalidatePath("/cart", "layout");
    revalidatePath("/cart");
};
export const getCartButForClient = async () => {
    const cart = await getCart();
    if (!cart) {
        return;
    }
    const items = await Promise.all(cart.items.map(async (item) => {
        const { data: product } = await fetcher(`/products/${item.product_id}`);
        return {
            id: item.id,
            quantity: item.quantity,
            unit_price: item.unit_price,
            product: product,
        };
    }));
    return {
        id: cart.id,
        items,
    };
};
export const mergeLocalCart = async (cart) => {
    const { payload } = await getSession();
    if (!payload) {
        return;
    }
    const res = await Promise.all(cart.items.map((item) => fetcher(`/users/${payload.id}/cart`, {
        method: "POST",
        body: JSON.stringify({
            product_id: item.product.id,
            quantity: item.quantity,
        }),
    })));
    if (res.some((r) => r.error)) {
        console.error("Failed to add to cart", res);
        throw new Error(res
            .filter((e) => e.error)
            .map((r) => r.error?.message)
            .join(", "));
    }
    revalidatePath("/", "layout");
    revalidatePath("/cart", "layout");
    revalidatePath("/cart");
};
export const createSession = async () => {
    const { data, error } = await fetcher("/users/checkout_session", {
        method: "POST",
    });
    if (error) {
        console.error("Failed to create session", error);
        throw new Error(error.message);
    }
    return data;
};
