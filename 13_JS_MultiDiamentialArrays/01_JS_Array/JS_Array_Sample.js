// Define a 3x3 matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(matrix.length)

    // Approach 1

// Outer loop: Iterates through the rows
for(let i=0;i<matrix.length;i++){
  // Inner loop: Iterates through the columns of the current row
    for(let j=0;j<matrix[i].length;j++){

        process.stdout.write(matrix[i][j]+" ")    //matrix[i][j] - 0,0 ->1, 0,1->2, 0,3->3
    }
    // Moves to the next line after finishing a row
    console.log("")
}

console.log("------------------------------")

// Approach 2
 // Outer loop: Iterates through the rows
for(let i=0; i<matrix.length;i++){
   
    let row= ""
    // Inner loop: Iterates through the columns of the current row
    for(j=0;j<matrix[i].length;j++){
        row+=matrix[i][j]+" ";
    }
    console.log(row)
}