//Ternary is a conditional operator that takes three operands. It is often used as a shortcut for the if statement.
//The syntax is: condition ? exprIfTrue : exprIfFalse

// let age = 20;
// let is_adult = (age >= 18) ? "Yes" : "No";
// console.log("Is the person an adult? " + is_adult);

// let marks = 75;
// let result = (marks >=35) ? "Pass" : "Fail";
// console.log("Student's result: " + result);

// let age=15;
// let is_a_person_eligible_to_vote =(age>=18) ? "Eligible for Vote" : "Not Eligible for Vote";
// console.log("Is the person eligible to vote? " + is_a_person_eligible_to_vote);

// let age=40;
// let can_drive = (age>=18) ? "Eligible to Drive" : "Not Eligible to Drive";
// console.log("Is the person eligible to drive? " + can_drive);

// let actualStatus = 200;
// let expectedStatus = 400;
// let statuscheck=(actualStatus === expectedStatus) ? "Status is as expected" : "Status is not as expected";
// console.log("Status check: " + statuscheck);

// let environment = "production";
// let environmentUrl = environment === "development" ? "https://www.production.com" : "https://www.development.com";
// console.log("Environment URL: " + environmentUrl);

let browser = "Chrome";
// let isBrowserSupported = (browser === "Firefox") ? "Browser is Supported" : "Browser is not supported";
let isBrowserSupported = (browser === "Firefox" || browser === "Chrome" || browser === "Safari") ? "Browser is Supported" : "Browser is not supported";
console.log("Browser support check: " + isBrowserSupported);