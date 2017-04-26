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

methods.get = (req, res, next) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('books').find({ isbn: req.body.isbn }).toArray((err, book) => {
      if(book.length < 1) {
        res.send('buku yang diinginkan tidak ada!');
      } else {
        if(err) throw err;
        res.send(book);
      } 
    });
  });
}

methods.delete = (req, res, next) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('books').deleteOne({ isbn: req.body.isbn }, (err, book) => {
      if(err) throw err;
      res.send(`success delete book with isbn: ${req.body.isbn}`);
    });
  });
}

methods.edit = (req, res, next) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('books').updateOne( {'isbn': req.body.isbn }, 
    { $set: { 'title': req.body.title, 
    'author': req.body.author, 
    'category': req.body.category, 
    'stock': req.body.stock } }, (err, book) => {
      if(err) throw err;
      res.send(`success edit book info with isbn: ${req.body.isbn}`);
    });
  });
}

module.exports = methods;