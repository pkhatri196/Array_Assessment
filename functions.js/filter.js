

export function filter(array,cb){
    const newArray =[];
    for (let i=0;i<array.length;i++){
        if(cb(array[i])==true){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

