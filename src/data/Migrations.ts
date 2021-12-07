import BaseDataBase from "./BaseDataBase"
import products from "./products.json"


export const PRODUCTS_LIST = "products_shopper";
export const ORDERS_LIST = "orders_shopper"
export const ORDERS_PRODUCTS = "orders_products_shopper"


export class Migrations extends BaseDataBase {

    static createTables = async () => {

        try {
            await BaseDataBase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${PRODUCTS_LIST} (
                id INT PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                price FLOAT NOT NULL,
                qty_stock INT NOT NULL
            );
         `)

            await BaseDataBase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${ORDERS_LIST} (
                id VARCHAR(255) NOT NULL PRIMARY KEY,
                clientName VARCHAR(50) NOT NULL,
                dueDate DATE NOT NULL
            );         
        `)

            await BaseDataBase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${ORDERS_PRODUCTS}(
                productId INT NOT NULL,
                orderId VARCHAR(255) NOT NULL,
                productQuantity INT NOT NULL,
                FOREIGN KEY (productId) REFERENCES ${PRODUCTS_LIST}(id),
                FOREIGN KEY (orderId) REFERENCES ${ORDERS_LIST}(id)
          );
        `)

            await Migrations.connection(PRODUCTS_LIST).insert(products)

            console.log("Tabela criada!")
        } catch (error: any) {
            console.log(error.message)
        } finally {
            Migrations.connection.destroy()
        }
    }
}

// Migrations.createTables()