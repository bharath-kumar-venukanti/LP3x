// ============================================================
// JS_Identifiers.js
// Every possible way to create a variable using `var`
// ============================================================

// ------------------------------------------------------------
// 1. Declaration only (no value assigned)
// ------------------------------------------------------------
var a;
console.log(a); 

// ------------------------------------------------------------
// 2. Declaration + initialization
// ------------------------------------------------------------
var b = 10;
console.log(b);// 10

// ------------------------------------------------------------
// 3. Multiple declarations in ONE statement (comma separated)
// ------------------------------------------------------------
var c = 1, d = 2, e = 3;
console.log(c, d, e); 

// ------------------------------------------------------------
// 4. Mixed: some initialized, some left empty
// ------------------------------------------------------------
var f, g = 5, h;
console.log(f, g, h); 

// ------------------------------------------------------------
// 5. Re-assignment (the value can change)
// ------------------------------------------------------------
var i = 1;
i = 100;
console.log(i); 

// ------------------------------------------------------------
// 6. Re-declaration (allowed with `var` — unlike let/const)
// ------------------------------------------------------------
var j = 1;
var j = 2;        
console.log(j); 

// ------------------------------------------------------------
// 7. Function scope — var lives inside the function only
// ------------------------------------------------------------
function scopeDemo() {
  var inner = "I live inside the function";
  console.log(inner); 
}
scopeDemo();
// console.log(inner); 

// ------------------------------------------------------------
// 8. var is NOT block scoped (it leaks out of `if`/`for` blocks)
// ------------------------------------------------------------
if (true) {
  var blockVar = "I escaped the block";
}
console.log(blockVar); 

// ------------------------------------------------------------
// 9. Hoisting — the name is lifted up, the value is NOT
// ------------------------------------------------------------
console.log(hoisted); 
var hoisted = "now I have a value";
console.log(hoisted); 

// ------------------------------------------------------------
// 10. var with every common data type / Simple examples of each
// ------------------------------------------------------------
var num = 42;
var str = "hello";
var $=10;
var _a=20;
var pp=30;
var camelCase = "I am camelCase";
var PascalCase = "I am PascalCase";
var bool = true;
var arr = [1, 2, 3];
var obj = { name: "Ravi" };
var fn = function () { return "I am a function"; };
var nothing = null;
var notSet;
console.log(num, str,$, _a, pp, camelCase, PascalCase, bool, arr, obj, fn(), nothing, notSet);
// 42 hello true [ 1, 2, 3 ] { name: 'Ravi' } I am a function null undefined

// ------------------------------------------------------------
// 11. var in a loop (classic gotcha — the variable leaks out)
// ------------------------------------------------------------
for (var k = 0; k < 3; k++) {
  // loop body
}
console.log(k); 

// ------------------------------------------------------------
// 12. Implicit global (NO `var` keyword) — bad practice
// ------------------------------------------------------------
leaked = "I became global by accident";
console.log(leaked);






// NOTE: In "use strict" mode this line throws:
// ReferenceError: leaked is not defined

// ============================================================
// SUMMARY
// ------------------------------------------------------------
// var name;              -> declare only            => undefined
// var name = value;      -> declare + assign
// var x = 1, y = 2;      -> multiple in one statement
// name = value;          -> reassign an existing var
// var name = value;      -> redeclare (allowed!)
//
// var  -> function scoped, hoisted, can be redeclared
// let  -> block scoped,    hoisted but in TDZ
// const-> block scoped,    must be initialized, cannot reassign
// ============================================================
