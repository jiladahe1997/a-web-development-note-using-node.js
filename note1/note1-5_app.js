var express = require('express');
var app = express();
var path = require("path");                 //引入path模块用于构建绝对路径

var options = {
	root : path.dirname(__dirname);			//构建options，对sendFile函数指定绝对路径
}

app.get('/', function (req, res) {
  	res.sendFile("example.html".options);	//使用构建好的options
});

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;

  	console.log('Example app listening at http://%s:%s', host, port);
});