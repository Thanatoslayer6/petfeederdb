const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    client: { type: String, required: true },
    type: { type: String, required: true }, // Feed or UV log
    state: { type: String, required: true }, // Success or Failed
    dateFinished: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Log", logSchema);
