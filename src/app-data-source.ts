import { DataSource } from "typeorm"

const bd = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
<<<<<<< HEAD
    password: "Jv410551",
    database: "todolist",
    entities: ["src/entities/Tasks.js"],
=======
    password: "joseaa",
    database: "test",
    entities: ["src/entities/usuario.js"],
>>>>>>> 4b79c317caabb7a52f6f6ce6788750b7ea55be3f
    logging: true,
    synchronize: true,
});

export { bd };