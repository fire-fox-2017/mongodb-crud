var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/library';
var methods = {};

methods.add = (req, res, next) => {
  MongoClient.connect(url, (err, db) => {
    // collection itu model
    db.collection('books').insertOne({
      'isbn': req.body.isbn,
      'title': req.body.title,
      'author': req.body.author,
      'category': req.body.category,
      'stock': req.body.stock
    }, (err, result) => {
      res.send(result);
    });
  });
}

methods.gets = (req, res, next) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('books').find().toArray((err, books) => {
      if(err) throw err;
      res.send(books);
    });
  });
}

module.exports = methods;