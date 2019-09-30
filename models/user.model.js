"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
/*
export interface IUser extends Document {
    name: string;
    email: string;
    pass: string;
}*/
var UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    pass: { type: String, required: true }
});
exports.default = mongoose_1.model('User', UserSchema);
