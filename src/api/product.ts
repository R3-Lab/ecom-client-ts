'use server';

import {fetcher, getSession} from './index';
import {
    Category,
    Color,
    Material,
    Product,
    ProductType,
    RequestsProductAddCategory,
    RequestsProductAddColor,
    RequestsProductAddMaterial,
    RequestsProductAddProduct,
    RequestsProductAddProductType,
    RequestsProductAddSize,
    RequestsProductUpdateCategory,
    RequestsProductUpdateColor,
    RequestsProductUpdateMaterial,
    RequestsProductUpdateProduct,
    RequestsProductUpdateProductType,
    RequestsProductUpdateSize,
    Size,
} from './types';

type GetPropertiesQuery = {
    category_ids?: string[];
    size_ids?: string[];
    color_ids?: string[];
    material_ids?: string[];
    product_type_ids?: string[];
}

export const getProducts = async ({
                                      category_ids,
                                      size_ids,
                                      color_ids,
                                      material_ids,
                                      product_type_ids
                                  }: GetPropertiesQuery) => {
    const {site_id} = await getSession()
    const urlParams = new URLSearchParams();

    if (site_id) {
        urlParams.append('ecommerce_site_id', site_id);
    }

    if (category_ids) {
        for (const category_id of category_ids) {
            urlParams.append('category_ids', category_id);
        }
    }

    if (size_ids) {
        for (const size_id of size_ids) {
            urlParams.append('size_ids', size_id);
        }
    }

    if (color_ids) {
        for (const color_id of color_ids) {
            urlParams.append('color_ids', color_id);
        }
    }

    if (material_ids) {
        for (const material_id of material_ids) {
            urlParams.append('material_ids', material_id);
        }
    }

    if (product_type_ids) {
        for (const product_type_id of product_type_ids) {
            urlParams.append('product_type_ids', product_type_id);
        }
    }

    const {data, error} = await fetcher<Product[]>(`/products?${urlParams.toString()}`);

    if (error && !data) {
        console.error('Failed to get products', error);
        throw new Error(error.message);
    }

    return data!;
};

export const getProduct = async (productId: string) => {
    const {data, error} = await fetcher<Product>(`/products/${productId}`);

    if (error && !data) {
        console.error(`Failed to get product with id ${productId}`, error);
        throw new Error(error.message);
    }

    return data!;
}

export const addProduct = async (product: RequestsProductAddProduct) => {
    const {data, error} = await fetcher<Product>('/products', {
        method: 'PUT',
        body: JSON.stringify(product),
    });

    if (error && !data) {
        console.error('Failed to add product', error);
        throw new Error(error.message);
    }

    return data!;
};

