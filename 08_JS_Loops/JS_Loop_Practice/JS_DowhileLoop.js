//Retry Testing Using while Loop in JavaScript

const maxTry=5;
let initialTry=0;

do{
    
    console.log(`The Attempt Number is: ${initialTry} `)
    initialTry++;
}while (initialTry<maxTry) {
    console.log("Maximum attepts reached")
}


 