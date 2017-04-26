const router = require('express').Router();
const bookController = require('../controllers/books')

router.get('/', bookController.getAll)
router.get('/:id', bookController.getById)
router.post('/', bookController.create)
router.put('/:id', bookController.updateById)
router.delete('/:id', bookController.deleteById)

module.exports = router; 
