const {createReadStream} = require('fs');

const stream = createReadStream('./content/big-file.txt', 'utf-8', {highWaterMark:9000});

//default 64kb

stream.on('data', (result)=>{
  console.log(result);
});
stream.on('error', (error)=>{
  console.log(error);
})