//For loop always follows ICU;
/*
I-Initialization
C-Condition
U-Updation
*/

// 1. Count from 1 to 5

console.log(" Count from 1 to 5")

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

let n=5;
for (let i = 1; i <= n; i++) {
  console.log(`Count: ${i}`);
}

// 2. Count down from 5 to 1
console.log("Count from 5 to 1")

for (let i = n; i >= 1; i--) {
  console.log(`Countdown: ${i}`);
}


// 3. Skip count (Even numbers from 0 to 5)

console.log("Skip count of Odd");
for (let i = 0; i <= n; i += 2) {
  console.log(`Even number: ${i}`);
}


// 4. Skip count (Odd numbers from 0 to 5)
console.log("Skip count of even");
for (let i = 0; i <= n; i += 3) {
  console.log(`Even number: ${i}`);
}