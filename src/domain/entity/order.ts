import { Customer } from "./customer";
import { PaymentMethod } from "./payments/payment_method";
import { Plan } from "./plan";
import { Shop } from "./shop";

export class Order {
    public id?: String;
    public planId!: Plan["id"];
    public customerId!: Customer["id"];
    public shopId!: Shop["id"];
    public paymentMethodId!: PaymentMethod["id"];
    public purchasedAt!: Date;
}

export class OrderEntry {
    public planId!: String;
    public customerId!: String;
    public shopId!: String;
    public paymentMethodId!: String;
    public purchasedAt!: Date;
}
