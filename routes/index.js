var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')

/* GET home page. */
router.post('/api/books', bookController.insert)
router.put('/api/book/:id', bookController.update)
router.get('/api/books', bookController.getAll)

module.exports = router;