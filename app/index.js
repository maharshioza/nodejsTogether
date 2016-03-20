var express = require('express');
var app = express();
var motivations = require('motivations');
var pick_one = require('pick-one');

app.get('/', function(req, res){
	res.send(pick_one(motivations));
});

app.get('/message', function(req,res){
	res.send("NodejsTogether Event is Awesome")
})

module.exports = app;