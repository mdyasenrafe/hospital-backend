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
exports.getDepartment = async (req, res) => {
  let pageNo = parseInt(req.query.page);
  let size = parseInt(req.query.size);
  let query = {};
  query.skip = size * pageNo;
  query.limit = size;

  DepartmentModel.count({}, function (err, count) {
    if (err) {
      response = { error: true, message: "Error fetching data" };
    } else {
      DepartmentModel.find({}, {}, query, (err, data) => {
        console.log(data);
        if (err) {
          res.status(400).json({ error: true, message: err });
        } else {
          res.status(200).json({
            error: false,
            message: "fetch data successfully",
            data: data,
            count: count,
          });
        }
      });
    }
  });
};
exports.singleDepartmet = (req, res) => {
  console.log(req.body._id);
  DepartmentModel.findOne({ _id: req.body._id }, (err, data) => {
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
exports.deleteDepartment = (req, res) => {
  DepartmentModel.deleteOne({ _id: req.body.id }, (err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "deleted succesfull",
        data: data,
      });
    }
  });
};
