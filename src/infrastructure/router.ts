import { Router } from "express";

import { OrderController } from "src/presentation/controller/orderContoller";

let router = Router();

export class OrderRouter {
    private readonly router: Router;
    private readonly orderController: OrderController;

    constructor(router: Router, orderController: OrderController) {
        this.router = router;
        this.orderController = orderController;

        // this.router.get();
    }
}

export default router;
