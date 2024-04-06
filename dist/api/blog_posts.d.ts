import { Components } from "./openapi";
export declare const getBlogPosts: () => Promise<Components.Schemas.EcommerceBackendSchemaBlogPost[]>;
export declare const createBlogPost: (args: Omit<Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsCreateBlogPost, "author_id" | "created_by_id" | "ecommerce_site_id">) => Promise<void>;
export declare const getBlogCategories: () => Promise<Components.Schemas.EcommerceBackendSchemaBlogCategory[]>;
export declare const createBlogCategory: (args: Omit<Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsNewBlogCategory, "ecommerce_site_id">) => Promise<void>;
export declare const getBlogCategory: (id: string) => Promise<Components.Schemas.EcommerceBackendSchemaBlogCategory>;
export declare const updateBlogCategory: (id: string, args: Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsUpdateBlogCategory) => Promise<void>;
export declare const getBlogPost: (id: string) => Promise<Components.Schemas.EcommerceBackendSchemaBlogPost>;
export declare const updateBlogPost: (id: string, args: Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsUpdateBlogPost) => Promise<void>;
export declare const deleteBlogPost: (id: string) => Promise<void>;
