const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Department = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  photo1: {
    type: String,
  },
  fee: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
  },
  causes: {
    type: String,
  },
});

const DepartmentModel = mongoose.model("department", Department);
module.exports = DepartmentModel;
