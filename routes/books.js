const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/', booksController.gets);
router.post('/', booksController.add);

module.exports = router;