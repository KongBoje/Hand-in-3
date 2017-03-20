let router = require("express").Router();
let mongoose = require("mongoose");
let jokemodule = require("../models/Jokes");
let ObjectId = require("mongodb").ObjectID;

//router.get("/", (req, res) => {
  //res.json({ msg: "Hello World" });
//});

router.get("/jokes", (req, res) => {
  jokemodule.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/jokes/:id", (req, res) => {
  let id = req.params.id;
  jokemodule.findById({ _id: ObjectId(id) }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.post("/jokes", (req, res) => {
  let newJ = req.body;
  jokemodule.create(newJ, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.put("/jokes/:id", (req, res) => {
  let id = req.params.id;
  let editJ = req.body;
  jokemodule.findById({ _id: ObjectId(id) }, (err, joke) => {
    if (err) {
      res.send(err);
    } else {
      joke.joke = editJ.joke;
      joke.save((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
    }
  });
});

router.delete("/jokes/:id", (req, res) => {
  let id = req.params.id;
  jokemodule.findByIdAndRemove({ _id: ObjectId(id) }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.statusCode = 204;
      res.json(data);
    }
  });
});

module.exports = router;
