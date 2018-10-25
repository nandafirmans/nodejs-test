/*
var Logger = require('./logger');
var logger = new Logger();

logger.on('logged', (arg) => {
  console.log('Event Listener Called', arg);
});

logger.log('cok testing');
*/

var http = require('http');

http
    .createServer((req, res) => {
	res.write('hello world');
	res.end();
    })
    .listen(8090);


