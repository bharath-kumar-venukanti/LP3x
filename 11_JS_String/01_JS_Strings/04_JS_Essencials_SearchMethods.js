// 1. Declare a variable 'greet' and assign the string value "Hello" to it
let greet = "Hello";

// 2. toUppercase
let ucGreet=greet.toUpperCase();
console.log("Upper Case: "+ucGreet);

// 3. toLowecase
let lcGreet=greet.toLowerCase();
console.log("Lower case: "+lcGreet)

// 4. Checks if a string contains a specific word or letter (returns true or false).
let sentence = "I love this world";
let inc_sentence=sentence.includes("love")
console.log(inc_sentence)

// 5. indexOf: Finds the starting index of a word or letter (returns -1 if not found).
let ind_sentence=sentence.indexOf("p")
console.log(ind_sentence)

let ind_sentence2=sentence.indexOf("w")
console.log(ind_sentence2)

// 6. Startswith and endswith
let startswith_Sentence=sentence.startsWith("I love")
console.log(startswith_Sentence)

let endswith_Sentence=sentence.endsWith("ld")
console.log(endswith_Sentence)

// 7. String Template Literals
console.log(`${greet}, ${sentence}. Do you love this world?`)

