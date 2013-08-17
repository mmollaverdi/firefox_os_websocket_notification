var twitterFeed = require('./twitterFeed');

require('./socketIoServer').start(twitterFeed.onNewTweet);
