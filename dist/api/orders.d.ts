export declare const getOrder: (order_id: string) => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaOrder>;
export declare const getOrders: (limit?: number, offset?: number) => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaOrder[]>;
export declare const getOrderDetails: (order_id: string) => Promise<import("./openapi").Components.Schemas.EcommerceBackendSchemaOrderDetail[]>;
