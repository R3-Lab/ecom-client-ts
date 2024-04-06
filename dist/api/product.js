"use server";
import { fetcher, getSession } from "./index";
export const getProducts = async ({ category_ids, size_ids, color_ids, material_ids, product_type_ids, }) => {
    const { site_id } = await getSession();
    const urlParams = new URLSearchParams();
    if (site_id) {
        urlParams.append("ecommerce_site_id", site_id);
    }
    if (category_ids) {
        for (const category_id of category_ids) {
            urlParams.append("category_ids", category_id);
        }
    }
    if (size_ids) {
        for (const size_id of size_ids) {
            urlParams.append("size_ids", size_id);
        }
    }
    if (color_ids) {
        for (const color_id of color_ids) {
            urlParams.append("color_ids", color_id);
        }
    }
    if (material_ids) {
        for (const material_id of material_ids) {
            urlParams.append("material_ids", material_id);
        }
    }
    if (product_type_ids) {
        for (const product_type_id of product_type_ids) {
            urlParams.append("product_type_ids", product_type_id);
        }
    }
    const { data, error } = await fetcher(`/products?${urlParams.toString()}`);
    if (error && !data) {
        console.error("Failed to get products", error);
        throw new Error(error.message);
    }
    return data;
};
export const getProduct = async (productId) => {
    const { data, error } = await fetcher(`/products/${productId}`);
    if (error && !data) {
        console.error(`Failed to get product with id ${productId}`, error);
        throw new Error(error.message);
    }
    return data;
};
export const addProduct = async (product) => {
    const { data, error } = await fetcher("/products", {
        method: "PUT",
        body: JSON.stringify(product),
    });
    if (error && !data) {
        console.error("Failed to add product", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a product
export const updateProduct = async (productId, product) => {
    const { data, error } = await fetcher(`/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify(product),
    });
    if (error && !data) {
        console.error(`Failed to update product with id ${productId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a product
export const deleteProduct = async (productId) => {
    const { data, error } = await fetcher(`/products/${productId}`, {
        method: "DELETE",
    });
    if (error && !data) {
        console.error(`Failed to delete product with id ${productId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Get all product categories
export const getProductCategories = async ({ limit, offset, }) => {
    const { site_id } = await getSession();
    const urlParams = new URLSearchParams();
    if (site_id) {
        urlParams.append("ecommerce_site_id", site_id);
    }
    if (limit) {
        urlParams.append("limit", limit.toString());
    }
    if (offset) {
        urlParams.append("offset", offset.toString());
    }
    const { data, error } = await fetcher(`/products/categories?${urlParams.toString()}`);
    if (error && !data) {
        console.error("Failed to get product categories", error);
        throw new Error(error.message);
    }
    return data;
};
export const getProductCategory = async (categoryId) => {
    const { data, error } = await fetcher(`/products/categories/${categoryId}`);
    if (error && !data) {
        console.error(`Failed to get product category with id ${categoryId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Add a product category
export const addProductCategory = async (category) => {
    const { data, error } = await fetcher("/products/categories", {
        method: "POST",
        body: JSON.stringify(category),
    });
    if (error && !data) {
        console.error("Failed to add product category", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a product category
export const updateProductCategory = async (categoryId, category) => {
    const { data, error } = await fetcher(`/products/categories/${categoryId}`, {
        method: "PUT",
        body: JSON.stringify(category),
    });
    if (error && !data) {
        console.error(`Failed to update product category with id ${categoryId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a product category
export const deleteProductCategory = async (categoryId) => {
    const { data, error } = await fetcher(`/products/categories/${categoryId}`, {
        method: "DELETE",
    });
    if (error && !data) {
        console.error(`Failed to delete product category with id ${categoryId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Get all product colors
export const getColors = async () => {
    const { site_id } = await getSession();
    const urlParams = new URLSearchParams();
    if (site_id) {
        urlParams.append("ecommerce_site_id", site_id);
    }
    const { data, error } = await fetcher(`/products/colors?${urlParams.toString()}`);
    if (error && !data) {
        console.error("Failed to get product colors", error);
        throw new Error(error.message);
    }
    return data;
};
// Add a product color
export const addColor = async (color) => {
    const { data, error } = await fetcher("/products/colors", {
        method: "POST",
        body: JSON.stringify(color),
    });
    if (error && !data) {
        console.error("Failed to add product color", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a product color
export const updateColor = async (colorId, color) => {
    const { data, error } = await fetcher(`/products/colors/${colorId}`, {
        method: "PUT",
        body: JSON.stringify(color),
    });
    if (error && !data) {
        console.error(`Failed to update product color with id ${colorId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a product color
export const deleteColor = async (colorId) => {
    const { data, error } = await fetcher(`/products/colors/${colorId}`, {
        method: "DELETE",
    });
    if (error && !data) {
        console.error(`Failed to delete product color with id ${colorId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Get all product materials
export const getMaterials = async () => {
    const { site_id } = await getSession();
    const urlParams = new URLSearchParams();
    if (site_id) {
        urlParams.append("ecommerce_site_id", site_id);
    }
    const { data, error } = await fetcher(`/products/materials?${urlParams.toString()}`);
    if (error && !data) {
        console.error("Failed to get product materials", error);
        throw new Error(error.message);
    }
    return data;
};
// Add a product material
export const addMaterial = async (material) => {
    const { data, error } = await fetcher("/products/materials", {
        method: "POST",
        body: JSON.stringify(material),
    });
    if (error && !data) {
        console.error("Failed to add product material", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a product material
export const updateMaterial = async (materialId, material) => {
    const { data, error } = await fetcher(`/products/materials/${materialId}`, {
        method: "PUT",
        body: JSON.stringify(material),
    });
    if (error && !data) {
        console.error(`Failed to update product material with id ${materialId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a product material
export const deleteMaterial = async (materialId) => {
    const { data, error } = await fetcher(`/products/materials/${materialId}`, {
        method: "DELETE",
    });
    if (error && !data) {
        console.error(`Failed to delete product material with id ${materialId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Get all product sizes
export const getSizes = async () => {
    const { site_id } = await getSession();
    const urlParams = new URLSearchParams();
    if (site_id) {
        urlParams.append("ecommerce_site_id", site_id);
    }
    const { data, error } = await fetcher(`/products/sizes?${urlParams.toString()}`);
    if (error && !data) {
        console.error("Failed to get product sizes", error);
        throw new Error(error.message);
    }
    return data;
};
// Add a product size
export const addSize = async (size) => {
    const { data, error } = await fetcher("/products/sizes", {
        method: "POST",
        body: JSON.stringify(size),
    });
    if (error && !data) {
        console.error("Failed to add product size", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a product size
export const updateSize = async (sizeId, size) => {
    const { data, error } = await fetcher(`/products/sizes/${sizeId}`, {
        method: "PUT",
        body: JSON.stringify(size),
    });
    if (error && !data) {
        console.error(`Failed to update product size with id ${sizeId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a product size
export const deleteSize = async (sizeId) => {
    const { data, error } = await fetcher(`/products/sizes/${sizeId}`, {
        method: "DELETE",
    });
    if (error && !data) {
        console.error(`Failed to delete product size with id ${sizeId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Get all product types
export const getProductTypes = async () => {
    const { site_id } = await getSession();
    const urlParams = new URLSearchParams();
    if (site_id) {
        urlParams.append("ecommerce_site_id", site_id);
    }
    const { data, error } = await fetcher(`/products/types?${urlParams.toString()}`);
    if (error && !data) {
        console.error("Failed to get product types", error);
        throw new Error(error.message);
    }
    return data;
};
// Add a product type
export const addProductType = async (type) => {
    const { data, error } = await fetcher("/products/types", {
        method: "POST",
        body: JSON.stringify(type),
    });
    if (error && !data) {
        console.error("Failed to add product type", error);
        throw new Error(error.message);
    }
    return data;
};
// Update a product type
export const updateProductType = async (typeId, type) => {
    const { data, error } = await fetcher(`/products/types/${typeId}`, {
        method: "PUT",
        body: JSON.stringify(type),
    });
    if (error && !data) {
        console.error(`Failed to update product type with id ${typeId}`, error);
        throw new Error(error.message);
    }
    return data;
};
// Delete a product type
export const deleteProductType = async (typeId) => {
    const { data, error } = await fetcher(`/products/types/${typeId}`, {
        method: "DELETE",
    });
    if (error && !data) {
        console.error(`Failed to delete product type with id ${typeId}`, error);
        throw new Error(error.message);
    }
    return data;
};
