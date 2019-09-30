"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_model_1 = __importDefault(require("./models/user.model"));
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(express.json());
mongoose.connect('mongodb://localhost/seminario1');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected');
});
app.get('/all', function (req, res) {
    //let users:{name: string, pass: string}[] = db.users.find();
    user_model_1.default.find({}).then(function (data) {
        console.log(data);
    });
    //res.status(200).json(users);
});
app.get('/:id', function (req, res) {
    var id = parseInt(req.params.id);
    if (!Number.isInteger(id))
        res.send('Not an integer');
    else {
        var body = {
            id: id,
            name: 'lorem'
        };
        res.status(200).json(body);
    }
});
app.post('/', function (req, res) {
    res.status(201).send(req.body);
});
app.put('/:id', function (req, res) {
    res.status(201).send(req.body);
});
app.delete('/:id', function (req, res) {
    res.status(200).end();
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
