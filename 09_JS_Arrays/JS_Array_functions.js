//Adding / removing elements

let fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial fruits array: " + fruits);
console.log("Initial fruits array length: " + fruits.length);
console.log("------------------------------");
//1. adding elements to the end of the array
// fruits.push("Date");
// console.log("After adding Date to the end of the array: " + fruits);

let newFruit = "Date";
fruits.push(newFruit);
console.log("After adding " + newFruit + " to the end of the array: " + fruits);
console.log("------------------------------");

//2. adding elements to the beginning of the array
let newFruit2 = "Avocado";
fruits.unshift(newFruit2);
console.log("After adding " + newFruit2 + " to the beginning of the array: " + fruits);
console.log("------------------------------");

//3. removing elements from the end of the array
let removedFruit= fruits.pop();
console.log("After Removing "+removedFruit);
console.log("After removing the last element from the array: " + fruits);
console.log("------------------------------");

//4. removing elements from the beginning of the array
let removedFruit2= fruits.shift();
console.log("After Removing "+removedFruit2);
console.log("After removing the first element from the array: " + fruits);
console.log("------------------------------");

//5. adding and removing elements from the middle of the array
//5.1 removing elements from the middle of the array
//let fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 1); //removes 1 element at index 1
console.log("After removing the element at index 1 from the array: " + fruits);
console.log("------------------------------");
//5.2 adding elements to the middle of the array
fruits.splice(1,0, "Mango"); //adds "Mango" at index 1
console.log("After adding Mango at index 1 to the array: " + fruits);
console.log("------------------------------");
//5.3 replacing elements in the middle of the array
fruits.splice(1, 1, "Pineapple");
console.log("After replacing the element at index 1 with Pineapple: " + fruits);
console.log("------------------------------");
//5.3.1 replacing elements in the multiple positions of the array using splice
fruits.splice(1, 0, "Grapes", "Kiwi");
console.log("After adding Grapes and Kiwi at index 1 to the array: " + fruits);
console.log("------------------------------");
//6. slicing the array
let sliceFruits=fruits.slice(0, 2);
console.log("After slicing the array from index 0 to 2: " + sliceFruits);
console.log("------------------------------");
//7. sort items in the array
let sortedFruits = fruits.sort();
console.log("After sorting the array: " + sortedFruits);
console.log("------------------------------");
//8. reverse items in the array
let reversesFruits= fruits.reverse();
console.log("After reversing the array: " + reversesFruits);

