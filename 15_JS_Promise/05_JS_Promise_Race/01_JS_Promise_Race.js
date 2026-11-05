
//Create the Fast Server Promise (100ms)
let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 100
});
//Create the Slow Server Promise (500ms)
let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 500ms")
    }), 500
});
// Promise.race() returns a single promise that fulfills or rejects as soon as 
// the FIRST promise in the array settles (wins the race). 
// The slower promises are ignored.
Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
})  