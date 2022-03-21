const express = require("express");
const {
  PostUser,
  GetUser,
  updateUser,
} = require("../Controllers/UserControllers");
const router = express.Router();

router.post("/postUser", PostUser);
router.post("/getUser", GetUser);
router.put("/updateUser", updateUser);

module.exports = router;
