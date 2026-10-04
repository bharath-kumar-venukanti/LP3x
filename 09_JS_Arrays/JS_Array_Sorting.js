//Natural Sorting
let itemsList = ["Banana","apple","Cherry","date"];
let itemsList2 = ["Banana","Apple","Cherry","Date"];
//It follows ASCII character encoding,
let sortedItems=itemsList.sort();
//It follows Alphabetical order, ignoring case sensitivity
let sortedItems2=itemsList2.sort();
console.log("-----------Natural Sorting----------");
console.log("Natural Sorting: " + sortedItems); // ["Banana", "Cherry", "apple", "date"]
console.log("Natural Sorting: " + sortedItems2);// ["Apple", "Banana", "Cherry", "Date"]
//1. Sorting numbers
console.log("-----------Sorting single digitnumbers----------");
let score = [4,3,2];
console.log(score.sort());
// let reversedScore = score.slice().reverse();
// console.log("Reversed scores: " + reversedScore);
//2. Sorting numbers
let numbersList = [10, 5, 20, 15,1,2];
let sortedNumbers=numbersList.sort();
console.log("-----------Sorting numbers----------");
console.log("Sorted numbers: " + sortedNumbers); // [1, 10, 15, 2, 20, 5] - Incorrect sorting due to string comparison


//Sorting numbers in ascending order
let ascNumbers=numbersList.sort((a,b) => a-b);
console.log("-----------Sorting numbers in ascending order----------");
console.log("Ascending order: " + ascNumbers); // [1, 2, 5, 10, 15, 20]

//Sorting numbers in descending order
let descNumbers=numbersList.sort((a,b) => b-a);
console.log("-----------Sorting numbers in descending order----------");
console.log("Descending order: " + descNumbers); // [20, 15, 10, 5, 2, 1]


//Sorting items in ascending order
let ascItems=itemsList.sort((a,b) => a.localeCompare(b));
console.log("-----------Sorting items in ascending order----------");
console.log("Ascending order: " + ascItems); // ["apple", "Banana", "Cherry", "date"]

//Sorting items in descending order
let descItems=itemsList.sort((a,b) => b.localeCompare(a));
console.log("-----------Sorting items in descending order----------");
console.log("Descending order: " + descItems); // ["date", "Cherry", "Banana", "apple"]

