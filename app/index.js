var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("NodejsTogether Event is Awesome")
});

module.exports = app;