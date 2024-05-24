const http = require('http');

const server = http.createServer();
//emit event
//listen to event
server.on('request', (req, res)=>{
  res.end('Welcome');
});

server.listen(5000);
