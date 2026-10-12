# 🚀 JavaScript Learning Journey (LP3x)

A hands-on, topic-by-topic JavaScript learning repository. Each numbered folder is a
self-contained module with small, focused example files that demonstrate a single concept
with runnable code — so you can read, run, and tweak one idea at a time.

## 📚 Learning Path

The folders are numbered in the order the concepts build on each other:

| #  | Module | What you'll learn |
| -- | ------ | ----------------- |
| 01 | [JS Basics](#01-js-basics) | Your first program, `console.log`, and how a script runs |
| 02 | [JS Basics (Variables)](#02-js-basics-variables) | Declaring variables and the `let` keyword |
| 03 | [JS Identifiers](#03-js-identifiers) | Naming rules, reserved keywords, and comments |
| 04 | [Literals](#04-literals) | Numeric literals, `null`, and `undefined` |
| 05 | [JS Operators](#05-js-operators) | Arithmetic, comparison, logical, ternary, increment/decrement, nullish coalescing |
| 06 | [JS Statements](#06-js-statements) | `if / else`, nested conditions, and `switch` |
| 07 | [User Inputs](#07-user-inputs) | Reading input from the user |
| 08 | [JS Loops](#08-js-loops) | `for`, `while`, `do...while`, nested loops, and loop control |
| 09 | [JS Arrays](#09-js-arrays) | Accessing, searching, slicing, sorting, transforming, and copying arrays |
| 10 | [JS Functions](#10-js-functions) | Declaration rules, arrow functions, expressions, spread, and hoisting |

## 🔍 Module Breakdown

### 01_JS_Basics
`HellowWorld.js` — the classic starting point: how a script runs and prints to the console.

### 02_JS_Basics
`Let_Concept.js` — a minimal `let` example to see variable declaration and reassignment.

### 03_JS_Identifiers
Identifier naming rules (sample rules 01 & 02), the `let` identifier in action, and comments.

### 04_Literals
Numeric literals, literal sample code, and the difference between `null` and `undefined`.

### 05_JS_Operators
- **JS_Basic_Operators** — arithmetic, assignment, comparison, logical, string, and data types
  (plus examples of confusing comparisons and type coercion).
- **JS_Ternary** — the ternary operator and nested ternaries.
- **JS_Increment_Decrement** — pre/post increment & decrement, including advanced cases.
- **JS_Null_Coalescing** — the `??` operator and default-value patterns.

### 06_JS_Statements
- **JS_IF_Else** — `if`, `if...else`, multi-branch `else if`, and nested conditions.
- **JS_Switch** — `switch` with number, string, and boolean cases.

### 07_Userinputs
`Fs.js` — reading input from the user in Node.js.

### 08_JS_Loops
- **JS_Forloop** — basic loops, looping over arrays, and `break` / `continue` control.
- **JS_Whileloop** — `while` loops, including a retry-style example.
- **JS_Do_while_loop** — the `do...while` loop and when to use it.
- **JS_Loop_Practice** — extra practice exercises combining loop patterns.

### 09_JS_Arrays
A deep dive into arrays: accessing elements, searching, slicing, sorting, transforming
(`map`/`filter`/`reduce`-style), functions, iterations, spread/dist, and shallow copies.

### 10_JS_Functions
- **02_JS_Fn_Rules** — function declaration syntax and parameter/argument rules.
- **03_JS_Arrow_fn** — arrow functions, including multi-line arrow bodies.
- **04_JS_Fn_Exp** — function expressions and how they differ from declarations.
- **05_JS_Fn_Spreading** — spreading arguments into functions (rest/spread).
- **06_JS_Hoisting** — how `var`, `let`/`const`, and function declarations are hoisted.
- **O1_JS_Prac** — real-time practice examples and template literals.

## 🧠 IQ_Notes

A collection of concept explainers saved as Markdown notes (see
[`IQ_Notes/README.md`](IQ_Notes/README.md) for the prompt used to generate them):

- `Source_Code_ByteCODE_Binary_IQ.md` — source → bytecode → binary pipeline
- `javascript_naming_conventions.md` — JS naming conventions
- `identifier rules.md`, `Keywords.md` — identifiers and reserved words
- `commands.md`, `Exp.md` — handy commands and experiments

## ▶️ How to Run

Every example is plain JavaScript and runs directly with Node.js:

```bash
node 01_JS_Basics/HellowWorld.js
```

You can also open any `.js` file and run it with the VS Code **Run** button.

## 🛠️ Tech Stack & Tools

- **Language:** JavaScript (ES6+)
- **Runtime:** Node.js
- **Editor:** Visual Studio Code

## 📁 Repository Structure

```
01_JS_Basics/       First scripts and console output
02_JS_Basics/       Variables (let)
03_JS_Identifiers/  Naming rules, keywords, comments
04_Literals/        Numbers, null, undefined
05_JS_Operators/    Arithmetic, comparison, ternary, increment, nullish
06_JS_Statements/   if/else and switch
07_Userinputs/      Reading user input
08_JS_Loops/        for, while, do...while, loop control
09_JS_Arrays/       Array operations and iterations
10_JS_Functions/    Functions, arrow fns, expressions, spread, hoisting
IQ_Notes/           Markdown concept explainers
```
