//eatfood, prepatrefood, reviewFood

// Function that simulates preparing food.
function prepareFood(itemName){
    console.log("The ", itemName," is preparing")
return new Promise(function(resolve){
    setTimeout(() => {
        resolve("Food is ready.")
    }, 2000);
})
}

// Function that simulates serving and eating food.
function eatFood() {
    // Runs immediately when called
    console.log("Food is served on plates...");

    // Simulating a 2-second cooking delay using setTimeout (asynchronous)
    return new Promise(function (resolve) {
        setTimeout(() => {
        resolve("Ate food");
        
    }, 2000);
    });
}

// Function that simulates serving and review food.
function reviewFood() {
    console.log("Ready to give review");
    return new Promise(function (resolve) {
         setTimeout(() => {
        console.log("Food is delicious. I gave 5 stars.");
            resolve("Reviewed successfully");
        
    }, 2000);
    
    });
}

// Async function managing the sequential workflow using 'await'
async function lunchTime() {
    // 'await' pauses execution here until prepareFood's promise resolves (waits 2s)
    let food=await prepareFood("Biryani")
    console.log(food)

    // Pauses execution here until eatFood's promise resolves (waits another 2s)
    let eat=await eatFood()
    console.log(eat);

    // Pauses execution here until reviewFood's promise resolves (waits another 2s)
    let review=await reviewFood()
    console.log(review);
    
    
}

lunchTime()