// Create individual resolved promises simulating different system checks

let checkAuth= Promise.resolve("Auth Ok")
let checkDB=Promise.resolve("DB Ok")
let checkCache=Promise.resolve("Cache Ok")

// Promise.all() waits for ALL promises in the array to resolve successfully.
Promise.all([checkAuth,checkDB,checkCache]).then(function (results) {
    // If all succeed, it returns an array containing all their results.
    console.log("All checks: "+results)
})