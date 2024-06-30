import "express";

declare module "express" {
    interface CreateOrderRequest {
        sellerId: string;
    }
}
