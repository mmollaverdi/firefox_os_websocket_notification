var credentials = require('./twitterCredentials');
var ntwitter = require('ntwitter');
var twitter = new ntwitter(credentials);

twitter.verifyCredentials(function (error, data) {
  if (error) {
    console.log('Credential verification error: ' + error);
  }
});

exports.onNewTweet = function(emit) {

  twitter.stream(
    'statuses/filter',
    { track: ['campjs', 'AngularJS', 'nodejs', 'WebSocket', 'javascript'] },
    function(stream) {

      stream.on('data', function(tweet) {
        //console.log('New tweet, text: ' + tweet.text + ', author: ' + tweet.user.screen_name);
        emit({text: tweet.text, username: tweet.user.screen_name,
        	user_img: tweet.user.profile_image_url, user_fullname: tweet.user.name});
      });

      stream.on('error', function(error, code) {
        console.log("Steram error: " + error + ": " + code);
      });
    }
  );
};