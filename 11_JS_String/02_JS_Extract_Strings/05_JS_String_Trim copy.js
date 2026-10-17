const str1 = "Login";
const str2 = "Test";
const str3 = "Case";

let conStr;
// 1. Concatination with "+"
console.log("Concatination with +")

// console.log("Login"+" Test")
conStr=str1+ " "+str2;
console.log(conStr)
console.log(conStr+" "+str3)

// 2. Join string using "+"
console.log("Concatination with concat")
conStr=str1.concat(" ").concat(str2);
console.log(conStr)
console.log(conStr.concat(" ").concat(str2))

//3. Join strings using a template literal.
console.log("Concatination with Template Literal")
conStr = `Hello, ${str1} ${str2}!`;
console.log(conStr); 

//4. Append text using +=.

let Teststatus="Passed"
Teststatus +="Test"
console.log(Teststatus)

//5. Join a string and a number.
let testCase = "Test_Case_" +1;
console.log(testCase);