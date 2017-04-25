var http = require('http');
 
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('isso aqui ta funfando\n');
}).listen(8080);
 
console.log('isso aqui ta funfando');