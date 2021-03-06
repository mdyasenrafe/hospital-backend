const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  servieName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  discountFee: {
    type: String,
  },
  totalfee: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const CartModel = mongoose.model("cart", CartSchema);
module.exports = CartModel;
