let response;
// while(!response){
//     console.log("Enter your name");
// response=require('fs').readFileSync(0, 'utf8');
// } console.log("Hello, "+response+"!")


while (response === undefined || response === "") {
 response=require('fs').readFileSync(0, 'utf8');
  
  if (response === null) {
    console.log("User cancelled the prompt.");
    break; 
  }
}

if (response) {
  console.log("Hello, " + response + "!");
}