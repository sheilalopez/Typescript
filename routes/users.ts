import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/user.model';

class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/all',  this.GetUsers);
        //this.router.get('/:id',  this.GetUserById);
        //this.router.post('/', this.verifyToken, this.getUsuarioById);
        //this.router.put('/:id', this.verifyToken, this.getUsuarioById);
        //this.router.delete('/:id', this.verifyToken, this.DeleteUser);
    }

    public GetUsers(req: Request, res: Response): void {
        User.find({}).then((data) => {
                let status = 200;
                if(data == null) status = 404;
                res.statusCode = status;
                res.json(data);
            }).catch((err) => {
                let status = 500;
                res.json(err);
            })
    }

}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;