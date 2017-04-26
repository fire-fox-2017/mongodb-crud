var express = require('express');
var api = require('../controllers/bookController')
var router = express.Router();

router.get('/', api.getAllBooks)
router.post('/', api.insertBook)
router.delete('/:id', api.deleteBook)
router.put('/:id', api.updateBook)

module.exports = router