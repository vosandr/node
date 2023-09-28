const http = require('http');

const PORT = 3000;

const server = http.createServer((req: any, res: any) =>{
  console.log('Server request');
  console.log(req.url, req.method);
});



server.listen(PORT, 'localhost', (error: any) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
})