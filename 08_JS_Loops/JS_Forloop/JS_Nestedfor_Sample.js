//The outer loop manages the rows, 
// while the inner loop manages the columns within each row.

//Initializing Rows count
 let rows = 5; 

// for(let i = 1; i <= rows; i++) {
//     for(let j = 1; j <= i; j++) {
//         console.log(i,j);
//     }
// }


//Outer loop for rows
for(let i=1; i<=rows; i++){

    // Initialize an empty string for each row
    let line = ""; 
    //Inner loop for columns
    for(let j=1; j<=i; j++){
        // Append an asterisk to the line string for each column
        line += "* ";
        //console.log(line);
    }
    console.log(line);
}
