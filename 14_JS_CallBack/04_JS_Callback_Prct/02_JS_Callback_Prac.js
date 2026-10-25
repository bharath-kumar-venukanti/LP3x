// 1. Define the operations (these will act as our callbacks)

function add(a,b) {
    return a+b
}

function multiply(a,b) {
    return a*b
}

// 2. Define the main function that accepts a callback

function calculate(fn1, fn2, fnoperations) {
    console.log("Calculations started....")
     // Execute the callback function passed as an argument
    return fnoperations(fn1,fn2);
}

//call it

let sum=calculate(5, 10, add)
console.log(sum)