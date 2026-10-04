// JS Array Sample
// Demonstrates common array operations in JavaScript

// 1. Creating arrays
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = new Array(1, 2, 3, 4, 5);

// 2. Accessing elements
console.log(fruits[0]);              // "Apple"
console.log(fruits[fruits.length - 1]); // "Cherry"
console.log(fruits.at(-1));          // "Cherry" (negative indexing)

// 3. Adding / removing elements
fruits.push("Date");                 // add to end
fruits.unshift("Avocado");           // add to start
fruits.pop();                        // remove from end
fruits.shift();                      // remove from start
console.log(fruits);                 // ["Apple", "Banana", "Cherry"]

// 4. Splicing and slicing
const months = ["Jan", "Mar", "Apr", "Jun"];
months.splice(1, 0, "Feb");          // insert at index 1
console.log(months);                 // ["Jan", "Feb", "Mar", "Apr", "Jun"]
const slice = months.slice(1, 3);    // copy elements 1..2
console.log(slice);                  // ["Feb", "Mar"]

// 5. Iteration
for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// 6. Transformation methods
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(doubled, evens, sum);    // [2,4,6,8,10] [2,4] 15

// 7. Searching
console.log(numbers.indexOf(3));     // 2
console.log(numbers.includes(4));    // true
console.log(fruits.find(f => f.startsWith("B")));  // "Banana"

// 8. Sorting and reversing
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
unsorted.sort((a, b) => a - b);      // ascending numeric sort
console.log(unsorted);               // [1,1,2,3,4,5,6,9]
console.log([...unsorted].reverse()); // reversed copy

// 9. Other useful methods
console.log(numbers.some(n => n > 4));   // true
console.log(numbers.every(n => n > 0));   // true
console.log(["a", "b", "c"].join("-"));   // "a-b-c"
console.log(Array.from("hello"));         // ["h","e","l","l","o"]

// 10. Spread and destructuring
const more = [...fruits, "Elderberry"];
const [first, second, ...rest] = more;
console.log(first, second, rest);    // "Apple" "Banana" ["Cherry","Elderberry"]

// 11. Nested / multidimensional arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]);           // 6
console.log(matrix.flat());          // [1,2,3,4,5,6,7,8,9]
