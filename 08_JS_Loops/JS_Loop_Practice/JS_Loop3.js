//Task: Write a loop that takes a string (e.g., "javascript") and outputs the reversed string ("tpircsavaj") without using .reverse().

let originalString="javascript";

let reversed="";

// for(let i=originalString.length-1;i>=1;i--){
//     reversed +=originalString[i]
//     // console.log(reversed)
// }
// console.log(reversed)

for(let str of originalString){
    reversed=str+reversed
    //console.log(reversed)
}
console.log(reversed)