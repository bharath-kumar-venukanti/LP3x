# JavaScript Learning Journey (LP3x)

This repository is a hands-on JavaScript practice workspace for learning core language concepts in small, focused steps. Each folder contains practical examples, short exercises, and starter code to help understand one idea at a time.

## Purpose

The project is designed to help learners:

- understand JavaScript fundamentals
- practice syntax and logic through examples
- build confidence by running small programs in Node.js
- explore progressively advanced topics from basics through functions, closures, strings, and objects

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
| 10 | [10_JS_Functions](./10_JS_Functions) | Function rules, declarations, expressions, arrow functions, rest/spread, hoisting, TDZ, closures, and practice |
| 11 | [11_JS_String](./11_JS_String) | Creating strings, length, character access, search methods, and string extraction/transformation methods |
| 12 | [12_JS_Objects](./12_JS_Objects) | Creating objects, property types, keys, shorthand, and computed property names |
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
Function fundamentals split into progressive subfolders, plus a standalone `JS_Return_vs_Consol.js` comparison:

| Folder | Focus |
|--------|-------|
| `01_JS_Fn_Rules` | Function declaration rules and samples |
| `02_Fn` | Additional function samples |
| `03_JS_Arrow_fn` | Arrow functions, including multi-line bodies |
| `04_JS_Fn_Exp` | Function expressions |
| `05_JS_Fn_Spreading` | Spread and rest usage in function calls |
| `06_JS_Hoisting` | Hoisting with `function`, `var`, `let`, and `const` |
| `07_TDZ` | Temporal Dead Zone examples |
| `O8_JS_Prac` | Real-time practice and template literal exercises |
| `09_JS_Clouser` | Closures, including a max-retry example |

### 11_JS_String
String basics and extraction/transformation methods, organized into two subfolders:

| Folder | Focus |
|--------|-------|
| `01_JS_Strings` | Creating strings (single quotes, double quotes, template literals), length, character access (`[]` and `charAt`), and search methods (`includes`, `indexOf`, `startsWith`, `endsWith`) |
| `02_JS_Extract_Strings` | `slice`, `substring`, case conversion (`toUpperCase`/`toLowerCase`), `replace`, `trim`, `concat`, `split`/`join`, and string conversion |

### 12_JS_Objects
Creating objects using object literals, empty objects, and nested objects, plus property values of basic types (string, number, boolean, array), case-sensitive keys and keys containing spaces, and shorthand property names. Organized into focused subfolders:

| Folder | Focus |
|--------|-------|
| `JS_Obj_Basics` | Introductory object samples |
| `01_JS_Object_Creation` | Object literals, empty objects, and nested objects |
| `02_JS_Object_Property_Types` | String/number/boolean and array property values |
| `03_JS_Object_Keys` | Case-sensitive keys and keys containing spaces |
| `04_JS_Object_Shorthand_Computed` | Shorthand properties |

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
├── 01_JS_Fn_Rules/
├── 02_Fn/
├── 03_JS_Arrow_fn/
├── 04_JS_Fn_Exp/
├── 05_JS_Fn_Spreading/
├── 06_JS_Hoisting/
├── 07_TDZ/
├── O8_JS_Prac/
├── 09_JS_Clouser/
└── JS_Return_vs_Consol.js
11_JS_String/
├── 01_JS_Strings/
└── 02_JS_Extract_Strings/
12_JS_Objects/
├── 01_JS_Object_Creation/
├── 02_JS_Object_Property_Types/
├── 03_JS_Object_Keys/
├── 04_JS_Object_Shorthand_Computed/
└── JS_Obj_Basics/
IQ_Notes/
README.md
```

## Notes

This repository is intended for learning and experimentation. It is best used by opening individual folders and running the example files one by one to understand the concept in context.
