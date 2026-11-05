//A function that simulates downloading test data, taking a callback function as input


function downloadTestData(callback) {
console.log("downloading test data.....")

    
    setTimeout(() => {
        let data={username: "Bharath", role:"QA"}
        console.log("Download Completed");
        // Execute the callback function and pass the data into it
        callback(data);
    }, 2000);

}


// Calling it by passing an inline function
 downloadTestData((receivedData)=>{
    console.log("Now running test with user:", receivedData.username);
    
 }) 
