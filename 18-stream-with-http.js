const fs = require('fs');
const http =require('http');

http.createServer((req, res)=>{
  /* const text = fs.readFileSync('./content/big-file.txt', 'utf-8');
  res.end(text); */
  const fileStream = fs.createReadStream('./content/big-file.txt', 'utf-8');
  fileStream.on('open', ()=>{
    fileStream.pipe(res);
  })
  fileStream.on('error', (err)=>{
    res.end(err);
  })
}).listen(5000);

