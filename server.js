var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Can we kill ll other tasks, once we deploy from github ?');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
