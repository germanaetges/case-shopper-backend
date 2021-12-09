import { Request, Response } from "express";
import { OrdersBusiness } from "../business/OrdersBusiness";
import BaseDataBase from "../data/BaseDataBase";
import { OrderInputDTO } from "../data/model/Order";
import { IdGenerator } from "../data/services/IdGenerator";



export class OrdersController {
    async createOrder(req: Request, res: Response): Promise<void> {

        try {
            const input: OrderInputDTO = {
                clientName: req.body.clientName,
                dueDate: req.body.dueDate,
                list: req.body.list
            }

            const ordersBusiness = new OrdersBusiness()
            const newOrder = await ordersBusiness.createOrder(input)
            res.status(201).send(newOrder)
        }

        catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}