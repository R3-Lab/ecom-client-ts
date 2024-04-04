import { RequestsProductAddCategory, RequestsProductAddColor, RequestsProductAddMaterial, RequestsProductAddProduct, RequestsProductAddProductType, RequestsProductAddSize, RequestsProductUpdateCategory, RequestsProductUpdateColor, RequestsProductUpdateMaterial, RequestsProductUpdateProduct, RequestsProductUpdateProductType, RequestsProductUpdateSize } from './types';
type GetPropertiesQuery = {
    category_ids?: string[];
    size_ids?: string[];
    color_ids?: string[];
    material_ids?: string[];
    product_type_ids?: string[];
};
export declare const getProducts: ({ category_ids, size_ids, color_ids, material_ids, product_type_ids }: GetPropertiesQuery) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaProduct[]>;
export declare const getProduct: (productId: string) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaProduct>;
export declare const addProduct: (product: RequestsProductAddProduct) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaProduct>;
export declare const updateProduct: (productId: string, product: RequestsProductUpdateProduct) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaProduct>;
export declare const deleteProduct: (productId: string) => Promise<null>;
export declare const getProductCategories: ({ limit, offset }: {
    limit?: number;
    offset?: number;
}) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaCategory[]>;
export declare const getProductCategory: (categoryId: string) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaCategory>;
export declare const addProductCategory: (category: RequestsProductAddCategory) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaCategory>;
export declare const updateProductCategory: (categoryId: string, category: RequestsProductUpdateCategory) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaCategory>;
export declare const deleteProductCategory: (categoryId: string) => Promise<null>;
export declare const getColors: () => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaColor[]>;
export declare const addColor: (color: RequestsProductAddColor) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaColor>;
export declare const updateColor: (colorId: string, color: RequestsProductUpdateColor) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaColor>;
export declare const deleteColor: (colorId: string) => Promise<null>;
export declare const getMaterials: () => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaMaterial[]>;
export declare const addMaterial: (material: RequestsProductAddMaterial) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaMaterial>;
export declare const updateMaterial: (materialId: string, material: RequestsProductUpdateMaterial) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaMaterial>;
export declare const deleteMaterial: (materialId: string) => Promise<null>;
export declare const getSizes: () => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaSize[]>;
export declare const addSize: (size: RequestsProductAddSize) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaSize>;
export declare const updateSize: (sizeId: string, size: RequestsProductUpdateSize) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaSize>;
export declare const deleteSize: (sizeId: string) => Promise<null>;
export declare const getProductTypes: () => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaProductType[]>;
export declare const addProductType: (type: RequestsProductAddProductType) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaProductType>;
export declare const updateProductType: (typeId: string, type: RequestsProductUpdateProductType) => Promise<import("ecom-client-ts/openapi").Components.Schemas.EcommerceBackendSchemaProductType>;
export declare const deleteProductType: (typeId: string) => Promise<unknown>;
export {};
