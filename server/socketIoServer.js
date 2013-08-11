var  socketIo = require('socket.io');

exports.start = function(httpServer, onNewContent) {

  var socketIoServer = socketIo.listen(httpServer);

  onNewContent(function(data) {
     socketIoServer.sockets.volatile.emit('newContent', data);
  });
};
