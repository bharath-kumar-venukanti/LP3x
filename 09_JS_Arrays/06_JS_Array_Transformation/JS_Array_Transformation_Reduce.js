let numbers = new Array(1, 2, 3, 4, 5); 


// Reducing the array: Calculates the sum of all elements in the array, starting from an initial value of 0
let reducedNumbers = numbers.reduce((sum, s) => sum + s, 0);
console.log("-----------Reduced numbers array----------");
console.log("Reduced numbers array: " + reducedNumbers);
