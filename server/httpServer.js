var httpServer = require('http').createServer(handler)
  ,url = require('url');

function handler (request, response) {
  response.writeHead(200);
  response.end();
};

exports.start = function() {
  httpServer.listen(80);
  return httpServer;
};