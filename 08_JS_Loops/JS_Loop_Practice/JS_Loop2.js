//Given an array of numbers (e.g., [10, 20, 30, 40]), calculate and print the total sum without using reduce().

let numbers=[10, 20, 30, 40];

let sum=0;

//let length=numbers.length;

//Using a standard for loop (Index-based)

// for(let i=0; i<length;i++){
//     sum +=numbers[i]
//     console.log(sum)
// }

//Using a for...of loop (Value-based — cleaner)

for(const num of numbers){
    sum +=num
    console.log(sum);
}
// console.log(sum)

