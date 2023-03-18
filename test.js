const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function uploadMP3File(filePath) {
  try {
    // create a FormData object
    const formData = new FormData();
    
    // add the file to be uploaded to the form
    formData.append('mp3', fs.createReadStream(filePath));
    // make a POST request to the server
    const response = await axios.post('http://localhost:5500/upload', formData, {
        headers: formData.getHeaders()
    });
    
    // console.log(response);
    console.log('File uploaded successfully!');
  } catch (error) {
    console.error(`File upload failed with error: ${error}`);
  }
}

;(async() => {
    // await uploadMP3File('Example.mp3');
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
    // let response1 = await axios.post("http://localhost:5500/api/schedule", {
    //     client: "Jonny",
    //     items: []
    // })
    // console.log(response1.data);
    // LOGS
    /*
    let response = await axios.post("http://localhost:5500/api/logs/client/jonny", {
        type: "Mosfet-1", // Feed or UV log
        didFail: true,
        duration: 200,
        dateFinished: "Ts heknife"
        // type: { type: String, required: true }, // Feed or UV log
        // didFail: { type: Boolean, required: true },
        // duration: { type: Number, required: true },
        // dateFinished: { type: String, required: true }
    })
    console.log(response.data);
    */
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
