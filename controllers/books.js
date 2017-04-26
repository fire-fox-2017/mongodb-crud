let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost/mongodb_crud';
const methods = {}

methods.getAllBooks = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    let bookCollection = db.collection('books');
    bookCollection.find({})
      .toArray(function(err, result) {
        if (err) {
          console.log(err)
        } else {
          res.send(result)
        }
      });
  });
}

methods.getById = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    let bookCollection = db.collection('books');
    bookCollection.find({
        _id: new mongo.ObjectID(req.params.id)
      })
      .toArray(function(err, result) {
        if (err) {
          console.log(err)
        } else {
          res.send(result)
        }
      });
  });
}

methods.createBook = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    let bookCollection = db.collection('books');
    bookCollection.insert({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, function(err, result) {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    });
  });
}

methods.updateById = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    let bookCollection = db.collection('books');
    bookCollection.updateOne({
      _id: new mongo.ObjectID(req.params.id)
    }, {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, function(err, result) {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    });
  });
}

methods.deleteById = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    let bookCollection = db.collection('books');
    bookCollection.deleteOne({
      _id: new mongo.ObjectID(req.params.id)
    }, function(err, result) {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    });
  });
}

module.exports = methods
