//eatfood, prepatrefood, reviewFood. A sample program with Both resolve, reject

// Function that simulates preparing food.
function prepareFood(itemName){
    console.log("The ", itemName," is preparing")
    let isFoodPrepared=true;
return new Promise(function(resolve, reject){
    setTimeout(() => {
        if (isFoodPrepared) {
            resolve("Food is ready.")
        } else {
            reject("Food is not prepared.")
        }
    }, 2000);
})
}

// Function that simulates serving and eating food.
function eatFood() {
    // Runs immediately when called
    console.log("Food is served on plates...");
    let isFoodEat=true

    // Simulating a 2-second cooking delay using setTimeout (asynchronous)
    return new Promise(function (resolve) {
        setTimeout(() => {
        if (isFoodEat) {
            resolve("Ate food");
        } else {
            reject("Didn't eat food")
        }
        
    }, 2000);
    });
}

// Function that simulates serving and review food.
function reviewFood() {
    console.log("Ready to give review");
    let isreviewed=true
    return new Promise(function (resolve, reject) {
         setTimeout(() => {
       if (isreviewed) {
         console.log("Food is delicious. I gave 5 stars.");
             resolve("Reviewed successfully");
       } else {
        reject("Didn't review for food.")
       }
        
    }, 2000);
    
    });
}

// Async function managing the sequential workflow using 'await'
async function lunchTime() {
   try {
     // 'await' pauses execution here until prepareFood's promise resolves (waits 2s)
     let food=await prepareFood("Biryani")
     console.log(food)
 
     // Pauses execution here until eatFood's promise resolves (waits another 2s)
     let eat=await eatFood()
     console.log(eat);
 
     // Pauses execution here until reviewFood's promise resolves (waits another 2s)
     let review=await reviewFood()
     console.log(review);
   } catch (error) {
    console.log(error);
    
   }
    
    
}

lunchTime()