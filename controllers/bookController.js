var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId
var url = 'mongodb://localhost:27017/mongodb-crud';
const methods = {};

methods.findAllBooks = (req,res,next) => {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    var collection = db.collection('books');
    collection.find().toArray(function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(err)
      }
      db.close();
    });
  });
}

methods.findOneBook = (req,res,next) => {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    var collection = db.collection('books');
    collection.find({
      _id: new ObjectId(req.params.id)
    }).toArray(function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(err)
      }
      db.close();
    });
  });
}

methods.insertBook = (req,res,next) => {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    var collection = db.collection('books');
    collection.insertOne({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(err)
      }
      db.close();
    });
  });
}

methods.updateBook = (req,res,next) => {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    var collection = db.collection('books');
    collection.updateOne({
      _id: new ObjectId(req.params.id)
    },{
      $set: {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
    }, function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(err)
      }
      db.close();
    });
  });
}

methods.deleteBook = (req,res,next) => {
  MongoClient.connect(url, function(err,db) {
    console.log("Connected correctly to server");
    var collection = db.collection('books');
    collection.deleteOne({
      _id: new ObjectId(req.params.id)
    }, function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(err)
      }
      db.close();
    });
  })
}

module.exports = methods;
