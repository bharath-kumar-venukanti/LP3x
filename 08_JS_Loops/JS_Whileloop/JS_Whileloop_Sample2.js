let response;
while(!response){
    console.log("Enter your name");
response=require('fs').readFileSync(0, 'utf8');
} console.log("Hello, "+response+"!")