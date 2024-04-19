import {map} from '../functions/map.js';

const array = [1,2,3,4,5,5];

const cb = num => num*5;

console.log(map(array,cb));