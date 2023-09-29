const { error } = require('console');
const fs = require('fs');

  fs.readFile('./app.ts', 'utf8', (error: any, data: any) => {
    fs.mkdirSync('./files', ()=>{});

    fs.writeFileSync('./files/app.ts', data, (error: any)=>{
      error ? console.log(error) : null;
    });


  });

setTimeout(() => {
  if (fs.existsSync('./files/app.js')) {
    fs.unlinkSync('./files/app.js', () => {});
  } 
}, 4000);

setTimeout(() => {
  if (fs.existsSync('./files/app.js')) {
    fs.rmdir('./files', () => {});
  }
}, 6000);

