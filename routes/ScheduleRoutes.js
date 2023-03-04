const express = require("express");

const {
  getEntireSchedule,
  createSchedule,
  getScheduleById,
  getScheduleByClientName,
  addScheduleItemByClientName,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/ScheduleController");
 
const router = express.Router();
 
router.route("/").get(getEntireSchedule).post(createSchedule);
router.route("/:id").get(getScheduleById).put(updateSchedule).delete(deleteSchedule);
// For client scheduling
router.route("/client/:name").get(getScheduleByClientName);
router.route("/client/:name").post(addScheduleItemByClientName)
 
module.exports = router;
