import { Request, Response } from 'express';
import User from '../models/user';

function getUsers(req: Request, res: Response): void {
    User.find({}).then((data) => {
        let status: number = 200;
        if(data == null) status = 404;
        res.status(status).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function getUserById(req: Request, res: Response): void {
    const id: string = req.params.id;
    User.findOne({ "_id": id }).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function createUser(req: Request, res: Response): void {
    const email: string = req.body.email;
    const name: string = req.body.name;
    const pass: string = req.body.pass;
    const user = new User({email, name, pass});
    user.save().then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function updateUser(req: Request, res: Response): void {
    const id: string = req.params.id;
    const email: string = req.body.email;
    const name: string = req.body.name;
    const pass: string = req.body.pass;
    User.update({"_id": id}, {$set: {"email": email, "name": name, "pass": pass}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

function deleteUser(req: Request, res: Response): void {
    const id: string = req.params.id;
    User.deleteOne({"_id": id}).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getUsers, getUserById, createUser, updateUser, deleteUser }
