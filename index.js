var express = require("express");
var mongoose = require("mongoose");
var getRoute = require("./routes/issues");

var app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

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

app.use("/issues", getRoute);

app.listen(3000, () => {
  console.log("listening on 3000");
});
