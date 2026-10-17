let str = "Login_Test_Case_001";

//replace() and replaceAll()

console.log("-----replace()-----")
// replace(): Replace the first matching text.
let result = str.replace("Login", "Logout");
console.log(result); 

// Replace only the first underscore.
result = str.replace("_", " ");
console.log(result); 


console.log("-----replaceAll()-----")
// replaceAll(): Replace every underscore.
result = str.replaceAll("_", " ");
console.log(result); // "Login Test Case 001"

// Replace all matches using a regular expression with the g flag.
result = str.replace(/_/g, "-");
console.log(result); 

// Remove matching text by replacing it with an empty string.
result = str.replace("_001", "");
console.log(result); 

