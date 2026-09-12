// ============================================================
// JS_Let_Identifiers.js
// Every possible way to create a variable using `let`
// + NAMING CONVENTIONS (in table form below)
// Run with:  node JS_Let_Identifiers.js
// ============================================================


// ============================================================
// PART 1 — EVERY POSSIBLE WAY TO CREATE A VARIABLE WITH `let`
// ============================================================

// ------------------------------------------------------------
// 1. Declaration only (no value assigned)
// ------------------------------------------------------------
let a;
console.log(a); // undefined

// ------------------------------------------------------------
// 2. Declaration + initialization
// ------------------------------------------------------------
let b = 10;
console.log(b); // 10

// ------------------------------------------------------------
// 3. Multiple declarations in ONE statement (comma separated)
// ------------------------------------------------------------
let c = 1, d = 2, e = 3;
console.log(c, d, e); // 1 2 3

// ------------------------------------------------------------
// 4. Mixed: some initialized, some left empty
// ------------------------------------------------------------
let f, g = 5, h;
console.log(f, g, h); // undefined 5 undefined

// ------------------------------------------------------------
// 5. Re-assignment (the value CAN change with let)
// ------------------------------------------------------------
let i = 1;
i = 100;
console.log(i); // 100

// ------------------------------------------------------------
// 6. Re-declaration is NOT allowed in the same scope
// ------------------------------------------------------------
let j = 1;
// let j = 2;   // SyntaxError: Identifier 'j' has already been declared
console.log(j); // 1

// ------------------------------------------------------------
// 7. let can be assigned a different type later (dynamic typing)
// ------------------------------------------------------------
let k = 5;
k = "now I am a string";
k = true;
console.log(k); // true

// ------------------------------------------------------------
// 8. Block scope — let lives only inside its { } block
// ------------------------------------------------------------
{
  let blockOnly = "I stay inside this block";
  console.log(blockOnly); // I stay inside this block
}
// console.log(blockOnly); // ReferenceError: blockOnly is not defined

// ------------------------------------------------------------
// 9. NOT leaking out of `if` / `for` blocks (differs from var)
// ------------------------------------------------------------
if (true) {
  let ifScoped = "trapped in the if";
  console.log(ifScoped); // trapped in the if
}
// console.log(ifScoped); // ReferenceError: ifScoped is not defined

// ------------------------------------------------------------
// 10. Temporal Dead Zone (TDZ) — hoisted but unusable before line
// ------------------------------------------------------------
// console.log(tdz); // ReferenceError: Cannot access 'tdz' before initialization
let tdz = "declared here";
console.log(tdz); // declared here

// ------------------------------------------------------------
// 11. Same name allowed in DIFFERENT (nested) scopes
// ------------------------------------------------------------
let shadow = "outer";
{
  let shadow = "inner";   // this is a NEW variable, not a redeclaration
  console.log(shadow);    // inner
}
console.log(shadow);      // outer

// ------------------------------------------------------------
// 12. let inside a loop creates a NEW binding each iteration
// ------------------------------------------------------------
for (let n = 0; n < 3; n++) {
  // each loop gets its own `n`
}
// console.log(n); // ReferenceError: n is not defined

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


// ============================================================
// PART 2 — JAVASCRIPT NAMING CONVENTIONS  (TABLE FORM)
// ============================================================

// ------------------------------------------------------------
// TABLE A — What is ALLOWED vs NOT ALLOWED in a name
// ------------------------------------------------------------
// | Rule                          | Allowed? | Example          | Notes                    |
// |-------------------------------|----------|------------------|--------------------------|
// | Start with a letter           | YES      | `name`, `X`      | a-z, A-Z                 |
// | Start with `_` (underscore)   | YES      | `_temp`          | by convention = "private"|
// | Start with `$` (dollar)       | YES      | `$price`         | often used by libraries  |
// | Start with a digit            | NO       | `1stPlace`       | SyntaxError              |
// | Contain digits (not first)    | YES      | `item2`, `x1`    | fine anywhere after 1st  |
// | Contain a space              | NO       | `first name`     | use `_` or camelCase     |
// | Contain a hyphen `-`          | NO       | `first-name`     | reads as subtraction     |
// | Contain a dot `.`             | NO       | `user.name`      | reads as property access |
// | Use a reserved keyword        | NO       | `let`, `class`, `for` | SyntaxError        |
// | Use special symbols `@ # % !` | NO       | `price#`, `a@b`  | SyntaxError              |
// | Be case-sensitive             | YES      | `age` ≠ `Age`    | two DIFFERENT variables  |

