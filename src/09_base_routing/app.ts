const http = require('http');
const fs = require('fs');
const path = require('path')

const PORT = 3000;
const URLs = {
  '/' : './views/index.pug'
}

const server = http.createServer((req: any, res: any) =>{
  console.log('Server request')
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(URLs["/"], (err: string, data: string) => {
    console.log(err||data);
    res.end();
  })
});



server.listen(PORT, 'localhost', (error: any) => {
  const outSide = [error, `listening port ${PORT}`];

  console.log(outSide[0|1]);
})