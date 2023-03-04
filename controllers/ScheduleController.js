const scheduleService = require('../services/ScheduleService');

exports.getEntireSchedule = async (req, res) => {
  try {
    const schedules = await scheduleService.getEntireSchedule();
    res.json({ data: schedules, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.createSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.createSchedule(req.body);
    res.json({ data: schedule, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await scheduleService.getScheduleById(req.params.id);
    res.json({ data: schedule, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getScheduleByClientName = async (req, res) => {
  try {
    const schedule = await scheduleService.getScheduleByClientName(req.params.name);
    res.json({ data: schedule, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.updateSchedule(req.params.id, req.body);
    res.json({ data: schedule, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.deleteSchedule(req.params.id);
    res.json({ data: schedule, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
