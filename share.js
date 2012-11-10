var connect = require('connect');
var http = require("http");
var server = connect(
    connect.logger(),
	connect.static(__dirname)
    );
http.createServer(server).listen(9000);
