
//defining function
function greet(name, callback){
    // Invoking the callback
    console.log("Hi! ")
    // This executes the callback function and passes 'name' into it
    callback(name)
}

// Passing an anonymous callback function
function greet2(usernName){
console.log("Welcome Mr."+usernName)
}

//Calling it
//greet("Bharath",greet2)

let Myname="Bharath"
greet(Myname,greet2)





