const express = require("express");

const {
  getEntireLog,
  createLog,
  getLogById,
  getLogByClientName,
  addLogItemByClientName,
  updateLog,
  deleteLog,
} = require("../controllers/LogController");
 
const router = express.Router();
 
router.route("/").get(getEntireLog).post(createLog);
router.route("/:id").get(getLogById).put(updateLog).delete(deleteLog);
// For client logs
router.route("/client/:name").get(getLogByClientName)
router.route("/client/:name").post(addLogItemByClientName)

module.exports = router;
