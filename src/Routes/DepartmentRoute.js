const express = require("express");
const {
  getDepartment,
  postDepartment,
  updateDepartment,
  deleteDepartment,
  singleDepartmet,
} = require("../Controllers/DepartmentController");
const router = express.Router();

router.get("/getDepartment", getDepartment);
router.post("/postDepartment", postDepartment);
router.post("/deleteDepartment", deleteDepartment);
router.post("/singleDepartment", singleDepartmet);

module.exports = router;
