const mongoose = require("mongoose");

const weekDaySchema = new mongoose.Schema({
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    sunday: Boolean,
});

const scheduleSchema = new mongoose.Schema({
    client: { type: String, required: true },
    time: { type: Date, required: true },
    weekDay: { type: [weekDaySchema], require: true},
    duration: {type: Number, required: true},
});

module.exports = mongoose.model("Schedule", scheduleSchema);
