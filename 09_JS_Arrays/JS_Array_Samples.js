// 1. Creating arrays

let fruit=[]; //An Empty array
//console.log("fruits: "+fruit); //0
console.log("Empty array length: " + fruit.length+", fruits: "+fruit); //0

let browsers=["Chrome","Firefox","Edge","Safari"]; //An array with 4 elements
//console.log("Browsers array length: " + browsers.length + ", browsers: " + browsers ); //4
console.log("The Browser at index 2 is: " + browsers[2]);

let numbers=new Array(1,2,3,4,5); //An array with 5 elements
//console.log("Numbers array length: " + numbers.length + ", numbers: " + numbers); //5
console.log("The Number at index 0 is: " + numbers[0]);
//Reverse indexing at() is supported in JS arrays
console.log("The Number at negative index 1 is: " + numbers.at(-1)); 
//undefined, because negative indexing [] is not supported in JS arrays
console.log("The Number at negative index 1 is: " + numbers[-1]); 

let scores=new Array(5); //An array with fixed length of elements, but no values assigned yet
//declaring an array with values using index.
scores[0]=10;
scores[1]=20;   
scores[2]=30;
scores[3]=40;
scores[4]=50;

//console.log("Scores array length: " + scores.length + ", scores: " + scores); //5
console.log("Scores array: " + scores);

//An array can also be created using Array.of() method
//let testresults=Array("Pass","Fail","Pass","Pass","Fail");
//console.log("The array is : "+testresults);
let testresults=Array.of("Pass","Fail","Pass","Pass","Fail");
console.log("The array is 'Array.of()' : "+testresults);

//An array can also be created using Array.from() method
let testresults2=Array.from(["Pass","Fail","Pass","Pass","Fail"]);
console.log("The array is 'Array.from()' : "+testresults2[1]);

//An array can also be created using Array.from() method from a string
let testresults3=Array.from("Pass");
console.log("The array is 'Array.from()' from a string: "+testresults3);

//An array for mixed data types
let mixedarray=["Pass",10,true,null,undefined];
console.log("The array is for mixed data types: "+mixedarray);
//accessing object property in the array
console.log("The array is for mixed data types: "+mixedarray.at(2)); 

