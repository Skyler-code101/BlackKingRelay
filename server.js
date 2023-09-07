const { WebSocketServer } = require('ws')

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
    console.log(req.socket.remoteAddress);
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    wss.clients.forEach(function(client) {
      client.send(data + "");
    });
  });

});