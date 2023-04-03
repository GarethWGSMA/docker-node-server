var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Testing a NLB can deal with changing IP addresses');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
