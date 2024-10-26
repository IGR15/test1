import { DataSource } from "typeorm";
import { Catagory } from "./entities/Catagory.js";
import { Product } from "./entities/Product.js";
import { Hotline } from "./entities/Hotline.js";
import { Shop } from "./entities/Shop.js";


const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "ecommers-db",
    synchronize: true,
    logging: false,
    entities: [Catagory,Product,Hotline,Shop]

})

export default dataSource;