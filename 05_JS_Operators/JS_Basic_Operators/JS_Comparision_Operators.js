// Comparison Operators - Sample Code

// Sample values

//Numbers
let a = 10;
let b = 20;

// String
let c = "10";

// Equal to (==) -> compares value only, performs type coercion
console.log("--------------Equal to (==)--------------");
console.log("a == b :", a == b);
console.log("a == c :", a == c); 
// console.log("number vs string :", 5 == "5"); 

// Strict equal to (===) -> compares value AND type
console.log("--------------Strict equal to (===)--------------");
console.log("a === b :", a === b);      
console.log("a === c:", a === c);
// console.log("number vs string :", 5 === "5"); 

// Not equal to (!=) -> value only, type coercion
console.log("--------------Not equal to (!=)--------------");
console.log("a != b :", a != b); 

// Strict not equal to (!==) -> value and type
console.log("--------------Strict not equal to (!==)--------------");
console.log("a !== c:", a !== c); 

// Greater than (>)
console.log("--------------Greater than (>)--------------");
console.log("b > a  :", b > a); 

// Less than (<)
console.log("--------------Less than (<)--------------");
console.log("a < b  :", a < b); 

// Greater than or equal to (>=)
console.log("--------------Greater than or equal to (>=)--------------");
console.log("a >= 10:", a >= 10); 

// Less than or equal to (<=)
console.log("--------------Less than or equal to (<=)--------------");
console.log("a <= 10:", a <= 10); 


// Comparing strings (lexicographical order)
console.log("--------------Comparing strings--------------");
console.log("'apple' > 'banana':", "apple" > "banana");
console.log("'apple' < 'banana':", "apple" < "banana"); 

// Practical example: comparing numbers
console.log("--------------Practical example: comparing numbers--------------");
let age = 18;
console.log("Eligible to vote:", age >= 18); 


// Using comparison in a conditional
console.log("--------------Using comparison in a conditional with ifelse--------------");
let score = 75;
if (score >= 60 && score < 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: Other");
}
