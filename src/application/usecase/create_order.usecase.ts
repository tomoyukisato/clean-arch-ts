import { OrderService } from "src/domain/service/order.service";
import { IOrderRepository } from "src/domain/repository/iorder.repository";
import { CreateOrderResult } from "./create_order.result";
export class CreateOrderUseCase {
    iOrderRepository: IOrderRepository;
    orderService: OrderService;

    public constructor(
        iOrderRepository: IOrderRepository,
        orderService: OrderService
    ) {
        this.iOrderRepository = iOrderRepository;
        this.orderService = orderService;
    }

    public execute(): CreateOrderResult {
        // プランの存在チェック
        // 購入者の存在チェック
        // ショップの存在チェック
        // サービスから購入処理実行
        // 結果を返却
        return new CreateOrderResult(true);
    }
}
