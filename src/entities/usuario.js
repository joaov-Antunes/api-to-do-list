"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Usuario = void 0;
var typeorm_1 = require("typeorm");
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "ID" })
    ], Usuario.prototype, "Id");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", nullable: true, length: 255 })
    ], Usuario.prototype, "Nome");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Email", nullable: true, length: 255 })
    ], Usuario.prototype, "Email");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Telefone", nullable: true, length: 255 })
    ], Usuario.prototype, "Telefone");
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Senha", nullable: true, length: 255 })
    ], Usuario.prototype, "Senha");
    Usuario = __decorate([
        (0, typeorm_1.Entity)("usuario", { schema: "test" })
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
;
