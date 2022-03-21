const express = require("express");
const {
  getReview,
  addReview,
  deleteReview,
  UpdateReview,
} = require("../Controllers/ReviewController");
const router = express.Router();

router.post("/addReview", addReview);
router.get("/getReview", getReview);
router.post("/deleteReview", deleteReview);
router.post("/updateReview", UpdateReview);

module.exports = router;
