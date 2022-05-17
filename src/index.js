
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


let url = "http://localhost:8080/";
url = url + "API/opml2json"  // URL extension for API
let path = "../res/states.opml"  // Path to test file (res)

// read XML from a file
const req_data = fs.readFileSync(path, "utf8");
req_data.trim();

console.log(req_data);
updateClient(req_data);
