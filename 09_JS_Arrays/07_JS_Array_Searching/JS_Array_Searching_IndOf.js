//Array Searching
let fruits = ["Apple", "Banana", "Cherry"];
//let numbers = new Array(1, 2, 3, 4, 5);

// Using indexOf method - Finding the position of an element in an array.
console.log("----------indexOf method----------");
let SearchFruit=fruits.indexOf("Banana");
let SearchFruit1=fruits.indexOf("Mango"); // this will return -1 as "Mango" is not present in the array
console.log("This fruit is presented in array list and Index number is: "+SearchFruit);
console.log("This fruit is not presented in array list: "+SearchFruit1);

