var connection = require("../db/db");
var ObjectId = require('mongodb').ObjectID;
//var db = connection.get(); //get it like this

exports.allJokes = function (callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.find({}).toArray(function (err, data) { //this {} means no search criteria
        if (err) {
            callback(err, null);
        } else {
            callback(data);
        }
    });
};


exports.findJoke = function (id, callback) {
	let db = connection.get();
	let collection = db.collection("jokes");

	collection.findOne({"_id" : new ObjectId(id)}, (function (err,data){
        assert.equal(err,null);
        callback(data);
    }))
};


exports.addJoke = function (jokeToAdd, callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.insertOne(jokeToAdd, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(data);
        }
    })
};


exports.editJoke = function (id, jokeToEdit, callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.replaceOne({"_id": new ObjectId(id)}, jokeToEdit, function (err, data) {
        if(err) {
            callback(err);
        } else {
            callback("Joke edited" + data);
        }
    })
};

exports.deleteJoke = function (id, callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.deleteOne({"_id": new ObjectId(id)}, function (err, data) {
        if(err) {
            callback(err);
        } else {
            callback("Joke deleted" + data);
        }
    })
};

exports.randomJoke = function randomJoke(callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.find({}).toArray(function (err, data) {
        if(err){
            callback(err);
        } else {
            let jokesArray = data;
            let randomJoke = jokesArray[Math.floor((Math.random()) * jokesArray.length)]; // Get a random number between 0 and the collection size
            if(randomJoke != null) {
                callback(null, randomJoke);
            } else {
                callback(new Error("Something went wrong"), null);
            }
        }
    });
};