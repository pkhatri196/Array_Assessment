import {filter} from '../functions.js/filter.js';

const array =[1,2,3,4,5,5];

const cb = (num) => num<=2;

console.log(filter(array,cb));