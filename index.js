var express = require("express");
var mongoose = require("mongoose");
var getRoute = require("./routes/get");

var app = express();

var mongoServer = "127.0.0.1:27017";
var db = "issues";

mongoose
  .connect(`mongodb://${mongoServer}/${db}`)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/get", getRoute);

app.listen(3000, () => {
  console.log("listening on 3000");
});
