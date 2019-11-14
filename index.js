"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_1 = __importDefault(require("./routes/index"));
var cors_1 = __importDefault(require("cors"));
var port = 3000;
var MONGO_URI = 'mongodb://localhost/test1';
var app = express_1.default();
app.use(cors_1.default());
app.options('*', cors_1.default());
app.use(express_1.default.json());
app.use('', index_1.default);
app.use(body_parser_1.default.json());
mongoose_1.default.connect(MONGO_URI).then(function () {
    console.log('Connected to DB');
}).catch(function (error) {
    console.error('Connection to DB Failed');
    console.error(error.message);
    process.exit(-1);
});
app.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});
