const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const ReviewModel = mongoose.model("review", ReviewSchema);
module.exports = ReviewModel;
