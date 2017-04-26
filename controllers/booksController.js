var MongoClient = require('mongodb');
// Connection URL
var url = 'mongodb://localhost:27017/mongodb-crud';

var methode = {}

methode.insert = (req, res, next) =>{
  MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");
	  var bookCollection = db.collection('books');
	  // Insert some documents
		  bookCollection.insertOne({
		  	isbn : req.body.isbn,
		  	title : req.body.title,
		  	author : req.body.author,
		  	category : req.body.category,
		  	stock : req.body.stock
		  }
		  , function(err, result) {
		    res.send("Inserted book into the library")
		  });
});
}

methode.find = (req, res, next)=>{
	MongoClient.connect(url, (err, db) => {
	console.log("Connected successfully to server");
		var findBook = function(db, callback){
			var bookCollection = db.collection('books');
			bookCollection.find({}).toArray(function(err, docs) {
			    console.log("Found the following records");
			    res.send(docs)
			    callback(docs);
			  });
		}
		findBook(db, () =>{
			db.close();
		})
	})
}

methode.findOne = (req, res, next)=>{
	MongoClient.connect(url, (err, db) => {
	console.log("Connected successfully to server");
		var findBook = function(db, callback){
			var bookCollection = db.collection('books');
			bookCollection.find({_id : new MongoClient.ObjectId(req.params.id)}).toArray(function(err, docs) {
			    console.log("Found the following records");
			    res.send(docs)
			    callback(docs);
			  });
		}
		findBook(db, () =>{
			db.close();
		})
	})
}

methode.edit = (req, res, next) =>{
  MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");
	  var updateBook = function(db, callback) {
	  // Get the documents collection
	  var bookCollection = db.collection('books');
	  // Insert some documents
		  bookCollection.updateOne({
		  	_id : new MongoClient.ObjectId(req.params.id)
		  },{ $set: {
		  	isbn : req.body.isbn,
		  	title : req.body.title,
		  	author : req.body.author,
		  	category : req.body.category,
		  	stock : req.body.stock}}
		  , function(err, result) {
		    res.send("Updated book into the library")
		  });  
	  }
  updateBook(db, function() {
    db.close();
  });
});
}

methode.remove = (req, res, next) => {
	MongoClient.connect(url, function(err, db){
	console.log("Connected successfully to server");
		// var removeDocument = function(db, callback) {
		  // Get the documents collection
		  var collection = db.collection('books');
		  collection.deleteOne({ _id : new MongoClient.ObjectId(req.params.id) });
		  res.send("delete sucsess")
		  db.close();   
		// }
	  // removeDocument(db, function() {
	  //   db.close();
	  // });
	})
}

module.exports = methode

// Use connect method to connect to the server
