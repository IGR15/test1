import { Request, Response } from "express";
import express from 'express';
import env from "dotenv";
import dataSource from "./db/dbConfig.js";
import catagoryRoute from "./routes/catagory.js";
import proudctRoute from "./routes/product.js";
import shopRoute from "./routes/shop.js";
import hotlineRoute from "./routes/hotline.js";
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandler.js";

const app = express();
env.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use('/hotline',hotlineRoute)
app.use('/catagory',catagoryRoute)
app.use('/products',proudctRoute)
app.use('/shop',shopRoute)

app.use(customErrorHandler)

app.use(DefaultErrorHandler)

dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;