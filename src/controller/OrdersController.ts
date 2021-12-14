import { Request, Response } from "express";
import { OrdersBusiness } from "../business/OrdersBusiness";
import BaseDataBase from "../data/BaseDataBase";
import { OrderInputDTO } from "../data/model/Order";
import { OrdersDataBase } from "../data/OrdersDataBase";
import { IdGenerator } from "../data/services/IdGenerator";

const idGenerator = new IdGenerator()
const ordersDataBase = new OrdersDataBase()


export class OrdersController {
    async createOrder(req: Request, res: Response): Promise<void> {

        try {
            const input: OrderInputDTO = {
                clientName: req.body.clientName,
                dueDate: req.body.dueDate,
                list: req.body.list
            }

            const ordersBusiness = new OrdersBusiness(idGenerator, ordersDataBase)
            const newOrder = await ordersBusiness.createOrder(input)
            res.status(201).send(newOrder)
        }

        catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}