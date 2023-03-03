const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const app = express();
// const logRouter = require("./routes/LogRoutes");
// const scheduleRouter = require("./routes/ScheduleRoutes");
const {
  getEntireLog,
  createLog,
  getLogById,
  updateLog,
  deleteLog,
} = require("./controllers/LogController");

require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then((_) => {
//     console.log(`Connected to MongoDB`);
// }).catch((error) => {
//     console.log(error);
// })


app.get('/', async(req, res) => {
    console.log("HELLODOS");
})
app.get('api/logs', getEntireLog);
app.post('api/logs', createLog);

app.get('api/logs/:id', getLogById);
app.put('api/logs/:id', updateLog);
app.delete('api/logs/:id', deleteLog);


// app.use(express.json());
// app.use("api/logs", logRouter);
// app.use("api/schedule", scheduleRouter);

app.listen(3000, () => {
   console.log("Server started at port 3000");
});
