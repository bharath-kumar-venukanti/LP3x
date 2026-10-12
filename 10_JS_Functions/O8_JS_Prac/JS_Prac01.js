//Goal: Write a function isEven(num) that takes an integer and returns true if it is even and false if it is odd.
//Key Concept: Modulo operator (%).

//1. Sample Function

console.log("-----Sample Function-----")
//Defining
function isEven(num){
    let yesEven=num % 2===0;
    return yesEven
}

//Calling it
let ans1=isEven(4)
console.log(ans1);  
console.log(isEven(7));  
console.log(isEven(0));  
console.log(isEven(-3)); 

//2. Function as Expression

//Defining
console.log("-----Function as Expression-----")
const isEven2=function(num){
    return num%2===0;
}

//calling it
let ans2=isEven2(4)
console.log(ans1);  
console.log(isEven2(7));  
console.log(isEven2(0));  
console.log(isEven2(-3)); 


//3. Arrow Function
console.log("-----Arrow Function-----")
//Defining
const isEven3=(num)=>{return num%2===0;}

//calling it    
let ans3=isEven3(4)
console.log(ans1);  
console.log(isEven3(7));  
console.log(isEven3(0));  
console.log(isEven3(-3));

