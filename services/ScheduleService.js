const ScheduleModel = require("../models/Schedule");

exports.getEntireSchedule = async () => {
  return await ScheduleModel.find();
};
 
exports.createSchedule = async (schedule) => {
  return await ScheduleModel.create(schedule);
};

exports.getScheduleById = async (id) => {
  return await ScheduleModel.findById(id);
};

exports.getScheduleByClientName = async(clientName) => {
  return await ScheduleModel.find({ client: clientName });
}
 
exports.updateSchedule = async (id, schedule) => {
  return await ScheduleModel.findByIdAndUpdate(id, schedule);
};
 
exports.deleteSchedule = async (id) => {
  return await ScheduleModel.findByIdAndDelete(id);
};
