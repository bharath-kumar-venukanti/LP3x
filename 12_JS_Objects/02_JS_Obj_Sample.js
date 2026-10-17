// Create an object with key-value pairs.
// Property names are case-sensitive, so status and Status are different keys.
let a = { status: "Pass", Status: "pass" };

// Access the lowercase 'status' property using dot notation.
console.log(a.status); 

// Access the uppercase 'Status' property using dot notation.
console.log(a.Status); 