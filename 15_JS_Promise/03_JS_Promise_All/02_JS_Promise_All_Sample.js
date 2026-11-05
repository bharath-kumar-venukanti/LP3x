// Create individual resolved promises simulating different system checks

let checkAuth= Promise.resolve("Auth Ok")
let checkDB=Promise.reject("DB Down")
let checkCache=Promise.resolve("Cache Ok")

// Promise.all() waits for ALL promises in the array to resolve successfully.
Promise.all([checkAuth,checkDB,checkCache]).then(function (results) {
    // If all succeed, it returns an array containing all their results.
    console.log("All checks: "+results)
}) .catch(function (errorResults) {
    // This catches the "DB Down" error
    console.log("All checks:",errorResults)
}).finally(function () {
    console.log("Session Closed.")
})