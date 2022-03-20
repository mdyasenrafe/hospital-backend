const express = require("express");
const {
  getDoctor,
  addDoctor,
  deleteDoctor,
} = require("../Controllers/DoctorControllers");
const router = express.Router();

router.get("/getDoctor", getDoctor);
router.post("/addDoctor", addDoctor);
router.post("/deleteDoctor", deleteDoctor);

module.exports = router;
