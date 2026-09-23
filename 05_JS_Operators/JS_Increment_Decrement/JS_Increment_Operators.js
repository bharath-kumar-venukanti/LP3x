let a =10;
// let b = 5;

// // Postfix Increment
// console.log("a++ returns:", a++); // 10 (uses current value)
// console.log("a after a++:", a);   // 11 (incremented after)

// // Prefix Increment
// console.log("++b returns:", ++b); // 6 (incremented first)
// console.log("b after ++b:", b);   // 6 (remains updated)

let b=a++; //assigned the value of a to b first, then incremented a by 1
let c=++a; 
//Postfix Increment: The value of 'a' is assigned to 'b' first, then 'a' is incremented by 1.
console.log("----------Post-Fix----------");
console.log(b); 
console.log(a); //Incremented value of a

//Pre-fix Increment: increase the value by 1 first
console.log("----------Pre-Fix----------");
console.log(c); //Incremented value of a and assigned
console.log(a);