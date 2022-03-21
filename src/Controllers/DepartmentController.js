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
      res.status(400).json({ error: true, message: err });
    } else {
      DepartmentModel.find({}, {}, query, (err, data) => {
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
  DepartmentModel.findOne({ _id: req?.body?._id }, (err, data) => {
    console.log(err, data);
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      if (data?._id) {
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
exports.deleteDepartment = (req, res) => {
  DepartmentModel.deleteOne({ _id: req.body?._id }, (err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "deleted successfully",
        data: data,
      });
    }
  });
};
