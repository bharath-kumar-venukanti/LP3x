// Nested ternary operators are a way to write conditional statements in a more compact form. They can be used to evaluate multiple conditions in a single line of code.
// The syntax is: condition1 ? exprIfTrue1 : condition2 ? exprIfTrue2 : exprIfFalse

// let age = 25;
// // let ageGroup = (age<13) ? "Child" : (age>=13 && age <= 19) ? "Teenager" : (age >=20 && age <= 25) ? "Young Adult" : (age >=26 && age <= 64) ? "Adult" : "Senior Citizen";
// // console.log("Age group: " + ageGroup);


// // let is_bharath_enjoy_with_beverages = age >= 18 ? (age >= 25 ? "He can go to the bar" : "he can not go to the bar") : "Don't Drink Alcohol";
// let is_bharath_go_to_bar=(age >= 25 ? "He can go to the bar" : "he can not go to the bar");
// let is_bharath_enjoy_with_beverages = age >= 18 ? is_bharath_go_to_bar : "Don't Drink Alcohol";
// console.log("Bharath's beverage status: " + is_bharath_enjoy_with_beverages + "," + " and his age is: " + age);


let statusCode = 404;
 let category = statusCode < 300 ? "success" : 
                statusCode < 400 ? "redirection" :
                statusCode < 500 ? "client error" : 
                statusCode < 600 ? "server error" : "unknown status code";

//console.log("Status code category: " + category);
console.log (`status ${statusCode} is a ${category}`);





