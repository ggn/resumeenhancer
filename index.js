var http = require('http');

var requestCounter = 0;
var helloPreeti = function (req, res) {
    console.log(requestCounter++);
    res.end('HAPPY WEDDING ANNIVERSARY GIRISH - PREETI');
}
var server = http.createServer(helloPreeti);
server.listen(50000, function () {
    console.log("server is up and running");
});