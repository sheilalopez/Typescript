import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/index';
import cors from 'cors';

const port: number = 3000;
const MONGO_URI: string = 'mongodb://localhost/test1';
const app: express.Application = express();

app.use(cors());
app.options('*',cors());
app.use( express.json() );
app.use( '', router );
app.use( bodyParser.json() );

mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to DB');
}).catch(error => {
    console.error('Connection to DB Failed');
    console.error(error.message);
    process.exit(-1);
});

app.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});
