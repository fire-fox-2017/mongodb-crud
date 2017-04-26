// const jwt = require('jsonwebtoken');
var method = {}
var url = 'mongodb://localhost:27017/library';
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


method.getAllBooks = (req, res, next) => {
    MongoClient.connect(url, function(err, db) {

        console.log("Connected successfully to server");

        // Get the documents collection
        var collection = db.collection('books');
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
            console.log("Found the following records");
            console.log(docs)
            res.send(docs)
        })

    })
}

method.insertBook = (req, res, next) => {
    MongoClient.connect(url, function(err, db) {
        console.log("Connected successfully to server");
        var collection = db.collection('books');
        collection.insert({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })

    })
}

method.updateBook = (req, res, next) => {
    MongoClient.connect(url, function(err, db) {
        console.log("Connected successfully to server");
        var collection = db.collection('books');
        collection.updateOne({
            _id: ObjectId(req.params.id)
        }, {
            $set: {
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            }
        }, function(err, result) {
            res.send(result);
        });
    })
}

method.deleteBook = (req, res, next) => {
    MongoClient.connect(url, function(err, db) {
        console.log("Connected successfully to server");
        var collection = db.collection('books');
        collection.deleteOne({
            _id: ObjectId(req.params.id)
        }, function(err, result) {
            res.send(result);
        });

    })


}









module.exports = method;
