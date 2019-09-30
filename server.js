"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_1 = __importDefault(require("./routes/users"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://localhost/seminario1';
        mongoose_1.default.connect(MONGO_URI).then(function () {
            console.log('Connected to DB');
        })
            .catch(function (error) {
            console.error('Connection to DB Failed');
            console.error(error.message);
            process.exit(-1);
        });
        this.app.use(body_parser_1.default.json());
    };
    Server.prototype.routes = function () {
        var router;
        router = express_1.default.Router();
        this.app.use('/', router);
        this.app.use('/users', users_1.default);
    };
    return Server;
}());
exports.default = new Server().app;
