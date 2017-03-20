var express = require("express")
var router = express.Router()
var jokemodule = require("../model/jokes.js")

router.get("/allJokes", function (req, res, next) {
    jokemodule.allJokes((msg) => {
        console.log(msg);
        res.json(msg)
    })
})

router.get('/findJoke/:id', (req, res, next) => {
    let id = req.params.id;
    jokemodule.findById({ _id: ObjectId(id) }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

router.post("/addJoke", function (req, res, next) {
    jokemodule.addJoke(req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json("joke added");
        }
    })
})

router.put("/editJoke/:id", function (req, res, next) {
    jokemodule.editJoke(req.params.id, req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json({ editedJoke: data })
        }
    })
});

router.delete('/deleteJoke/:id', (req, res, next) => {
    jokemodule.deleteJoke(req.params.id, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
});

router.get("/random", function (req, res, next) {
    jokemodule.randomJoke(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data)
        }
    })
})

module.exports = router;