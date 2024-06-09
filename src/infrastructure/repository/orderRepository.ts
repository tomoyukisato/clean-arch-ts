import { OrderEntry, Order } from "src/domain/entity/order";
import { IOrderRepository } from "src/domain/repository/IOrderRepository";

class OrderRepository implements IOrderRepository {
    create(order: OrderEntry): Promise<Order> {
        throw new Error("Method not implemented.");
    }
}
