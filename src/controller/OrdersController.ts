import { Request, Response } from "express";
import BaseDataBase from "../data/BaseDataBase";
import { OrderInputDTO } from "../data/model/Order";
import { IdGenerator } from "../data/services/IdGenerator";



export class PurchaseController {
    async postPurchase(req: Request, res: Response): Promise<void> {

        try {
            const input: OrderInputDTO = {
                clientName: req.body.clientName,
                dueDate: req.body.dueDate,
                list: req.body.list
            }

            const ordersBusiness = new OrdersBusiness(
                new OrdersDataBase,
                new IdGenerator
            )
            await ordersBusiness.registerOrder(input)
            res.status(200).send('Compra cadastrada com sucesso! Obrigado por usar a Shopper!')
        }

        catch (error: any) {
            res.status(error).send({ message: error.message })
        }
        finally { BaseDataBase.destroyConnection }
    }
}