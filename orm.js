const mongoClient = require('mongodb').MongoClient

class DatabaseManager {

	static url = "mongodb://localhost:27042/rater"
	static instance = null

  	static connect(callback) {
		mongoClient.connect(DatabaseManager.url, function(err, client) {
	  	if (err) throw err;
		  	DatabaseManager.instance = client.db("rater");
		  	callback();
		});
	}

	static get(callback) {
		if (DatabaseManager.instance == null) {
  			console.log("<----INSTANCE IS NULL Issue HERE---->")

			this.connect(callback);
		}
		return this.instance
	}

}

module.exports = DatabaseManager