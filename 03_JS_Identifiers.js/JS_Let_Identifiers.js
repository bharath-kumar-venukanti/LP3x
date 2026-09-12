// ============================================================
// JS_Let_Identifiers.js
// Every possible way to create a variable using `let`
// ============================================================


// ============================================================
//  EVERY POSSIBLE WAY TO CREATE A VARIABLE WITH `let`
// ============================================================

// ------------------------------------------------------------
// 1. Declaration only (no value assigned)
// ------------------------------------------------------------
let a;
console.log(a); 

// ------------------------------------------------------------
// 2. Declaration + initialization
// ------------------------------------------------------------
let b = 10;
console.log(b); 

// ------------------------------------------------------------
// 3. Multiple declarations in ONE statement (comma separated)
// ------------------------------------------------------------
let c = 1, d = 2, e = 3;
console.log(c, d, e); 

// ------------------------------------------------------------
// 4. Mixed: some initialized, some left empty
// ------------------------------------------------------------
let f, g = 5, h;
console.log(f, g, h); 

// ------------------------------------------------------------
// 5. Re-assignment (the value CAN change with let)
// ------------------------------------------------------------
let i = 1;
i = 100;
console.log(i);// 100

// ------------------------------------------------------------
// 6. Re-declaration is NOT allowed in the same scope
// ------------------------------------------------------------
let j = 1;
// let j = 2;  
console.log(j); 

// ------------------------------------------------------------
// 7. let can be assigned a different type later (dynamic typing)
// ------------------------------------------------------------
let k = 5;
k = "now I am a string";
k = true;
console.log(k); 

// ------------------------------------------------------------
// 8. Block scope — let lives only inside its { } block
// ------------------------------------------------------------
{
  let blockOnly = "I stay inside this block";
  console.log(blockOnly); 
}
// console.log(blockOnly); 


// ------------------------------------------------------------
// 9. NOT leaking out of `if` / `for` blocks (differs from var)
// ------------------------------------------------------------
if (true) {
  let ifScoped = "trapped in the if";
  console.log(ifScoped); 
}
// console.log(ifScoped); 

// ------------------------------------------------------------
// 10. Temporal Dead Zone (TDZ) — hoisted but unusable before line
// ------------------------------------------------------------
// console.log(tdz); 
let tdz = "declared here";
console.log(tdz); 

// ------------------------------------------------------------
// 11. Same name allowed in DIFFERENT (nested) scopes
// ------------------------------------------------------------
let shadow = "outer";
{
  let shadow = "inner";   
  console.log(shadow);    
}
console.log(shadow);     

// ------------------------------------------------------------
// 12. let inside a loop creates a NEW binding each iteration
// ------------------------------------------------------------
for (let n = 0; n < 3; n++) {
  // each loop gets its own `n`
}
// console.log(n); 

// ------------------------------------------------------------
// 13. let with every common data type
// ------------------------------------------------------------
let num = 42;
let str = "hello";
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Ravi" };
let fn = function () { return "I am a function"; };
let nothing = null;
let notSet;
console.log(num, str, bool, arr, obj, fn(), nothing, notSet);
// 42 hello true [ 1, 2, 3 ] { name: 'Ravi' } I am a function null undefined

