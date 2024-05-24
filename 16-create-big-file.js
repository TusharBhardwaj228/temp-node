const {writeFileSync} = require('fs');

for(let i =0;  i<10000; i++){
  writeFileSync('./content/big-file.txt', `hello there ${i}\n`, {flag: 'a'});
}