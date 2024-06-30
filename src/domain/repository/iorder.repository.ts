import { Order, OrderEntry } from "../entity/order";

export interface IOrderRepository {
    create(order: OrderEntry): Promise<Order>;
}
