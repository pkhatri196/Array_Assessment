
export function map(array,cb){
    const newArray=[];
    for(let i =0;i<array.length;i++){
        newArray.push(cb(array[i]));
    }
    return newArray;
}

