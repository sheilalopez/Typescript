"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server_1 = __importDefault(require("./server"));
var port = 3000;
server_1.default.set('port', port);
var server = http_1.default.createServer(server_1.default);
server.listen(port);
server.on('listening', onListening);
function onListening() {
    var addr = server.address();
}
