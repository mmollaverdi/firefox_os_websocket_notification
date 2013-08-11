//var socket = io.connect('http://' + document.location.host);
var socket = io.connect('http://192.168.88.158');

var notification = navigator.mozNotification;

socket.on('newContent', function (data) {
  var newNotification = notification.createNotification('New tweet by ' + data.username, data.text.substring(0, 37) + '...', data.user_img);

  newNotification.onclick = function() {
    document.getElementById("notification_details").innerHTML = '<img src="' + data.user_img + '"' + '/>' + '<strong>' + data.user_fullname + '</strong>&nbsp;@' + data.username + ':<br />' + data.text;
  };
  newNotification.show();
});
