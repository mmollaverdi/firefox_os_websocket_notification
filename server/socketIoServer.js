var socketIo = require('socket.io');

exports.start = function(onNewContent) {
  var httpServer = require('http').createServer().listen(80);
  var socketIoServer = socketIo.listen(httpServer);

  onNewContent(function(data) {
     socketIoServer.sockets.volatile.emit('newContent', data);
  });
};
