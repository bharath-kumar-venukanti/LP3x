// A property value can be an array.
// This is handy for storing a list of test data inside one object.

let testRun = {
  suite: "Regression",

  // 'browsers' is an array of strings.
  browsers: ["Chrome", "Firefox", "Edge"],

  // 'passCounts' is an array of numbers (passed tests per browser).
  passCounts: [10, 8, 9]
};

console.log(testRun.browsers);        // the whole array
console.log(testRun.browsers[0]);     // first item  -> Chrome
console.log(testRun.browsers.length); // number of items -> 3
console.log(testRun.passCounts[2]);   // third item  -> 9
