'use strict';

//const http = require('http');
//const https = require('https');
//const fs = require('fs');
const url = require('url');

//let content = fs.readFileSync('index.html');


require('http').createServer((request, response) => {

    // console.log(request.url);
    console.log('URLS: ', request.url, url.parse(request.url).protocol);

    response.end('RESPONSE FOR: ' + request.url);
    /*if (request.url) {
        require('http').get(request.url, (resp) => {

            resp.pipe(response);

        }).on('error', err => {
            console.log('Error from get: ', err.message);
        });
    }*/

}).listen(8000);