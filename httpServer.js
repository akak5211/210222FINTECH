var http = require("http");

http.createServer(function (req, res) {
	var body = "hello Server";
	res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	res.end("<html><h1> style='color : red'>안녕하세요</h1></html>")
}).listen(3000);
