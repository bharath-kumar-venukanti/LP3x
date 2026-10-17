const str = "   Login Test Case   ";

// trim(): Remove whitespace from both ends.
console.log(str.trim());

// trimStart(): Remove whitespace from the beginning.
console.log(str.trimStart()); 

// trimEnd(): Remove whitespace from the end.
console.log(str.trimEnd()); 

// Spaces between words remain unchanged.
console.log("   Hello   World   ".trim()); // "Hello   World"

// Remove tabs and newlines from both ends.
console.log("\t\nHello JavaScript\n\t".trim()); // "Hello JavaScript"

// A string containing only whitespace becomes empty.
console.log("   ".trim()); // ""

// The original string stays unchanged.
// console.log(str); // "   Login Test Case   "