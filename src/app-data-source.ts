import { DataSource } from "typeorm"

const database = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Jv410551",
    database: "todolist",
    entities: ["src/entities/Tarefas.js", "src/entities/Urgencia.js", "src/entities/Concluida.js", "src/entities/Usuario.js"],
    migrations: ["src/migration/1676301074444-PostRefactoring.js"],
    logging: true,
    synchronize: true,
});

export { database };