"use strict";
exports.__esModule = true;
exports.bd = void 0;
var typeorm_1 = require("typeorm");
var bd = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Jv410551",
    database: "test",
    entities: ["src/entities/usuario.js"],
    logging: true,
    synchronize: true
});
exports.bd = bd;
