const methods = {}

methods.getAllBook = (req, res, next) => {

    var MongoClient = require('mongodb').MongoClient
    var url = 'mongodb://localhost:27017/library';
    MongoClient.connect(url, function(err, db) {

        db.collection('books').find({}).toArray(function(err,docs){
            if(err){
                res.json(err)
            } else {
                res.json(docs)
            }
            db.close()
        })
    });
}

methods.insertBook = (req,res,next) => {
    var MongoClient = require('mongodb').MongoClient
    var url = 'mongodb://localhost:27017/library';
    MongoClient.connect(url, function(err, db) {

        db.collection('books').insertOne({
            "isbn":req.body.isbn,
            "title":req.body.title,
            "author":req.body.author,
            "category":req.body.catgeory,
            "stock":req.body.stock
        },(err, book) => {
            if(err){
                res.json(err)
            } else {
                res.json(book)
            }
            db.close()
        })
    });
}

module.exports = methods
