// Accessing elements
let fruits=["Apple","Banana","Cherry"];
//length of the array
console.log("The fruits array length is: " + fruits.length);
//accessing elements using index
console.log("The fruit at index 0 is: " + fruits[0]);
console.log("The fruit at index 1 is: " + fruits[1]);
console.log("The fruit at index 2 is: " + fruits[2]);   
console.log("The fruit at index 3 is: " + fruits[fruits.length-2]);//banana
console.log("The fruit at index 4 is: " + fruits.at(1));//banana
console.log("The fruit at negative index -1 is: " + fruits.at(-1));//cherry