// Update a product
export const updateProduct = async (productId: string, product: RequestsProductUpdateProduct) => {
    const {data, error} = await fetcher<Product>(`/products/${productId}`, {
        method: 'PUT',
        body: JSON.stringify(product),
    });

    if (error && !data) {
        console.error(`Failed to update product with id ${productId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Delete a product
export const deleteProduct = async (productId: string) => {
    const {data, error} = await fetcher<null>(`/products/${productId}`, {
        method: 'DELETE',
    });

    if (error && !data) {
        console.error(`Failed to delete product with id ${productId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Get all product categories
export const getProductCategories = async ({limit, offset}: {
    limit?: number, offset?: number
}) => {
    const {site_id} = await getSession()
    const urlParams = new URLSearchParams();

    if (site_id) {
        urlParams.append('ecommerce_site_id', site_id);
    }

    if (limit) {
        urlParams.append('limit', limit.toString());
    }

    if (offset) {
        urlParams.append('offset', offset.toString());
    }

    const {data, error} = await fetcher<Category[]>(`/products/categories?${urlParams.toString()}`);

    if (error && !data) {
        console.error('Failed to get product categories', error);
        throw new Error(error.message);
    }

    return data!;
};

export const getProductCategory = async (categoryId: string) => {
    const {data, error} = await fetcher<Category>(`/products/categories/${categoryId}`);

    if (error && !data) {
        console.error(`Failed to get product category with id ${categoryId}`, error);
        throw new Error(error.message);
    }

    return data!;
}

// Add a product category
export const addProductCategory = async (category: RequestsProductAddCategory) => {
    const {data, error} = await fetcher<Category>('/products/categories', {
        method: 'POST',
        body: JSON.stringify(category),
    });

    if (error && !data) {
        console.error('Failed to add product category', error);
        throw new Error(error.message);
    }

    return data!;
};

// Update a product category
export const updateProductCategory = async (categoryId: string, category: RequestsProductUpdateCategory) => {
    const {data, error} = await fetcher<Category>(`/products/categories/${categoryId}`, {
        method: 'PUT',
        body: JSON.stringify(category),
    });

    if (error && !data) {
        console.error(`Failed to update product category with id ${categoryId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Delete a product category
export const deleteProductCategory = async (categoryId: string) => {
    const {data, error} = await fetcher<null>(`/products/categories/${categoryId}`, {
        method: 'DELETE',
    });

    if (error && !data) {
        console.error(`Failed to delete product category with id ${categoryId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Get all product colors
export const getColors = async () => {
    const {site_id} = await getSession()
    const urlParams = new URLSearchParams();

    if (site_id) {
        urlParams.append('ecommerce_site_id', site_id);
    }

    const {data, error} = await fetcher<Color[]>(`/products/colors?${urlParams.toString()}`);

    if (error && !data) {
        console.error('Failed to get product colors', error);
        throw new Error(error.message);
    }

    return data!;
};

// Add a product color
export const addColor = async (color: RequestsProductAddColor) => {
    const {data, error} = await fetcher<Color>('/products/colors', {
        method: 'POST',
        body: JSON.stringify(color),
    });

    if (error && !data) {
        console.error('Failed to add product color', error);
        throw new Error(error.message);
    }

    return data!;
};

// Update a product color
export const updateColor = async (colorId: string, color: RequestsProductUpdateColor) => {
    const {data, error} = await fetcher<Color>(`/products/colors/${colorId}`, {
        method: 'PUT',
        body: JSON.stringify(color),
    });

    if (error && !data) {
        console.error(`Failed to update product color with id ${colorId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Delete a product color
export const deleteColor = async (colorId: string) => {
    const {data, error} = await fetcher<null>(`/products/colors/${colorId}`, {
        method: 'DELETE',
    });

    if (error && !data) {
        console.error(`Failed to delete product color with id ${colorId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Get all product materials
export const getMaterials = async () => {
    const {site_id} = await getSession()
    const urlParams = new URLSearchParams();

    if (site_id) {
        urlParams.append('ecommerce_site_id', site_id);
    }

    const {data, error} = await fetcher<Material[]>(`/products/materials?${urlParams.toString()}`);

    if (error && !data) {
        console.error('Failed to get product materials', error);
        throw new Error(error.message);
    }

    return data!;
};

// Add a product material
export const addMaterial = async (material: RequestsProductAddMaterial) => {
    const {data, error} = await fetcher<Material>('/products/materials', {
        method: 'POST',
        body: JSON.stringify(material),
    });

    if (error && !data) {
        console.error('Failed to add product material', error);
        throw new Error(error.message);
    }

    return data!;
};

// Update a product material
export const updateMaterial = async (materialId: string, material: RequestsProductUpdateMaterial) => {
    const {data, error} = await fetcher<Material>(`/products/materials/${materialId}`, {
        method: 'PUT',
        body: JSON.stringify(material),
    });

    if (error && !data) {
        console.error(`Failed to update product material with id ${materialId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Delete a product material
export const deleteMaterial = async (materialId: string) => {
    const {data, error} = await fetcher<null>(`/products/materials/${materialId}`, {
        method: 'DELETE',
    });

    if (error && !data) {
        console.error(`Failed to delete product material with id ${materialId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Get all product sizes
export const getSizes = async () => {
    const {site_id} = await getSession()
    const urlParams = new URLSearchParams();

    if (site_id) {
        urlParams.append('ecommerce_site_id', site_id);
    }

    const {data, error} = await fetcher<Size[]>(`/products/sizes?${urlParams.toString()}`);

    if (error && !data) {
        console.error('Failed to get product sizes', error);
        throw new Error(error.message);
    }

    return data!;
};

// Add a product size
export const addSize = async (size: RequestsProductAddSize) => {
    const {data, error} = await fetcher<Size>('/products/sizes', {
        method: 'POST',
        body: JSON.stringify(size),
    });

    if (error && !data) {
        console.error('Failed to add product size', error);
        throw new Error(error.message);
    }

    return data!;
};

// Update a product size
export const updateSize = async (sizeId: string, size: RequestsProductUpdateSize) => {
    const {data, error} = await fetcher<Size>(`/products/sizes/${sizeId}`, {
        method: 'PUT',
        body: JSON.stringify(size),
    });

    if (error && !data) {
        console.error(`Failed to update product size with id ${sizeId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Delete a product size
export const deleteSize = async (sizeId: string) => {
    const {data, error} = await fetcher<null>(`/products/sizes/${sizeId}`, {
        method: 'DELETE',
    });

    if (error && !data) {
        console.error(`Failed to delete product size with id ${sizeId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Get all product types
export const getProductTypes = async () => {
    const {site_id} = await getSession()
    const urlParams = new URLSearchParams();

    if (site_id) {
        urlParams.append('ecommerce_site_id', site_id);
    }

    const {data, error} = await fetcher<ProductType[]>(`/products/types?${urlParams.toString()}`);

    if (error && !data) {
        console.error('Failed to get product types', error);
        throw new Error(error.message);
    }

    return data!;
};

// Add a product type
export const addProductType = async (type: RequestsProductAddProductType) => {
    const {data, error} = await fetcher<ProductType>('/products/types', {
        method: 'POST',
        body: JSON.stringify(type),
    });

    if (error && !data) {
        console.error('Failed to add product type', error);
        throw new Error(error.message);
    }

    return data!;
};

// Update a product type
export const updateProductType = async (typeId: string, type: RequestsProductUpdateProductType) => {
    const {data, error} = await fetcher<ProductType>(`/products/types/${typeId}`, {
        method: 'PUT',
        body: JSON.stringify(type),
    });

    if (error && !data) {
        console.error(`Failed to update product type with id ${typeId}`, error);
        throw new Error(error.message);
    }

    return data!;
};

// Delete a product type
export const deleteProductType = async (typeId: string) => {
    const {data, error} = await fetcher(`/products/types/${typeId}`, {
        method: 'DELETE',
    });

    if (error && !data) {
        console.error(`Failed to delete product type with id ${typeId}`, error);
        throw new Error(error.message);
    }

    return data!;
};
