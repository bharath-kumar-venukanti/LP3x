// Object keys are case-sensitive.
// 'status' and 'Status' are two DIFFERENT properties.

let a = { status: "Pass", Status: "Fail" };

console.log(a.status); // Pass  (the lowercase key)
console.log(a.Status); // Fail  (the uppercase key)

// 'STATUS' was never defined, so it is undefined.
console.log(a.STATUS); // undefined
