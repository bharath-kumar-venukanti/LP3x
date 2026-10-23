//Find each row count

// Define a 3x3 matrix
let matrix = [
    [1, 2, 3], // Row 0
    [4, 5, 6], // Row 1
    [7, 8, 9]  // Row 2
];

let rowSum=matrix.map(row=>row.reduce((a,b)=>a+b))

console.log(rowSum)
