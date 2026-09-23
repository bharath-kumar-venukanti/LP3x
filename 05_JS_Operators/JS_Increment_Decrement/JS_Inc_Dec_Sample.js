let p = 2;
let q = 8;
let result = p++ + --q - ++p + q--;

// p becomes 2, evaluate 3 for p++
// q becomes 7, evaluate 7 for --q
// p becomes 4, evaluate 4 for ++p
// q becomes 7, evaluate 6 for q--
// The result will be (2+7-3+6)=12

console.log("The result: " + result)
console.log("The p: " + p)
console.log("The q: " + q)