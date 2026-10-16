const testResults = ["Fail", "Fail", "Pass"];
// Start at index 0 (the first array element).
let attempt=0;

testResults.forEach((element, index) => {
    //console.log(`The attempt is ${index+1}: ${element}`)
    if (element==="Pass") {
      console.log(`The attempt is ${index+1}: ${element}`)
      console.log("Test is Passed")  
    }
});