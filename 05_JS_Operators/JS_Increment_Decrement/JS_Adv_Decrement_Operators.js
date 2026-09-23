let val = 15;

let result = --val - val-- + --val;
// Step 1: --val -> 'val' becomes 14, evaluates to 14
// Step 2: val-- -> evaluates to 14, 'val' becomes 13
// Step 3: --val -> 'val' becomes 12, evaluates to 12
// Calculation: 14 - 14 + 12 = 12

console.log("result:", result);
console.log("final val:", val); 