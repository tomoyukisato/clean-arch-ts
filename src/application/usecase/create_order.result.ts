import { OrderService } from "src/domain/service/order.service";
import { IOrderRepository } from "src/domain/repository/iorder.repository";
import { Result } from "./usecase.result";
export class CreateOrderResult extends Result {
    public constructor(isSuccess: Boolean) {
        super();
    }
}
