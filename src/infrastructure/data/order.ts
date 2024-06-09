import { Customer } from "src/domain/entity/customer";
import { PaymentMethod } from "src/domain/entity/payments/payment_method";
import { Plan } from "src/domain/entity/plan";
import { Shop } from "src/domain/entity/shop";

export class OrderData {
    public planId!: Plan["id"];
    public customerId!: Customer["id"];
    public shopId!: Shop["id"];
    public paymentMethodId!: PaymentMethod["id"];
}
