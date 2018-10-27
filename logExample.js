var Logger = require('./logger');
var logger = new Logger();

logger.on('logged', (arg) => {
  console.log('Event Listener Called', arg);
});

logger.log('cok testing');
