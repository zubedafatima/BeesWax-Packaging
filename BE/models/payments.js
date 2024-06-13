const mongoose = require("mongoose");

let paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("payments", paymentSchema);
