import { Customer } from "../customer";

// TBD
export abstract class PaymentMethod {
    public id!: String;
    public type!: PaymentMethodType;
    public customerId!: Customer["id"];
}

enum PaymentMethodType {
    INVOICE,
    CREDIT_CARD,
}
