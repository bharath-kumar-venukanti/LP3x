//Retry Testing Using Loop in JavaScript

const maxTry=5;
const intialTry=0;

for(let attempts=intialTry; attempts<maxTry; attempts++){
    //console.log(attempts)
    if(attempts<3){
         console.log("Test passed!"+attempts);
    }
}
 