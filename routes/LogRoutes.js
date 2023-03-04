const express = require("express");

const {
  getEntireLog,
  createLog,
  getLogById,
  getLogByClientName,
  updateLog,
  deleteLog,
} = require("../controllers/LogController");
 
const router = express.Router();
 
router.route("/").get(getEntireLog).post(createLog);
router.route("/:id").get(getLogById).put(updateLog).delete(deleteLog);
router.route("/client/:name").get(getLogByClientName)

module.exports = router;
