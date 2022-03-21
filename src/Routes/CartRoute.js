const express = require("express");
const {
  postCart,
  getCart,
  deleteCart,
  allCart,
} = require("../Controllers/CartController");
const router = express.Router();

router.post("/postCart", postCart);
router.post("/getCart", getCart);
router.post("/allCart", allCart);
router.post("/deleteCart", deleteCart);

module.exports = router;
