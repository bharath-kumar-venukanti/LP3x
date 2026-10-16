let fruits = ["apple", "banana"];
let veggies = ["carrot", "spinach"];

//concatenating arrays using concat method
// let combined = fruits.concat(veggies);
// console.log(combined); // ["apple", "banana", "carrot", "spinach"]

//concatenating arrays using spread operator
let combined = [...fruits, ...veggies];
console.log(combined); // ["apple", "banana", "carrot", "spinach"]


//destructuring arrays

// Unpack by position
// let [firstFruit, secondFruit] = fruits;
// console.log(firstFruit); // "apple"
// console.log(secondFruit); // "banana"

// Skip elements & use Rest pattern (`...`)
let [firstFruit, secondFruit, ...otherFruits] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(otherFruits); // [] - since there are no other fruits in the array

//destructuring with numbers
let numbers = [1, 2, 3, 4, 5];
let [firstNum, secondNum, ...otherNums] = numbers;
console.log(firstNum); // 1
console.log(secondNum); // 2
console.log(otherNums); // [3, 4, 5]    

let [highest, secondHighest, ...rest] = [90, 80, 70, 60, 50];
console.log(highest); // 90
console.log(secondHighest); // 80
console.log(rest); // [70, 60, 50]