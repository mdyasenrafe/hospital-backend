const express = require("express");
const {
  PostUser,
  GetUser,
  updateUser,
  makeAdmin,
} = require("../Controllers/UserControllers");
const router = express.Router();

router.post("/postUser", PostUser);
router.post("/getUser", GetUser);
router.put("/updateUser", updateUser);
router.post("/makeadmin", makeAdmin);

module.exports = router;
