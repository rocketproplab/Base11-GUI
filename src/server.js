const WebSocket = require('ws');
const dataFile = require("./data");

const wss = new WebSocket.Server({ port: 8000 });

var data = {
    "connectionStatus": 1,
    "timestamp": Date.now(),
    "PT1_ss": 0,
    "PT1_readout": 0,
    "PT2_ss": 0,
    "PT2_readout": 0,
    "PT3_ss": 0,
    "PT3_readout": 0,
    "PT4_ss": 0,
    "PT4_readout": 0,
    "PT5_ss": 0,
    "PT5_readout": 0,
    "PT6_ss": 0,
    "PT6_readout": 0,
    "PT7_ss": 0,
    "PT7_readout": 0,
    "PT8_ss": 0,
    "PT8_readout": 0,
    "TC1": 0,
    "TC2": 0,
    "TC3": 0,
    "TC4": 0,
    "TC5": 0,
    "TC6": 0,
    "TC7": 0,
    "TC8": 0,
    "Alt": 0,
    "xTilt": 0,
    "yTilt": 0,
    "Lat": 0,
    "Lon": 0,
    "FS": 0,
    "PS_drogue": 0,
    "PS_main": 0,
    "Vel": 0
};

// wss.on('connection', function connection(ws) {
//     console.log("Connected!");
//     if (dataFile !== "") {
//         wss.clients.forEach(function each(client) {
//             client.send(JSON.stringify(dataFile));
//         });
//     }
// });

wss.on('connection', function connection(ws) {
    console.log("Connected!");
    ws.on('message', function incoming(data) {
        console.log("Data Recieved!")
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    });
});
