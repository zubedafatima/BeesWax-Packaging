var mongoose = require("mongoose");

let orders = new mongoose.Schema({
  OrderID: {
    type: Number,
    required: true,
  },
  Total: {
    type: String,
  },
  UserID: {
    type: Number,
    required: true,
  },
  UserAddress: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
  },
});

module.exports = mongoose.model("orders", orders);
