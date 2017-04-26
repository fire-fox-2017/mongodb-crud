var mongodb = require('mongodb');
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
    let id = req.params.id;
    MongoClient.connect(url, function(err, db) {
      console.log("Connected successfully to server bookscrud");

      var collection = db.collection('books');
      // delete documents
      collection.deleteOne({
        _id: new mongodb.ObjectID(id)
      }, function(err, result) {
        if (result) {
          res.json(result);
        } else {
          res.send(`ERR Delete :\n ${err}`);
        }
        db.close();
      });
    });
  },
  update: (req, res, next) => {
    let id = req.params.id;

    let isbn = req.body.isbn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let stock = req.body.stock;

    MongoClient.connect(url, function(err, db) {
      console.log("Connected successfully to server bookscrud");

      var collection = db.collection('books');
      // update documents
      collection.updateOne({
        _id: new mongodb.ObjectID(id)
      }, {
        $set: {
          isbn: isbn,
          title: title,
          author: author,
          category: category,
          stock: stock
        }
      }, function(err, result) {
        if (result) {
          res.json(result);
        } else {
          res.send(`ERR Update :\n ${err}`);
        }
        db.close();
      });
    });
  }
}
