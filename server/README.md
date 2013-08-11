Realtime tweet stream
=============================

Displays tweets with specific keywords on a web page. As new tweets with those keywords are twitted, they will be sent to the client browsers and will be displayed to the user on client side.

This was only built for the purpose of a talk in a Melbourne Node.js meetup to represent how socket.io can be used to build realtime applications. There are no automated tests around the code.
The slides for the meetup talk can be seen [here](https://docs.google.com/presentation/d/17jOYHbOYvaO5HqbJ5TQwjWibp19HWqsc1_-9dAFur4E/edit?usp=sharing).


## How it Works

The Node.js [socket.io module](http://socket.io/) is used to send the list of current or new tweets to the clients. Socket.io will choose the appropriate transport mechanism based on the browser. Websockets will be used in most recent browsers but in browsers which do not support websockets, Comet alternatives such as long polling, multipart streaming, etc. will be chosen to facilitate the communication between the client and server.
See [here](http://www.websocket.org/quantum.html) for a good read on comparison of WebSocket and Comet techniques.

The [ntwitter module](https://github.com/AvianFlu/ntwitter) is used to integrate with the twitter REST and streaming APIs.


## Installation

Create a twitterCredentials.js file with the following content in the root directory of the project:

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

Then, run "npm install" to install all the application dependencies and at the end, run "node index.js". This has to be done as root since the http server runs on port 80.

Hitting "http://yourHostName" in the browser will display 5 recent tweets with one of "nodejs, javascript, AngularJS, EmberJS, WebSocket" keywords on the page; and after that any new tweet with those keywords will appear at the top.


## TODO
- Make keywords and the number of displayed tweets configurable
- Use environment variables for twitter keys
- Handle corner cases such as 'disconnect' events
- Build a nicer UI
