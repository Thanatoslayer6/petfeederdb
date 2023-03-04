const express = require("express");

const {
  getEntireSchedule,
  createSchedule,
  getScheduleById,
  getScheduleByClientName,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/ScheduleController");
 
const router = express.Router();
 
router.route("/").get(getEntireSchedule).post(createSchedule);
router.route("/:id").get(getScheduleById).put(updateSchedule).delete(deleteSchedule);
router.route("/client/:name").get(getScheduleByClientName);
 
module.exports = router;
