// Function inside function

//The Independent Closure Instances Challenge
let count=0;
function makeCount() {

    let count=5;
    function inner() {
        count++;
        return count;
    }
    return inner;
}


// 2. Now counts and counts2 become functions
const counts = makeCount();
const counts2 = makeCount();

// 3. Call them like functions using ()
console.log(counts()); 
console.log(counts());  
console.log(counts2()); 