// --- Variable Hoisting with let ---
// console.log("--- Variable Hoisting with var ---")
// First console.log():
console.log(getValue);
//Throws ReferenceError: Cannot access 'userAge' before initialization
//Declaring value
let getValue=10;
// Second console.log():
console.log(getValue);

