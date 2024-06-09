import { Shop } from "./shop";

// TBD
export class Product {
    public id!: String;
    public name!: String;
    public shopId!: Shop["id"];

    public constructor(id: String, name: String, shopId: Shop["id"]) {
        this.id = id;
        this.name = name;
        this.shopId = shopId;
    }
}
