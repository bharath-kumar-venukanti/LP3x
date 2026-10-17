// A single object can hold different types of values at the same time.
// Strings, numbers, and booleans are the most common property types.

let testCase = {
  id: "TC_002",      
  name: "Checkout",  
  priority: 1,       
  duration: 1200,    
  isAutomated: true, 
  isFlaky: false     
};

console.log(testCase.name);       
console.log(testCase.priority);   
console.log(testCase.isAutomated); 

// typeof tells you the type of a value.
console.log(typeof testCase.priority);   
console.log(typeof testCase.isAutomated); 
