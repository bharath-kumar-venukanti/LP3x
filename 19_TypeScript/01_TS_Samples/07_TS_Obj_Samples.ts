//Object Annotations

let user:{name:string, age:number}={
    name:"Bharath",
    age:30
};

// Print just the name
console.log(user.name); 

// Print just the age
console.log(user.age);  

// Print both together using template literals
console.log(`Name: ${user.name}, Age: ${user.age}`);
