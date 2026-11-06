//Importing the function from the file 01_JS_Export_Sample.js
import {validateEmail, validatePassword} from "./01_JS_Export_Sample.js";
//Importing the function from the file 01_JS_Exp_Imp_Samples/02_JS_Export_Sample.j
import User from "../01_JS_Exp_Imp_Samples/02_JS_Export_Sample.js";

console.log(validateEmail("bharath@gmail.com"));
console.log(validatePassword("password123"));
console.log(new User("Bharath", 30).login());