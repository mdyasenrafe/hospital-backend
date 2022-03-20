const express = require("express");
const {
  postCart,
  getCart,
  deleteCart,
} = require("../Controllers/CartController");
const router = express.Router();

router.post("/postCart", postCart);
router.post("/getCart", getCart);
router.post("/deleteCart", deleteCart);

module.exports = router;
