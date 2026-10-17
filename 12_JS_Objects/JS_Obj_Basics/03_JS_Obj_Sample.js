// Create an object.
let a = { status: "Pass" };

// Copy the reference, not the object.
// Both a and b refer to the same object.

let b=a;

//Change an object 
b.status="Fail"

// The change is visible through both variables.
console.log(b)
console.log(a)

