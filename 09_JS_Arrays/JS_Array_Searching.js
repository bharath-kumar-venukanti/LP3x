//Array Searching
let fruits = ["Apple", "Banana", "Cherry"];
//let numbers = new Array(1, 2, 3, 4, 5);

//1. Using indexOf method - Finding the position of an element in an array.
console.log("----------indexOf method----------");
let SearchFruit=fruits.indexOf("Banana");
let SearchFruit1=fruits.indexOf("Mango"); // this will return -1 as "Mango" is not present in the array
console.log("This fruit is presented in array list and Index number is: "+SearchFruit);
console.log("This fruit is not presented in array list: "+SearchFruit1);


//2. Using includes method - Checking if an element exists in an array.
console.log("----------includes method----------");
let fruitExists = fruits.includes("Banana");
let fruitExists1 = fruits.includes("Mango");
console.log("Does the fruit exist in the array? " + fruitExists);
console.log("Does the fruit doesnot exist in the array? " + fruitExists1);

//3. Using find method - Finding the first element that satisfies a condition.
console.log("----------find method----------");
let foundFruit = fruits.find(fruit => fruit === "Banana");
console.log("Found fruit: " + foundFruit);