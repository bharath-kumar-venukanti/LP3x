// An object literal is a set of "key: value" pairs wrapped in { }.
// It is the most common way to create an object in JavaScript.
// Here we store the result of a test case, the way a test-automation beginner would.

let testResult = {
  testCase: "Login with valid credentials", // string value
  status: "Pass",                           // string value
  duration: 250,                            // number value (milliseconds)
  retry: false                              // boolean value
};

// Print the whole object.
console.log(testResult);

// Access one property using DOT notation.
console.log(testResult.status);

// Access the same property using BRACKET notation.
console.log(testResult["status"]);
