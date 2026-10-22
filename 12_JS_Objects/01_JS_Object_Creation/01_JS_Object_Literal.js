// An object literal is a set of "key: value" pairs wrapped in { }.
// It is the most common way to create an object in JavaScript.
// Here we store the result of a test case, the way a test-automation beginner would.


const testResult = {
  testCase: "Login with valid credentials",
  status: "Pass",
  duration: 250,
  retry: false
}

// Print the whole object.
console.log(testResult);

// Access one property using DOT notation.
console.log(testResult.status);

// Access the same property using BRACKET notation.
console.log(testResult["status"]);
