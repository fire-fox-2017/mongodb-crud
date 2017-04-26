var MongoClient = require('mongodb').MongoClient
//connection URL
var url = 'mongodb://localhost:27017/library';

let controller = {}

controller.insert = function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('books')
    //insert some documents
    collection.insertMany([{
      isbn : "978-1-60309-057-5",
      title : "Dragon Puncher",
      author : "James Kochalka",
      category : "All Ages",
      stock : 3
    },
    {
      isbn : "978-1-891830-77-8",
      title : "Every Girl is the End of the World for Me",
      author : "Jeffrey Brown",
      category : "Mature (16+)",
      stock : 5
    }], function(err, result) {
      res.send(result);
    })
  })
}

module.exports = controller;