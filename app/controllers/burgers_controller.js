var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log("data ", data)
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_type", "displayed"], 
        [req.body.input, req.body.displayed], function(result) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log(req.body)
    burger.updateOne(req.body.displayed, req.params.id, function(result) {
        res.status(200).send();
    })
});

module.exports = router;