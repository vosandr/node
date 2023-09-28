import fs from 'fs';
import zlib from 'zlib';

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/new-text.txt');
const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//   writeStream.write('\n---CHUNK START---\n');
//   writeStream.write(chunk)
//   writeStream.write('\n---CHUNK END---\n');
// })

const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...');
}

readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError);