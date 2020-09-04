var express = require("express");
var route = express.Router();
var model = require("../models/issues");
var app = express();
var path = require("path");
const { mongo } = require("mongoose");
const e = require("express");

route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.htm"));
});

route.get("/posts", async (req, res) => {
  try {
    var dta = await model.find({});
    res.json(dta);
  } catch (e) {
    res.json(e);
  }
});

route.post("/postIssue", (req, res) => {
  var dta = new model({
    title: req.body.title,
    level: req.body.level,
  });

  dta
    .save()
    .then((val) => {
      res.json(val);
    })
    .catch((e) => res.json({ error: e }));
});

route.delete("/deletePost", (req, res) => {
  var id = req.query.id;
  model
    .findOneAndDelete({
      _id: id,
    })
    .then((val) => {
      res.json(val);
    })
    .catch((e) => {
      res.json(e);
    });
});

route.patch("/update", (req, res) => {
  var id = req.query.id;
  var title = req.query.title;
  var level = req.query.level;
  model
    .findOneAndUpdate(
      {
        _id: id,
      },
      {
        title: title,
        level: level,
      }
    )
    .then((val) => {
      res.json(val);
    })
    .catch((e) => {
      res.json(e);
    });
});

module.exports = route;
