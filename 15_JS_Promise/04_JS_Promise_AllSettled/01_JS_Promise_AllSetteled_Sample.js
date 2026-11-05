// Create individual resolved promises simulating different system checks

let test1=Promise.resolve("Test 1 Passed");
let test2=Promise.reject("Test 2 Failed")
let test3=Promise.resolve("Test 3 Passed")

// Promise.allSettled() waits for ALL promises to settle (meaning they either fulfill successfully OR get rejected)
Promise.allSettled([test1,test2,test3]).then((testResults)=>{
    // console.log("All Checks:",testResults)
    testResults.forEach((r, i)=>{
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    })
})