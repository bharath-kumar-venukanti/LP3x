let str="Login_Test_Case_001"


// Declare a variable to store each extracted part of str.
let strSlice;

//Slice(start, end-1)- It can support Negative Index.
// Extract characters from index 0 to index 4.
strSlice = str.slice(0, 5);
console.log(strSlice);

// Extract characters from index 11 to the end of the string.
strSlice = str.slice(11);
console.log(strSlice);

// Extract the last 3 characters of the string.
strSlice = str.slice(-3);
console.log(strSlice);

