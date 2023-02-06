import { DataSource } from "typeorm"

const bd = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Jv410551",
    database: "todolist",
    entities: ["src/entities/Tasks.js"],
    logging: true,
    synchronize: true,
});

export { bd };