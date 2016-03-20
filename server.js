var port = '8080';
var host = '10.95.1.32';

var express = require('express');

var app = express();

app.listen(port, host);
console.log("Server is listening....");

