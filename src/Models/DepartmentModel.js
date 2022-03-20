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
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  symptoms: {
    type: Array,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  causes: {
    type: String,
    required: true,
  },
});

const DepartmentModel = mongoose.model("department", Department);
module.exports = DepartmentModel;
