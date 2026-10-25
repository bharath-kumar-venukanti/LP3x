
//defining function
function greet(name, callback){
    // Invoking the callback
    console.log("Hi! Mr."+name)
    // This executes the callback function
    callback()
}
//


let userName="Bharath"

greet(userName, function () {
    console.log("Welcome to Thailand")
})






