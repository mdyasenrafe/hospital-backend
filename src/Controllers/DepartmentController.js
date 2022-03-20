const DepartmentModel = require("../Models/DepartmentModel");

exports.postDepartment = (req, res) => {
  DepartmentModel.create(req.body, (err, data) => {
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
exports.getDepartment = (req, res) => {
  DepartmentModel.find((err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "fetch data successfully",
        data: data,
      });
    }
  });
};
exports.singleDepartmet = (req, res) => {
  DepartmentModel.findOne({ _id: req.body.id }, (err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      if (data._id) {
        res.status(200).json({
          error: false,
          message: "fetch data successfully",
          data: data,
        });
      } else {
        res.status(400).json({ error: true, message: "not found" });
      }
    }
  });
};
exports.updateDepartment = (req, res) => {};
exports.deleteDepartment = (req, res) => {};
