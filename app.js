const _ = require('lodash');

const arr = [1,[2,[3,[4]]]];

const result = _.flattenDeep(arr);
console.log(result);