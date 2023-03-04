const axios = require('axios');

;(async() => {
    // SCHEDULE
    let response2 = await axios.post("http://localhost:3000/api/schedule", {
        client: "John Doe",
        items: [ {
            hour: 23,
            minute: 4,
            enabled: false,
            weekDay: [true, true, false, false, true, true, true],
            feedDuration: 7
        }, {
            hour: 12,
            minute: 5,
            enabled: true,
            weekDay: [false, true, false, false, true, true, true],
            feedDuration: 8
        }, {
            hour: 5,
            minute: 10,
            enabled: false,
            weekDay: [false, false, false, false, false, false, false],
            feedDuration: 1
        }]
    })
    console.log(response2.data)

    // LOGS
    let response = await axios.post("http://localhost:3000/api/logs", {
        client: "John Doe",
        items: [ {
            type: "Feed Log",
            didFail: true,
            duration: 32
            // dateFinished
        }, {
            type: "UV-Light Log",
            didFail: false,
            duration: 5
            // dateFinished
        }, {
            type: "UV-Light Log",
            didFail: true,
            duration: 50
            // dateFinished
        }]
    })
    console.log(response.data);
})();
