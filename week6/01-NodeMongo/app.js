// importing mongodb
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/food';

MongoClient.connect(url, function (err, db) {
	if(err) throw err;

	// or
	// if error, then return console log error

	console.log("Yay connected");

	var food = db.collection('food');
	food.find().toArray(function (err, result) {
		if(err) return console.log(err);
		console.log(result);

			db.close();
	});
});