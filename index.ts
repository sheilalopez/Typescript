import express = require('express');
const app: express.Application = express();

app.get('/all', function (req, res) {
    let users:{user: string;}[] = [
        {user:'Toni'},
        {user:'Joan'}
    ];
    res.status(200).json(users);
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
    res.status(201).json({ user: 'tobi' });
});

app.put('/:id', function (req, res) {
    res.status(201).json({ user: 'tobi' });
});

app.delete('/:id', function (req, res) {
    res.status(200);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});