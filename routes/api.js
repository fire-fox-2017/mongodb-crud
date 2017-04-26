
var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController.js');

router.get('/books', bookController.findAllBooks);
router.get('/books/:id', bookController.findOneBook);
router.post('/books', bookController.insertBook);
router.put('/books/:id',  bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
