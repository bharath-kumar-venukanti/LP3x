// Define a function using the rest parameter syntax (...) to gather any number of arguments into an array named 'codes'
function hasError(...codes) {
    // Use the Array.some() method to check if at least one code in the array is greater than 400
    return codes.some(s => s > 400);
}

// Define an array of response status codes
let response = [100, 200, 400, 500];

// Use the spread operator (...) to expand the array elements as individual arguments into the hasError function
console.log(hasError(...response)); 