let numbers = new Array(1, 2, 3, 4, 5);  //[1, 2, 3, 4, 5]

// Mapping the array: Creates a new array with "true" or "false" strings depending on whether each element is >= 3
let mappedNumbers = numbers.map(num => num >= 3 ? "true" : "false");
console.log("-----------Mapped numbers array----------");
console.log("Mapped numbers array: " + mappedNumbers);

// Filtering the array: Creates a new array containing only the elements that are >= 3
let filteredNumbers = numbers.filter(num => num >= 3);
console.log("-----------Filtered numbers array----------");
console.log("Filtered numbers array: " + filteredNumbers);

// Reducing the array: Calculates the sum of all elements in the array, starting from an initial value of 0
let reducedNumbers = numbers.reduce((sum, s) => sum + s, 0);
console.log("-----------Reduced numbers array----------");
console.log("Reduced numbers array: " + reducedNumbers);

console.log("-----------------------------------------");

//every: Checks if all elements in the array are greater than 2
let everyNumbers=numbers.every(num => num>2); 
console.log("-----------Every numbers array----------");
console.log("Every numbers array: " + everyNumbers);

//some: Checks if at least one element in the array is greater than 4
let someNumbers=numbers.some(num => num>4);
console.log("-----------Some numbers array----------");
console.log("Some numbers array: " + someNumbers);


//Join: Joins all elements of the array into a string, separated by -
let count=numbers.join("-");
console.log("-----------Join numbers array----------");
console.log("Join numbers array: " + count);