// slicing and combining arrays
// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end.
let arr = [1, 2, 3, 4, 5];
let fruits=["Apple", "Banana", "Coconut","Pinaple"]
//Slicing with start and end index
let slicedArr=arr.slice(1, 4); 
console.log("Sliced array from index 1 to 4: " + slicedArr);
console.log("------------------------------");

let slicedfruits=fruits.slice(0, 2);
console.log("Sliced fruits array from index 0 to 3 "+ slicedfruits)


//Slicing with only start index
let slicedArr2=arr.slice(2);
console.log("Sliced array from index 2 to end: " + slicedArr2);
console.log("------------------------------");

//Slicing with negative start index
let slicedArr3=arr.slice(-3, -1);
console.log("Sliced array from index -3 to -1: " + slicedArr3);
console.log("------------------------------");

//Slicing with negative start index and no end index
let slicedArr4=arr.slice(-3);
console.log("Sliced array from index -3 to end: " + slicedArr4);
console.log("------------------------------");



// combining arrays using concat method
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combinedArr=arr1.concat(arr2);
// console.log("Combined array using concat method: " + combinedArr);
// console.log("------------------------------");