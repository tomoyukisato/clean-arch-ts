import { Order } from "./order";

class Charge {
    id!: String;
    orderId!: Order["id"];
    amount!: number;
    tax!: number;
    status!: Boolean;
}
