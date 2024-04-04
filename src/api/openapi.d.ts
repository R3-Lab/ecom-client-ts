import type {
  Parameters,
  OpenAPIClient,
  OperationResponse,
  AxiosRequestConfig,
  UnknownParamsObject,
} from "openapi-client-axios";

declare namespace Components {
  namespace Schemas {
    export interface EcommerceBackendConfigErrorJsonError {
      message: string;
      status: number; // int32
    }
    export interface EcommerceBackendSchemaAddress {
      city: string;
      country: string;
      created_at: string; // date-time
      ecommerce_site_id: string; // uuid
      first_name: string;
      id: string; // uuid
      is_billing: boolean;
      is_shipping: boolean;
      last_name: string;
      phone_number?: string | null;
      postal_code: string;
      state: string;
      street_address1: string;
      street_address2?: string | null;
      updated_at?: string | null; // date-time
      user_id: string; // uuid
    }
    export interface EcommerceBackendSchemaBlogCategory {
      created_at: string; // date-time
      description?: string | null;
      ecommerce_site_id: EcommerceBackendSchemaEcommerceSite;
      id: string; // uuid
      name: string;
      slug: string;
      updated_at?: string | null; // date-time
    }
    export interface EcommerceBackendSchemaBlogPost {
      author: EcommerceBackendSchemaUser;
      category_id: EcommerceBackendSchemaBlogCategory;
      content: string;
      cover_image: string;
      created_at: string; // date-time
      created_by: EcommerceBackendSchemaUser;
      description: string;
      ecommerce_site_id: EcommerceBackendSchemaEcommerceSite;
      id: string; // uuid
      keywords: string[];
      meta_description?: string | null;
      meta_title?: string | null;
      slug: string;
      tags: string[];
      title: string;
      updated_at?: string | null; // date-time
    }
    export interface EcommerceBackendSchemaCategory {
      children?: string | null;
      cover_image_url?: string | null;
      created_at: string; // date-time
      description?: string | null;
      ecommerce_site_id: string; // uuid
      id: string; // uuid
      name: string;
      updated_at?: string | null; // date-time
    }
    export interface EcommerceBackendSchemaCheckoutSession {
      client_secret?: string | null;
      id: string;
    }
    export interface EcommerceBackendSchemaColor {
      ecommerce_site_id: string; // uuid
      hex_code: string;
      id: string; // uuid
      name: string;
    }
    export type EcommerceBackendSchemaDatabaseAvailability =
      | "in_stock"
      | "out_of_stock"
      | "pre_order";
    export type EcommerceBackendSchemaDatabaseOAuthProvider =
      | "google"
      | "twitter"
      | "facebook"
      | "email";
    export type EcommerceBackendSchemaDatabaseOrderStatus =
      | "pending"
      | "processing"
      | "shipped"
      | "delivered"
      | "cancelled";
    export interface EcommerceBackendSchemaEcommerceSite {
      id: string; // uuid
      name: string;
      url: string;
    }
    export interface EcommerceBackendSchemaMaterial {
      description?: string | null;
      ecommerce_site_id: string; // uuid
      id: string; // uuid
      name: string;
    }
    export interface EcommerceBackendSchemaOrder {
      billing_address_id?: {
        city: string;
        country: string;
        created_at: string; // date-time
        ecommerce_site_id: string; // uuid
        first_name: string;
        id: string; // uuid
        is_billing: boolean;
        is_shipping: boolean;
        last_name: string;
        phone_number?: string | null;
        postal_code: string;
        state: string;
        street_address1: string;
        street_address2?: string | null;
        updated_at?: string | null; // date-time
        user_id: string; // uuid
      } | null;
      created_at: string; // date-time
      id: string; // uuid
      payment_method?: string | null;
      shipping_address_id?: {
        city: string;
        country: string;
        created_at: string; // date-time
        ecommerce_site_id: string; // uuid
        first_name: string;
        id: string; // uuid
        is_billing: boolean;
        is_shipping: boolean;
        last_name: string;
        phone_number?: string | null;
        postal_code: string;
        state: string;
        street_address1: string;
        street_address2?: string | null;
        updated_at?: string | null; // date-time
        user_id: string; // uuid
      } | null;
      shipping_cost: number; // int32
      shipping_method?: string | null;
      status: EcommerceBackendSchemaDatabaseOrderStatus;
      stripe_payment_id?: string | null;
      subtotal: number; // int64
      tax: number; // int32
      total_amount: number; // int64
      tracking_number: string; // uuid
      updated_at?: string | null; // date-time
      user_id: EcommerceBackendSchemaUser;
    }
    export interface EcommerceBackendSchemaOrderDetail {
      color?: {
        ecommerce_site_id: string; // uuid
        hex_code: string;
        id: string; // uuid
        name: string;
      } | null;
      created_at: string; // date-time
      id: string; // uuid
      order_id: string; // uuid
      price: number; // int64
      product: EcommerceBackendSchemaProduct;
      quantity: number; // int32
      size?: {
        ecommerce_site_id: string; // uuid
        id: string; // uuid
        measurements?: {
          [key: string]: any;
        } | null;
        size?: string | null;
      } | null;
      updated_at?: string | null; // date-time
    }
    export interface EcommerceBackendSchemaPermission {
      id: string; // uuid
      name: string;
    }
    export interface EcommerceBackendSchemaProduct {
      availability: EcommerceBackendSchemaDatabaseAvailability;
      category: EcommerceBackendSchemaCategory;
      colors?: EcommerceBackendSchemaProductColor[] | null;
      content?: string | null;
      created_at: string; // date-time
      description?: string | null;
      dimensions?: string | null;
      ecommerce_site_id: string; // uuid
      id: string; // uuid
      images?: EcommerceBackendSchemaProductImage[] | null;
      is_active?: boolean | null;
      materials?: EcommerceBackendSchemaProductMaterial[] | null;
      name: string;
      price: number; // int64
      seller_id?: string | null; // uuid
      sizes?: EcommerceBackendSchemaProductSize[] | null;
      sku: string;
      stock_quantity: number; // int32
      stripe_product_id: string;
      type: EcommerceBackendSchemaProductType;
      updated_at?: string | null; // date-time
      warranty_id?: string | null; // uuid
      weight_mg?: number | null; // int64
    }
    export interface EcommerceBackendSchemaProductColor {
      color: EcommerceBackendSchemaColor;
      id: string; // uuid
    }
    export interface EcommerceBackendSchemaProductImage {
      alt?: string | null;
      id: string; // uuid
      url: string;
    }
    export interface EcommerceBackendSchemaProductMaterial {
      id: string; // uuid
      material: EcommerceBackendSchemaMaterial;
    }
    export interface EcommerceBackendSchemaProductSize {
      id: string; // uuid
      size: EcommerceBackendSchemaSize;
    }
    export interface EcommerceBackendSchemaProductType {
      ecommerce_site_id: string; // uuid
      id: string; // uuid
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsAddressAddAddress {
      city: string;
      country: string;
      ecommerce_site_id: string; // uuid
      first_name: string;
      is_billing: boolean;
      is_shipping: boolean;
      last_name: string;
      phone_number: string;
      postal_code: string;
      state: string;
      street_address1: string;
      street_address2?: string | null;
      user_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsBlogPostsCreateBlogPost {
      author_id: string; // uuid
      category_id: string; // uuid
      content: string;
      cover_image: string;
      created_by_id: string; // uuid
      description: string;
      ecommerce_site_id: string; // uuid
      keywords: string[];
      meta_description?: string | null;
      meta_title?: string | null;
      slug?: string | null;
      tags: string[];
      title: string;
    }
    export interface EcommerceBackendSchemaRequestsBlogPostsNewBlogCategory {
      description?: string | null;
      ecommerce_site_id: string; // uuid
      name: string;
      slug?: string | null;
    }
    export interface EcommerceBackendSchemaRequestsBlogPostsUpdateBlogCategory {
      description: string;
      ecommerce_site_id: string; // uuid
      name: string;
      slug?: string | null;
    }
    export interface EcommerceBackendSchemaRequestsBlogPostsUpdateBlogPost {
      author_id: string; // uuid
      category_id: string; // uuid
      content: string;
      cover_image: string;
      created_by_id: string; // uuid
      description: string;
      ecommerce_site_id: string; // uuid
      keywords: string[];
      meta_description?: string | null;
      meta_title?: string | null;
      slug?: string | null;
      tags: string[];
      title: string;
    }
    export interface EcommerceBackendSchemaRequestsProductAddCategory {
      cover_image_url?: string | null;
      description?: string | null;
      ecommerce_site_id: string; // uuid
      name: string;
      parent_category_id?: string | null; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductAddColor {
      ecommerce_site_id: string; // uuid
      hex_code: string;
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsProductAddMaterial {
      ecommerce_site_id: string; // uuid
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsProductAddProduct {
      availability: EcommerceBackendSchemaDatabaseAvailability;
      category_id: string; // uuid
      colors?: string /* uuid */[] | null;
      content?: string | null;
      description?: string | null;
      dimensions?: string | null;
      ecommerce_site_id: string; // uuid
      images: EcommerceBackendSchemaRequestsProductAddProductImage[];
      is_active: boolean;
      materials?: string /* uuid */[] | null;
      name: string;
      price: number; // int64
      seller_id?: string | null; // uuid
      sizes?: string /* uuid */[] | null;
      sku: string;
      stock_quantity: number; // int32
      type_id: string; // uuid
      warranty_id?: string | null; // uuid
      weight?: number | null; // int64
    }
    export interface EcommerceBackendSchemaRequestsProductAddProductColor {
      color_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductAddProductImage {
      alt_text?: string | null;
      image_url: string;
    }
    export interface EcommerceBackendSchemaRequestsProductAddProductMaterial {
      material_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductAddProductSize {
      size_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductAddProductType {
      ecommerce_site_id: string; // uuid
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsProductAddSize {
      ecommerce_site_id: string; // uuid
      measurements?: {
        [key: string]: any;
      } | null;
      size: string;
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateCategory {
      cover_image_url?: string | null;
      description?: string | null;
      ecommerce_site_id?: string | null; // uuid
      name?: string | null;
      parent_category_id?: string | null; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateColor {
      hex_code: string;
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateMaterial {
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateProduct {
      availability?: "in_stock" | "out_of_stock" | "pre_order";
      category_id?: string | null; // uuid
      /**
       * Overwrite the existing colors
       */
      colors?: string /* uuid */[] | null;
      content?: string | null;
      description?: string | null;
      dimensions?: string | null;
      /**
       * Overwrite the existing images
       */
      images: EcommerceBackendSchemaRequestsProductAddProductImage[];
      is_active?: boolean | null;
      /**
       * Overwrite the existing materials
       */
      materials?: string /* uuid */[] | null;
      name?: string | null;
      price?: number | null; // int64
      seller_id?: string | null; // uuid
      /**
       * Overwrite the existing sizes
       */
      sizes?: string /* uuid */[] | null;
      sku?: string | null;
      stock_quantity?: number | null; // int32
      type_id?: string | null; // uuid
      warranty_id?: string | null; // uuid
      weight?: number | null; // int64
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateProductColor {
      color_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateProductMaterial {
      material_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateProductSize {
      size_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateProductType {
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsProductUpdateSize {
      measurements?: {
        [key: string]: any;
      } | null;
      size: string;
    }
    export interface EcommerceBackendSchemaRequestsRbacAddEcommerceSite {
      name: string;
      url: string;
    }
    export interface EcommerceBackendSchemaRequestsRbacAddPermissionToRole {
      permission_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsRbacAddRoleToUser {
      site_id: string; // uuid
      user_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsRbacCreatePermission {
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsRbacCreateRole {
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsRbacUpdateEcommerceSite {
      name: string;
      url: string;
    }
    export interface EcommerceBackendSchemaRequestsRbacUpdatePermission {
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsRbacUpdateRole {
      name: string;
    }
    export interface EcommerceBackendSchemaRequestsUserAddItemToCart {
      /**
       * The product id
       */
      product_id: string; // uuid
      /**
       * The quantity of the product
       */
      quantity: number; // int32
    }
    export interface EcommerceBackendSchemaRequestsUserCreateUser {
      /**
       * The email of the user
       */
      email: string;
      /**
       * The name of the user
       */
      name: string;
      /**
       * The password of the user
       */
      password: string;
      /**
       * The role id of the user
       */
      role_id: string; // uuid
      /**
       * The site id of the user
       */
      site_id?: string | null; // uuid
      /**
       * The username of the user
       */
      username?: string | null;
    }
    export interface EcommerceBackendSchemaRequestsUserLoginUser {
      /**
       * The username of the user
       */
      email: string;
      /**
       * The password of the user
       */
      password: string;
    }
    export interface EcommerceBackendSchemaRequestsUserRemoveItemFromCart {
      /**
       * The cart item id
       */
      cart_item_id: string; // uuid
    }
    export interface EcommerceBackendSchemaRequestsUserSignUpUser {
      /**
       * The email of the user
       */
      email: string;
      /**
       * The name of the user
       */
      name: string;
      /**
       * The password of the user
       */
      password: string;
      /**
       * The ecommerce site id
       */
      site_id: string; // uuid
      /**
       * The username of the user
       */
      username: string;
    }
    export interface EcommerceBackendSchemaRequestsUserUpdateCartItem {
      /**
       * The cart item id
       */
      cart_item_id: string; // uuid
      /**
       * The quantity of the product
       */
      quantity: number; // int32
    }
    export interface EcommerceBackendSchemaRequestsUserUpdateUser {
      /**
       * The email of the user
       */
      email?: string | null;
      /**
       * The first name of the user
       */
      first_name?: string | null;
      /**
       * The last name of the user
       */
      last_name?: string | null;
      /**
       * The name of the user
       */
      name?: string | null;
      /**
       * The phone number of the user
       */
      phone_number?: string | null;
      /**
       * The photo url of the user
       */
      photo_url?: string | null;
      /**
       * The user id
       */
      user_id: string; // uuid
      /**
       * The username of the user
       */
      username?: string | null;
    }
    export interface EcommerceBackendSchemaRole {
      id: string; // uuid
      name: string;
      permissions?: EcommerceBackendSchemaPermission[] | null;
    }
    export interface EcommerceBackendSchemaRolePermission {
      id: string; // uuid
      permission: EcommerceBackendSchemaPermission[];
      role: EcommerceBackendSchemaRole;
    }
    export interface EcommerceBackendSchemaShoppingCart {
      id: string; // uuid
      items: EcommerceBackendSchemaShoppingCartItem[];
    }
    export interface EcommerceBackendSchemaShoppingCartItem {
      cart_id: string; // uuid
      created_at: string; // date-time
      id: string; // uuid
      product_id: string; // uuid
      quantity: number; // int32
      unit_price: number; // int64
      updated_at?: string | null; // date-time
    }
    export interface EcommerceBackendSchemaSize {
      ecommerce_site_id: string; // uuid
      id: string; // uuid
      measurements?: {
        [key: string]: any;
      } | null;
      size?: string | null;
    }
    export interface EcommerceBackendSchemaUser {
      created_at: string; // date-time
      email: string;
      first_name?: string | null;
      id: string; // uuid
      is_active: boolean;
      last_name?: string | null;
      name?: string | null;
      password?: string | null;
      phone_number?: string | null;
      photo_url?: string | null;
      provider: EcommerceBackendSchemaDatabaseOAuthProvider;
      provider_id?: string | null;
      shopping_cart_id?: string | null; // uuid
      shopping_cart_items?: EcommerceBackendSchemaShoppingCartItem[] | null;
      stripe_customer_id?: string | null;
      updated_at?: string | null; // date-time
      username?: string | null;
    }
    export interface EcommerceBackendSchemaUserRole {
      ecommerce_sites: EcommerceBackendSchemaEcommerceSite[];
      role: EcommerceBackendSchemaRole;
    }
  }
}
declare namespace Paths {
  namespace EcommerceBackendRoutesAddressAddAddress {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsAddressAddAddress;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaAddress;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesAddressDeleteAddress {
    namespace Parameters {
      export type Id = string; // uuid
    }
    export interface PathParameters {
      id: Parameters.Id /* uuid */;
    }
    namespace Responses {
      export type $200 = {
        [key: string]: any;
      } | null;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesAddressGetAddress {
    namespace Parameters {
      export type Id = string; // uuid
    }
    export interface PathParameters {
      id: Parameters.Id /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaAddress;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesAddressGetAddresses {
    namespace Parameters {
      export type Country = string | null;
      export type UserId = string | null; // uuid
    }
    export interface QueryParameters {
      user_id?: Parameters.UserId /* uuid */;
      country?: Parameters.Country;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaAddress[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesAuthLogin {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsUserLoginUser;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUser;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesAuthOauth2Callback {
    namespace Parameters {
      export type Code = string;
      export type State = string;
    }
    export interface QueryParameters {
      code: Parameters.Code;
      state: Parameters.State;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesAuthOuath2 {
    namespace Parameters {
      export type IsDash = boolean;
      export type Provider =
        Components.Schemas.EcommerceBackendSchemaDatabaseOAuthProvider;
      export type SiteId = string; // uuid
    }
    export interface QueryParameters {
      provider: Parameters.Provider;
      site_id: Parameters.SiteId /* uuid */;
      is_dash?: Parameters.IsDash;
    }
    namespace Responses {
      export type $200 = string;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesAuthRegister {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsUserSignUpUser;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUser;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsCreateBlogCategory {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsNewBlogCategory;
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsCreateBlogPost {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsCreateBlogPost;
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsDeleteBlogPost {
    namespace Parameters {
      export type BlogPostId = string; // uuid
    }
    export interface PathParameters {
      blog_post_id: Parameters.BlogPostId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsGetBlogAllCategories {
    namespace Parameters {
      export type Limit = number | null; // int64
      export type Offset = number | null; // int64
      export type SiteId = string | null; // uuid
    }
    export interface QueryParameters {
      limit?: Parameters.Limit /* int64 */;
      offset?: Parameters.Offset /* int64 */;
      site_id?: Parameters.SiteId /* uuid */;
    }
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaBlogCategory[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsGetBlogCategory {
    namespace Parameters {
      export type CategoryId = string; // uuid
    }
    export interface PathParameters {
      category_id: Parameters.CategoryId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaBlogCategory;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsGetBlogPost {
    namespace Parameters {
      export type BlogPostId = string; // uuid
    }
    export interface PathParameters {
      blog_post_id: Parameters.BlogPostId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaBlogPost;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsGetBlogPosts {
    namespace Parameters {
      export type AuthorId = string | null; // uuid
      export type CategoryId = string | null; // uuid
      export type CreatedById = string | null; // uuid
      export type Limit = number | null; // int64
      export type Offset = number | null; // int64
      export type SiteId = string | null; // uuid
    }
    export interface QueryParameters {
      author_id?: Parameters.AuthorId /* uuid */;
      created_by_id?: Parameters.CreatedById /* uuid */;
      category_id?: Parameters.CategoryId /* uuid */;
      site_id?: Parameters.SiteId /* uuid */;
      limit?: Parameters.Limit /* int64 */;
      offset?: Parameters.Offset /* int64 */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaBlogPost[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsUpdateBlogCategory {
    namespace Parameters {
      export type CategoryId = string; // uuid
    }
    export interface PathParameters {
      category_id: Parameters.CategoryId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsUpdateBlogCategory;
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesBlogPostsUpdateBlogPost {
    namespace Parameters {
      export type BlogPostId = string; // uuid
    }
    export interface PathParameters {
      blog_post_id: Parameters.BlogPostId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsUpdateBlogPost;
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesOrderGetOrder {
    namespace Parameters {
      export type OrderId = string; // uuid
    }
    export interface PathParameters {
      order_id: Parameters.OrderId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaOrder;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesOrderGetOrderDetails {
    namespace Parameters {
      export type OrderId = string; // uuid
    }
    export interface PathParameters {
      order_id: Parameters.OrderId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaOrderDetail[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesOrderGetOrders {
    namespace Parameters {
      export type Limit = number | null; // int64
      export type Offset = number | null; // int64
      export type Status =
        | "pending"
        | "processing"
        | "shipped"
        | "delivered"
        | "cancelled";
      export type UserId = string | null; // uuid
    }
    export interface QueryParameters {
      user_id?: Parameters.UserId /* uuid */;
      status?: Parameters.Status;
      limit?: Parameters.Limit /* int64 */;
      offset?: Parameters.Offset /* int64 */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaOrder[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddColor {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddColor;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaColor;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddMaterial {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddMaterial;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaMaterial;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddProduct {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddProduct;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProduct;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddProductCategory {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddCategory;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaCategory;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddProductColor {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductColor;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductColor;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddProductImage {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductImage;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductImage;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddProductMaterial {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductMaterial;
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaProductMaterial;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddProductSize {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductSize;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductSize;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddProductType {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductType;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductType;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductAddSize {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductAddSize;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaSize;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteColor {
    namespace Parameters {
      export type ColorId = string; // uuid
    }
    export interface PathParameters {
      color_id: Parameters.ColorId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteMaterial {
    namespace Parameters {
      export type MaterialId = string; // uuid
    }
    export interface PathParameters {
      material_id: Parameters.MaterialId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteProduct {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteProductCategory {
    namespace Parameters {
      export type CategoryId = string; // uuid
    }
    export interface PathParameters {
      category_id: Parameters.CategoryId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteProductColor {
    namespace Parameters {
      export type ProductColorId = string; // uuid
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
      product_color_id: Parameters.ProductColorId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteProductImage {
    namespace Parameters {
      export type ProductId = string; // uuid
      export type ProductImageId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
      product_image_id: Parameters.ProductImageId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteProductMaterial {
    namespace Parameters {
      export type ProductId = string; // uuid
      export type ProductMaterialId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
      product_material_id: Parameters.ProductMaterialId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteProductSize {
    namespace Parameters {
      export type ProductId = string; // uuid
      export type ProductSizeId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
      product_size_id: Parameters.ProductSizeId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteProductType {
    namespace Parameters {
      export type TypeId = string; // uuid
    }
    export interface PathParameters {
      type_id: Parameters.TypeId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductDeleteSize {
    namespace Parameters {
      export type SizeId = string; // uuid
    }
    export interface PathParameters {
      size_id: Parameters.SizeId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetColorById {
    namespace Parameters {
      export type ColorId = string; // uuid
    }
    export interface PathParameters {
      color_id: Parameters.ColorId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaColor;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetColors {
    namespace Parameters {
      export type EcommerceSiteId = string | null; // uuid
    }
    export interface QueryParameters {
      ecommerce_site_id?: Parameters.EcommerceSiteId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaColor[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetMaterialById {
    namespace Parameters {
      export type MaterialId = string; // uuid
    }
    export interface PathParameters {
      material_id: Parameters.MaterialId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaMaterial;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetMaterials {
    namespace Parameters {
      export type EcommerceSiteId = string | null; // uuid
    }
    export interface QueryParameters {
      ecommerce_site_id?: Parameters.EcommerceSiteId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaMaterial[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProduct {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProduct;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductCategories {
    namespace Parameters {
      export type EcommerceSiteId = string | null; // uuid
    }
    export interface QueryParameters {
      ecommerce_site_id?: Parameters.EcommerceSiteId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaCategory[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductCategoryById {
    namespace Parameters {
      export type CategoryId = string; // uuid
    }
    export interface PathParameters {
      category_id: Parameters.CategoryId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaCategory;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductColors {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaProductColor[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductImages {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaProductImage[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductMaterials {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaProductMaterial[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductSizes {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductSize[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductTypeById {
    namespace Parameters {
      export type TypeId = string; // uuid
    }
    export interface PathParameters {
      type_id: Parameters.TypeId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductType;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProductTypes {
    namespace Parameters {
      export type EcommerceSiteId = string | null; // uuid
    }
    export interface QueryParameters {
      ecommerce_site_id?: Parameters.EcommerceSiteId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductType[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetProducts {
    namespace Parameters {
      export type CategoryId = string | null; // uuid
      export type EcommerceSiteId = string | null; // uuid
      export type Limit = number | null; // int64
      export type Offset = number | null; // int64
      export type ProductTypeId = string | null; // uuid
    }
    export interface QueryParameters {
      ecommerce_site_id?: Parameters.EcommerceSiteId /* uuid */;
      category_id?: Parameters.CategoryId /* uuid */;
      product_type_id?: Parameters.ProductTypeId /* uuid */;
      limit?: Parameters.Limit /* int64 */;
      offset?: Parameters.Offset /* int64 */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProduct[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetSizeById {
    namespace Parameters {
      export type SizeId = string; // uuid
    }
    export interface PathParameters {
      size_id: Parameters.SizeId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaSize;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductGetSizes {
    namespace Parameters {
      export type EcommerceSiteId = string | null; // uuid
    }
    export interface QueryParameters {
      ecommerce_site_id?: Parameters.EcommerceSiteId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaSize[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateColor {
    namespace Parameters {
      export type ColorId = string; // uuid
    }
    export interface PathParameters {
      color_id: Parameters.ColorId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateColor;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaColor;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateMaterial {
    namespace Parameters {
      export type MaterialId = string; // uuid
    }
    export interface PathParameters {
      material_id: Parameters.MaterialId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateMaterial;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaMaterial;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateProduct {
    namespace Parameters {
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProduct;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProduct;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateProductCategory {
    namespace Parameters {
      export type CategoryId = string; // uuid
    }
    export interface PathParameters {
      category_id: Parameters.CategoryId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateCategory;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaCategory;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateProductColor {
    namespace Parameters {
      export type ProductColorId = string; // uuid
      export type ProductId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
      product_color_id: Parameters.ProductColorId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductColor;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductColor;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateProductMaterial {
    namespace Parameters {
      export type ProductId = string; // uuid
      export type ProductMaterialId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
      product_material_id: Parameters.ProductMaterialId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductMaterial;
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaProductMaterial;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateProductSize {
    namespace Parameters {
      export type ProductId = string; // uuid
      export type ProductSizeId = string; // uuid
    }
    export interface PathParameters {
      product_id: Parameters.ProductId /* uuid */;
      product_size_id: Parameters.ProductSizeId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductSize;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductSize;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateProductType {
    namespace Parameters {
      export type TypeId = string; // uuid
    }
    export interface PathParameters {
      type_id: Parameters.TypeId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductType;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaProductType;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesProductUpdateSize {
    namespace Parameters {
      export type SizeId = string; // uuid
    }
    export interface PathParameters {
      size_id: Parameters.SizeId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateSize;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaSize;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacAddEcommerceSite {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacAddEcommerceSite;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaEcommerceSite;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacAddPermissionToRole {
    namespace Parameters {
      export type RoleId = string; // uuid
    }
    export interface PathParameters {
      role_id: Parameters.RoleId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacAddPermissionToRole;
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaRolePermission;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacAddRoleToUser {
    namespace Parameters {
      export type RoleId = string; // uuid
    }
    export interface PathParameters {
      role_id: Parameters.RoleId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacAddRoleToUser;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUserRole;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacCreatePermission {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacCreatePermission;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaPermission;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacCreateRole {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacCreateRole;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaRole;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacDeleteEcommerceSite {
    namespace Parameters {
      export type SiteId = string; // uuid
    }
    export interface PathParameters {
      site_id: Parameters.SiteId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacDeletePermission {
    namespace Parameters {
      export type PermissionId = string; // uuid
    }
    export interface PathParameters {
      permission_id: Parameters.PermissionId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacDeletePermissionFromRole {
    namespace Parameters {
      export type PermissionId = string; // uuid
      export type RoleId = string; // uuid
    }
    export interface PathParameters {
      role_id: Parameters.RoleId /* uuid */;
      permission_id: Parameters.PermissionId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacDeleteRole {
    namespace Parameters {
      export type RoleId = string; // uuid
    }
    export interface PathParameters {
      role_id: Parameters.RoleId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacGetEcommerceSite {
    namespace Parameters {
      export type SiteId = string; // uuid
    }
    export interface PathParameters {
      site_id: Parameters.SiteId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaEcommerceSite;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacGetEcommerceSites {
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaEcommerceSite[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacGetRolePermission {
    namespace Parameters {
      export type RoleId = string; // uuid
    }
    export interface PathParameters {
      role_id: Parameters.RoleId /* uuid */;
    }
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaRolePermission;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacGetRoles {
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaRole[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacUpdateEcommerceSite {
    namespace Parameters {
      export type SiteId = string; // uuid
    }
    export interface PathParameters {
      site_id: Parameters.SiteId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacUpdateEcommerceSite;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaEcommerceSite;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacUpdatePermission {
    namespace Parameters {
      export type PermissionId = string; // uuid
    }
    export interface PathParameters {
      permission_id: Parameters.PermissionId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacUpdatePermission;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaPermission;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesRbacUpdateRole {
    namespace Parameters {
      export type RoleId = string; // uuid
    }
    export interface PathParameters {
      role_id: Parameters.RoleId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsRbacUpdateRole;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaRole;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserAddItemToCart {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsUserAddItemToCart;
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserCheckoutSession {
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaCheckoutSession;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserCreateUser {
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsUserCreateUser;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUser;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserDeleteItemFromCart {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsUserRemoveItemFromCart;
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserDeleteUser {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserGetCart {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaShoppingCart;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserGetEcommerceSites {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    namespace Responses {
      export type $200 =
        Components.Schemas.EcommerceBackendSchemaEcommerceSite[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserGetUserFromId {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUser;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserGetUserRoles {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUserRole[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserGetUsers {
    namespace Parameters {
      export type EcommerceSiteId = string | null; // uuid
      export type Limit = number | null; // int64
      export type Offset = number | null; // int64
    }
    export interface QueryParameters {
      ecommerce_site_id?: Parameters.EcommerceSiteId /* uuid */;
      limit?: Parameters.Limit /* int64 */;
      offset?: Parameters.Offset /* int64 */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUser[];
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserMe {
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUser;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserUpdateCartItem {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsUserUpdateCartItem;
    namespace Responses {
      export interface $200 {}
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
  namespace EcommerceBackendRoutesUserUpdateUser {
    namespace Parameters {
      export type UserId = string; // uuid
    }
    export interface PathParameters {
      user_id: Parameters.UserId /* uuid */;
    }
    export type RequestBody =
      Components.Schemas.EcommerceBackendSchemaRequestsUserUpdateUser;
    namespace Responses {
      export type $200 = Components.Schemas.EcommerceBackendSchemaUser;
      export type $401 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $404 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
      export type $500 =
        Components.Schemas.EcommerceBackendConfigErrorJsonError;
    }
  }
}

export interface OperationMethods {
  /**
   * ecommerce_backend.routes.address.get_addresses - Get all addresses
   *
   * Get all addresses
   */
  "ecommerce_backend.routes.address.get_addresses"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesAddressGetAddresses.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAddressGetAddresses.Responses.$200>;
  /**
   * ecommerce_backend.routes.address.add_address - Add an address
   *
   * Add an address
   */
  "ecommerce_backend.routes.address.add_address"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesAddressAddAddress.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAddressAddAddress.Responses.$200>;
  /**
   * ecommerce_backend.routes.address.get_address - Get an address
   *
   * Get an address
   */
  "ecommerce_backend.routes.address.get_address"(
    parameters: Parameters<Paths.EcommerceBackendRoutesAddressGetAddress.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAddressGetAddress.Responses.$200>;
  /**
   * ecommerce_backend.routes.address.delete_address - Delete an address
   *
   * Delete an address
   */
  "ecommerce_backend.routes.address.delete_address"(
    parameters: Parameters<Paths.EcommerceBackendRoutesAddressDeleteAddress.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAddressDeleteAddress.Responses.$200>;
  /**
   * ecommerce_backend.routes.auth.login - Login a user
   *
   * Login a user
   */
  "ecommerce_backend.routes.auth.login"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesAuthLogin.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAuthLogin.Responses.$200>;
  /**
   * ecommerce_backend.routes.auth.ouath2 - Request a provider login link
   *
   * Request a provider login link
   */
  "ecommerce_backend.routes.auth.ouath2"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesAuthOuath2.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAuthOuath2.Responses.$200>;
  /**
   * ecommerce_backend.routes.auth.oauth2_callback - OAuth2 callback to be used for a provider
   *
   * OAuth2 callback to be used for a provider
   */
  "ecommerce_backend.routes.auth.oauth2_callback"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesAuthOauth2Callback.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAuthOauth2Callback.Responses.$200>;
  /**
   * ecommerce_backend.routes.auth.register - Sign up a new user
   *
   * Sign up a new user
   */
  "ecommerce_backend.routes.auth.register"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesAuthRegister.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesAuthRegister.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.get_blog_posts - Get all blog posts
   *
   * Get all blog posts
   */
  "ecommerce_backend.routes.blog_posts.get_blog_posts"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogPosts.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogPosts.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.create_blog_post - Create a blog post
   *
   * Create a blog post
   */
  "ecommerce_backend.routes.blog_posts.create_blog_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesBlogPostsCreateBlogPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsCreateBlogPost.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.create_blog_category - Create a blog category
   *
   * Create a blog category
   */
  "ecommerce_backend.routes.blog_posts.create_blog_category"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesBlogPostsCreateBlogCategory.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsCreateBlogCategory.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.get_blog_all_categories - Get all blog categories
   *
   * Get all blog categories
   */
  "ecommerce_backend.routes.blog_posts.get_blog_all_categories"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogAllCategories.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogAllCategories.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.get_blog_category - Get a blog category
   *
   * Get a blog category
   */
  "ecommerce_backend.routes.blog_posts.get_blog_category"(
    parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogCategory.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogCategory.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.update_blog_category - Update a blog category
   *
   * Update a blog category
   */
  "ecommerce_backend.routes.blog_posts.update_blog_category"(
    parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogCategory.PathParameters>,
    data?: Paths.EcommerceBackendRoutesBlogPostsUpdateBlogCategory.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogCategory.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.get_blog_post - Get a blog post
   *
   * Get a blog post
   */
  "ecommerce_backend.routes.blog_posts.get_blog_post"(
    parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogPost.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogPost.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.update_blog_post - Update a blog post
   *
   * Update a blog post
   */
  "ecommerce_backend.routes.blog_posts.update_blog_post"(
    parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogPost.PathParameters>,
    data?: Paths.EcommerceBackendRoutesBlogPostsUpdateBlogPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogPost.Responses.$200>;
  /**
   * ecommerce_backend.routes.blog_posts.delete_blog_post - Delete a blog post
   *
   * Delete a blog post
   */
  "ecommerce_backend.routes.blog_posts.delete_blog_post"(
    parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsDeleteBlogPost.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsDeleteBlogPost.Responses.$200>;
  /**
   * ecommerce_backend.routes.order.get_orders - Get all orders
   *
   * Get all orders
   */
  "ecommerce_backend.routes.order.get_orders"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesOrderGetOrders.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesOrderGetOrders.Responses.$200>;
  /**
   * ecommerce_backend.routes.order.get_order - Get an order
   *
   * Get an order
   */
  "ecommerce_backend.routes.order.get_order"(
    parameters: Parameters<Paths.EcommerceBackendRoutesOrderGetOrder.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesOrderGetOrder.Responses.$200>;
  /**
   * ecommerce_backend.routes.order.get_order_details - Get order details
   *
   * Get order details
   */
  "ecommerce_backend.routes.order.get_order_details"(
    parameters: Parameters<Paths.EcommerceBackendRoutesOrderGetOrderDetails.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesOrderGetOrderDetails.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_products - Get products
   *
   * Get products
   */
  "ecommerce_backend.routes.product.get_products"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetProducts.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProducts.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_product - Add a product
   *
   * Add a product
   */
  "ecommerce_backend.routes.product.add_product"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesProductAddProduct.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProduct.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_categories - Get  categories
   *
   * Get  categories
   */
  "ecommerce_backend.routes.product.get_product_categories"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetProductCategories.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductCategories.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_product_category - Add a  category
   *
   * Add a  category
   */
  "ecommerce_backend.routes.product.add_product_category"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesProductAddProductCategory.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductCategory.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_category_by_id - Get a  category from an id
   *
   * Get a  category from an id
   */
  "ecommerce_backend.routes.product.get_product_category_by_id"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductCategoryById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductCategoryById.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_product_category - Update a  category
   *
   * Update a  category
   */
  "ecommerce_backend.routes.product.update_product_category"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductCategory.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateProductCategory.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductCategory.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_product_category - Delete a  category
   *
   * Delete a  category
   */
  "ecommerce_backend.routes.product.delete_product_category"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductCategory.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductCategory.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_colors - Get  colors
   *
   * Get  colors
   */
  "ecommerce_backend.routes.product.get_colors"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetColors.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetColors.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_color - Add a  color
   *
   * Add a  color
   */
  "ecommerce_backend.routes.product.add_color"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesProductAddColor.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddColor.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_color_by_id - Get a  color from an id
   *
   * Get a  color from an id
   */
  "ecommerce_backend.routes.product.get_color_by_id"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetColorById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetColorById.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_color - Update a  color
   *
   * Update a  color
   */
  "ecommerce_backend.routes.product.update_color"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateColor.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateColor.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateColor.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_color - Delete a  color
   *
   * Delete a  color
   */
  "ecommerce_backend.routes.product.delete_color"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteColor.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteColor.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_materials - Get  materials
   *
   * Get  materials
   */
  "ecommerce_backend.routes.product.get_materials"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetMaterials.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetMaterials.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_material - Add a  material
   *
   * Add a  material
   */
  "ecommerce_backend.routes.product.add_material"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesProductAddMaterial.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddMaterial.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_material_by_id - Get a  material from an id
   *
   * Get a  material from an id
   */
  "ecommerce_backend.routes.product.get_material_by_id"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetMaterialById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetMaterialById.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_material - Update a  material
   *
   * Update a  material
   */
  "ecommerce_backend.routes.product.update_material"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateMaterial.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateMaterial.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateMaterial.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_material - Delete a  material
   *
   * Delete a  material
   */
  "ecommerce_backend.routes.product.delete_material"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteMaterial.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteMaterial.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_sizes - Get sizes
   *
   * Get sizes
   */
  "ecommerce_backend.routes.product.get_sizes"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetSizes.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetSizes.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_size - Add a  size
   *
   * Add a  size
   */
  "ecommerce_backend.routes.product.add_size"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesProductAddSize.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddSize.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_size_by_id - Get a  size from an id
   *
   * Get a  size from an id
   */
  "ecommerce_backend.routes.product.get_size_by_id"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetSizeById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetSizeById.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_size - Update a  size
   *
   * Update a  size
   */
  "ecommerce_backend.routes.product.update_size"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateSize.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateSize.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateSize.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_size - Delete a  size
   *
   * Delete a  size
   */
  "ecommerce_backend.routes.product.delete_size"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteSize.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteSize.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_types - Get product types
   *
   * Get product types
   */
  "ecommerce_backend.routes.product.get_product_types"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetProductTypes.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductTypes.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_product_type - Add a product type
   *
   * Add a product type
   */
  "ecommerce_backend.routes.product.add_product_type"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesProductAddProductType.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductType.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_type_by_id - Get a product type from an id
   *
   * Get a product type from an id
   */
  "ecommerce_backend.routes.product.get_product_type_by_id"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductTypeById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductTypeById.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_product_type - Update a product type
   *
   * Update a product type
   */
  "ecommerce_backend.routes.product.update_product_type"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductType.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateProductType.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductType.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_product_type - Delete a product type
   *
   * Delete a product type
   */
  "ecommerce_backend.routes.product.delete_product_type"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductType.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductType.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product - Get a product from an id
   *
   * Get a product from an id
   */
  "ecommerce_backend.routes.product.get_product"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProduct.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProduct.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_product - Update a product
   *
   * Update a product
   */
  "ecommerce_backend.routes.product.update_product"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProduct.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateProduct.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProduct.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_product - Delete a product
   *
   * Delete a product
   */
  "ecommerce_backend.routes.product.delete_product"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProduct.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProduct.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_colors - Get product colors
   *
   * Get product colors
   */
  "ecommerce_backend.routes.product.get_product_colors"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductColors.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductColors.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_product_color - Get a product color from an id
   *
   * Get a product color from an id
   */
  "ecommerce_backend.routes.product.add_product_color"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductColor.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductAddProductColor.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductColor.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_product_color - Update a product color
   *
   * Update a product color
   */
  "ecommerce_backend.routes.product.update_product_color"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductColor.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateProductColor.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductColor.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_product_color - Delete a product color
   *
   * Delete a product color
   */
  "ecommerce_backend.routes.product.delete_product_color"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductColor.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductColor.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_images - Get product images
   *
   * Get product images
   */
  "ecommerce_backend.routes.product.get_product_images"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductImages.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductImages.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_product_image - Get a product image from an id
   *
   * Get a product image from an id
   */
  "ecommerce_backend.routes.product.add_product_image"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductImage.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductAddProductImage.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductImage.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_product_image - Delete a product image
   *
   * Delete a product image
   */
  "ecommerce_backend.routes.product.delete_product_image"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductImage.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductImage.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_materials - Get product materials
   *
   * Get product materials
   */
  "ecommerce_backend.routes.product.get_product_materials"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductMaterials.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductMaterials.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_product_material - Get a product material from an id
   *
   * Get a product material from an id
   */
  "ecommerce_backend.routes.product.add_product_material"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductMaterial.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductAddProductMaterial.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductMaterial.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_product_material - Update a product material
   *
   * Update a product material
   */
  "ecommerce_backend.routes.product.update_product_material"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductMaterial.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateProductMaterial.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductMaterial.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_product_material - Delete a product material
   *
   * Delete a product material
   */
  "ecommerce_backend.routes.product.delete_product_material"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductMaterial.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductMaterial.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.get_product_sizes - Get product sizes
   *
   * Get product sizes
   */
  "ecommerce_backend.routes.product.get_product_sizes"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductSizes.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductSizes.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.add_product_size - Get a product size from an id
   *
   * Get a product size from an id
   */
  "ecommerce_backend.routes.product.add_product_size"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductSize.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductAddProductSize.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductSize.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.update_product_size - Update a product size
   *
   * Update a product size
   */
  "ecommerce_backend.routes.product.update_product_size"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductSize.PathParameters>,
    data?: Paths.EcommerceBackendRoutesProductUpdateProductSize.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductSize.Responses.$200>;
  /**
   * ecommerce_backend.routes.product.delete_product_size - Delete a product size
   *
   * Delete a product size
   */
  "ecommerce_backend.routes.product.delete_product_size"(
    parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductSize.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductSize.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.add_ecommerce_site - Add an ecommerce site
   *
   * Add an ecommerce site
   */
  "ecommerce_backend.routes.rbac.add_ecommerce_site"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesRbacAddEcommerceSite.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacAddEcommerceSite.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.get_ecommerce_sites - Get all ecommerce sites
   *
   * Get all ecommerce sites
   */
  "ecommerce_backend.routes.rbac.get_ecommerce_sites"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetEcommerceSites.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.get_ecommerce_site - Get an ecommerce site
   *
   * Get an ecommerce site
   */
  "ecommerce_backend.routes.rbac.get_ecommerce_site"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacGetEcommerceSite.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetEcommerceSite.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.update_ecommerce_site - Update an ecommerce site
   *
   * Update an ecommerce site
   */
  "ecommerce_backend.routes.rbac.update_ecommerce_site"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacUpdateEcommerceSite.PathParameters>,
    data?: Paths.EcommerceBackendRoutesRbacUpdateEcommerceSite.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacUpdateEcommerceSite.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.delete_ecommerce_site - Delete an ecommerce site
   *
   * Delete an ecommerce site
   */
  "ecommerce_backend.routes.rbac.delete_ecommerce_site"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeleteEcommerceSite.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeleteEcommerceSite.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.create_permission - Create a permission
   *
   * Create a permission
   */
  "ecommerce_backend.routes.rbac.create_permission"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesRbacCreatePermission.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacCreatePermission.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.update_permission - Update a permission
   *
   * Update a permission
   */
  "ecommerce_backend.routes.rbac.update_permission"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacUpdatePermission.PathParameters>,
    data?: Paths.EcommerceBackendRoutesRbacUpdatePermission.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacUpdatePermission.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.delete_permission - Delete a permission
   *
   * Delete a permission
   */
  "ecommerce_backend.routes.rbac.delete_permission"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeletePermission.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeletePermission.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.create_role - Create a role
   *
   * Create a role
   */
  "ecommerce_backend.routes.rbac.create_role"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesRbacCreateRole.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacCreateRole.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.get_roles - Get all roles
   *
   * Get all roles
   */
  "ecommerce_backend.routes.rbac.get_roles"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetRoles.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.update_role - Update a role
   *
   * Update a role
   */
  "ecommerce_backend.routes.rbac.update_role"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacUpdateRole.PathParameters>,
    data?: Paths.EcommerceBackendRoutesRbacUpdateRole.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacUpdateRole.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.delete_role - Delete a role
   *
   * Delete a role
   */
  "ecommerce_backend.routes.rbac.delete_role"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeleteRole.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeleteRole.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.add_permission_to_role - Add a permission to a role
   *
   * Add a permission to a role
   */
  "ecommerce_backend.routes.rbac.add_permission_to_role"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacAddPermissionToRole.PathParameters>,
    data?: Paths.EcommerceBackendRoutesRbacAddPermissionToRole.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacAddPermissionToRole.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.add_role_to_user - Add a role to a user
   *
   * Add a role to a user
   */
  "ecommerce_backend.routes.rbac.add_role_to_user"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacAddRoleToUser.PathParameters>,
    data?: Paths.EcommerceBackendRoutesRbacAddRoleToUser.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacAddRoleToUser.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.get_role_permission - Get all permissions for a role
   *
   * Get all permissions for a role
   */
  "ecommerce_backend.routes.rbac.get_role_permission"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacGetRolePermission.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetRolePermission.Responses.$200>;
  /**
   * ecommerce_backend.routes.rbac.delete_permission_from_role - Remove a permission from a role
   *
   * Remove a permission from a role
   */
  "ecommerce_backend.routes.rbac.delete_permission_from_role"(
    parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeletePermissionFromRole.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeletePermissionFromRole.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.get_users - Get users
   *
   * Get users
   */
  "ecommerce_backend.routes.user.get_users"(
    parameters?: Parameters<Paths.EcommerceBackendRoutesUserGetUsers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserGetUsers.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.checkout_session - Create a checkout session
   *
   * Create a checkout session
   */
  "ecommerce_backend.routes.user.checkout_session"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserCheckoutSession.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.create_user - Create a user
   *
   * Create a user
   */
  "ecommerce_backend.routes.user.create_user"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EcommerceBackendRoutesUserCreateUser.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserCreateUser.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.me - Get the current user
   *
   * Get the current user
   */
  "ecommerce_backend.routes.user.me"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserMe.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.get_user_from_id - Get a user from an id
   *
   * Get a user from an id
   */
  "ecommerce_backend.routes.user.get_user_from_id"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserGetUserFromId.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserGetUserFromId.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.update_user - Update a user
   *
   * Update a user
   */
  "ecommerce_backend.routes.user.update_user"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserUpdateUser.PathParameters>,
    data?: Paths.EcommerceBackendRoutesUserUpdateUser.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserUpdateUser.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.delete_user - Delete a user
   *
   * Delete a user
   */
  "ecommerce_backend.routes.user.delete_user"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserDeleteUser.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserDeleteUser.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.get_cart - Get the cart
   *
   * Get the cart
   */
  "ecommerce_backend.routes.user.get_cart"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserGetCart.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserGetCart.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.update_cart_item - Update an item in the cart
   *
   * Update an item in the cart
   */
  "ecommerce_backend.routes.user.update_cart_item"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserUpdateCartItem.PathParameters>,
    data?: Paths.EcommerceBackendRoutesUserUpdateCartItem.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserUpdateCartItem.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.add_item_to_cart - Add an item to the cart
   *
   * Add an item to the cart
   */
  "ecommerce_backend.routes.user.add_item_to_cart"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserAddItemToCart.PathParameters>,
    data?: Paths.EcommerceBackendRoutesUserAddItemToCart.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserAddItemToCart.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.delete_item_from_cart - Delete an item from the cart
   *
   * Delete an item from the cart
   */
  "ecommerce_backend.routes.user.delete_item_from_cart"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserDeleteItemFromCart.PathParameters>,
    data?: Paths.EcommerceBackendRoutesUserDeleteItemFromCart.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserDeleteItemFromCart.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.get_user_roles - Get user roles
   *
   * Get user roles
   */
  "ecommerce_backend.routes.user.get_user_roles"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserGetUserRoles.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserGetUserRoles.Responses.$200>;
  /**
   * ecommerce_backend.routes.user.get_ecommerce_sites - Get ecommerce sites from a user
   *
   * Get ecommerce sites from a user
   */
  "ecommerce_backend.routes.user.get_ecommerce_sites"(
    parameters: Parameters<Paths.EcommerceBackendRoutesUserGetEcommerceSites.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EcommerceBackendRoutesUserGetEcommerceSites.Responses.$200>;
}

export interface PathsDictionary {
  ["/addresses"]: {
    /**
     * ecommerce_backend.routes.address.get_addresses - Get all addresses
     *
     * Get all addresses
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesAddressGetAddresses.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAddressGetAddresses.Responses.$200>;
    /**
     * ecommerce_backend.routes.address.add_address - Add an address
     *
     * Add an address
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesAddressAddAddress.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAddressAddAddress.Responses.$200>;
  };
  ["/addresses/{id}"]: {
    /**
     * ecommerce_backend.routes.address.get_address - Get an address
     *
     * Get an address
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesAddressGetAddress.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAddressGetAddress.Responses.$200>;
    /**
     * ecommerce_backend.routes.address.delete_address - Delete an address
     *
     * Delete an address
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesAddressDeleteAddress.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAddressDeleteAddress.Responses.$200>;
  };
  ["/auth/login"]: {
    /**
     * ecommerce_backend.routes.auth.login - Login a user
     *
     * Login a user
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesAuthLogin.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAuthLogin.Responses.$200>;
  };
  ["/auth/oauth2"]: {
    /**
     * ecommerce_backend.routes.auth.ouath2 - Request a provider login link
     *
     * Request a provider login link
     */
    "post"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesAuthOuath2.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAuthOuath2.Responses.$200>;
  };
  ["/auth/oauth2/callback"]: {
    /**
     * ecommerce_backend.routes.auth.oauth2_callback - OAuth2 callback to be used for a provider
     *
     * OAuth2 callback to be used for a provider
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesAuthOauth2Callback.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAuthOauth2Callback.Responses.$200>;
  };
  ["/auth/register"]: {
    /**
     * ecommerce_backend.routes.auth.register - Sign up a new user
     *
     * Sign up a new user
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesAuthRegister.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesAuthRegister.Responses.$200>;
  };
  ["/blog_posts"]: {
    /**
     * ecommerce_backend.routes.blog_posts.get_blog_posts - Get all blog posts
     *
     * Get all blog posts
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogPosts.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogPosts.Responses.$200>;
    /**
     * ecommerce_backend.routes.blog_posts.create_blog_post - Create a blog post
     *
     * Create a blog post
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesBlogPostsCreateBlogPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsCreateBlogPost.Responses.$200>;
  };
  ["/blog_posts/category"]: {
    /**
     * ecommerce_backend.routes.blog_posts.create_blog_category - Create a blog category
     *
     * Create a blog category
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesBlogPostsCreateBlogCategory.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsCreateBlogCategory.Responses.$200>;
  };
  ["/blog_posts/category/all"]: {
    /**
     * ecommerce_backend.routes.blog_posts.get_blog_all_categories - Get all blog categories
     *
     * Get all blog categories
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogAllCategories.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogAllCategories.Responses.$200>;
  };
  ["/blog_posts/category/{category_id}"]: {
    /**
     * ecommerce_backend.routes.blog_posts.get_blog_category - Get a blog category
     *
     * Get a blog category
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogCategory.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogCategory.Responses.$200>;
    /**
     * ecommerce_backend.routes.blog_posts.update_blog_category - Update a blog category
     *
     * Update a blog category
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogCategory.PathParameters>,
      data?: Paths.EcommerceBackendRoutesBlogPostsUpdateBlogCategory.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogCategory.Responses.$200>;
  };
  ["/blog_posts/{blog_post_id}"]: {
    /**
     * ecommerce_backend.routes.blog_posts.get_blog_post - Get a blog post
     *
     * Get a blog post
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsGetBlogPost.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsGetBlogPost.Responses.$200>;
    /**
     * ecommerce_backend.routes.blog_posts.update_blog_post - Update a blog post
     *
     * Update a blog post
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogPost.PathParameters>,
      data?: Paths.EcommerceBackendRoutesBlogPostsUpdateBlogPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsUpdateBlogPost.Responses.$200>;
    /**
     * ecommerce_backend.routes.blog_posts.delete_blog_post - Delete a blog post
     *
     * Delete a blog post
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesBlogPostsDeleteBlogPost.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesBlogPostsDeleteBlogPost.Responses.$200>;
  };
  ["/orders"]: {
    /**
     * ecommerce_backend.routes.order.get_orders - Get all orders
     *
     * Get all orders
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesOrderGetOrders.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesOrderGetOrders.Responses.$200>;
  };
  ["/orders/{order_id}"]: {
    /**
     * ecommerce_backend.routes.order.get_order - Get an order
     *
     * Get an order
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesOrderGetOrder.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesOrderGetOrder.Responses.$200>;
  };
  ["/orders/{order_id}/details"]: {
    /**
     * ecommerce_backend.routes.order.get_order_details - Get order details
     *
     * Get order details
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesOrderGetOrderDetails.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesOrderGetOrderDetails.Responses.$200>;
  };
  ["/products"]: {
    /**
     * ecommerce_backend.routes.product.get_products - Get products
     *
     * Get products
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetProducts.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProducts.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_product - Add a product
     *
     * Add a product
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesProductAddProduct.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProduct.Responses.$200>;
  };
  ["/products/categories"]: {
    /**
     * ecommerce_backend.routes.product.get_product_categories - Get  categories
     *
     * Get  categories
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetProductCategories.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductCategories.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_product_category - Add a  category
     *
     * Add a  category
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesProductAddProductCategory.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductCategory.Responses.$200>;
  };
  ["/products/categories/{category_id}"]: {
    /**
     * ecommerce_backend.routes.product.get_product_category_by_id - Get a  category from an id
     *
     * Get a  category from an id
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductCategoryById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductCategoryById.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.update_product_category - Update a  category
     *
     * Update a  category
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductCategory.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateProductCategory.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductCategory.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_product_category - Delete a  category
     *
     * Delete a  category
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductCategory.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductCategory.Responses.$200>;
  };
  ["/products/colors"]: {
    /**
     * ecommerce_backend.routes.product.get_colors - Get  colors
     *
     * Get  colors
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetColors.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetColors.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_color - Add a  color
     *
     * Add a  color
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesProductAddColor.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddColor.Responses.$200>;
  };
  ["/products/colors/{color_id}"]: {
    /**
     * ecommerce_backend.routes.product.get_color_by_id - Get a  color from an id
     *
     * Get a  color from an id
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetColorById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetColorById.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.update_color - Update a  color
     *
     * Update a  color
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateColor.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateColor.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateColor.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_color - Delete a  color
     *
     * Delete a  color
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteColor.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteColor.Responses.$200>;
  };
  ["/products/materials"]: {
    /**
     * ecommerce_backend.routes.product.get_materials - Get  materials
     *
     * Get  materials
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetMaterials.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetMaterials.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_material - Add a  material
     *
     * Add a  material
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesProductAddMaterial.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddMaterial.Responses.$200>;
  };
  ["/products/materials/{material_id}"]: {
    /**
     * ecommerce_backend.routes.product.get_material_by_id - Get a  material from an id
     *
     * Get a  material from an id
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetMaterialById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetMaterialById.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.update_material - Update a  material
     *
     * Update a  material
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateMaterial.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateMaterial.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateMaterial.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_material - Delete a  material
     *
     * Delete a  material
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteMaterial.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteMaterial.Responses.$200>;
  };
  ["/products/sizes"]: {
    /**
     * ecommerce_backend.routes.product.get_sizes - Get sizes
     *
     * Get sizes
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetSizes.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetSizes.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_size - Add a  size
     *
     * Add a  size
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesProductAddSize.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddSize.Responses.$200>;
  };
  ["/products/sizes/{size_id}"]: {
    /**
     * ecommerce_backend.routes.product.get_size_by_id - Get a  size from an id
     *
     * Get a  size from an id
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetSizeById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetSizeById.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.update_size - Update a  size
     *
     * Update a  size
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateSize.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateSize.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateSize.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_size - Delete a  size
     *
     * Delete a  size
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteSize.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteSize.Responses.$200>;
  };
  ["/products/types"]: {
    /**
     * ecommerce_backend.routes.product.get_product_types - Get product types
     *
     * Get product types
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesProductGetProductTypes.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductTypes.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_product_type - Add a product type
     *
     * Add a product type
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesProductAddProductType.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductType.Responses.$200>;
  };
  ["/products/types/{type_id}"]: {
    /**
     * ecommerce_backend.routes.product.get_product_type_by_id - Get a product type from an id
     *
     * Get a product type from an id
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductTypeById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductTypeById.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.update_product_type - Update a product type
     *
     * Update a product type
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductType.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateProductType.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductType.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_product_type - Delete a product type
     *
     * Delete a product type
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductType.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductType.Responses.$200>;
  };
  ["/products/{product_id}"]: {
    /**
     * ecommerce_backend.routes.product.get_product - Get a product from an id
     *
     * Get a product from an id
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProduct.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProduct.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.update_product - Update a product
     *
     * Update a product
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProduct.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateProduct.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProduct.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_product - Delete a product
     *
     * Delete a product
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProduct.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProduct.Responses.$200>;
  };
  ["/products/{product_id}/colors"]: {
    /**
     * ecommerce_backend.routes.product.get_product_colors - Get product colors
     *
     * Get product colors
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductColors.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductColors.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_product_color - Get a product color from an id
     *
     * Get a product color from an id
     */
    "post"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductColor.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductAddProductColor.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductColor.Responses.$200>;
  };
  ["/products/{product_id}/colors/{product_color_id}"]: {
    /**
     * ecommerce_backend.routes.product.update_product_color - Update a product color
     *
     * Update a product color
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductColor.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateProductColor.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductColor.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_product_color - Delete a product color
     *
     * Delete a product color
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductColor.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductColor.Responses.$200>;
  };
  ["/products/{product_id}/images"]: {
    /**
     * ecommerce_backend.routes.product.get_product_images - Get product images
     *
     * Get product images
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductImages.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductImages.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_product_image - Get a product image from an id
     *
     * Get a product image from an id
     */
    "post"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductImage.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductAddProductImage.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductImage.Responses.$200>;
  };
  ["/products/{product_id}/images/{product_image_id}"]: {
    /**
     * ecommerce_backend.routes.product.delete_product_image - Delete a product image
     *
     * Delete a product image
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductImage.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductImage.Responses.$200>;
  };
  ["/products/{product_id}/materials"]: {
    /**
     * ecommerce_backend.routes.product.get_product_materials - Get product materials
     *
     * Get product materials
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductMaterials.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductMaterials.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_product_material - Get a product material from an id
     *
     * Get a product material from an id
     */
    "post"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductMaterial.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductAddProductMaterial.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductMaterial.Responses.$200>;
  };
  ["/products/{product_id}/materials/{product_material_id}"]: {
    /**
     * ecommerce_backend.routes.product.update_product_material - Update a product material
     *
     * Update a product material
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductMaterial.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateProductMaterial.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductMaterial.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_product_material - Delete a product material
     *
     * Delete a product material
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductMaterial.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductMaterial.Responses.$200>;
  };
  ["/products/{product_id}/sizes"]: {
    /**
     * ecommerce_backend.routes.product.get_product_sizes - Get product sizes
     *
     * Get product sizes
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductGetProductSizes.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductGetProductSizes.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.add_product_size - Get a product size from an id
     *
     * Get a product size from an id
     */
    "post"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductAddProductSize.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductAddProductSize.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductAddProductSize.Responses.$200>;
  };
  ["/products/{product_id}/sizes/{product_size_id}"]: {
    /**
     * ecommerce_backend.routes.product.update_product_size - Update a product size
     *
     * Update a product size
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductUpdateProductSize.PathParameters>,
      data?: Paths.EcommerceBackendRoutesProductUpdateProductSize.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductUpdateProductSize.Responses.$200>;
    /**
     * ecommerce_backend.routes.product.delete_product_size - Delete a product size
     *
     * Delete a product size
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesProductDeleteProductSize.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesProductDeleteProductSize.Responses.$200>;
  };
  ["/rbac/ecommerce_sites/create"]: {
    /**
     * ecommerce_backend.routes.rbac.add_ecommerce_site - Add an ecommerce site
     *
     * Add an ecommerce site
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesRbacAddEcommerceSite.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacAddEcommerceSite.Responses.$200>;
  };
  ["/rbac/ecommerce_sites/list"]: {
    /**
     * ecommerce_backend.routes.rbac.get_ecommerce_sites - Get all ecommerce sites
     *
     * Get all ecommerce sites
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetEcommerceSites.Responses.$200>;
  };
  ["/rbac/ecommerce_sites/{site_id}"]: {
    /**
     * ecommerce_backend.routes.rbac.get_ecommerce_site - Get an ecommerce site
     *
     * Get an ecommerce site
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacGetEcommerceSite.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetEcommerceSite.Responses.$200>;
    /**
     * ecommerce_backend.routes.rbac.update_ecommerce_site - Update an ecommerce site
     *
     * Update an ecommerce site
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacUpdateEcommerceSite.PathParameters>,
      data?: Paths.EcommerceBackendRoutesRbacUpdateEcommerceSite.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacUpdateEcommerceSite.Responses.$200>;
    /**
     * ecommerce_backend.routes.rbac.delete_ecommerce_site - Delete an ecommerce site
     *
     * Delete an ecommerce site
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeleteEcommerceSite.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeleteEcommerceSite.Responses.$200>;
  };
  ["/rbac/permissions/create"]: {
    /**
     * ecommerce_backend.routes.rbac.create_permission - Create a permission
     *
     * Create a permission
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesRbacCreatePermission.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacCreatePermission.Responses.$200>;
  };
  ["/rbac/permissions/{permission_id}"]: {
    /**
     * ecommerce_backend.routes.rbac.update_permission - Update a permission
     *
     * Update a permission
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacUpdatePermission.PathParameters>,
      data?: Paths.EcommerceBackendRoutesRbacUpdatePermission.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacUpdatePermission.Responses.$200>;
    /**
     * ecommerce_backend.routes.rbac.delete_permission - Delete a permission
     *
     * Delete a permission
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeletePermission.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeletePermission.Responses.$200>;
  };
  ["/rbac/roles/create"]: {
    /**
     * ecommerce_backend.routes.rbac.create_role - Create a role
     *
     * Create a role
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesRbacCreateRole.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacCreateRole.Responses.$200>;
  };
  ["/rbac/roles/list"]: {
    /**
     * ecommerce_backend.routes.rbac.get_roles - Get all roles
     *
     * Get all roles
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetRoles.Responses.$200>;
  };
  ["/rbac/roles/{role_id}"]: {
    /**
     * ecommerce_backend.routes.rbac.update_role - Update a role
     *
     * Update a role
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacUpdateRole.PathParameters>,
      data?: Paths.EcommerceBackendRoutesRbacUpdateRole.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacUpdateRole.Responses.$200>;
    /**
     * ecommerce_backend.routes.rbac.delete_role - Delete a role
     *
     * Delete a role
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeleteRole.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeleteRole.Responses.$200>;
  };
  ["/rbac/roles/{role_id}/add_permission"]: {
    /**
     * ecommerce_backend.routes.rbac.add_permission_to_role - Add a permission to a role
     *
     * Add a permission to a role
     */
    "post"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacAddPermissionToRole.PathParameters>,
      data?: Paths.EcommerceBackendRoutesRbacAddPermissionToRole.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacAddPermissionToRole.Responses.$200>;
  };
  ["/rbac/roles/{role_id}/add_user"]: {
    /**
     * ecommerce_backend.routes.rbac.add_role_to_user - Add a role to a user
     *
     * Add a role to a user
     */
    "post"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacAddRoleToUser.PathParameters>,
      data?: Paths.EcommerceBackendRoutesRbacAddRoleToUser.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacAddRoleToUser.Responses.$200>;
  };
  ["/rbac/roles/{role_id}/permissions/list"]: {
    /**
     * ecommerce_backend.routes.rbac.get_role_permission - Get all permissions for a role
     *
     * Get all permissions for a role
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacGetRolePermission.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacGetRolePermission.Responses.$200>;
  };
  ["/rbac/roles/{role_id}/permissions/{permission_id}"]: {
    /**
     * ecommerce_backend.routes.rbac.delete_permission_from_role - Remove a permission from a role
     *
     * Remove a permission from a role
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesRbacDeletePermissionFromRole.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesRbacDeletePermissionFromRole.Responses.$200>;
  };
  ["/users"]: {
    /**
     * ecommerce_backend.routes.user.get_users - Get users
     *
     * Get users
     */
    "get"(
      parameters?: Parameters<Paths.EcommerceBackendRoutesUserGetUsers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserGetUsers.Responses.$200>;
  };
  ["/users/checkout_session"]: {
    /**
     * ecommerce_backend.routes.user.checkout_session - Create a checkout session
     *
     * Create a checkout session
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserCheckoutSession.Responses.$200>;
  };
  ["/users/create"]: {
    /**
     * ecommerce_backend.routes.user.create_user - Create a user
     *
     * Create a user
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EcommerceBackendRoutesUserCreateUser.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserCreateUser.Responses.$200>;
  };
  ["/users/me"]: {
    /**
     * ecommerce_backend.routes.user.me - Get the current user
     *
     * Get the current user
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserMe.Responses.$200>;
  };
  ["/users/{user_id}"]: {
    /**
     * ecommerce_backend.routes.user.get_user_from_id - Get a user from an id
     *
     * Get a user from an id
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserGetUserFromId.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserGetUserFromId.Responses.$200>;
    /**
     * ecommerce_backend.routes.user.update_user - Update a user
     *
     * Update a user
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserUpdateUser.PathParameters>,
      data?: Paths.EcommerceBackendRoutesUserUpdateUser.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserUpdateUser.Responses.$200>;
    /**
     * ecommerce_backend.routes.user.delete_user - Delete a user
     *
     * Delete a user
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserDeleteUser.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserDeleteUser.Responses.$200>;
  };
  ["/users/{user_id}/cart"]: {
    /**
     * ecommerce_backend.routes.user.get_cart - Get the cart
     *
     * Get the cart
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserGetCart.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserGetCart.Responses.$200>;
    /**
     * ecommerce_backend.routes.user.add_item_to_cart - Add an item to the cart
     *
     * Add an item to the cart
     */
    "post"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserAddItemToCart.PathParameters>,
      data?: Paths.EcommerceBackendRoutesUserAddItemToCart.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserAddItemToCart.Responses.$200>;
    /**
     * ecommerce_backend.routes.user.update_cart_item - Update an item in the cart
     *
     * Update an item in the cart
     */
    "put"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserUpdateCartItem.PathParameters>,
      data?: Paths.EcommerceBackendRoutesUserUpdateCartItem.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserUpdateCartItem.Responses.$200>;
    /**
     * ecommerce_backend.routes.user.delete_item_from_cart - Delete an item from the cart
     *
     * Delete an item from the cart
     */
    "delete"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserDeleteItemFromCart.PathParameters>,
      data?: Paths.EcommerceBackendRoutesUserDeleteItemFromCart.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserDeleteItemFromCart.Responses.$200>;
  };
  ["/users/{user_id}/roles"]: {
    /**
     * ecommerce_backend.routes.user.get_user_roles - Get user roles
     *
     * Get user roles
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserGetUserRoles.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserGetUserRoles.Responses.$200>;
  };
  ["/users/{user_id}/sites"]: {
    /**
     * ecommerce_backend.routes.user.get_ecommerce_sites - Get ecommerce sites from a user
     *
     * Get ecommerce sites from a user
     */
    "get"(
      parameters: Parameters<Paths.EcommerceBackendRoutesUserGetEcommerceSites.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EcommerceBackendRoutesUserGetEcommerceSites.Responses.$200>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
