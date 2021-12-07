import { OrderInputDTO } from "../data/model/Order"


export class OrdersBusiness {

    async registerOrder(input: OrderInputDTO){
        
        if (!input.clientName || !input.dueDate || !input.list) {
            
            throw new Error("Todos os campos são obrigatórios! Tente novamente =)")
        };

        await this.purchaseDataBase.createPurchase(
            Purchase.toPurchase({
                ...input,
                id: this.idGenerator.generate()
            })!
            )
    }








}