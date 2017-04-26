var MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId;

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

//create
controller.create = (req, res, next)=>{
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('books')
    //create some documents
    collection.insertOne({
      isbn : req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    .then((result)=>{
      res.send(result)
    })
  })
}

//findall
controller.findall = (req,res,next)=>{
  MongoClient.connect(url, (err,db)=>{
    var collection = db.collection('books')
    collection.find({}).toArray()
    .then((result)=>{
      res.send(result)
    })
  })
}

//read only one
controller.findone = (req,res,next)=>{
  MongoClient.connect(url, (err,db)=>{
    collection = db.collection('books')

    collection.findOne({
      _id : ObjectId(req.params.id)
    })
    .then((result)=>{
      res.send(result)
    })
  })
}

//delete
controller.remove =  (req,res,next)=>{
  MongoClient.connect(url, (err, db)=>{
    var collection = db.collection('books')
    //remove one document
    collection.remove({
      _id : ObjectId(req.params.id)
    })
    .then((result)=>{
      res.send(result)
    })
  })
}

//update
controller.update =  (req,res,next)=>{
  MongoClient.connect(url, (err, db)=>{
    var collection = db.collection('books')
    //remove one document
    collection.update({
      _id : ObjectId(req.params.id)
    },{
      $set : {
        isbn : req.body.isbn,
        title : req.body.title,
        author : req.body.author,
        category : req.body.category,
        stock : req.body.stock,
      }
    })
    .then((result)=>{
      res.send(result)
    })
  })
}

module.exports = controller;