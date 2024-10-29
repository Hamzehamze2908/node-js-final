const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4500;
let points = [];

app.use(bodyParser.json());
app.use(express.static('client'));
