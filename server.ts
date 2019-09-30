import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import UserRouter from './routes/users';

class Server {
    public app:express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    public config() {

        const MONGO_URI:string = 'mongodb://localhost/seminario1';
        mongoose.connect(MONGO_URI).then(() => {
            console.log('Connected to DB');
        })
        .catch(error => {
            console.error('Connection to DB Failed');
            console.error(error.message);
            process.exit(-1);
        });

        this.app.use(bodyParser.json());
    }

    public routes():void {

        let router: express.Router;
        router = express.Router();

        this.app.use('/', router);
        this.app.use('/users', UserRouter);
    }
}

export default new Server().app;
