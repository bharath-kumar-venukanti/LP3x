//Use "break"to stop a loop early
//Use "continue" to skip the current iteration.
// let n=30;

// for (let i = 1; i <= n; i++) {
//     //Skip Even Number
//     if(i%2===0){
       
//         continue;
         
//     }
//     console.log(`${i}`)
// }

for (let i = 1; i <= 30; i++) {
  // Skip even numbers
  if (i % 2 === 0) {
    continue;
  }
  // Stop completely when we find a number divisible by 7
  if (i % 7 === 0) {
    console.log(`Found first odd multiple of 7: ${i}`);
    break;
  }
  console.log(`Checking: ${i}`);
 }