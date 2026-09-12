// ===== Undefined ===== : A variable is exist but not assigned a value is "undefined". Javascript automatically assigns the value.
console.log("----------------Undefined-----------------");
// A variable declared but not assigned a value is "undefined"
let majorAge;
console.log(majorAge); 

// Accessing a missing object property returns  
const person = { name: "bharath" };
console.log(person.age); 

// Accessing a missing array index returns undefined
const numbers = [1, 2, 3];
console.log(numbers[10]); 

// A function without a return statement returns undefined
function noReturn() {}
console.log(noReturn()); 

// typeof undefined is "undefined"
console.log(typeof notAssigned); 


// ===== Null ===== : A variable is explicitly assigned a value of "null" to indicate the absence of any object value. It is an intentional assignment by the developer to represent "no value".
console.log("----------------Null-----------------");

// null is an intentional "no value" assigned by the developer
let emptyValue = null;
console.log(emptyValue); 

// typeof null is "object"
console.log(typeof emptyValue);

// null is often used to reset or clear a variable
let user = { name: "Bharath" };
user = null; // explicitly clearing the reference
console.log(user); 

