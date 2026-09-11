# Commands — JS Variables & Naming (Comment Reference)

All comments from the workspace JS files, converted into table form for quick reading.

**Source files**

| File | Purpose | Run command |
|---|---|---|
| `JS_Identifiers.js` | Every possible way to create a variable with `var` | `node JS_Identifiers.js` |
| `JS_Let_Identifiers.js` | Every possible way to create a variable with `let` + naming conventions | `node JS_Let_Identifiers.js` |

---

## 1. Creating a Variable with `var` — All Ways

| # | Concept | Code | Result / Output |
|---|---|---|---|
| 1 | Declaration only (no value assigned) | `var a;` | `undefined` |
| 2 | Declaration + initialization | `var b = 10;` | `10` |
| 3 | Multiple declarations in ONE statement (comma separated) | `var c = 1, d = 2, e = 3;` | `1 2 3` |
| 4 | Mixed: some initialized, some left empty | `var f, g = 5, h;` | `undefined 5 undefined` |
| 5 | Re-assignment (the value can change) | `var i = 1; i = 100;` | `100` |
| 6 | Re-declaration (allowed with `var` — unlike let/const) | `var j = 1; var j = 2;` | `2` (no error) |
| 7 | Function scope — `var` lives inside the function only | `function scopeDemo() { var inner = ...; }` | `inner` visible only inside; outside → `ReferenceError: inner is not defined` |
| 8 | `var` is NOT block scoped (it leaks out of `if`/`for` blocks) | `if (true) { var blockVar = ...; }` | `I escaped the block` |
| 9 | Hoisting — the name is lifted up, the value is NOT | `console.log(hoisted); var hoisted = "...";` | first: `undefined` (no error!), then the value |
| 10 | `var` with every common data type / simple examples of each | `var num = 42; var str = "hello"; var $ = 10; var _a = 20; var camelCase = ...; var PascalCase = ...;` | `42 hello true [ 1, 2, 3 ] { name: 'Ravi' } I am a function null undefined` |
| 11 | `var` in a loop (classic gotcha — the variable leaks out) | `for (var k = 0; k < 3; k++) {}` | `3` (`k` still exists outside the loop!) |
| 12 | Implicit global (NO `var` keyword) — bad practice | `leaked = "I became global by accident";` | `I became global by accident` — in `"use strict"` mode → `ReferenceError: leaked is not defined` |

---

## 2. Creating a Variable with `let` — All Ways

| # | Concept | Code | Result / Output |
|---|---|---|---|
| 1 | Declaration only (no value assigned) | `let a;` | `undefined` |
| 2 | Declaration + initialization | `let b = 10;` | `10` |
| 3 | Multiple declarations in ONE statement (comma separated) | `let c = 1, d = 2, e = 3;` | `1 2 3` |
| 4 | Mixed: some initialized, some left empty | `let f, g = 5, h;` | `undefined 5 undefined` |
| 5 | Re-assignment (the value CAN change with `let`) | `let i = 1; i = 100;` | `100` |
| 6 | Re-declaration is NOT allowed in the same scope | `let j = 1; let j = 2;` | `SyntaxError: Identifier 'j' has already been declared` |
| 7 | `let` can be assigned a different type later (dynamic typing) | `let k = 5; k = "string"; k = true;` | `true` |
| 8 | Block scope — `let` lives only inside its `{ }` block | `{ let blockOnly = "..."; }` | inside: value; outside → `ReferenceError: blockOnly is not defined` |
| 9 | NOT leaking out of `if` / `for` blocks (differs from `var`) | `if (true) { let ifScoped = "..."; }` | inside: value; outside → `ReferenceError: ifScoped is not defined` |
| 10 | Temporal Dead Zone (TDZ) — hoisted but unusable before its line | `console.log(tdz); let tdz = "...";` | `ReferenceError: Cannot access 'tdz' before initialization` |
| 11 | Same name allowed in DIFFERENT (nested) scopes | `let shadow = "outer"; { let shadow = "inner"; }` | `inner` then `outer` |
| 12 | `let` inside a loop creates a NEW binding each iteration | `for (let n = 0; n < 3; n++) {}` | each loop gets its own `n`; outside → `ReferenceError: n is not defined` |
| 13 | `let` with every common data type | `let num = 42; let str = "hello"; let bool = true; ...` | `42 hello true [ 1, 2, 3 ] { name: 'Ravi' } I am a function null undefined` |

---

## 3. `var` vs `let` vs `const` (Summary from Comments)

| Keyword | Scope | Hoisting | Re-declare? | Re-assign? | Must initialize? |
|---|---|---|---|---|---|
| `var` | Function scoped | Hoisted as `undefined` | ✅ Yes | ✅ Yes | No |
| `let` | Block scoped | Hoisted but in **TDZ** | ❌ No | ✅ Yes | No |
| `const` | Block scoped | Hoisted but in **TDZ** | ❌ No | ❌ No | ✅ Yes |

