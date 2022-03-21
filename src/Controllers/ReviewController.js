const ReviewModel = require("../Models/ReviewModel");

exports.getReview = (req, res) => {
  ReviewModel.find((err, data) => {
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
exports.addReview = (req, res) => {
  ReviewModel.create(req.body, (err, data) => {
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
exports.deleteReview = (req, res) => {
  ReviewModel.deleteOne({ _id: req.body?._id }, (err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({
        error: false,
        message: "Deleted successfully",
        data: data,
      });
    }
  });
};
exports.UpdateReview = (req, res) => {
  ReviewModel.updateOne(
    { _id: req.body?._id },
    { $set: { status: "appoved" } },
    (err, data) => {
      if (err) {
        res.status(400).json({ error: true, message: err });
      } else {
        res.status(200).json({
          error: false,
          message: "Apporved successfully",
          data: data,
        });
      }
    }
  );
};
