
// --- Function Declaration Hoisting ---

console.log("--- Function Hoisting with var ---")
sayHello();

function sayHello() {
    console.log("Hello Bharath")
}
console.log(sayHello());

// --- Function Expression Hoisting (does not work the same way) ---
//sayHi(); // Throws TypeError: sayHi is not a function (if var) or ReferenceError (if let/const)
console.log("--- Function Expression Hoisting with var ---")
var sayHi = function() {
    console.log("Hi!");
};

console.log(sayHi())