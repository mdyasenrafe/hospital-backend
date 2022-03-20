const DoctorModel = require("../Models/DoctorModel");

exports.getDoctor = (req, res) => {
  DoctorModel.find((err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      if (data.length === 0) {
        res.status(200).json({
          error: true,
          message: "Nothing Found",
          data: data,
        });
      } else {
        res.status(200).json({
          error: false,
          message: "data fetch successfully",
          data: data,
        });
      }
    }
  });
};
exports.addDoctor = (req, res) => {
  DoctorModel.create(req.body, (err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "created successfully",
        data: data,
      });
    }
  });
};
exports.deleteDoctor = (req, res) => {};
exports.getDoctor = (req, res) => {};
