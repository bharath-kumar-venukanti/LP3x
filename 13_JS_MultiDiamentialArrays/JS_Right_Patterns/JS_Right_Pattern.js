/**
 * Prints a right-angled triangle pattern of stars (*).
 * The height of the triangle is set to 3 rows.
 */

let patLen=3;

// Outer loop: Controls the rows
for(let i=1;i<=3;i++){
   
        let patternStars="*"
        //by using repeat()
        console.log(patternStars.repeat(i))
    
}

console.log("---------------------------")

//When even J<=i print the stars
// Outer loop: Controls the rows (runs from i = 1 to 3)
for(let i=1;i<=3;i++){

     // Initialize an empty string for the current row's star pattern
    let pattern=""
   

    // Inner loop: Appends a star (*) to the pattern string 'i' times for the current row
    for (let j = 1; j <= i; j++) {
       // Appends a star to the existing pattern string
         pattern+="*"

           
    }
    // console.log(pattern.repeat(i)) 
    console.log(pattern)
}
