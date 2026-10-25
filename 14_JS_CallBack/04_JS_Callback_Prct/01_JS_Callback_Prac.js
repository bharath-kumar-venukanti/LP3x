
//defining function
function greet(name, callback){
    console.log("Hi! "+name)
// Invoking the callback
    callback();
}

// Way 1:
let userName="Bharath";
// Passing an anonymous callback function
function getCallback(){
console.log("Im back to work.")
}

//Calling it
greet(userName, getCallback)




