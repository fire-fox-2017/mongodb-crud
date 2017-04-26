var express = require('express');
var router = express.Router();
var controllers = require('../controllers/booksControllers');

/* GET home page. */
router.get('/', controllers.getall);
router.post('/', controllers.create);
router.delete('/:id', controllers.delete);
router.put('/:id', controllers.update);

module.exports = router;
