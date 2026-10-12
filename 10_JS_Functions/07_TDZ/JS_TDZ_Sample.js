// console.log(userName);  // ReferenceError: Cannot access 'userName' before initialization
let userName = "Dev";
console.log(userName);     // "Dev"

// Compare with var:

// TDZ for block-scoped starts here
console.log(greeting);     // undefined (var is initialized with undefined)
var greeting = "Hello";