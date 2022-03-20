const express = require("express");
const {
  getDepartment,
  postDepartment,
  updateDepartment,
  deleteDepartment,
  singleDepartmet,
} = require("../Controllers/DepartmentController");
const router = express.Router();

router.get("getDepartment", getDepartment);
router.post("postDepartment", postDepartment);
router.put("updateDepartment", updateDepartment);
router.delete("postDepartment", deleteDepartment);
router.post("singleDepartment", singleDepartmet);

module.exports = router;
