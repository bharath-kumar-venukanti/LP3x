
// This creates a reference, not a copy
let originalNumbers = [1, 2, 3, 4, 5];
// let copiedNumbers = originalNumbers; 
// console.log("Original Numbers:", originalNumbers); // [1, 2, 3, 4, 5]
// console.log("Copied Numbers:", copiedNumbers); // [1, 2, 3, 4, 5]

// // Modifying the copied array also modifies the original array
// let copiedNumbers2 = originalNumbers;
// copiedNumbers2.push(6);
// console.log("After modifying copiedNumbers2:");
// console.log("Original Numbers:", originalNumbers);

// SHALLOW COPY

// To create a shallow copy - use the spread operator
let shallowcopiedNumbers=[...originalNumbers];
console.log("Shallow Copied Numbers:", shallowcopiedNumbers); // [1, 2, 3, 4, 5]
console.log("--------------------------------------------------------------");

//To create a shallow copy - use the slice method
let shallowcopiedNumbers2=originalNumbers.slice();
console.log("Shallow Copied Numbers using slice:", shallowcopiedNumbers2); // [1, 2, 3, 4, 5]
console.log("--------------------------------------------------------------");

// To create a shallow copy - use the Array.from() method
let shallowCopiedNumbers3=Array.from(originalNumbers);
console.log("Shallow Copied Numbers using Array.from():", shallowCopiedNumbers3); // [1, 2, 3, 4, 5]
console.log("--------------------------------------------------------------");


// To create a shallow copy - use the concat() method
let shallowCopiedNumbers4=originalNumbers.concat();
console.log("Shallow Copied Numbers using concat():", shallowCopiedNumbers4);
console.log("--------------------------------------------------------------");



// To create a shallow copy - use the map() method
let shallowCopiedNumbers5=originalNumbers.map(n=>n);
console.log("Shallow Copied Numbers using map():", shallowCopiedNumbers5);
console.log("--------------------------------------------------------------");
