var express = require('express');
var router = express.Router();

const book = require('../controller/book');

var MongoClient = require('mongodb').MongoClient
//connection URL
var url = 'mongodb://localhost/library';

/* GET users listing. */
router.get('/insert', book.insert);
router.get('/findall', book.findall);
router.get('/:id', book.findone);
router.post('/create', book.create);
router.delete('/:id', book.remove);
router.put('/:id', book.update);

module.exports = router;
