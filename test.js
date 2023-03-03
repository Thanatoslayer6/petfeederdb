const axios = require('axios');

;(async() => {
    let response = await axios.post("http://localhost:3000/api/logs", {
        client: "John Doe",
        type: "Feed Log",
        state: "fail",
    })
    console.log(response.data);
})();
