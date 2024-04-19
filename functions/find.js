

export function find(array,cb) {
     for( let i in array){
        if (cb(i)==true){
            return i;
        }
     }
     return undefined;
}

