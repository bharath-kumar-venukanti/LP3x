const testResults = ["Fail", "Fail", "Pass"];
// Start at index 0 (the first array element).
let attempt=0;

for (let testAttempt = 0; testAttempt < testResults.length; testAttempt++) {
    const element = testResults[testAttempt];
      // Display each attempt and its result.
        console.log(`Attempt ${testAttempt + 1}: ${element}`);
     // Stop checking when the test passes.
    if (element==="Pass") {
        console.log("The Test is Passed")
        break
    } 
}