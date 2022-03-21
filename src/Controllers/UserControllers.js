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
  UserModel.findOne({ email: req.body.email }, (err, data) => {
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
  });
};
exports.updateUser = async (req, res) => {
  const user = req.body;
  const filter = { email: user.email };
  const options = { upsert: true };
  const updateDoc = { $set: user };
  const result = await UserModel.updateOne(filter, updateDoc, options);
  res.json(result);

  // UserModel.updateOne({ email: req.body.email }, (err, data) => {
  //   if (err) {
  //     res.status(400).json({
  //       error: true,
  //       message: err,
  //     });
  //   } else {
  //     res.status(200).json({
  //       error: false,
  //       data: data,
  //       message: "data fetch successfully",
  //     });
  //   }
  // });
};
