var express = require("express");
var mongoose = require("mongoose");
var getRoute = require("./routes/get");

var app = express();

app.use("/get", getRoute);

app.listen(3000, () => {
  console.log("listening on 3000");
});
