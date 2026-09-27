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
console.log("CONTINUE")
for (let i = 1; i <= 30; i++) {
  // Skip even numbers
  if (i % 2 === 0) {
    continue;
  } 
  //console.log(i);
  console.log(`Checking: ${i}`);
 }

 // Stop completely when we find a number divisible by 7
 //Break
 console.log("BREAK")

 for(let i = 1; i <= 30; i++){
  if (i % 7 === 0) {
    console.log(`Found first odd multiple of 7: ${i}`);
    break;
  }
  console.log(`Checking: ${i}`);
}