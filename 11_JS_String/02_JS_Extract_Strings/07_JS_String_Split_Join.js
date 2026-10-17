// split(): Convert a string into an array.
let str = "Login_Test_Case_001";

console.log("-----Split-----")
// Split a sentence using _.
let words = str.split("_");
console.log(words);

// Split a sentence using spaces.
let sentence = "I am learning JavaScript";
console.log(sentence.split(" "));


// Split a string into individual characters.
console.log("Hello".split(""));

console.log("-----Join-----")
// join(): Combine array elements into a string.
let joined = words.join(" ");
console.log(joined); 

// Join using a _.
console.log(words.join("-")); 

// Join without a separator.
console.log(words.join("")); 

console.log("-----Split and Join-----")

// Use split() and join() together to change separators.
let result = str.split("_").join(" ");
console.log(result);