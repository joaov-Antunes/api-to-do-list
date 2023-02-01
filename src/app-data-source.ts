import { DataSource } from "typeorm"

const bd = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Jv410551",
    database: "test",
    entities: ["src/entities/usuario.js"],
    logging: true,
    synchronize: true,
});

export { bd };