export class OrderService {
    public newPurchase() {
        // 購入者がプランを購入できるかチェック
        // プランが販売されているかチェック
        // 指定の支払い方法で決済を実行
        // 価格計算(PlanService.calculateTotalPrice)
        // 注文作成
        // 決済処理(PaymentService.processPayment)
        // 決済に失敗 -> エラーを返却
        // 決済に成功
        // -> 請求を作成
        // -> メール送信
    }
}
