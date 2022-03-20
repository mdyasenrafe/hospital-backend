const UserModel = require("../Models/UserModel");

exports.PostUser = async (req, res) => {
  UserModel.create(req.body, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "create successfully",
      });
    }
  });
};
exports.GetUser = async (req, res) => {
  UserModel.findOne(
    { id: req.body._id, email: req.body.email },
    (err, data) => {
      if (err) {
        res.status(400).json({
          error: true,
          message: err,
        });
      } else {
        res.status(200).json({
          error: false,
          data: data,
          message: "data fetch successfully",
        });
      }
    }
  );
};
