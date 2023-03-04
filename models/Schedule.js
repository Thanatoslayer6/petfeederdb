const mongoose = require("mongoose");

const weekDayLimit = (val) => {
    return val.length === 7;
}

const feedDurationLimit = (val) => {
    return (val >= 1 && val <= 10);
}

const itemSchedule = new mongoose.Schema({
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
    enabled: {type: Boolean, required: true},
    weekDay: { 
        // This is an array with a length of 7 indicating when the schedule is active (Monday = 0, Sunday = 6)
        type: [Boolean], 
        required: true,
        validate: [weekDayLimit, 'weekDay must have exactly 7 items (Monday-Sunday)']
    },
    feedDuration: { 
        type: Number, 
        required: true,
        validate: [feedDurationLimit, 'feedDuration must be between 1 and 10']
    }
})

const scheduleSchema = new mongoose.Schema({
    client: { type: String, required: true },
    items: [itemSchedule]
});


module.exports = mongoose.model("Schedule", scheduleSchema);
