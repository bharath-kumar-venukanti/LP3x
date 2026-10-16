//let max=0;

// Outer function that sets the maximum allowed retry limit
function maxRetryTracker(max) {
    // It starts at 0 and persists across multiple calls to retryAgain.
    let attempts = 0;
    // Inner function that tracks and handles each retry attempt
    // Increment the attempt count each time this function is called
    function retryAgain(testName) {
        attempts++; 
        // Check if the current attempts have reached or exceeded the maximum limit
        if (attempts >= max) {
            return `${testName} exceeded for counts ${max}`;
        }

        // Otherwise, return the current progress status
        return `Attempt ${attempts}/${max} for ${testName}`;
    } 

    // Returns the inner function reference, creating a closure
    return retryAgain; 
}

// 'countRetry' now holds the inner 'retryAgain' function with its own private 'attempts' counter.
let countRetry = maxRetryTracker(5);

// Invoke the returned function. 
// Note: Since no argument is passed here, 'testName' will be 'undefined'. 
console.log(countRetry());

console.log(countRetry("Login"));