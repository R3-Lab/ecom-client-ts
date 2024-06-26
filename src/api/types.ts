import { Components } from "./openapi";

export type ConfigErrorJsonError =
  Components.Schemas.EcommerceBackendConfigErrorJsonError;
export type Address = Components.Schemas.EcommerceBackendSchemaAddress;
export type Category = Components.Schemas.EcommerceBackendSchemaCategory;
export type Color = Components.Schemas.EcommerceBackendSchemaColor;
export type DatabaseAvailability =
  Components.Schemas.EcommerceBackendSchemaDatabaseAvailability;
export type DatabaseOAuthProvider =
  Components.Schemas.EcommerceBackendSchemaDatabaseOAuthProvider;
export type EcommerceSite =
  Components.Schemas.EcommerceBackendSchemaEcommerceSite;
export type Material = Components.Schemas.EcommerceBackendSchemaMaterial;
export type Permission = Components.Schemas.EcommerceBackendSchemaPermission;
export type Product = Components.Schemas.EcommerceBackendSchemaProduct;
export type ProductColor =
  Components.Schemas.EcommerceBackendSchemaProductColor;
export type ProductImage =
  Components.Schemas.EcommerceBackendSchemaProductImage;
export type ProductMaterial =
  Components.Schemas.EcommerceBackendSchemaProductMaterial;
export type ProductSize = Components.Schemas.EcommerceBackendSchemaProductSize;
export type ProductType = Components.Schemas.EcommerceBackendSchemaProductType;
export type RequestsAddressAddAddress =
  Components.Schemas.EcommerceBackendSchemaRequestsAddressAddAddress;
export type RequestsProductAddCategory =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddCategory;
export type RequestsProductAddColor =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddColor;
export type RequestsProductAddMaterial =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddMaterial;
export type RequestsProductAddProduct =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddProduct;
export type RequestsProductAddProductColor =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductColor;
export type RequestsProductAddProductImage =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductImage;
export type RequestsProductAddProductMaterial =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductMaterial;
export type RequestsProductAddProductSize =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductSize;
export type RequestsProductAddProductType =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddProductType;
export type RequestsProductAddSize =
  Components.Schemas.EcommerceBackendSchemaRequestsProductAddSize;
export type RequestsProductUpdateCategory =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateCategory;
export type RequestsProductUpdateColor =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateColor;
export type RequestsProductUpdateMaterial =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateMaterial;
export type RequestsProductUpdateProduct =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProduct;
export type RequestsProductUpdateProductColor =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductColor;
export type RequestsProductUpdateProductMaterial =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductMaterial;
export type RequestsProductUpdateProductSize =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductSize;
export type RequestsProductUpdateProductType =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateProductType;
export type RequestsProductUpdateSize =
  Components.Schemas.EcommerceBackendSchemaRequestsProductUpdateSize;
export type RequestsRbacAddEcommerceSite =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacAddEcommerceSite;
export type RequestsRbacAddPermissionToRole =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacAddPermissionToRole;
export type RequestsRbacAddRoleToUser =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacAddRoleToUser;
export type RequestsRbacCreatePermission =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacCreatePermission;
export type RequestsRbacCreateRole =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacCreateRole;
export type RequestsRbacUpdateEcommerceSite =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacUpdateEcommerceSite;
export type RequestsRbacUpdatePermission =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacUpdatePermission;
export type RequestsRbacUpdateRole =
  Components.Schemas.EcommerceBackendSchemaRequestsRbacUpdateRole;
export type RequestsUserAddItemToCart =
  Components.Schemas.EcommerceBackendSchemaRequestsUserAddItemToCart;
export type RequestsUserCreateUser =
  Components.Schemas.EcommerceBackendSchemaRequestsUserCreateUser;
export type RequestsUserLoginUser =
  Components.Schemas.EcommerceBackendSchemaRequestsUserLoginUser;
export type RequestsUserRemoveItemFromCart =
  Components.Schemas.EcommerceBackendSchemaRequestsUserRemoveItemFromCart;
export type RequestsUserSignUpUser =
  Components.Schemas.EcommerceBackendSchemaRequestsUserSignUpUser;
export type RequestsUserUpdateCartItem =
  Components.Schemas.EcommerceBackendSchemaRequestsUserUpdateCartItem;
export type RequestsUserUpdateUser =
  Components.Schemas.EcommerceBackendSchemaRequestsUserUpdateUser;
export type Role = Components.Schemas.EcommerceBackendSchemaRole;
export type RolePermission =
  Components.Schemas.EcommerceBackendSchemaRolePermission;
export type ShoppingCart =
  Components.Schemas.EcommerceBackendSchemaShoppingCart;
export type ShoppingCartItem =
  Components.Schemas.EcommerceBackendSchemaShoppingCartItem;
export type Size = Components.Schemas.EcommerceBackendSchemaSize;
export type User = Components.Schemas.EcommerceBackendSchemaUser;
export type UserRole = Components.Schemas.EcommerceBackendSchemaUserRole;
export type Order = Components.Schemas.EcommerceBackendSchemaOrder;
export type OrderStatus =
  Components.Schemas.EcommerceBackendSchemaDatabaseOrderStatus;
export type OrderDetail = Components.Schemas.EcommerceBackendSchemaOrderDetail;
export type BlogPost = Components.Schemas.EcommerceBackendSchemaBlogPost;
export type BlogPostCategory =
  Components.Schemas.EcommerceBackendSchemaBlogCategory;
export type StripeSession =
  Components.Schemas.EcommerceBackendSchemaCheckoutSession;

export enum Availability {
  InStock = "in_stock",
  OutOfStock = "out_of_stock",
  PreOrder = "pre_order",
}
