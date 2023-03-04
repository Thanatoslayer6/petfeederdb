const axios = require('axios');

;(async() => {
    let response = await axios.post("http://localhost:3000/api/logs", {
        client: "John Doe",
        type: "Feed Log",
        didFail: true,
        duration: 32
        // dateFinished
    })
    console.log(response.data);

    // This won't work since 'weekDay' has length of 7
    // let response1 = await axios.post("http://localhost:3000/api/schedule", {
    //     client: "John Doe",
    //     // state: "fail",
    //     weekDay: [true, true, false, false, true],
    //     duration: 50
    // })
    // console.log(response1.data)

    let response2 = await axios.post("http://localhost:3000/api/schedule", {
        client: "John Doe",
        activeTime: Date.now(),
        weekDay: [true, true, false, false, true, true, true],
        feedDuration: 7
    })
    console.log(response2.data)
})();
