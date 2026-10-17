// A single object can hold different types of values at the same time.
// Strings, numbers, and booleans are the most common property types.

let testCase = {
  id: "TC_002",      // string
  name: "Checkout",  // string
  priority: 1,       // number
  duration: 1200,    // number
  isAutomated: true, // boolean
  isFlaky: false     // boolean
};

console.log(testCase.name);        // Checkout
console.log(testCase.priority);    // 1
console.log(testCase.isAutomated); // true

// typeof tells you the type of a value.
console.log(typeof testCase.name);        // string
console.log(typeof testCase.priority);    // number
console.log(typeof testCase.isAutomated); // boolean
