const {readFile, writeFile}  = require('fs').promises;
/* const util = require('util');
const readfile = util.promisify(readFile);
const writefile = util.promisify(writeFile); */

async function fun(){
  const first = await readFile('./content/first.txt', 'utf-8');
  const second = await readFile('./content/second.txt', 'utf-8');
  const third = await writeFile('./content/new-write-file.txt', `${first} and  ${second}`, {flag:'a'});
  console.log(first, second);
}
fun();

/* const read = (path) =>{
  return new Promise((resolve, reject)=>{
    readFile(path, 'utf-8', (err, result)=>{
      if(err){
        reject(err);
      }
      else{
        resolve(result);
      }
    })
  })
} */

/*
read('./content/first.txt').then((result)=>{
  console.log(result);
}).catch((err)=>{
  console.log(err);
});*/