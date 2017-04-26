const methods = {}
var mongo = require('mongodb');

methods.getAllBook = (req, res, next) => {

    var MongoClient = require('mongodb').MongoClient
    var url = 'mongodb://localhost:27017/library';
    MongoClient.connect(url, function(err, db) {

        db.collection('books').find({}).toArray(function(err, docs) {
            if (err) {
                res.json(err)
            } else {
                console.log(docs)
            }
            db.close()
        })
    });
}

methods.insertBook = (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient
    var url = 'mongodb://localhost:27017/library';
    MongoClient.connect(url, function(err, db) {

        db.collection('books').insertOne({
            "isbn": req.body.isbn,
            "title": req.body.title,
            "author": req.body.author,
            "category": req.body.category,
            "stock": req.body.stock
        }, (err, book) => {
            if (err) {
                res.json(err)
            } else {
                res.json(book)
            }
            db.close()
        })
    });
}

methods.updateBook = (req, res, next) => {
    // res.json(req.body.title);
    var MongoClient = require('mongodb').MongoClient
    var url = 'mongodb://localhost:27017/library';

    MongoClient.connect(url, function(err, db) {

        // db.collection('books').updateOne({
        //     "_id": new mongo.ObjectID(req.params.id)
        // }, {
        //     $set: {
        //         "isbn": req.body.isbn,
        //         "title": req.body.title,
        //         "author": req.body.author,
        //         "category": req.body.category,
        //         "stock": req.body.stock
        //     }
        // }, (err, book) => {
        //     if (err) {
        //         res.json(err)
        //     } else {
        //         res.json(book)
        //     }
        //     db.close()
        // })

        db.collection('books').find({
            _id: new mongo.ObjectID(req.params.id)
        }).toArray(function(err, docs) {
            if (err) {
                res.json(err)
            } else {
                db.collection('books').updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "isbn": req.body.isbn || docs[0].isbn,
                        "title": req.body.title || docs[0].title,
                        "author": req.body.author || docs[0].author,
                        "category": req.body.category || docs[0].category,
                        "stock": req.body.stock || docs[0].stock
                    }
                }, (err, book) => {
                    if (err) {
                        res.json(err)
                    } else {
                        res.json(book)
                    }
                })
            }
            db.close()
        })





    });
}

methods.deleteBook = (req,res,next) => {
    var MongoClient = require('mongodb').MongoClient
    var url = 'mongodb://localhost:27017/library';

    MongoClient.connect(url, function(err, db) {

        db.collection('books').deleteOne({
            "_id": new mongo.ObjectID(req.params.id)
        }, (err, book) => {
            if (err) {
                res.json(err)
            } else {
                res.json(book)
            }
            db.close()
        })
    });
}

module.exports = methods
