//Print a pyramid pattern using stars. For input n, print n rows where row i has (n-i) leading spaces and (2*i-1) stars.

let n=4;


// --- Approach 1: Using nested loops for spaces and stars ---

for (let i = 1; i <= n; i++) {
    // Initialize the row
    let row =" "
    
    // Calculate the number of leading spaces for the current row
    let spaces = n - i;
    
    // Inner loop: Appends the required leading spaces
    for (let j = 1; j <= spaces; j++) {
         row += " ";
    }

    // Calculate the number of stars for the current row (formula creates odd numbers: 1, 3, 5, etc.)
    let stars = 2 * i - 1;

    // Inner loop: Appends the required stars to the row
    for (let j = 1; j <= stars; j++) {
        row += "*";
    }
    
    // Print the completed row to the console
    console.log(row);
}


console.log("---------------------")

// --- Approach 2: Using the clean and concise .repeat() method ---

for (let i = 1; i <= n; i++) {
    // Calculate and generate the leading spaces using repeat()
    let spaces = n - i;
    let row = " ".repeat(spaces);
    
    // Calculate and generate the stars using repeat()
    let stars = 2 * i - 1;
    let col = "*".repeat(stars);
    
    // Combine spaces and stars, then print the row
    console.log(row + col);
}   