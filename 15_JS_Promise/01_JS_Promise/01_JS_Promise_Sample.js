// Create a new Promise that simulates an API call.

let apiCall= new Promise(function (resolve, reject) {
    // Immediately simulate a successful API response with a status code
    resolve({status: 200, body: "User Data"});
});


// .then() runs ONLY when the promise resolves successfully.
apiCall.then(function (response) {
    console.log(response)
    // Accesses and prints just the status property
    console.log(response.status)
    // Accesses and prints just the body property
    console.log(response.body)
})