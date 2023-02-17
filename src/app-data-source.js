"use strict";
exports.__esModule = true;
exports.database = void 0;
var typeorm_1 = require("typeorm");
var database = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Jv410551",
    database: "todolist",
    entities: ["src/entities/Tarefas.js", "src/entities/Urgencia.js", "src/entities/Concluida.js", "src/entities/Usuario.js"],
    migrations: ["src/migration/1676301074444-PostRefactoring.js"],
    logging: true,
    synchronize: true
});
exports.database = database;
