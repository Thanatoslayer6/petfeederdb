const LogModel = require("../models/Log");
 
exports.getEntireLog = async () => {
  return await LogModel.find();
};
 
exports.createLog = async (log) => {
  const existingDoc = await LogModel.findOne({ client: log.client });
  // check if document with client already exists, if it exists then just return it
  if (existingDoc) {
    return existingDoc
  }

  return await LogModel.create(log);
};

exports.getLogById = async (id) => {
  return await LogModel.findById(id);
};

exports.getLogByClientName = async (clientName) => {
  return await LogModel.find({ client: clientName });
}

exports.addLogItemByClientName = async(clientName, newItem) => {
  return await LogModel.findOneAndUpdate(
    { client: clientName }, 
    { $push: { items: newItem }},
    { new: true }
  )
}
 
exports.updateLog = async (id, log) => {
  return await LogModel.findByIdAndUpdate(id, log);
};
 
exports.deleteLog = async (id) => {
  return await LogModel.findByIdAndDelete(id);
};
