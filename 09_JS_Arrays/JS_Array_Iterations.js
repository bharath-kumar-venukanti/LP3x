//Iterating through an array
let arr = [1, 2, 3, 4, 5];
let arrLength = arr.length;
//console.log("arr length: " + arrLength);
console.log("----------for loop----------");
//1. Using for loop
for (let i=0; i < arrLength; i++) {
    //console.log(arr[i]);
    console.log(`arr[${i}] = ${arr[i]}`);
}

console.log("----------forEach method----------");  
//2. Using forEach method
arr.forEach((value, num) => {
    //console.log(value);
    console.log(`arr[${num}] = ${value}`);
});

console.log("----------for...of loop----------");
//3. Using for...of loop
for (const value of arr) {
    //console.log(value);
     console.log(`arr[${arr.indexOf(value)}] = ${value}`);
}