---

## 4. Naming Conventions

### Table A — What is ALLOWED vs NOT ALLOWED in a name

| Rule | Allowed? | Example | Notes |
|---|---|---|---|
| Start with a letter | YES | `name`, `X` | a–z, A–Z |
| Start with `_` (underscore) | YES | `_temp` | by convention = "private" |
| Start with `$` (dollar) | YES | `$price` | often used by libraries |
| Start with a digit | NO | `1stPlace` | SyntaxError |
| Contain digits (not first) | YES | `item2`, `x1` | fine anywhere after 1st |
| Contain a space | NO | `first name` | use `_` or camelCase |
| Contain a hyphen `-` | NO | `first-name` | reads as subtraction |
| Contain a dot `.` | NO | `user.name` | reads as property access |
| Use a reserved keyword | NO | `let`, `class`, `for` | SyntaxError |
| Use special symbols `@ # % !` | NO | `price#`, `a@b` | SyntaxError |
| Be case-sensitive | YES | `age` ≠ `Age` | two DIFFERENT variables |

### Table B — Naming STYLES (how to format multi-word names)

| Style | Looks like | Used for |
|---|---|---|
| camelCase | `firstName` | variables & functions ✅ |
| PascalCase | `FirstName` | classes & constructors ✅ |
| snake_case | `first_name` | Python-style (rare in JS) |
| SCREAMING_SNAKE | `MAX_SIZE` | true constants ✅ |
| kebab-case | `first-name` | ❌ ILLEGAL in JS names |

### Table C — GOOD vs BAD variable names

| ❌ Bad | Why bad | ✅ Good |
|---|---|---|
| `let a = 25;` | meaningless | `let age = 25;` |
| `let x1 = 25;` | unclear | `let userAge = 25;` |
| `let u = ...;` | cryptic | `let user = ...;` |
| `let data = ...;` | too generic | `let products = ...;` |
| `let first name;` | space = SyntaxError | `let firstName;` |
| `let 1st;` | starts with digit | `let first;` |
| `let let = 5;` | reserved keyword | `let value = 5;` |
| `let L = 100;` | single capital looks like class/const | `let length = 100;` |
| `let MyVar = 1;` | inconsistent casing | `let myVar = 1;` |

### Table D — Quick Rule-of-Thumb Cheat Sheet

| Question | Answer |
|---|---|
| What case for normal variables? | camelCase (`itemCount`) |
| What case for classes? | PascalCase (`UserProfile`) |
| What case for true constants? | SCREAMING_SNAKE (`MAX`) |
| Can a name start with `$` or `_`? | Yes, both are valid |
| Can a name start with a number? | No |
| Are names case-sensitive? | Yes (`age` ≠ `Age`) |
| Can I use a reserved word? | No (`let`, `for`, ...) |
| How descriptive should a name be? | Descriptive, not cryptic |

---

## 5. Live Naming Examples

| Code | Verdict | Reason |
|---|---|---|
| `let firstName = "Ravi";` | ✅ | camelCase |
| `let totalItems = 10;` | ✅ | camelCase |
| `let _internalCache = {};` | ✅ | leading underscore for "private" |
| `let $price = 99.99;` | ✅ | leading dollar is legal |
| `let userAge2 = 30;` | ✅ | digits allowed after the first char |
| `let 2ndUser = 30;` | ❌ | SyntaxError: starts with a digit |
| `let first-name = "x";` | ❌ | SyntaxError: hyphen not allowed |
| `let let = 5;` | ❌ | SyntaxError: reserved keyword |

---

## 6. Error Reference (from Comments)

| Error | Thrown when |
|---|---|
| `ReferenceError: inner is not defined` | using a function-scoped `var` outside its function |
| `ReferenceError: blockOnly is not defined` | using a block-scoped `let` outside its `{ }` block |
| `ReferenceError: ifScoped is not defined` | using a `let` outside an `if` block |
| `ReferenceError: Cannot access 'tdz' before initialization` | using a `let` before its declaration line (TDZ) |
| `ReferenceError: n is not defined` | using a loop's `let` variable after the loop |
| `ReferenceError: leaked is not defined` | implicit global accessed under `"use strict"` |
| `SyntaxError: Identifier 'j' has already been declared` | re-declaring a `let` in the same scope |
| `SyntaxError: Unexpected token` | using a keyword (e.g. `class`, `if`, `for`) or a bad character as a name |

---

## 7. Key Takeaways (from Comments)

| Topic | Takeaway |
|---|---|
| `var` | Function scoped, hoisted (value = `undefined`), can be redeclared |
| `let` | Block scoped, hoisted but in TDZ, cannot be redeclared |
| `const` | Block scoped, MUST be initialized, cannot be reassigned |
| Naming | Use camelCase, be descriptive, start with letter/_/$, never start with a digit, no spaces/hyphens/keywords |
