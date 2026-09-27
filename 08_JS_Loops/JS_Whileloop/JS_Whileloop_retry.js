//A sample code for retrying an API call as long as the status code is 404 (Not Found). Once the status becomes 200 (OK), the loop terminates.

let attempts=0;
// while (attempts<5) {
//     console.log(`Attempts: ${attempts}`)
//     attempts++;
// }

let response=404;
while (response===404) {
    // console.log(`attempts: ${attempts} and response: ${response}. Retrying...`)
    attempts++;
    console.log(`attempts: ${attempts} and response: ${response}. Retrying...`)
   if(attempts===3){
    response=200;
    console.log(`Response is ${response}`)
   } 
} console.log(`Success! Server returned status ${response}.`);