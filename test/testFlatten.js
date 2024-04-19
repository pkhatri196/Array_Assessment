import {flatten} from '../functions.js/flatten.js';

const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log(flatten(nestedArray));