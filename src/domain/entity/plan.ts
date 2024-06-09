import { Product } from "./product";

// TBD
export class Plan {
    public id!: String;
    public productId!: Product["id"];
    public name!: String;

    public constructor(id: String, productId: Product["id"], name: String) {
        this.id = id;
        this.productId = productId;
        this.name = name;
    }
}
