const express = require("express");
const {
  getReview,
  addReview,
  deleteReview,
} = require("../Controllers/ReviewController");
const router = express.Router();

router.post("/addReview", addReview);
router.get("/getReview", getReview);
router.delete("/deleteReview", deleteReview);

module.exports = router;
