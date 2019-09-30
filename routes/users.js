"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_model_1 = __importDefault(require("../models/user.model"));
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.routes = function () {
        this.router.get('/all', this.GetUsers);
        //this.router.get('/:id',  this.GetUserById);
        //this.router.post('/', this.verifyToken, this.getUsuarioById);
        //this.router.put('/:id', this.verifyToken, this.getUsuarioById);
        //this.router.delete('/:id', this.verifyToken, this.DeleteUser);
    };
    UserRouter.prototype.GetUsers = function (req, res) {
        user_model_1.default.find({}).then(function (data) {
            var status = 200;
            if (data == null)
                status = 404;
            res.statusCode = status;
            res.json(data);
        }).catch(function (err) {
            var status = 500;
            res.json(err);
        });
    };
    return UserRouter;
}());
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
