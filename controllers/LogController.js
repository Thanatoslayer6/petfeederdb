const logService = require('../services/LogService');

exports.getEntireLog = async (req, res) => {
  try {
    const logs = await logService.getEntireLog();
    res.json({ data: logs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.createLog = async (req, res) => {
  try {
    const log = await logService.createLog(req.body);
    res.json({ data: log, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLogById = async (req, res) => {
  try {
    const log = await logService.getLogById(req.params.id);
    res.json({ data: log, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLog = async (req, res) => {
  try {
    const log = await logService.updateLog(req.params.id, req.body);
    res.json({ data: log, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLog = async (req, res) => {
  try {
    const log = await logService.deleteLog(req.params.id);
    res.json({ data: log, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
