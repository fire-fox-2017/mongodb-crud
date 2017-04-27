var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController');


router.get('/books/',bookController.getAllBooks)
router.post('/books/',bookController.insertBook)
router.put('/books/:id',bookController.updateBook)
router.delete('/books/:id',bookController.deleteBook)



module.exports = router;
