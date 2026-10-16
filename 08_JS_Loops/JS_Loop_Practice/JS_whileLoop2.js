//Retry Testing Using while Loop in JavaScript

const maxTry=5;
let initialTry=0;

while (initialTry<maxTry) {
    initialTry++;
    // console.log(`Attempt Number is: ${initialTry}`)

    if (initialTry===3) {
        console.log(`Attempt Number is: ${initialTry}`)
    }


}


 