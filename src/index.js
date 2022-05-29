const request = require("request");
const fs = require("fs");

function updateClient(postData){
    var clientServerOptions = {
        uri: url,
        body: postData,
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(error,response.body);
        return;
    });
}


let url = "https://edge-api-orp3bl6lta-ue.a.run.app/";
url = url + "API/imageName"  // URL extension for API
let path = "../res/states.opml"  // Path to test file (res)

// read XML from a file
let req_data = fs.readFileSync(path, "utf8");
req_data.trim();

req_data = "IMG_6242.jpg"

console.log(req_data);
updateClient(req_data);
