const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    client: { type: String, required: true },
    type: { type: String, required: true }, // Feed or UV log
    didFail: { type: Boolean, required: true },
    duration: { type: Number, required: true },
    dateFinished: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Log", logSchema);
