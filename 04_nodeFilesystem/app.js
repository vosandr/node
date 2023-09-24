const { error } = require('console');
const fs = require('fs');

  fs.readFile('./app.js', 'utf8', (error, data) => {
    fs.mkdirSync('./files', ()=>{});

    fs.writeFileSync('./files/app.js', data, (error)=>{
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

