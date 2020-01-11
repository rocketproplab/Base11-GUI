const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/tty-usbserial1');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', console.log);
