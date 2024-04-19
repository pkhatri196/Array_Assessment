import {reduce} from '../functions.js/reduce.js';

const array =[1,2,3,4,5,5];

const cb = (startingValue, curr) => startingValue + curr;

const sum = reduce(array, cb);

console.log(sum);