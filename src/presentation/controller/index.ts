import { RequestHandler } from "express";
import { requestHandler } from "./../../util/requestHandler";
import { OrderController } from "./orderContoller";

export const controllers: { [controllerName: string]: RequestHandler } = {
    createOrder: requestHandler(OrderController),
};
