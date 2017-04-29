var express = require('express');
var router = express.Router();
var bookController = require('../controllers/books.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MongoDB-CRUD' });
});

router.get('/api/books', bookController.showAll);
router.post('/api/books', bookController.add);
router.get('/api/books/:id', bookController.showOne);
router.put('/api/books/:id', bookController.update);
router.delete('/api/books/:id', bookController.delete);

module.exports = router;
