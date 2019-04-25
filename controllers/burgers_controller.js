var express = require("express");

var router = express.Router();

var burger = require("../models/burgers");

router.get("/", function (req, res) {
  res.redirect("/burgers");
})

router.get("/burgers", function (req, res) {
  burger.all(function (data) {

    res.render("index", { burger_data: data });
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burger_name, function () {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  burger.update(
    req.params.id,
    function () {
      res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function () {
    res.redirect("/");
  });
});

module.exports = router;
