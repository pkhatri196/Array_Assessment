

export function reduce(array, cb, startingValue) {
    let accumulator = startingValue !== undefined ? startingValue : array.shift();

    for (let i = 0; i < array.length; i++) {
        
        accumulator = cb(accumulator, array[i]);
    }

    return accumulator;
}


