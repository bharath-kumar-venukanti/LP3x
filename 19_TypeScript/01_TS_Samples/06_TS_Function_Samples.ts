//Function Annotations

// 1. Function with a string parameter
function greetings(name: string) {
    // Print the welcome message to the console
    console.log("Welcome to India", name);
}

// Call the function with the name "Bharath"
greetings("Bharath");


// 2. Function with ": void", meaning it performs an action but returns no value
function greetings2(name: string): void {
    // Print the welcome message to the console
    console.log("Welcome to India", name);
}

// Call the second function
greetings2("Bharath");


// 3. Function that returns a string value instead of printing directly
function greetings3(name: string): string {
    // Return a formatted greeting string using template literals
    return `Welcome to India ${name}`;
}

// Call the function and store the returned string in a variable
let sendGreetings = greetings3("Bharath");

// Print the stored greeting variable to the console
console.log(sendGreetings);


// 4. Function stored inside a variable (Anonymous function)
let greet = function(name: string) {
    // Print the welcome message to the console
    console.log("Welcome to India", name);
};

// Call the function using its variable name
greet("Bharath");