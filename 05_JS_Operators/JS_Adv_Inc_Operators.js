let x = 10;
let y = 4;

// let result = ++x + y++;

// Step-by-step breakdown:
// ++x  -> x becomes 11, evaluates to 11
// y++  -> y becomes 4, evaluates to 4

// console.log("The result: "+result);
// console.log("The vale of x: "+x);
// console.log("The value of y: "+y);


// let result= ++x + x + x++;

// Step-by-step breakdown:
// ++x  -> x becomes 11, evaluates to 11
// x  -> evaluates to 11, then x becomes 11
// x++  -> x becomes 11, evaluates to 12

// console.log("The result: "+result);
// console.log("The result of x: "+x);



// let result = (++x) + (y--) - (x--) + (++y);
// Step-by-step breakdown:
// ++x  -> x becomes 11, evaluates to 11
// y--  -> evaluates to 4, then y becomes 3
// x--  -> evaluates to 11, then x becomes 10
// ++y  -> y becomes 4, evaluates to 4


// console.log("result:", result); 
// console.log("final x:", x);     
// console.log("final y:", y);   



let output = x++ * --x + x--;
// Step 1: x++  -> evaluates to 10, x becomes 11
// Step 2: --x  ->  10 becomes , evaluates to 10
// Step 3: x--  -> evaluates to 10, x becomes 9
// Calculation: (10 * 10) + 10 = 110

console.log("output:", output); 
console.log("x :", x);  