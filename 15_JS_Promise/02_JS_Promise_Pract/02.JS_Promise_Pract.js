/**
 *  You order food on FOOD APP. The order is a PROMISE.

- Pending — food is being prepared (not ready yet)
- Fulfilled (Resolved) — food is delivered 
- Rejected — order cancelled
 */

//Define a variable to control whether the order succeeds or gets cancelled
let orderSuccessed = true;

//Creating the Promise
let foodOrder=new Promise(function (resolve, reject) {
    //The Pending State
    console.log("Status: Pending — food is being prepared")
    // If-else statement to check if the order was successful or not
    if (orderSuccessed) {
        // If true, fulfill (resolve) the promise with a success messag
        resolve("Status: Fulfilled (Resolved) — foodItem is delivered. Enjoy your meal.");
    } else {
        // If false, reject the promise with a cancellation message
        reject("Status: Rejected — order cancelled by the restaurant or delivery partner.");
    }
})
// The final outcome of the Promise with regular Function
foodOrder.then(function (successMessege){
    console.log(successMessege)
}).catch(function (errorMessage){
      console.error(errorMessage);
  });

