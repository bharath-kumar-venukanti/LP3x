
//defining function
function greet(name, callback){
    console.log("Hi!")
    // Check if the callback exists and is a function before calling it

    if(typeof callback==="function"){
        callback(name)
    } else{
        console.log("Error: A valid callback function was not provided!")
    }
   
}

let getUserName=(userName)=>console.log("Mr."+userName)

greet("Bharath", getUserName)






