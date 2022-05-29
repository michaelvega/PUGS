var axios = require('axios');
var data = 'POSTBODYHERE';

var config = {
    method: 'post',
    url: 'LINKHERE',
    headers: {
        'Content-Type': 'text/plain'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


