const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.listen(port, function () {
    console.log('server started on port ' + port);
});

app.get('/', function (req, res) {
    res.send('Hello World !');
});