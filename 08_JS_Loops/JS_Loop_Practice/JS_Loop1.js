//Print numbers from 1 to 20. For every multiple of 3, print "3x" next to the number.


// Start a loop with counter variable 'i' initialized at 1
// The loop continues as long as 'i' is less than or equal to 20.
// After each iteration, 'i' increases by 1 (i++).
let startingNumber=1;
let LastNumber=20;

//print "3x"
// let i;
// let printX3=i%3===0;

for(let i=startingNumber; i<=LastNumber;i++){
    // console.log(i);
    // if 'i' is divisible by 3 with no remainder.
    if(i%3===0){
        console.log(`3X - ${i}`)
     }
     //else{
    //     // If false (not a multiple of 3), print only the number itself.
    //     console.log("It is not multiple of 3: ", i)
    // }
}

