var EventEmiter = require('events');

class Logger extends EventEmiter {
  log (message) {
    console.log(message);
    this.emit('logged', {id:1, name:'john'});
  }
}

module.exports = Logger;
