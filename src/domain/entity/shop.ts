import { Url } from "url";

export class Shop {
    public id!: String;
    public sellerId!: Seller["id"];
    public name!: String;
    public storeUrl: Url | undefined;

    public constructor(
        id: String,
        sellerId: Seller["id"],
        name: String,
        storeUrl?: Url
    ) {
        this.id = id;
        this.sellerId = sellerId;
        this.name = name;
        this.storeUrl = storeUrl;
    }
}
