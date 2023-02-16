"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Urgencia = void 0;
var typeorm_1 = require("typeorm");
var Tarefas_1 = require("./Tarefas");
var Urgencia = /** @class */ (function () {
    function Urgencia() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" })
    ], Urgencia.prototype, "Id");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nivel", nullable: true, length: 6 })
    ], Urgencia.prototype, "Nivel");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Tarefas_1.Tarefas; }, function (Tarefas) { return Tarefas.IdUrgencia2; })
    ], Urgencia.prototype, "Tarefas");
    Urgencia = __decorate([
        (0, typeorm_1.Entity)("urgencia", { schema: "todolist" })
    ], Urgencia);
    return Urgencia;
}());
exports.Urgencia = Urgencia;
