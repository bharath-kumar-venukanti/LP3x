# JavaScript Naming Conventions & Variable Declaration Guide

---

## JavaScript Naming Conventions

### Table A — What is ALLOWED vs NOT ALLOWED in a Name

| Rule | Allowed? | Example | Notes |
| :--- | :---: | :--- | :--- |
| Start with a letter | **YES** | `name`, `X` | `a-z`, `A-Z` |
| Start with `_` (underscore) | **YES** | `_temp` | By convention = "private" |
| Start with `$` (dollar) | **YES** | `$price` | Often used by libraries |
| Start with a digit | **NO** | `1stPlace` | SyntaxError |
| Contain digits (not first) | **YES** | `item2`, `x1` | Fine anywhere after 1st |
| Contain a space | **NO** | `first name` | Use `_` or camelCase |
| Contain a hyphen `-` | **NO** | `first-name` | Reads as subtraction |
| Contain a dot `.` | **NO** | `user.name` | Reads as property access |
| Use a reserved keyword | **NO** | `let`, `class`, `for` | SyntaxError |
| Use special symbols `@ # % !` | **NO** | `price#`, `a@b` | SyntaxError |
| Be case-sensitive | **YES** | `age` ≠ `Age` | Two **different** variables |

---

### Table B — Naming STYLES (How to Format Multi-Word Names)

| Style | Looks like | Used for | Status |
| :--- | :--- | :--- | :---: |
| **camelCase** | `firstName` | Variables & functions | ✅ |
| **PascalCase** | `FirstName` | Classes & constructors | ✅ |
| **snake_case** | `first_name` | Python-style | ⚠️ (Rare in JS) |
| **SCREAMING_SNAKE** | `MAX_SIZE` | True constants | ✅ |
| **kebab-case** | `first-name` | Identifiers in HTML/CSS | ❌ **Illegal in JS** |

---

### Table C — GOOD vs BAD Variable Names

| ❌ Bad | Why Bad | ✅ Good |
| :--- | :--- | :--- |
| `let a = 25;` | Meaningless | `let age = 25;` |
| `let x1 = 25;` | Unclear | `let userAge = 25;` |
| `let u = ...;` | Cryptic | `let user = ...;` |
| `let data = ...;` | Too generic | `let products = ...;` |
| `let first name;` | Space causes `SyntaxError` | `let firstName;` |
| `let 1st;` | Starts with a digit | `let first;` |
| `let let = 5;` | Reserved keyword | `let value = 5;` |
| `let L = 100;` | Single capital looks like class/const | `let length = 100;` |
| `let MyVar = 1;` | Inconsistent casing for variables | `let myVar = 1;` |

---

### Table D — Quick Rule-of-Thumb Cheat Sheet

| Question | Answer |
| :--- | :--- |
| **What case for normal variables?** | `camelCase` (`itemCount`) |
| **What case for classes?** | `PascalCase` (`UserProfile`) |
| **What case for true constants?** | `SCREAMING_SNAKE` (`MAX`) |
| **Can a name start with `$` or `_`?** | Yes, both are valid |
| **Can a name start with a number?** | No |
| **Are names case-sensitive?** | Yes (`age` ≠ `Age`) |
| **Can I use a reserved word?** | No (`let`, `for`, ...) |
| **How descriptive should a name be?** | Descriptive, not cryptic |

---

## Live Examples of Good & Invalid Naming

```javascript
// ✅ VALID NAMING
let firstName = "Ravi";         // camelCase
let totalItems = 10;            // camelCase
let _internalCache = {};        // Leading underscore for "private" / internal scope
let $price = 99.99;             // Leading dollar is legal
let userAge2 = 30;              // Digits allowed after the first character

// ❌ INVALID NAMING (Will throw SyntaxError)
// let 2ndUser = 30;            // SyntaxError: starts with a digit
// let first-name = "x";        // SyntaxError: hyphen not allowed (interpreted as subtraction)
// let let = 5;                 // SyntaxError: reserved keyword

console.log(firstName, totalItems, _internalCache, $price, userAge2);
```

---

## Summary & Quick Reference

### Variable Declaration & Assignment Syntax
* `let name;` $
ightarrow$ **Declare only** $\implies$ `undefined`
* `let name = value;` $
ightarrow$ **Declare + assign**
* `let x = 1, y = 2;` $
ightarrow$ **Multiple in one statement**
* `name = value;` $
ightarrow$ **Reassign** (allowed)
* `let name = value;` $
ightarrow$ **Redeclare in SAME scope** $\implies$ `SyntaxError`

### Keywords Breakdown
* **`let`**: Block-scoped, hoisted but in **Temporal Dead Zone (TDZ)**, cannot redeclare.
* **`var`**: Function-scoped, hoisted as `undefined`, can redeclare.
* **`const`**: Block-scoped, **must** be initialized on declaration, cannot reassign.

### Naming Summary
> Use **camelCase**, be **descriptive**, start with a **letter**, `_`, or `$`. Never start with a **digit**, and avoid **spaces, hyphens, or reserved keywords**.
