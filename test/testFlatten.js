import {flatten} from '../functions/flatten.js';

const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log(flatten(nestedArray));