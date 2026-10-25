
//defining function
function greet(name, callback){
    // Invoking the callback
    console.log("Hi! " +name)
    // This executes the callback function
    callback()
}

// Passing an anonymous callback function
function greet2(){
console.log("Welcome to Thailand")
}

//Calling it
//greet("Bharath",greet2)

let Myname="Bharath"
greet(Myname,greet2)





