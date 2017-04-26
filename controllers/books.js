var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/bookStore';

let Book = {
  showAll: (req, res) => {
    MongoClient.connect(url, (err, db) => {
      let books = db.collection('books');
      books.find().toArray((err, data) => {
        if (data) {
          res.json(data);
        } else {
          res.send(err);
        }
      });
    });
  },
  add: (req, res) => {
    let isbn = req.body.isbn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let stock = req.body.stock;
    MongoClient.connect(url, (err, db) => {
      let books = db.collection('books');
      books.insertOne({
        isbn:isbn,
        title:title,
        author:author,
        category:category,
        stock:stock
      }, (err, result) => {
        if(result) {
          res.json(result);
        } else {
          res.send(err);
        }
      });
    });
  },
  showOne: (req, res) => {
    let bookId = new ObjectId(req.params.id);
    MongoClient.connect(url, (err, db) => {
      let books = db.collection('books');
      books.find({'_id':bookId}).toArray((err, data) => {
        if (data) {
          res.json(data);
        } else {
          res.send(err);
        }
      });
    });
  },
  update: (req, res) => {
    let isbn = req.body.isbn;
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let stock = req.body.stock;
    let bookId = new ObjectId(req.params.id);
    MongoClient.connect(url, (err, db) => {
      let books = db.collection('books');
      books.updateOne({'_id':bookId}, {$set: {
        isbn:isbn,
        title:title,
        author:author,
        category:category,
        stock:stock
      }}, (err, result) => {
        if (result) {
          res.json(result);
        } else {
          res.send(err);
        }
      });
    });
  },
  delete: (req, res) => {
    let bookId = new ObjectId(req.params.id);
    MongoClient.connect(url, (err, db) => {
      let books = db.collection('books');
      books.deleteOne({'_id':bookId}, (err, result) => {
        if (result) {
          res.send(result);
        } else {
          res.send(err);
        }
      });
    });
  }
};


module.exports = Book;
