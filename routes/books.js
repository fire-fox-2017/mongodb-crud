var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/books',bookController.getAllBook);
router.post('/books/',bookController.insertBook);
// router.put('/books/:id',bookController.updateBook);
// router.delete('/books/:id',bookController.deleteBook);

module.exports = router;
