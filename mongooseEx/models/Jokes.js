'use strict'

let mongoose = require("mongoose");

var JokeSchema = new mongoose.Schema(
    {
        joke: {type: String, required: true, minlength: 5},
        category: [String],
        reference: {author: String, link: String},
        lastEdited: {type: Date, default: Date.now}
    }
);

JokeSchema.pre('save', function(next){
    this.lastEdited = new Date();
    next();
});


let JokeModel= mongoose.model("Joke",JokeSchema);
module.exports = JokeModel;