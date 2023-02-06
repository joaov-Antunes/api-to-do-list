"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var Tasks_1 = require("./entities/Tasks");
var app_data_source_1 = require("./app-data-source");
app_data_source_1.bd
    .initialize()
    .then(function () {
    console.log('The database has been initialized');
})["catch"](function (err) {
    console.log("The databse hasn't been initialized", err);
});
var app = express();
app.use(express.json());
app.use(cors());
app.get('/tasks', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app_data_source_1.bd.getRepository(Tasks_1.Tasks).find()];
            case 1:
                response = _a.sent();
                res.send(response);
                return [2 /*return*/];
        }
    });
}); });
app.get('/tasks/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app_data_source_1.bd.getRepository(Tasks_1.Tasks).findOneBy({
                    Id: req.params.id
                })];
            case 1:
                response = _a.sent();
                res.send(response);
                return [2 /*return*/];
        }
    });
}); });
app.post('/tasks', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app_data_source_1.bd.getRepository(Tasks_1.Tasks).create(req.body)];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, app_data_source_1.bd.getRepository(Tasks_1.Tasks).save(user)];
            case 2:
                results = _a.sent();
                res.send(results);
                return [2 /*return*/];
        }
    });
}); });
app.put('/tasks/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app_data_source_1.bd.getRepository(Tasks_1.Tasks).findOneBy({
                    Id: req.params.id
                })];
            case 1:
                response = _a.sent();
                app_data_source_1.bd.getRepository(Tasks_1.Tasks).merge(response, req.body);
                return [4 /*yield*/, app_data_source_1.bd.getRepository(Tasks_1.Tasks).save(response)];
            case 2:
                results = _a.sent();
                res.send(results);
                return [2 /*return*/];
        }
    });
}); });
app["delete"]('/tasks/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app_data_source_1.bd.getRepository(Tasks_1.Tasks)["delete"](req.params.id)];
            case 1:
                response = _a.sent();
                res.send(response);
                return [2 /*return*/];
        }
    });
}); });
var port = 3000;
app.listen(port, function () {
    console.log("Servidor rodando na port ".concat(port));
});
