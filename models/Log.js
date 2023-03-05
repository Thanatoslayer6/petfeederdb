const mongoose = require("mongoose");

const itemLog = new mongoose.Schema({
    type: { type: String, required: true }, // Feed or UV log
    didFail: { type: Boolean, required: true },
    duration: { type: Number, required: true },
    dateFinished: { type: String, required: true }
});

const logSchema = new mongoose.Schema({
    client: { type: String, required: true },
    items: [itemLog]
});

module.exports = mongoose.model("Log", logSchema);
