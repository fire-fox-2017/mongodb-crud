var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a : 3 }, function(err, result) {
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}

// Connection URL
var url = 'mongodb://localhost/books';

class Book {
  static insertBooks(req, res){
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('books');
      collection.insertMany([
        {
          isbn : req.body.isbn,
          title : req.body.title,
          author : req.body.author,
          category : req.body.category,
          stock : req.body.stock
        }
      ], function(err, result) {
        res.send(result);
        db.close()
      });
    }) 
  }
  static findBooks(req, res){
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('books');
      // Find some documents
      collection.find({}).toArray(function(err, docs) {
        res.send(docs)
        db.close()
      });
    });
  }
  static deleteBook(req,res){
    MongoClient.connect(url, function(err,db){
      var collection = db.collection('books');
      console.log(req.body.id)
      // Delete document where a is 3
      collection.deleteOne({ "_id" : ObjectId(req.body.id) }, function(err, result) {
        res.send(result);
        db.close()
      });    
    })
  }
  static updateBook(req,res){
    MongoClient.connect(url, function(err,db){
      var collection = db.collection('books');
      // Update document where a is 2, set b equal to 1
      collection.updateOne({ "_id" : ObjectId(req.body.id) }
        , { $set: { isbn : req.body.isbn,
        title : req.body.title,
        author : req.body.author,
        category : req.body.category,
        stock : req.body.stock } }, function(err, result) {
          res.send(result);
          db.close()
        });  
      })
    }
}

module.exports = Book;