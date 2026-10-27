// Create a new Promise simulating a test execution

// It takes 'resolve' (for success) and 'reject' (for failure) as parameters.

let testRun =new Promise(function (resolve, reject) {
    //Immediately reject the promise, simulating a failed test condition
    reject("Assertion Failed.")
})
//Consume the Promise using chaining (.then, .catch)
testRun.then(function (data) {
    // .then() block handles successful fulfillment (resolve).
    console.log(data)
}) .catch(function (error) {
    //.catch() block handles any errors or rejections.
    console.log(error)
}) .finally(function () {
    // .finally() ALWAYS runs — whether the test passed or failed.
    console.log("I will be executed any how")
})