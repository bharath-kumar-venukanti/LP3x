//Array Searching
let fruits = ["Apple", "Banana", "Cherry"];
//let numbers = new Array(1, 2, 3, 4, 5);

// Using find method - Finding the first element that satisfies a condition.
console.log("----------find method----------");
let foundFruit = fruits.find(fruit => fruit === "Banana");
console.log("Found fruit: " + foundFruit);

// Find: Starts with
console.log(fruits.find(f => f.startsWith("B"))); 

//Find: Ends with

console.log(fruits.find(f => f.endsWith("B"))); 