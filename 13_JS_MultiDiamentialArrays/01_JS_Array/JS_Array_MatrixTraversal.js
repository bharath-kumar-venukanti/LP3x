/**
 * 2D Matrix Traversal & Length Inspector
 */

// Define a 3x3 matrix
let matrix = [
    [1, 2, 3], // Row 0
    [4, 5, 6], // Row 1
    [7, 8, 9]  // Row 2
];

console.log("=== 1. LENGTH INSPECTION ===");
let matLength=matrix.length;
console.log("Total Rows (matrix.length):", matLength);

console.log("Columns in Row 0 (matrix[0].length):", matrix[0].length);
console.log("Last Row (matrix[matrix.length - 1]):", matrix[matrix.length - 1]);
console.log("Row 2, Col 2", matrix[2][2])
