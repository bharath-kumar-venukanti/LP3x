//call back with return value

function calculate(a, b, operation) {
    return operation(a,b)
}

let sum=calculate(5, 10, function (x,y) {
    return x+y;
})

console.log(sum)