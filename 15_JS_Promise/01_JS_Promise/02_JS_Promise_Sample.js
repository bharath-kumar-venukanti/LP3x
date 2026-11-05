// Create a new Promise simulating a test execution

// It takes 'resolve' (for success) and 'reject' (for failure) as parameters.

let testRun =new Promise(function (resolve, reject) {
    //Immediately reject the promise, simulating a failed test condition
    reject("Assertion Failed.")
})
//Consume the Promise using chaining (.then, .catch)
testRun.then(function (data) {
    // .then() block handles successful fulfillment (resolve).
   setTimeout(() => {
    console.log(data)
   }, 2000)
}) .catch(function (error) {
    //.catch() block handles any errors or rejections.
    setTimeout(() => {
        console.log(error)
    }, 5000);
})