// ------------------------------------------------------------
// TABLE B — Naming STYLES (how to format multi-word names)
// ------------------------------------------------------------
// | Style            | Looks like        | Used for                     |
// |------------------|-------------------|------------------------------|
// | camelCase        | `firstName`       | variables & functions  ✅   |
// | PascalCase       | `FirstName`       | classes & constructors ✅   |
// | snake_case       | `first_name`      | Python-style (rare in JS)    |
// | SCREAMING_SNAKE  | `MAX_SIZE`        | true constants          ✅   |
// | kebab-case       | `first-name`      | ❌ ILLEGAL in JS names       |

// ------------------------------------------------------------
// TABLE C — GOOD vs BAD variable names
// ------------------------------------------------------------
// | ❌ Bad        | Why bad                        | ✅ Good            |
// |--------------|--------------------------------|--------------------|
// | `let a = 25;`    | meaningless                 | `let age = 25;`    |
// | `let x1 = 25;`   | unclear                    | `let userAge = 25;`|
// | `let u = ...;`   | cryptic                    | `let user = ...;`  |
// | `let data = ...;`| too generic               | `let products = ...;`|
// | `let first name;`| space = SyntaxError       | `let firstName;`   |
// | `let 1st;`       | starts with digit          | `let first;`       |
// | `let let = 5;`   | reserved keyword           | `let value = 5;`   |
// | `let L = 100;`   | single capital looks like class/const | `let length = 100;` |
// | `let MyVar = 1;` | inconsistent casing        | `let myVar = 1;`   |

// ------------------------------------------------------------
// TABLE D — QUICK RULE-OF-THUMB CHEAT SHEET
// ------------------------------------------------------------
// | Question                              | Answer                    |
// |---------------------------------------|---------------------------|
// | What case for normal variables?       | camelCase  (`itemCount`)  |
// | What case for classes?                | PascalCase (`UserProfile`)|
// | What case for true constants?         | SCREAMING_SNAKE (`MAX`)   |
// | Can a name start with `$` or `_`?     | Yes, both are valid       |
// | Can a name start with a number?       | No                        |
// | Are names case-sensitive?             | Yes (`age` ≠ `Age`)       |
// | Can I use a reserved word?            | No (`let`, `for`, ...)    |
// | How descriptive should a name be?     | Descriptive, not cryptic  |

// ------------------------------------------------------------
// LIVE EXAMPLES OF GOOD NAMING
// ------------------------------------------------------------
let firstName = "Ravi";        // camelCase  ✅
let totalItems = 10;           // camelCase  ✅
let _internalCache = {};       // leading underscore for "private" ✅
let $price = 99.99;            // leading dollar is legal ✅
let userAge2 = 30;             // digits allowed after the first char ✅
// let 2ndUser = 30;           // ❌ SyntaxError: starts with a digit
// let first-name = "x";       // ❌ SyntaxError: hyphen not allowed
// let let = 5;                // ❌ SyntaxError: reserved keyword
console.log(firstName, totalItems, _internalCache, $price, userAge2);

// ============================================================
// SUMMARY
// ------------------------------------------------------------
// let name;              -> declare only            => undefined
// let name = value;      -> declare + assign
// let x = 1, y = 2;      -> multiple in one statement
// name = value;          -> reassign (allowed)
// let name = value;      -> redeclare in SAME scope => SyntaxError
//
// let   -> block scoped, hoisted but in TDZ, cannot redeclare
// var   -> function scoped, hoisted as undefined, can redeclare
// const -> block scoped, MUST be initialized, cannot reassign
//
// NAMING: use camelCase, be descriptive, start with letter/_/$,
//         never start with a digit, no spaces/hyphens/keywords.
// ============================================================
