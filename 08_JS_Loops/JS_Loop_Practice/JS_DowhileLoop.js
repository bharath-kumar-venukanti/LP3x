//Retry Testing Using while Loop in JavaScript

const maxTry=5;
let initialTry=0;

do{
    initialTry++;
    console.log(`The Attempt Number is: ${initialTry} `)
}while (initialTry<maxTry) {
    console.log("Maximum attepts reached")
}


 