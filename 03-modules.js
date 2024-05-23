//module encapsulate code (only share minimum)
// every file is module
const names = require ('./04-names');
const  sayHi  = require('./05-utils');
const data = require('./06-alteranate-flavour');
require('./07-mind-grande');
console.log(data);
console.log(names);

sayHi(names.john);
sayHi('susan');