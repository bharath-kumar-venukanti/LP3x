// --- Variable Hoisting with var ---
console.log("--- Variable Hoisting with var ---")
// First console.log():
console.log(getValue);
//Declaring value
var getValue=10;
// Second console.log():
// The assignment has now completed, so getValue successfully holds the value 10.
console.log(getValue);

// --- Function Declaration Hoisting ---

console.log("--- Function Hoisting with var ---")
sayHello();

function sayHello() {
    console.log("Hello Bharath")
}
console.log(sayHello());

