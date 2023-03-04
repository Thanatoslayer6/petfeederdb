const LogModel = require("../models/Log");
 
exports.getEntireLog = async () => {
  return await LogModel.find();
};
 
exports.createLog = async (log) => {
  return await LogModel.create(log);
};
exports.getLogById = async (id) => {
  return await LogModel.findById(id);
};

exports.getLogByClientName = async (clientName) => {
  return await LogModel.find({ client: clientName });
}
 
exports.updateLog = async (id, log) => {
  return await LogModel.findByIdAndUpdate(id, log);
};
 
exports.deleteLog = async (id) => {
  return await LogModel.findByIdAndDelete(id);
};
