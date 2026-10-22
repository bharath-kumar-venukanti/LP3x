//Print a left-aligned triangle pattern. For input n, print n rows in reverse order.

// Define the total number of rows for the pattern  

let patLen=3;

// --- Approach 1: Using the built-in string repeat() method ---

// Outer loop: controls the rows

for (let i = patLen; i >= 1;i--) {
    // Repeats the star character 'i' times and prints it directly 
    console.log("*".repeat(i))
}


console.log("----------------")

// --- Approach 2: Using nested loops ---

// Outer loop: Controls the rows

for (let i = patLen; i >=1; i--) {
    // Initialize an empty string for the current row
    let pattern="";
    for(let j=i; j>0; j--){
        // Inner loop: Appends stars to the pattern string 'i' times
         pattern=pattern+"*"
         
    }
    console.log(pattern)
}



