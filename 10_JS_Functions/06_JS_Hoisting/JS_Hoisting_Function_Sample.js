
//var Hoisting Inside a Function
//var is function-scoped, so status is hoisted to

function getStatus() {
    console.log("Hoisted within function")
    // undefined (hoisted within function), because consoling the status before decalaring
    console.log(status)
    var status="Active"; // it declared
    console.log(status) // will be active
    return status
    
}
getStatus()


// --- Function Expression Hoisting (does not work the same way) ---
//getStatus(); // Throws TypeError: sayHi is not a function (if var) or ReferenceError (if let/const)
//Beacause it is declared as var getStatus1, in general it will print Undefined.
console.log("--- Function Expression Hoisting with var ---")
var getStatus1 = function() {
    console.log("Active");
};

console.log(getStatus1())



