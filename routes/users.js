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
        this.router.get('/:id', this.GetUserById);
        this.router.post('/', this.CreateUser);
        this.router.put('/:id', this.UpdateUser);
        this.router.delete('/:id', this.DeleteUser);
    };
    UserRouter.prototype.GetUsers = function (req, res) {
        user_model_1.default.find({}).then(function (data) {
            var status = 200;
            if (data == null)
                status = 404;
            res.status(200).json(data);
        }).catch(function (err) {
            res.status(500).json(err);
        });
    };
    UserRouter.prototype.GetUserById = function (req, res) {
        var id = req.params.id;
        user_model_1.default.findOne({ "_id": id })
            .then(function (data) {
            res.status(200).json(data);
        })
            .catch(function (err) {
            res.status(500).json(err);
        });
    };
    UserRouter.prototype.CreateUser = function (req, res) {
        var email = req.body.email;
        var name = req.body.name;
        var pass = req.body.pass;
        var user = new user_model_1.default({ email: email, name: name, pass: pass });
        user.save()
            .then(function (data) {
            res.status(201).json(data);
        })
            .catch(function (err) {
            res.status(500).json(err);
        });
    };
    UserRouter.prototype.UpdateUser = function (req, res) {
        var id = req.params.id;
        var email = req.body.email;
        var name = req.body.name;
        var pass = req.body.pass;
        user_model_1.default.update({ "_id": id }, { $set: { "email": email, "name": name, "pass": pass } })
            .then(function (data) {
            res.status(201).json(data);
        })
            .catch(function (err) {
            res.status(500).json(err);
        });
    };
    UserRouter.prototype.DeleteUser = function (req, res) {
        var id = req.params.id;
        user_model_1.default.deleteOne({ "_id": id })
            .then(function (data) {
            res.status(200).json(data);
        })
            .catch(function (err) {
            res.status(500).json(err);
        });
    };
    return UserRouter;
}());
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
