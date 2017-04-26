const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/', booksController.gets);
router.post('/', booksController.add);
router.post('/find-isbn', booksController.get);
router.delete('/delete', booksController.delete);
router.put('/edit', booksController.edit);

module.exports = router;