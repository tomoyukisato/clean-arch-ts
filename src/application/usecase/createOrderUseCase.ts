import { OrderService } from "src/domain/service/orderService";
import { IOrderRepository } from "src/domain/repository/IOrderRepository";

export class CreateOrderUseCase {
    public constructor(
        iOrderRepository: IOrderRepository,
        orderService: OrderService
    ) {}

    public execute() {
        // プランの存在チェック
        // 購入者の存在チェック
        // ショップの存在チェック
        // サービスから購入処理実行
        // 結果を返却
    }
}
