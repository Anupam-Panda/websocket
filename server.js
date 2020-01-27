var http = require('http');

var server = http.createServer(function(req, res) {
});

const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ server });
wsServer.on('connection', function(connection) {

  connection.on('message', function(message) {
    console.log('received: %s', message);
    var pattern = /^-?\d+\.?\d*$/;///^\d+$/;///^[0-9]+$/;
    if (pattern.test(message)) {
      console.log("It's a Number");
      connection.send("You entered "+message+" You got "+ Math.pow(Number(message), 2)+"!");
    } else if(typeof message === 'string' || message instanceof String) {
      console.log("It's a String");
      connection.send("You just said " +message+ "!");
    }
  });
  connection.send("From server");

});

server.listen(8080);
