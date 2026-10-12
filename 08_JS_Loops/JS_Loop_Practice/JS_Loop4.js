//Print a right-angle triangle pattern of asterisks with 5 rows

/*To achieve:
1.Outerloop: count from 1 through 5, it controls rows
2.Innerloop: it controls number of asterisks (*) to be printed
*/

for(let row=1;row<=5;row++){
//     let rowString="";
//     for(let star=1;star<=row;star++){
//         rowString +="*"
//     }
//     console.log(rowString)
let stars="*".repeat(row);
console.log(stars)
 }
