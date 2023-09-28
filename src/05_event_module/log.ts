import EventEmitter from 'events';
import util from 'util';

class Logger {
  log = (msg) => {
    console.log(msg);
    this.emit('some_event', { id: 1, text: 'Event test text!'});
  }
}

util.inherits(Logger, EventEmitter);

module.exports = Logger;