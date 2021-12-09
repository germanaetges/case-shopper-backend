import { OrderInputDTO } from "../data/model/Order"
import { OrdersDataBase } from "../data/OrdersDataBase"
import { IdGenerator } from "../data/services/IdGenerator"


export class OrdersBusiness {

    async createOrder(input: OrderInputDTO) {

        try {
            if (!input.clientName || !input.dueDate || !input.list) {

                throw new Error("Todos os campos são obrigatórios! Tente novamente =)")
            };

            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generate()
            const newOrder = { id, ...input }
            const ordersDataBase = new OrdersDataBase()

            await ordersDataBase.createOrder(newOrder)

            return newOrder
        }

        catch (error: any) {
            throw new Error(error.message)
        }
    }









}