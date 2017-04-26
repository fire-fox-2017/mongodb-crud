const router = require('express').Router();
const bookController = require('../controllers/books')

router.get('/', bookController.getAllBooks)
router.get('/:id', bookController.getById)
router.post('/', bookController.createBook)
router.put('/:id', bookController.updateById)
router.delete('/:id', bookController.deleteById)

module.exports = router;
