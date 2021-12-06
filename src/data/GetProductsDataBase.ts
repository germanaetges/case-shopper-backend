import BaseDataBase from "./BaseDataBase"
import { PRODUCTS_LIST } from "./Migrations"


export class GetProductsDataBase extends BaseDataBase {

    public async getProducts() {
        const result = await BaseDataBase.connection(PRODUCTS_LIST)
            .select('*')
            

        return result
    }

}