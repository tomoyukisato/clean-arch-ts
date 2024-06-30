import { CreateOrderRequest } from "express";
import { CreateOrderUseCase } from "src/application/usecase/create_order.usecase";
import { OrderService } from "src/domain/service/orderService";
import { OrderRepositoryImpl } from "src/infrastructure/repository/order.repository.implement";
import { Response } from 'express';

export const createOrder = async(req: CreateOrderRequest, res: Response): Promise<void> {
    const sellerId = parseInt(req.sellerId, 10);

    const orderRepositoryImpl = new OrderRepositoryImpl();
    const orderService = new OrderService();
    
    const usecase = new CreateOrderUseCase(orderRepositoryImpl, orderService);
    const result = await usecase.execute();

    if (result) {
        res.json();
    } else {
        res.status(404).send("User not found");
    }
}


// }
