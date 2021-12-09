import express from "express";
import { OrdersController } from "../controller/OrdersController";


export const ordersRouter = express.Router();
const ordersController = new OrdersController();


ordersRouter.post("/orders", ordersController.createOrder)