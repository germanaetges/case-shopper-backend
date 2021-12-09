import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { productsRouter } from "./routes/ProductsRouter";
import { ordersRouter } from "./routes/OrdersRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/shopper", productsRouter);
app.use("/shopper", ordersRouter);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});