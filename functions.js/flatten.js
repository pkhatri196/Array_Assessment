

export function flatten(arr) {
    let flattenedArray = [];

    function flattenHelper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flattenHelper(arr[i]);
            } else {
                flattenedArray.push(arr[i]);
            }
        }
    }

    flattenHelper(arr);
    return flattenedArray;
}


