// A nested object is an object stored inside another object.
// Test data often groups related values this way.

let testCase = {
  id: "TC_001",
  title: "User can log in",

  // 'expected' is itself an object (nested).
  expected: {
    statusCode: 200,
    message: "Login successful"
  },

  // 'user' is another nested object.
  user: {
    username: "tester",
    role: "admin"
  }
};

// Access nested values by chaining DOT notation.
console.log(testCase.expected.statusCode); // 200
console.log(testCase.user.role);           // admin

// Access nested values with BRACKET notation too.
console.log(testCase["expected"]["message"]); // Login successful
