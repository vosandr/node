const os = require('os');
import {user, sayHi} from './test';

const name1 = 'Tommy';

console.log(sayHi(name1));

console.log(`${os.platform()}, ${os.release()}`);

module.exports = name1;