Firefox OS app push notifications through websocket
==================================================

This is an example of FireFox OS push notifications through websockets using Node.js socket.io module. The "server" module runs a Node.js app which waits for tweets with specific keywords (using twitter streaming API) and pushes them to all the clients through websockets.
The "client" module is the FireFox OS app with a "manifest.webapp" file which can be installed on phones running FireFox OS. The app will make a websocket connection to the "server" and will then display the tweets received through that connection as notifications.

## How to install

### Run the server

Create a twitterCredentials.js file with the following content in the "server" directory:

``` javascript
var credentials = {
  consumer_key: 'Your twitter consumer key',
  consumer_secret: 'Your twitter consumer secret',
  access_token_key: 'Your twitter access token key',
  access_token_secret: 'Your twitter access token secret'
};

module.exports = credentials;
```

Twitter keys can be acquired from [dev.twitter.com/apps](https://dev.twitter.com/apps).

Then, from the "server" directory, run "npm install" to install the dependencies and at the end, run "node index.js".

### Try the app on FireFox OS simulator (a FireFox browser plugin)

Add the "manifest.webapp" file in the "client" directory to the simulator dashboard.
