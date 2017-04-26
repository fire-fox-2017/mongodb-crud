var express = require('express');
var router = express.Router();

const book = require('../controller/book');

var MongoClient = require('mongodb').MongoClient
//connection URL
var url = 'mongodb://localhost/library';

/* GET users listing. */
router.get('/', book.insert);

module.exports = router;
