import express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(express.json());

mongoose.connect('mongodb://localhost/seminario1');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
});


app.get('/all', function (req, res) {
    //let users:{name: string, pass: string}[] = db.users.find();
    User.find({}).then(
        (data) => {
            console.log(data);
        }

    );


    //res.status(200).json(users);
});

app.get('/:id', function (req, res) {
    let id:number = parseInt(req.params.id);
    if (!Number.isInteger(id)) res.send('Not an integer');
    else {
        let body:{id: number, name: string} = {
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