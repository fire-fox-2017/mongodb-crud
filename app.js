"use strict"

const express = require('express')

var books = require('./routes/books');


var bodyParser = require('body-parser');
let app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/books', books);


app.listen(3000)
module.exports = app;