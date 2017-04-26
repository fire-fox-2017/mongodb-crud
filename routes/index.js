var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController')

/* GET home page. */
router.post('/api/books',booksController.insert);
router.get('/api/books',booksController.find);
router.get('/api/books/:id',booksController.findOne);
router.put('/api/books/:id',booksController.edit);
router.delete('/api/books/:id',booksController.remove);

module.exports = router;
