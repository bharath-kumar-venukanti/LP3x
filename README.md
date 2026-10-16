# JavaScript Learning Journey (LP3x)

This repository is a hands-on JavaScript practice workspace for learning core language concepts in small, focused steps. Each folder contains practical examples, short exercises, and starter code to help understand one idea at a time.

## Purpose

The project is designed to help learners:

- understand JavaScript fundamentals
- practice syntax and logic through examples
- build confidence by running small programs in Node.js
- explore progressively advanced topics from basics through functions, closures, and strings

## Learning path

| # | Module | Focus |
|---|--------|-------|
| 01 | [01_JS_Basics](./01_JS_Basics) | First script, output, and basic execution |
| 02 | [02_JS_Basics](./02_JS_Basics) | Variables and `let` usage |
| 03 | [03_JS_Identifiers](./03_JS_Identifiers) | Naming rules, keywords, comments |
| 04 | [04_Literals](./04_Literals) | Numeric and literal values |
| 05 | [05_JS_Operators](./05_JS_Operators) | Arithmetic, comparison, logical, ternary, and nullish operators |
| 06 | [06_JS_Statements](./06_JS_Statements) | `if/else`, conditionals, and `switch` |
| 07 | [07_Userinputs](./07_Userinputs) | Reading user input in Node.js |
| 08 | [08_JS_Loops](./08_JS_Loops) | `for`, `while`, and `do...while`, plus loop practice |
| 09 | [09_JS_Arrays](./09_JS_Arrays) | Array creation, access, mutation, iteration, transformation, searching, and sorting |
| 10 | [10_JS_Functions](./10_JS_Functions) | Function declarations, expressions, arrow functions, rest/spread, hoisting, TDZ, and closures |
| 11 | [11_JS_String](./11_JS_String) | Creating strings, length, character access, and essential search/transform methods |
| IQ | [IQ_Notes](./IQ_Notes) | Concept explainers and quick notes |

## Folder overview

### 01_JS_Basics
Basic script execution using `console.log` and simple JavaScript programs.

### 02_JS_Basics
Examples for variable declaration, assignment, and understanding `let`.

### 03_JS_Identifiers
Topics around valid identifiers, reserved keywords, and comments.

### 04_Literals
Examples covering literals, numbers, `null`, and `undefined`.

### 05_JS_Operators
Arithmetic, comparison, logical, string, ternary, increment/decrement, and nullish coalescing examples.

### 06_JS_Statements
Conditional logic using `if`, `else if`, `else`, and `switch` statements.

### 07_Userinputs
Examples for taking input from users in the terminal with Node.js.

### 08_JS_Loops
Loop structures and control statements such as `break` and `continue`, organized into focused subfolders:

| Folder | Focus |
|--------|-------|
| `JS_Forloop` | `for` loops, nested loops, looping over arrays, and loop control |
| `JS_Whileloop` | `while` loop basics, counters, and retry-style examples |
| `JS_Do_while_loop` | `do...while` loop samples |
| `JS_Loop_Practice` | Extra practice exercises combining loop styles |

### 09_JS_Arrays
Array fundamentals split into progressive subfolders:

| Folder | Focus |
|--------|-------|
| `01_JS_Array_Creation` | Creating arrays |
| `02_JS_Array_Accessing_Element` | Accessing elements by index |
| `03_JS_Array_Add_Remove` | Adding and removing elements (`push`, `pop`, `shift`, `unshift`) |
| `04_Array_Splice_Slice` | `splice` vs `slice` |
| `05_JS_Array_Iterartions` | Iterating arrays (`for`, `for...of`, `forEach`) |
| `06_JS_Array_Transformation` | `map`, `filter`, `reduce`, `some`, `every`, `join` |
| `07_JS_Array_Searching` | `find`, `includes`, `indexOf`, and checking arrays |
| `08_JS_Array_Sorting` | Sorting arrays |
| `09_Array_Other_Operations` | Spread/rest, shallow copy, and misc operations |

### 10_JS_Functions
Function declarations, function expressions, arrow functions, rest/spread usage, hoisting behavior, `TDZ`, closures, and practice scripts.

### 11_JS_String
Creating strings with single quotes, double quotes, and template literals, plus finding length, accessing individual characters (`[]` and `charAt`), and essential methods such as `toUpperCase`, `toLowerCase`, `includes`, `indexOf`, `startsWith`, and `endsWith`.

### IQ_Notes
Short learning notes and concept summaries that support the main examples.

## How to run examples

Use Node.js to execute any JavaScript file:

```bash
node 01_JS_Basics/HellowWorld.js
```

You can also run files directly from VS Code using the Run button or run the script in the terminal.

## Tools used

- JavaScript (ES6+)
- Node.js
- Visual Studio Code

## Repository structure

```text
01_JS_Basics/
02_JS_Basics/
03_JS_Identifiers/
04_Literals/
05_JS_Operators/
06_JS_Statements/
07_Userinputs/
08_JS_Loops/
├── JS_Forloop/
├── JS_Whileloop/
├── JS_Do_while_loop/
└── JS_Loop_Practice/
09_JS_Arrays/
├── 01_JS_Array_Creation/
├── 02_JS_Array_Accessing_Element/
├── 03_JS_Array_Add_Remove/
├── 04_Array_Splice_Slice/
├── 05_JS_Array_Iterartions/
├── 06_JS_Array_Transformation/
├── 07_JS_Array_Searching/
├── 08_JS_Array_Sorting/
└── 09_Array_Other_Operations/
10_JS_Functions/
11_JS_String/
IQ_Notes/
README.md
```

## Notes

This repository is intended for learning and experimentation. It is best used by opening individual folders and running the example files one by one to understand the concept in context.
