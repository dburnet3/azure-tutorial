
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dburnet3:reneeb12@cluster0.zlhzx.azure.mongodb.net/Cluster0?retryWrites=true&w=majority";


router.get('/', (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("Cluster0");
		dbo.collection("collection1").find({}).toArray(function (err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
			console.log(result);
			res.json(result)
			db.close();
		});
	});
});

module.exports = router;