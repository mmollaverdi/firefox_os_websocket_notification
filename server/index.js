var httpServer = require('./httpServer').start();

var twitterFeed = require('./twitterFeed');

require('./socketIoServer').start(httpServer, twitterFeed.onNewTweet);
