const {readFile, writeFile} = require('fs');
console.log('start file');
readFile('./content/first.txt', 'utf-8', (err, result)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(result);
  const file1 = result;
  readFile('./content/second.txt', 'utf-8', (err, result)=>{
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    const file2 = result;
    writeFile('./content/result-async.txt',
      `here is the file : ${file1} and ${file2}`,
      (err, result)=>{
        if(err){
          console.log(err);
          return;
        }
        console.log('done with this task.');
      }
    )
  })
})
console.log('onto next one');