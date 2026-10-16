const testResults = ["Fail", "Fail", "Pass"];
// Start at index 0 (the first array element).
let attempt=0;

for (const element of testResults) {
    // console.log(`Result: ${element}`);
    if (element==="Pass") {
        console.log(`Result: ${element}`);
        console.log("The test is passed")
    }
}