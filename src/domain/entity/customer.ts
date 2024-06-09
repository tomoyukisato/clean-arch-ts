import { PaymentMethod } from "./payments/payment_method";

// TBD
export class Customer {
    public id!: String;
    public name!: String;

    public constructor(id: String, name: String) {
        this.id = id;
        this.name = name;
    }
}
