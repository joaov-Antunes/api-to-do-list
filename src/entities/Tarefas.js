"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tarefas = void 0;
var typeorm_1 = require("typeorm");
var Urgencia_1 = require("./Urgencia");
var Usuario_1 = require("./Usuario");
var Tarefas = /** @class */ (function () {
    function Tarefas() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" })
    ], Tarefas.prototype, "Id");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", nullable: true, length: 255 })
    ], Tarefas.prototype, "Nome");
    __decorate([
        (0, typeorm_1.Column)("date", { name: "DataFinal", nullable: true })
    ], Tarefas.prototype, "DataFinal");
    __decorate([
        (0, typeorm_1.Column)("int", { name: "IdUrgencia", nullable: true })
    ], Tarefas.prototype, "IdUrgencia");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Urgencia", nullable: true, length: 6 })
    ], Tarefas.prototype, "Urgencia");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Feita", nullable: true, length: 20 })
    ], Tarefas.prototype, "Feita");
    __decorate([
        (0, typeorm_1.Column)("tinyint", { name: "StatusTarefa", nullable: true, width: 1 })
    ], Tarefas.prototype, "StatusTarefa");
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioId", nullable: true })
    ], Tarefas.prototype, "UsuarioId");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Urgencia_1.Urgencia; }, function (Urgencia) { return Urgencia.Tarefas; }, {
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT"
        }),
        (0, typeorm_1.JoinColumn)([{ name: "IdUrgencia", referencedColumnName: "Id" }])
    ], Tarefas.prototype, "IdUrgencia2");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuario_1.Usuario; }, function (Usuario) { return Usuario.Tarefas; }, {
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT"
        }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "Id" }])
    ], Tarefas.prototype, "Usuario");
    Tarefas = __decorate([
        (0, typeorm_1.Index)("IdUrgencia", ["IdUrgencia"], {}),
        (0, typeorm_1.Index)("UsuarioId", ["UsuarioId"], {}),
        (0, typeorm_1.Entity)("tarefas", { schema: "todolist" })
    ], Tarefas);
    return Tarefas;
}());
exports.Tarefas = Tarefas;
