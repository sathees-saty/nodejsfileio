var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	// readling welcome html
	fs.readFile('welcome.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	// writing welcome html to response
    res.write(data);
    return res.end();
  });
}).listen(8082);
// Console will print the message
console.log('Server running at http://localhost:8082/');