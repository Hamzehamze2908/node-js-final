const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4500;
let points = [];

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/api/points', (req, res) => {
    const { name } = req.body;
    const newPoint = { id: points.length + 1, name };
    points.push(newPoint);
    res.status(201).json(newPoint);
});
app.get('/api/points', (req, res) => {
    res.json(points);
});

app.delete('/api/points/:id', (req, res) => {
    const id = parseInt(req.params.id);
    points = points.filter(point => point.id !== id);
    res.sendStatus(204);
});
