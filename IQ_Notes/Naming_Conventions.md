// ============================================================
// JAVASCRIPT NAMING CONVENTIONS  (TABLE FORM)
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
