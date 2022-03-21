const CartModel = require("../Models/CartModel");

exports.postCart = async (req, res) => {
  CartModel.create(req.body, (err, data) => {
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
exports.getCart = async (req, res) => {
  let pageNo = parseInt(req.query.page);
  let size = parseInt(req.query.size);
  let query = {};
  query.skip = size * pageNo;
  query.limit = size;

  CartModel.find({ email: req.body?.email }, function (err, count) {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      CartModel.find({ email: req.body?.email }, {}, query, (err, data) => {
        if (err) {
          res.status(400).json({ error: true, message: err });
        } else {
          res.status(200).json({
            error: false,
            message: "fetch data successfully",
            data: data,
            count: count.length,
          });
        }
      });
    }
  });
};
exports.allCart = async (req, res) => {
  let pageNo = parseInt(req.query.page);
  let size = parseInt(req.query.size);
  let query = {};
  query.skip = size * pageNo;
  query.limit = size;

  CartModel.count({}, function (err, count) {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      CartModel.find({}, {}, query, (err, data) => {
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
exports.deleteCart = async (req, res) => {
  CartModel.deleteOne({ email: req.body?.email }, (err, data) => {
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
