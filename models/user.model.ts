import mongoose, {Schema, model, Mongoose} from 'mongoose';

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    pass: { type: String, required: true }
});

export default model('User', UserSchema);