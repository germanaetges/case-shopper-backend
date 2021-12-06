import BaseDataBase from "./BaseDataBase"
import products from "./products.json"
import { IdGenerator } from "./services/idGenerator"

export const PRODUCTS_LIST = "products_shopper";


export class Migrations extends BaseDataBase {

    static createTables = async () => {

        try {
            await BaseDataBase.connection.raw(`
      CREATE TABLE IF NOT EXISTS ${PRODUCTS_LIST} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        price FLOAT NOT NULL,
        qty_stock INT NOT NULL
      );
   `)

            const productsInsert = products.map((product) => {
                return {
                 id: product.id,
                 name: product.name,
                 price: product.price,
                 qty_stock: product.qty_stock
                }
            })

            await Migrations.connection(PRODUCTS_LIST).insert(productsInsert)

            console.log("Tabela criada!")
        } catch (error: any) {
            console.log(error.message)
        } finally {
            Migrations.connection.destroy()
        }
    }
}

Migrations.createTables()