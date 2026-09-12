// ==========================================
// 1. PRIMITIVE DATA TYPES
// ==========================================
// Number: Integers and floating-point numbers (var, let, const)
let age = 25;
let price = 19.99;

// "Not a Number" is technically a Number type
let invalidNum = NaN; 
let infinityVal = Infinity;

// String: Textual data enclosed in quotes or template literals
let firstName = "Alice";
let greeting = `Hello, ${firstName}!`; 

// Boolean: Logical true or false
let isLoggedIn = true;
let hasPermission = false;

// Undefined: A variable that has been declared but not assigned a value
let unassignedVar; 

// Null: Intentional absence of any object value
let emptyValue = null;

// Symbol: Unique and immutable primitive value used for object property keys
let uniqueId = Symbol("id");

// BigInt: Integers larger than 2^53 - 1 (append 'n' to the end)
let hugeNumber = 9007199254740991n;

// ==========================================
// 2. NON-PRIMITIVE / OBJECT DATA TYPES
// ==========================================

// Object: Key-value pairs
let user = {
  id: 1,
  username: "Alugadda",
  isAdmin: false
};

// Array: Ordered list of values (type of Array is technically 'object')
let colors = ["red", "green", "blue"];

// Function: Executable code block (type of Function returns 'function')
function calculateSum(a, b) {
  return a + b;
}

// Date Object
let currentDate = new Date();

// ==========================================
// 3. CHECKING DATA TYPES (typeof operator)
// ==========================================

console.log("----------------------PRIMITIVE DATA TYPES----------------------");

console.log(typeof age);          // "number"
console.log(typeof firstName);    // "string"
console.log(typeof isLoggedIn);   // "boolean"
console.log(typeof unassignedVar);// "undefined"
console.log(typeof emptyValue);   // "object" (Known JavaScript quirk/bug)
console.log(typeof uniqueId);     // "symbol"
console.log(typeof hugeNumber);   // "bigint"

console.log("----------------------NON-PRIMITIVE / OBJECT DATA TYPES----------------------");
console.log(typeof user);         // "object"
console.log(typeof colors);       // "object" (Use Array.isArray(colors) to check for arrays)
console.log(typeof calculateSum); // "function"