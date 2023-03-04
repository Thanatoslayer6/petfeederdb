const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const logRouter = require("./routes/LogRoutes");
const scheduleRouter = require("./routes/ScheduleRoutes");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((_) => {
    console.log(`Connected to MongoDB`);
}).catch((error) => {
    console.log(error);
})

app.use(bodyParser.json());

app.use("/api/logs", logRouter);
app.use("/api/schedule", scheduleRouter);

app.listen(3000, () => {
   console.log("Server started at port 3000\n /api/logs - History logs\n /api/schedule - Schedule");
});
