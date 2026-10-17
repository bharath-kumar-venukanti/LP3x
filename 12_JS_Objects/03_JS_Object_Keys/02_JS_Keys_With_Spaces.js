// A key containing spaces (or special characters) cannot use dot notation.
// It must be written as a string and accessed with bracket notation.

let testCase = {
  id: "TC_004",
  "test case name": "Login",      // key with spaces
  "expected result": "Dashboard"  // key with spaces
};

// console.log(testCase.test case name); // ERROR: dot notation is not allowed here

// Use BRACKET notation with the key written as a string.
console.log(testCase["test case name"]);   // Login
console.log(testCase["expected result"]);  // Dashboard

// A normal key can still use dot notation.
console.log(testCase.id);                  // TC_004
