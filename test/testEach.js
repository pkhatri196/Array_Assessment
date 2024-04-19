import {each} from '../functions/each.js';

const array = [1,2,3,4,5,5];

const cb = num => console.log(num);

console.log(each(array,cb));