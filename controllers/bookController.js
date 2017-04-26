var methods = {}
var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost/mongodbcrud'

// {
//     isbn: "978-1-60309-057-5",
//     title: "Dragon Puncher",
//     author: "James Kochalka",
//     category: "All Ages",
//     stock: 5
// }

methods.insert = function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('books')
        collection.insertOne((req.body), (err, record) => {
            if (err) {
                // console.log('Masuk');
                res.json({
                    err
                })
            } else {
                res.json(record)
            }
            db.close()
        })
    });
}

methods.update = function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('books')
        collection.updateOne({
            "_id": new mongo.ObjectID(req.params.id)
        }, {
            $set: {
                "isbn": req.body.isbn,
                "title": req.body.title,
                "author": req.body.author,
                "category": req.body.category,
                "stock": req.body.stock
            }
        }, function(err, record) {
            // console.log(record);
            if (err) {
                // console.log('Masuk');
                res.json({
                    err
                })
            } else {
                res.json(record)
            }
            db.close()
        });
    });
}

methods.getAll = function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('books')
        collection.find({}).toArray(function(err, records) {
            console.log("Found the following records");
            if (err) {
                res.json({
                    err
                })
            } else {
                res.json(records)
            }
            db.close()
        });
    });
}

module.exports = methods