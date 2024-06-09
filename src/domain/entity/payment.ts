import { Order } from "./order";

class Payment {
    id!: String;
    orderId!: Order["id"];
    amount!: number;
    tax!: number;
    status!: Boolean;
}
