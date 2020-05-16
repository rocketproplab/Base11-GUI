const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });

var data = { 'connectionStatus': 1 };

wss.on('connection', function connection(ws) {
    console.log("Connected!");
    wss.clients.forEach(function each(client) {
        client.send(JSON.stringify(data));
    });
});

// isUnique(data)
