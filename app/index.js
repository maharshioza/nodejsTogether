var express = require('express');
var app = express();
var motivations = require('motivations');

app.get('/', function(req, res){
	res.send(motivations);
});

app.get('/message', function(req,res){
	res.send("NodejsTogether Event is Awesome")
})

module.exports = app;