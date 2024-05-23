const {readFileSync, writeFileSync} = require('fs');
console.log('start file');
const file1 = readFileSync('./content/first.txt', 'utf-8');
const file2 = readFileSync('./content/second.txt', 'utf-8');

console.log(file1, file2);

writeFileSync('./content/resultFile.txt', `here is result ${file1} and ${file2}.`, {flag : 'a'}); //{flag : 'a'} <- for append

console.log('done with task');
console.log('onto next task');