var express = require("express");
var route = express.Router();

route.get("/", (req, res) => {
  res.send("hello fucker");
});

module.exports = route;
