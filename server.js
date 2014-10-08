
var http = require('http');
var server = http.createServer(function(req, res) {
        res.write("Hello World!");
        res.end();
});
server.listen(9090, function() {
        console.log("Server listening on port 9090...");
});
