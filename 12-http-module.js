const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end('Welcome to home page.');
  }
  else if(req.url === '/about'){
    res.end('welcome to about section');
  }
  else{
    res.end(`<h1>OOPS!</h1>
    <p> There is something wrong.</p>
    <a href='/'>back home</a>`);
  }
});

server.listen(1000);