var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

// var url = "http://google.com";
// request(url, function(err, resp, body){
// 	if(err) {
// 	}else{
// 		console.log(err);
// 	}else{
// 		console.log(body);
// 	}
// });

var destination = fs.createWriteStream('download/mywebsite.html');
var url = "http://jiyeonk.com";
request(url, function(url)
.pipe(destination)
.on('finish', function(){
	console.log('done');
})
.on('error', function(err){
	console.log(err);
});

app.listen(port);
console.log('server is listening on ' + port);
