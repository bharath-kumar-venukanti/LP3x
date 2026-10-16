let numbers = new Array(1, 2, 3, 4, 5);  //[1, 2, 3, 4, 5]

// Mapping the array: Creates a new array with "true" or "false" strings depending on whether each element is >= 3
let mappedNumbers = numbers.map(num => num >= 3 ? "true" : "false");
console.log("-----------Mapped numbers array----------");
console.log("Mapped numbers array: " + mappedNumbers);
