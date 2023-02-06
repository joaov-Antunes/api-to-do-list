"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tasks = void 0;
var typeorm_1 = require("typeorm");
var Tasks = /** @class */ (function () {
    function Tasks() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" })
    ], Tasks.prototype, "Id");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", length: 255, nullable: true })
    ], Tasks.prototype, "Nome");
    __decorate([
        (0, typeorm_1.Column)("tinyint", { name: "Feita", width: 1, nullable: true })
    ], Tasks.prototype, "Feita");
    Tasks = __decorate([
        (0, typeorm_1.Entity)("tasks", { schema: "todolist" })
    ], Tasks);
    return Tasks;
}());
exports.Tasks = Tasks;
;
