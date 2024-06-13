var mongoose = require("mongoose");

let users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
  },
  creditcard: {
    type: String,
  },
});

module.exports = mongoose.model("Users", users);
