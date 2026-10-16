// Checking Arrays

// Check if something IS an array

let numList=[1,2,3,4,5];
let numList2=new Array(1,2,3,4,5);


let results=Array.isArray(numList);
console.log(results)
let results2=Array.isArray(numList2)
console.log(results2)

let results3=Array.isArray([1,2,3,4,5])
console.log(results3)
let results4=Array.isArray("a")
console.log(results4)