var mongo = require("mongoose");

var bugs = new mongo.Schema({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongo.model("bugs", bugs);
