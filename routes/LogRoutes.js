const express = require("express");

const {
  getEntireLog,
  createLog,
  getLogById,
  updateLog,
  deleteLog,
} = require("../controllers/LogController");
 
const router = express.Router();
 
router.route("/").get(getEntireLog).post(createLog);
router.route("/:id").get(getLogById).put(updateLog).delete(deleteLog);

module.exports = router;
