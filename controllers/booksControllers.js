var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bookscrud';
module.exports = {
  getall: (req, res, next) => {
    MongoClient.connect(url, function(err, db) {
      console.log("Connected successfully to server bookscrud");

      var collection = db.collection('books');
      // Find some documents
      collection.find({}).toArray(function(err, docs) {
        if (docs) {
          res.json(docs);
        } else {
          res.send(`ERR Find :\n ${err}`);
        }
        db.close();
      });
    });
  },
  create: (req, res, next) => {
    let isbn = req.body.isbn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let stock = req.body.stock;
    MongoClient.connect(url, function(err, db) {
      console.log("Connected successfully to server bookscrud");

      var collection = db.collection('books');
      // insert documents
      collection.insertOne({
        isbn: isbn,
        title: title,
        author: author,
        category: category,
        stock: stock
      }, function(err, result) {
        if (result) {
          res.json(result);
        } else {
          res.send(`ERR input :\n ${err}`);
        }
        db.close();
      });

    });
  },
  delete: (req, res, next) => {
    let isbn = req.params.isbn;
    MongoClient.connect(url, function(err, db) {
      console.log("Connected successfully to server bookscrud");

      var collection = db.collection('books');
      // delete documents
      collection.deleteOne({
        isbn: isbn
      }, function(err, result) {
        if (result) {
          res.json(result);
        } else {
          res.send(`ERR Delete :\n ${err}`);
        }
        db.close();
      });

    });
  }
}
