const axios = require('axios');
// let item = Date.now();
console.log(Date.now());
/*
;(async() => {
    // console.log(Date.now());
    // SCHEDULE
    // let response2 = await axios.post("https://petfeederdb-production.up.railway.app/api/schedule", {
    //     client: "beta12345",
    //     items: [ {
    //         hour: 23,
    //         minute: 4,
    //         weekDay: [true, true, false, false, true, true, true],
    //         enabled: false,
    //         feedDuration: 7
    //     }, {
    //         hour: 12,
    //         minute: 5,
    //         enabled: true,
    //         weekDay: [false, true, false, false, true, true, true],
    //         feedDuration: 8
    //     }, {
    //         hour: 5,
    //         minute: 10,
    //         enabled: false,
    //         weekDay: [false, false, false, false, false, false, false],
    //         feedDuration: 1
    //     }]
    // })
    // console.log(response2.data)

    // LOGS
    let response = await axios.post("http://localhost:5500/api/logs", {
        client: "michael_gira",
        items: [ {
            type: "Feed Log",
            didFail: true,
            duration: 32,
            dateFinished: Date.now() 
        }, {
            type: "UV-Light Log",
            didFail: false,
            duration: 5,
            dateFinished: Date.now()
        }, {
            type: "UV-Light Log",
            didFail: true,
            duration: 50,
            dateFinished: Date.now()
        }]
    })
    console.log(response.data);
    // let response3 = await axios.get("https://petfeederdb-production.up.railway.app/api/schedule/client/beta12345");
    // console.log(response3.data);
    
    // WORKS
    // let response4 = await axios.post("https://petfeederdb-production.up.railway.app/api/schedule/client/beta12345", {
    //     hour: 5,
    //     minute: 25,
    //     enabled: true,
    //     weekDay: [true, true, true, true, true, true, true],
    //     feedDuration: 5
    // })
    // console.log(response4.data)
})();
*/
