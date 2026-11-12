//Never Annotation

//function never return
function infiniteLoop():never {
        while (true) {
            
        }
}

// console.log(infiniteLoop());
function throwError(msg:string):never {
    throw new Error(msg);
    
}