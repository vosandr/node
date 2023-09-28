import EventEmitter from 'events';
import util from 'util';

class Logger extends EventEmitter {
  log = (msg: any) => {
    console.log(msg);
    this.emit('some_event', { id: 1, text: 'Event test text!'});
  }
}

util.inherits(Logger, EventEmitter);

module.exports = Logger;