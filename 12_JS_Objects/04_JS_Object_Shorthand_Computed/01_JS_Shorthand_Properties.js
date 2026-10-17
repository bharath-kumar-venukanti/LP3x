// Shorthand property names let you build an object from variables
// without repeating the key name.

let username = "tester";
let role = "admin";
let active = true;

// Full form: the key and the value are written twice.
let full = { username: username, role: role, active: active };

// Shorthand form: when the variable name and the key are the same,
// you can write just the variable name.
let shorthand = { username, role, active };

console.log(full);
console.log(shorthand); 
