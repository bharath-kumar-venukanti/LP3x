
//var Hoisting Inside a Function
//var is function-scoped, so status is hoisted to
function getStatus() {
    console.log("Hoisted within function")
    // undefined (hoisted within function)
    console.log(status)
    var status="Active";
    console.log(status)
    return status
    
}
getStatus()


// --- Function Expression Hoisting (does not work the same way) ---
//getStatus(); // Throws TypeError: sayHi is not a function (if var) or ReferenceError (if let/const)
console.log("--- Function Expression Hoisting with var ---")
var getStatus1 = function() {
    console.log("Active");
};

console.log(getStatus1())

//var Hoisting with if Blocks (No Block Scope!)

// Both var declarations should be hoisted to function scope.
function checkAccess(isAdmin) {
    if (isAdmin) {
        var accessLevel="FULL"
    } else{
        var accessLevel="LIMITED"
    }
     // Works! var ignores block scope
    console.log(accessLevel)
}

// Pass actual booleans instead of concatenated strings
checkAccess(true)
checkAccess(false)


