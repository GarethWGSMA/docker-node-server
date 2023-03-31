var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Now I am showing off');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
