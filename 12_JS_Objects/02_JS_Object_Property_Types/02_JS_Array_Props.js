// A property value can be an array.
// This is handy for storing a list of test data inside one object.

let testRun = {
  suite: "Regression",

  // 'browsers' is an array of strings.
  browsers: ["Chrome", "Firefox", "Edge"],

  // 'passCounts' is an array of numbers (passed tests per browser).
  passCounts: [10, 8, 9]
};

console.log(testRun.browsers);        
console.log(testRun.browsers[0]);    
console.log(testRun.browsers.length); 
console.log(testRun.passCounts[2]);   
