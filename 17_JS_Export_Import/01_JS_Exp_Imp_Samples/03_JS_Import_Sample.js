
// Importing named exports
//import {add,sub,mul,div} from "./01_JS_Export_Sample.js";
import {mul,div,pi} from "./01_JS_Export_Sample.js";
import {add as addition, sub as subtraction} from "./01_JS_Export_Sample.js";

// Importing a default export
import User from "./02_JS_Export_Sample.js";

// Testing math functions

let a=10;
let b=5;
console.log(addition(a,b));
console.log(subtraction(a,b));
console.log(mul(a,b));
console.log(div(a,b));
console.log(pi);


// Testing the User class
let userAuth=new User("Bharath", 30);
console.log(userAuth.login());