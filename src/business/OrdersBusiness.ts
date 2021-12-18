import { OrderInputDTO } from "../data/model/Order"
import { OrdersDataBase } from "../data/OrdersDataBase"
import { IdGenerator } from "../data/services/IdGenerator"


export class OrdersBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private ordersDataBase: OrdersDataBase,

    ) { }

    async createOrder(input: OrderInputDTO) {

        try {
            if (!input.clientName || !input.dueDate || !input.list) {

                throw new Error("Todos os campos são obrigatórios! Tente novamente =)")
            }

            const id = this.idGenerator.generate()
            const newOrder = { id, ...input }

            await this.ordersDataBase.createOrder(newOrder)

            return newOrder
        }

        catch (error: any) {
            throw new Error(error.message)
        }
    }

}