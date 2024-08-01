import { DataSource } from "typeorm";
import { Book } from "./entities/Book.js";
import { Author } from "./entities/Author.js";
import { Address } from "./entities/Address.js";


const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "books-db",
    synchronize: true,
    logging: false,
    entities: [Book,Author,Address]

})

export default dataSource;