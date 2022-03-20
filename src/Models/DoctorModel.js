const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Doctor = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
});

const DoctorModel = mongoose.model("doctor", Doctor);
module.exports = DoctorModel;
