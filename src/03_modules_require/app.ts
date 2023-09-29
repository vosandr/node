import os from 'os';
import { sayHi } from './test';

const name = 'Tommy';

console.log(sayHi(name));

console.log(`${os.platform()}, ${os.release()}`);

module.exports = name;