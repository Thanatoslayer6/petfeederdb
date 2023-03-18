const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const logRouter = require("./routes/LogRoutes");
const scheduleRouter = require("./routes/ScheduleRoutes");
const storageRouter = require("./routes/StorageRoutes");

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((_) => {
    console.log(`Connected to MongoDB`);
}).catch((error) => {
    console.log(error);
})

app.use(express.static('audio/'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/logs", logRouter);
app.use("/api/schedule", scheduleRouter);
app.use("/api/storage", storageRouter);

app.listen(process.env.PORT || 3000, () => {
   console.log(`Server started at port ${process.env.PORT}\n /api/logs - History logs\n /api/schedule - Schedule\n /api/upload - Upload audio file (mp3)`);
});
