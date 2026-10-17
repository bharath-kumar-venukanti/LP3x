// Computed property names let you use a variable (or expression)
// as the key inside an object literal. Wrap it in [ ].

let field = "status";
let index = 1;

let result = {
  id: "TC_005",
  [field]: "Pass",                 // key becomes "status"
  ["step" + index]: "Open browser" // key becomes "step1"
};

// The computed keys were turned into real property names.
console.log(result);
console.log(result.status); // Pass
console.log(result.step1);  // Open browser

// This is handy in test automation for building payloads with dynamic keys.
