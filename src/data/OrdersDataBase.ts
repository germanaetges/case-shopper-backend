import { OrdersController } from "../controller/OrdersController";
import BaseDataBase from "./BaseDataBase";
import { ORDERS_LIST, ORDERS_PRODUCTS } from "./Migrations";
import { Order } from "./model/Order";


export class OrdersDataBase extends BaseDataBase {

    async createOrder(input: Order) {

        try {
            const order = {
                id: input.id,
                clientName: input.clientName,
                dueDate: input.dueDate
            }

            await OrdersDataBase.connection(ORDERS_LIST)
                .insert(order)

            const items = input.list.map((item) => {
                return {
                    productId: item.productId,
                    orderId: order.id,
                    productQuantity: item.productQuantity
                }
            })

            await OrdersDataBase.connection(ORDERS_PRODUCTS)
                .insert(items)
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}