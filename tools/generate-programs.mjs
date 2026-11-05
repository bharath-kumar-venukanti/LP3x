/**
 * Generates programs-data.js for the portfolio site.
 *
 * It reads the real practice files from this repository and embeds them as
 * safely-escaped strings (via JSON.stringify), so the site never needs to
 * escape backticks or ${} by hand.
 *
 * Run:  node tools/generate-programs.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const categories = [
  { id: 'fundamentals', label: 'JavaScript Fundamentals', blurb: 'Syntax, variables, literals and data types.' },
  { id: 'operators',    label: 'Operators & Logic',        blurb: 'Operators, comparisons, conditionals and switch.' },
  { id: 'loops',        label: 'Loops & Patterns',         blurb: 'for, while, do...while, retries and star patterns.' },
  { id: 'arrays',       label: 'Arrays',                   blurb: 'Create, iterate, transform, search and sort arrays.' },
  { id: 'objects',      label: 'Objects',                  blurb: 'Object literals, nested data, keys and references.' },
  { id: 'functions',    label: 'Functions & Scope',        blurb: 'Declarations, arrows, hoisting, TDZ and closures.' },
  { id: 'strings',      label: 'Strings',                  blurb: 'Create, search, slice and transform text.' },
  { id: 'callbacks',    label: 'Callbacks',                blurb: 'Passing, returning and chaining callbacks.' },
  { id: 'promises',     label: 'Promises',                 blurb: 'resolve/reject, then/catch/finally, all/allSettled/race.' },
  { id: 'async',        label: 'Async / Await',            blurb: 'Timers, async flows and awaited promises.' },
];

// [id, title, description, category, tags, file, options]
const entries = [
  // ---------------------------------------------------------------- fundamentals
  ['hello-world', 'Hello World', 'The classic first program: print a greeting to the console.', 'fundamentals', ['console.log', 'basics'], '01_JS_Basics/HellowWorld.js'],
  ['let-variable', 'Variables with let', 'Declare a variable with let and log its value.', 'fundamentals', ['let', 'variables'], '02_JS_Basics/Let_Concept.js'],
  ['comments', 'Comments', 'Single-line and multi-line comment syntax in JavaScript.', 'fundamentals', ['comments', 'syntax'], '03_JS_Identifiers/JS_Comments.js'],
  ['identifier-rules', 'Identifier Rules', 'Valid identifier names, allowed characters and case sensitivity.', 'fundamentals', ['identifiers', 'rules'], '03_JS_Identifiers/JS_Identifiers_SampleRules01.js'],
  ['naming-conventions', 'Naming Conventions', 'camelCase, PascalCase, snake_case and Hungarian notation compared.', 'fundamentals', ['naming', 'style'], '03_JS_Identifiers/JS_Identifiers_Samplerules02.js'],
  ['var-every-way', 'var: Every Declaration Form', 'Every way to declare with var — init, redeclare, function vs block scope and hoisting.', 'fundamentals', ['var', 'scope', 'hoisting'], '03_JS_Identifiers/JS_Identifiers.js'],
  ['let-scope-tdz', 'let: Scope & Temporal Dead Zone', 'let declarations, block scoping, shadowing and the temporal dead zone.', 'fundamentals', ['let', 'scope', 'tdz'], '03_JS_Identifiers/JS_Let_Identifiers.js'],
  ['literals-typeof', 'Literals & typeof', 'Number, string, boolean, null, undefined and object literals with typeof.', 'fundamentals', ['literals', 'typeof'], '04_Literals/JS_Literals_SampleCode.js'],
  ['numeric-literals', 'Numeric Literals', 'int, float, binary, hex, octal and BigInt literals.', 'fundamentals', ['numbers', 'bigint'], '04_Literals/JS_Numeric_Literals.js'],
  ['null-undefined', 'null vs undefined', 'The difference between undefined (absent) and null (intentional empty).', 'fundamentals', ['null', 'undefined'], '04_Literals/JS_Null_Undefined.js'],
  ['user-input', 'Reading User Input (Node.js)', 'Read a line from stdin using fs.readFileSync — runs in Node.js only.', 'fundamentals', ['node', 'stdin'], '07_Userinputs/Fs.js', { run: false, note: 'Runs in Node.js only — it reads from stdin.' }],

  // ---------------------------------------------------------------- operators
  ['arithmetic-operators', 'Arithmetic Operators', 'Addition, subtraction, multiplication, division, modulus and exponentiation.', 'operators', ['math'], '05_JS_Operators/JS_Basic_Operators/JS_Arithimetic_Operators.js'],
  ['assignment-operators', 'Assignment Operators', '= , += , -= , *= , /= , %= and **= explained.', 'operators', ['assignment'], '05_JS_Operators/JS_Basic_Operators/JS_Assignment_Operators.js'],
  ['comparison-operators', 'Comparison & Equality', '== vs ===, != vs !== and the relational operators.', 'operators', ['equality', 'coercion'], '05_JS_Operators/JS_Basic_Operators/JS_Comparision_Operators.js'],
  ['confusing-comparisons', 'Confusing Comparisons', 'Coercion traps such as "" == 0, "" == "0" and 0 == "0".', 'operators', ['coercion', 'gotcha'], '05_JS_Operators/JS_Basic_Operators/JS_Confusingcomparision_Operators.js'],
  ['null-undefined-comparisons', 'null & undefined Comparisons', 'How null and undefined behave with ==, ===, <, > and false.', 'operators', ['coercion', 'null'], '05_JS_Operators/JS_Basic_Operators/JS_confusioncomparision_Operators02.js'],
  ['datatypes', 'Data Types Deep Dive', 'Primitive vs non-primitive types and the typeof quirks.', 'operators', ['typeof', 'types'], '05_JS_Operators/JS_Basic_Operators/JS_Datatypes.js'],
  ['logical-operators', 'Logical Operators', '&&, || and ! with booleans and with numbers.', 'operators', ['logical'], '05_JS_Operators/JS_Basic_Operators/JS_Logical_Operators.js'],
  ['string-operator', 'String Concatenation', 'Joining strings and numbers with + and +=.', 'operators', ['strings', 'concat'], '05_JS_Operators/JS_Basic_Operators/JS_String_Operator.js'],
  ['increment-operators', 'Increment Operators', 'Postfix vs prefix increment and the value each returns.', 'operators', ['++'], '05_JS_Operators/JS_Increment_Decrement/JS_Increment_Operators.js'],
  ['advanced-increment', 'Advanced Increment', 'Evaluation order when ++ is mixed into arithmetic expressions.', 'operators', ['++', 'evaluation'], '05_JS_Operators/JS_Increment_Decrement/JS_Adv_Inc_Operators.js'],
  ['decrement-operators', 'Decrement Operators', 'Postfix vs prefix decrement and the value each returns.', 'operators', ['--'], '05_JS_Operators/JS_Increment_Decrement/JS_Decrement_Operators.js'],
  ['advanced-decrement', 'Advanced Decrement', 'Chained -- operators and expression evaluation order.', 'operators', ['--', 'evaluation'], '05_JS_Operators/JS_Increment_Decrement/JS_Adv_Decrement_Operators.js'],
  ['inc-dec-sample', 'Increment & Decrement Mix', 'Combine ++ and -- in one expression and trace the result.', 'operators', ['++', '--'], '05_JS_Operators/JS_Increment_Decrement/JS_Inc_Dec_Sample.js'],
  ['nullish-coalescing', 'Nullish Coalescing (??)', 'Fall back only when the left side is null or undefined.', 'operators', ['??', 'defaults'], '05_JS_Operators/JS_Null_Coalescing/JS_Null_Coalescing.js'],
  ['ternary', 'Ternary Operator', 'Compact if/else using the conditional operator.', 'operators', ['ternary'], '05_JS_Operators/JS_Ternary/JS_Ternary_Operation.js'],
  ['nested-ternary', 'Nested Ternary', 'Classify an HTTP status code with chained ternaries.', 'operators', ['ternary', 'http'], '05_JS_Operators/JS_Ternary/JS_Nested_Ternary_Operators.js'],
  ['if-statement', 'if Statement', 'Run code only when a condition is true.', 'operators', ['if'], '06_JS_Statements/JS_IF_Else/JS_if_statements_Sample.js'],
  ['if-else', 'if / else', 'Two-way branching for a voting-eligibility check.', 'operators', ['if', 'else'], '06_JS_Statements/JS_IF_Else/JS_ifelse_statements_sample.js'],
  ['else-if-ladder', 'else-if Ladder: Grades', 'Multi-way branching with a grade calculator.', 'operators', ['if', 'else-if'], '06_JS_Statements/JS_IF_Else/JS_multiifelse_statements_sample.js'],
  ['nested-if', 'Nested if', 'Nested conditions for a checkout shipping rule.', 'operators', ['if', 'nested'], '06_JS_Statements/JS_IF_Else/JS_NestedIf_Statements_sample.js'],
  ['switch-number', 'switch: Day of Week', 'Map a number to a weekday using switch.', 'operators', ['switch'], '06_JS_Statements/JS_Switch/JS_Switch_statement_samplebynum.js'],
  ['switch-boolean', 'switch: Grade Bands', 'switch(true) with boolean cases to assign grades.', 'operators', ['switch'], '06_JS_Statements/JS_Switch/JS_Switch_statement_sampleforbool.js'],
  ['switch-string', 'switch: Fruit Categories', 'Group string values using fall-through cases.', 'operators', ['switch'], '06_JS_Statements/JS_Switch/JS_Switch_statement_sampleforstring.js'],

  // ---------------------------------------------------------------- loops
  ['for-loop', 'for Loop Basics', 'Count up and down with the classic for loop.', 'loops', ['for'], '08_JS_Loops/JS_Forloop/JS_Forloop_Sample.js'],
  ['loop-control', 'break & continue', 'Skip even numbers and stop at the first multiple of 7.', 'loops', ['break', 'continue'], '08_JS_Loops/JS_Forloop/JS_Loop_Control.js'],
  ['nested-for', 'Nested for Loop', 'Build a right-angled triangle of stars.', 'loops', ['nested', 'patterns'], '08_JS_Loops/JS_Forloop/JS_Nestedfor_Sample.js'],
  ['for-loop-array', 'Loop Over an Array', 'Iterate over an array by index.', 'loops', ['for', 'arrays'], '08_JS_Loops/JS_Forloop/JS_Forloop_Arrays.js'],
  ['while-loop', 'while Loop', 'Increment a counter until the condition fails.', 'loops', ['while'], '08_JS_Loops/JS_Whileloop/JS_While_Sample.js'],
  ['while-counter', 'while Counter', 'A simple attempt counter with while.', 'loops', ['while'], '08_JS_Loops/JS_Whileloop/JS_Whileloop_Sample2.js'],
  ['while-retry', 'API Retry with while', 'Retry an API call until the status code becomes 200.', 'loops', ['while', 'retry'], '08_JS_Loops/JS_Whileloop/JS_Whileloop_retry.js'],
  ['do-while', 'do...while Loop', 'Run the body at least once before checking the condition.', 'loops', ['do-while'], '08_JS_Loops/JS_Do_while_loop/JS_Dowhile_Samplecode.js'],
  ['do-while-retry', 'Retry with do...while', 'Attempt a test up to a maximum number of retries.', 'loops', ['do-while', 'retry'], '08_JS_Loops/JS_Loop_Practice/JS_DowhileLoop.js'],
  ['countdown', 'Countdown to Liftoff', 'Count down from 10 then print "Liftoff!".', 'loops', ['while'], '08_JS_Loops/JS_Loop_Practice/JS_WhileLoop1.js'],
  ['retry-while', 'Retry Attempts', 'Track attempts with a while loop.', 'loops', ['while', 'retry'], '08_JS_Loops/JS_Loop_Practice/JS_whileLoop2.js'],
  ['multiples-of-three', 'Multiples of 3', 'Print 1-20 and flag every multiple of 3.', 'loops', ['for', 'modulo'], '08_JS_Loops/JS_Loop_Practice/JS_Loop1.js'],
  ['sum-without-reduce', 'Sum Without reduce()', 'Add up an array using a loop.', 'loops', ['for...of', 'sum'], '08_JS_Loops/JS_Loop_Practice/JS_Loop2.js'],
  ['reverse-string-loop', 'Reverse a String', 'Reverse text without using .reverse().', 'loops', ['loops', 'strings'], '08_JS_Loops/JS_Loop_Practice/JS_Loop3.js'],
  ['triangle-repeat', 'Triangle with repeat()', 'Right-angle triangle of stars using String.repeat().', 'loops', ['patterns', 'repeat'], '08_JS_Loops/JS_Loop_Practice/JS_Loop4.js'],
  ['button-indices', 'Label Array Elements', 'Print each array element with a 1-based position.', 'loops', ['for', 'arrays'], '08_JS_Loops/JS_Loop_Practice/JS_Loop5.js'],
  ['retry-for-loop', 'Retry with a for Loop', 'Simulate repeated test attempts with a for loop.', 'loops', ['for', 'retry'], '08_JS_Loops/JS_Loop_Practice/JS_Loop6.js'],
  ['right-pattern', 'Right Triangle Pattern', 'Star triangle built with repeat() and nested loops.', 'loops', ['patterns'], '13_JS_MultiDiamentialArrays/02_JS_Right_Patterns/JS_Right_Pattern.js'],
  ['left-pattern', 'Inverted Triangle Pattern', 'A descending star triangle.', 'loops', ['patterns'], '13_JS_MultiDiamentialArrays/03_JS_Left_Pattern/JS_Left_Pattern.js'],
  ['pyramid-pattern', 'Pyramid Pattern', 'A centered pyramid with leading spaces.', 'loops', ['patterns'], '13_JS_MultiDiamentialArrays/04_JS_Pyramid_Pattern/JS_Pyramid_Pattern.js'],

  // ---------------------------------------------------------------- arrays
  ['array-creation', 'Array Creation', 'Empty arrays, literals, fixed length, Array.of() and Array.from().', 'arrays', ['create'], '09_JS_Arrays/01_JS_Array_Creation/JS_Array_Creation_Samples.js'],
  ['array-access', 'Accessing Elements', 'Index, length, .at() and negative indexes.', 'arrays', ['access'], '09_JS_Arrays/02_JS_Array_Accessing_Element/JS_Array_Accessingelements.js'],
  ['array-add-remove', 'Add & Remove Elements', 'push, pop, unshift, shift, sort and reverse.', 'arrays', ['mutate'], '09_JS_Arrays/03_JS_Array_Add_Remove/JS_Array_add_rem_code.js'],
  ['array-mutations', 'Mutating an Array', 'A detailed add/remove/splice/slice walkthrough.', 'arrays', ['mutate', 'splice'], '09_JS_Arrays/03_JS_Array_Add_Remove/JS_Array_add_rem_code2.js'],
  ['array-slice', 'slice()', 'Copy parts of an array without mutating the original.', 'arrays', ['slice'], '09_JS_Arrays/04_Array_Splice_Slice/JS_Array_Slice.js'],
  ['array-splice', 'splice()', 'Insert, remove and replace elements in place.', 'arrays', ['splice'], '09_JS_Arrays/04_Array_Splice_Slice/JS_Array_Splice.js'],
  ['array-iteration', 'Array Iteration', 'for, forEach and for...of side by side.', 'arrays', ['iterate'], '09_JS_Arrays/05_JS_Array_Iterartions/JS_Array_Iterations.js'],
  ['array-iteration-results', 'Iterating Test Results', 'Stop iterating as soon as a test passes.', 'arrays', ['iterate', 'break'], '09_JS_Arrays/05_JS_Array_Iterartions/01_JS_Itr.js'],
  ['array-map', 'map()', 'Transform every element into a new array.', 'arrays', ['map'], '09_JS_Arrays/06_JS_Array_Transformation/JS_Array_Transformation_Map.js'],
  ['array-filter', 'filter()', 'Keep only the elements that match a condition.', 'arrays', ['filter'], '09_JS_Arrays/06_JS_Array_Transformation/JS_Array_Transformation_Filter.js'],
  ['array-reduce', 'reduce()', 'Fold an array into a single value (a sum).', 'arrays', ['reduce'], '09_JS_Arrays/06_JS_Array_Transformation/JS_Array_Transformation_Reduce.js'],
  ['array-some', 'some()', 'Does at least one element match?', 'arrays', ['some'], '09_JS_Arrays/06_JS_Array_Transformation/JS_Array_Transformation_Some.js'],
  ['array-every', 'every()', 'Do all elements match?', 'arrays', ['every'], '09_JS_Arrays/06_JS_Array_Transformation/JS_Array_Transformation_Every.js'],
  ['array-join', 'join()', 'Turn an array into a delimited string.', 'arrays', ['join'], '09_JS_Arrays/06_JS_Array_Transformation/JS_Array_Transformation_Joins.js'],
  ['array-find', 'find()', 'Return the first element that matches.', 'arrays', ['find'], '09_JS_Arrays/07_JS_Array_Searching/JS_Array_Searching_Find.js'],
  ['array-includes', 'includes()', 'Check whether an array contains a value.', 'arrays', ['includes'], '09_JS_Arrays/07_JS_Array_Searching/JS_Array_Searching_Include.js'],
  ['array-indexof', 'indexOf()', "Find an element's position (or -1).", 'arrays', ['indexOf'], '09_JS_Arrays/07_JS_Array_Searching/JS_Array_Searching_IndOf.js'],
  ['array-isarray', 'Array.isArray()', 'Reliably check whether a value is an array.', 'arrays', ['isArray'], '09_JS_Arrays/07_JS_Array_Searching/JS_Checking_Arrays.js'],
  ['array-sorting', 'Sorting Arrays', 'Natural vs numeric sorting and localeCompare.', 'arrays', ['sort'], '09_JS_Arrays/08_JS_Array_Sorting/JS_Array_Sorting.js'],
  ['array-operations', 'Array Toolkit', 'A tour of the most common array operations.', 'arrays', ['overview'], '09_JS_Arrays/09_Array_Other_Operations/JS_Array_operations.js'],
  ['array-spread-destructuring', 'Spread & Destructuring', 'Combine arrays and unpack values.', 'arrays', ['spread', 'destructuring'], '09_JS_Arrays/09_Array_Other_Operations/JS_Array_spreadanddist.js'],
  ['array-shallow-copy', 'Shallow Copies', 'Reference vs copy with spread, slice, Array.from, concat and map.', 'arrays', ['copy', 'reference'], '09_JS_Arrays/09_Array_Other_Operations/JS_Shallowcopy.js'],
  ['matrix-traversal', '2D Matrix Traversal', 'Walk a matrix and inspect its dimensions.', 'arrays', ['2d', 'matrix'], '13_JS_MultiDiamentialArrays/01_JS_Array/JS_Array_MatrixTraversal.js'],
  ['matrix-row-sums', 'Row Sums', 'Sum each row of a matrix with map + reduce.', 'arrays', ['2d', 'reduce'], '13_JS_MultiDiamentialArrays/01_JS_Array/JS_Array_EachRowCount.js'],
  ['matrix-printing', '2D Array Printing', 'Print a matrix with nested loops.', 'arrays', ['2d', 'nested'], '13_JS_MultiDiamentialArrays/01_JS_Array/JS_Array_Sample.js'],

  // ---------------------------------------------------------------- objects
  ['object-literal', 'Object Literal', 'Build and read a test-result object.', 'objects', ['literal'], '12_JS_Objects/01_JS_Object_Creation/01_JS_Object_Literal.js'],
  ['object-empty', 'Empty Object', 'Create an empty object and add properties later.', 'objects', ['empty'], '12_JS_Objects/01_JS_Object_Creation/02_JS_Empty_Object.js'],
  ['object-nested', 'Nested Objects', 'Group related test data inside nested objects.', 'objects', ['nested'], '12_JS_Objects/01_JS_Object_Creation/03_JS_Nested_Objects.js'],
  ['object-primitive-props', 'Property Types', 'String, number and boolean property values.', 'objects', ['properties'], '12_JS_Objects/02_JS_Object_Property_Types/01_JS_Primitive_Props.js'],
  ['object-array-props', 'Array Properties', 'Store arrays as object property values.', 'objects', ['arrays'], '12_JS_Objects/02_JS_Object_Property_Types/02_JS_Array_Props.js'],
  ['object-case-keys', 'Case-Sensitive Keys', 'status and Status are two different properties.', 'objects', ['keys'], '12_JS_Objects/03_JS_Object_Keys/01_JS_Case_Sensitive_Keys.js'],
  ['object-keys-with-spaces', 'Keys With Spaces', 'Bracket notation for keys that contain spaces.', 'objects', ['keys', 'bracket'], '12_JS_Objects/03_JS_Object_Keys/02_JS_Keys_With_Spaces.js'],
  ['object-shorthand', 'Shorthand Properties', 'Build objects from existing variables with shorthand.', 'objects', ['shorthand'], '12_JS_Objects/04_JS_Object_Shorthand_Computed/01_JS_Shorthand_Properties.js'],
  ['object-basics', 'Objects are References', 'Copying a variable copies the reference, not the object.', 'objects', ['reference'], '12_JS_Objects/JS_Obj_Basics/03_JS_Obj_Sample.js'],
  ['object-case-sample', 'Case-Sensitive Access', 'Read status and Status properties with dot notation.', 'objects', ['keys'], '12_JS_Objects/JS_Obj_Basics/02_JS_Obj_Sample.js'],

  // ---------------------------------------------------------------- functions
  ['function-no-args', 'Function: No Args', 'Declare and call a function with no parameters or return value.', 'functions', ['declaration'], '10_JS_Functions/01_JS_Fn_Rules/JS_Fuctions_Sample1.js'],
  ['function-no-args-return', 'Function: Returns a Value', 'A function that returns a value without taking parameters.', 'functions', ['return'], '10_JS_Functions/01_JS_Fn_Rules/JS_Function_Sample2.js'],
  ['function-args-no-return', 'Function: Args, No Return', 'A function that logs but returns nothing.', 'functions', ['parameters'], '10_JS_Functions/01_JS_Fn_Rules/JS_Function_Sample3.js'],
  ['function-args-return', 'Function: Args & Return', 'A function that takes parameters and returns a value.', 'functions', ['parameters', 'return'], '10_JS_Functions/01_JS_Fn_Rules/JS_Fuction_Sample4.js'],
  ['return-vs-console', 'return vs console.log', 'How returning a value differs from printing it.', 'functions', ['return'], '10_JS_Functions/JS_Return_vs_Consol.js'],
  ['arrow-function', 'Arrow Functions', 'Concise function syntax, single and multi-line.', 'functions', ['arrow'], '10_JS_Functions/03_JS_Arrow_fn/JS_Function_Arrow.js'],
  ['arrow-multiline', 'Multi-line Arrow', 'Arrow functions with a block body.', 'functions', ['arrow'], '10_JS_Functions/03_JS_Arrow_fn/JS_Function_MultiLine.js'],
  ['function-expression', 'Function Expressions', 'Assign an anonymous function to a variable.', 'functions', ['expression'], '10_JS_Functions/04_JS_Fn_Exp/JS_Function_Expression.js'],
  ['spread-operator', 'Spread Operator', 'Spread an array into individual function arguments.', 'functions', ['spread'], '10_JS_Functions/05_JS_Fn_Spreading/JS_Spreding_sample.js'],
  ['rest-parameters', 'Rest Parameters', 'Collect any number of arguments into an array.', 'functions', ['rest'], '10_JS_Functions/05_JS_Fn_Spreading/JS_Spreding_sample02.js'],
  ['hoisting-var', 'Hoisting with var', 'var is hoisted and initialized as undefined.', 'functions', ['hoisting', 'var'], '10_JS_Functions/06_JS_Hoisting/JS_Hoisting_Var_Sample.js'],
  ['hoisting-let', 'Hoisting with let', 'let is hoisted but unusable before its declaration.', 'functions', ['hoisting', 'let'], '10_JS_Functions/06_JS_Hoisting/JS_Hoisting_Let_Sample.js'],
  ['hoisting-const', 'Hoisting with const', 'Accessing a const in the TDZ throws a ReferenceError.', 'functions', ['hoisting', 'const'], '10_JS_Functions/06_JS_Hoisting/JS_Hoisting_Const_Sample.js'],
  ['hoisting-in-function', 'Hoisting inside a Function', 'Function-scoped var hoisting and a shadowing trap.', 'functions', ['hoisting', 'shadowing'], '10_JS_Functions/06_JS_Hoisting/JS_Hoisting_Function_Sample.js'],
  ['hoisting-shadow-trap', 'Hoisting Shadowing Trap', 'A local var shadows an outer variable and logs undefined first.', 'functions', ['hoisting', 'var'], '10_JS_Functions/06_JS_Hoisting/JS_Hoisting_function_sample02.js'],
  ['tdz-sample', 'Temporal Dead Zone', 'Why let throws before initialization but var does not.', 'functions', ['tdz'], '10_JS_Functions/07_TDZ/JS_TDZ_Sample.js'],
  ['tdz-block-scope', 'TDZ & Block Scope', 'A block-scoped let shadows an outer variable.', 'functions', ['tdz', 'scope'], '10_JS_Functions/07_TDZ/JS_TDZ_BlockScoped.js'],
  ['let-vs-var-scope', 'let vs var Scope', 'Block scope vs function scope separation.', 'functions', ['scope'], '10_JS_Functions/07_TDZ/JS_TDZ_fn_bs.js'],
  ['closure-counter', 'Closures', 'A function that remembers its own private state.', 'functions', ['closure'], '10_JS_Functions/09_JS_Clouser/JS_Clouser_fn.js'],
  ['closure-retry', 'Closure: Retry Tracker', 'A private retry counter built with a closure.', 'functions', ['closure', 'retry'], '10_JS_Functions/09_JS_Clouser/JS_Max_Retry.js'],
  ['prac-is-even', 'Practice: isEven()', 'Return whether a number is even — declaration, expression and arrow.', 'functions', ['practice'], '10_JS_Functions/O8_JS_Prac/JS_Prac01.js'],
  ['prac-find-max', 'Practice: findMax()', 'Find the largest number in an array without Math.max().', 'functions', ['practice', 'arrays'], '10_JS_Functions/O8_JS_Prac/JS_Prac02.js'],
  ['status-validator', 'HTTP Status Validator', 'Check status codes in three different function styles.', 'functions', ['http', 'practice'], '10_JS_Functions/O8_JS_Prac/JS_Function_Realtime_Eg_01.js'],
  ['status-classifier', 'Status Code Classifier', 'Classify status codes with if/else, ternary and switch.', 'functions', ['http', 'practice'], '10_JS_Functions/O8_JS_Prac/JS_Function_Realtime_Eg_02.js'],
  ['template-literals', 'Template Literals', 'Build strings with backticks and ${} interpolation.', 'functions', ['template'], '10_JS_Functions/O8_JS_Prac/JS_Function_Template_Literals.js'],

  // ---------------------------------------------------------------- strings
  ['string-creation', 'Creating Strings', 'Single quotes, double quotes and template literals.', 'strings', ['create'], '11_JS_String/01_JS_Strings/01_JS_String_Samples.js'],
  ['string-length', 'String Length', 'Use .length to count characters.', 'strings', ['length'], '11_JS_String/01_JS_Strings/02_FindingLength.js'],
  ['string-char-access', 'Character Access', 'Bracket notation, charAt() and charCodeAt().', 'strings', ['charAt'], '11_JS_String/01_JS_Strings/03_AccessingIndividualCharacters.js'],
  ['string-search', 'Search Methods', 'includes, indexOf, startsWith and endsWith.', 'strings', ['search'], '11_JS_String/01_JS_Strings/04_JS_Essencials_SearchMethods.js'],
  ['string-slice', 'slice()', 'Extract parts of a string, including with negative indexes.', 'strings', ['slice'], '11_JS_String/02_JS_Extract_Strings/01_JS_String_Slice.js'],
  ['string-substring', 'substring()', 'Extract a substring; negative values become 0.', 'strings', ['substring'], '11_JS_String/02_JS_Extract_Strings/02_JS_String_Substring.js'],
  ['string-case', 'Changing Case', 'toUpperCase() and toLowerCase().', 'strings', ['case'], '11_JS_String/02_JS_Extract_Strings/03_JS_String_Upper_Lower_Cases.js'],
  ['string-replace', 'replace & replaceAll', 'Replace one or all matches, including with a regex.', 'strings', ['replace'], '11_JS_String/02_JS_Extract_Strings/04_JS_String_Replace.js'],
  ['string-concatenation', 'Concatenation', 'Join strings with +, concat() and template literals.', 'strings', ['concat'], '11_JS_String/02_JS_Extract_Strings/05_JS_String_Trim copy.js'],
  ['string-trim', 'trim()', 'Strip whitespace from the start and/or end of a string.', 'strings', ['trim'], '11_JS_String/02_JS_Extract_Strings/06_JS_String_Concat.js'],
  ['string-split-join', 'split & join', 'Convert between strings and arrays.', 'strings', ['split', 'join'], '11_JS_String/02_JS_Extract_Strings/07_JS_String_Split_Join.js'],
  ['string-conversion', 'Type Conversion', 'Convert between strings and numbers.', 'strings', ['conversion'], '11_JS_String/02_JS_Extract_Strings/08_JS_String_Conversion.js'],

  // ---------------------------------------------------------------- callbacks
  ['callback-basics', 'Callback Basics', 'Pass a function into another function and call it.', 'callbacks', ['callback'], '14_JS_CallBack/01_JS_CallBack_Samples/01_JS_Callback_Sample.js'],
  ['callback-three-ways', 'Three Ways to Pass Callbacks', 'Named reference, anonymous function and arrow function.', 'callbacks', ['callback'], '14_JS_CallBack/01_JS_CallBack_Samples/02_JS_Callback_Sample.js'],
  ['callback-hell-login', 'Callback Hell: Login Flow', 'Nested callbacks simulating an end-to-end login flow.', 'callbacks', ['callback hell'], '14_JS_CallBack/01_JS_CallBack_Samples/03_JS_Callback_Sample.js'],
  ['async-callback-timer', 'Async Callback (setTimeout)', 'Non-blocking code with a setTimeout callback.', 'callbacks', ['async', 'setTimeout'], '14_JS_CallBack/02_JS_Async_Callback/01_JS_Async_Callback_Sample.js'],
  ['async-callback-flow', 'Async E2E Flow', 'An end-to-end flow built from asynchronous callbacks.', 'callbacks', ['async', 'e2e'], '14_JS_CallBack/02_JS_Async_Callback/02_JS_Async_Callback_Sample.js'],
  ['callback-return', 'Callback with Return', 'A callback that returns a value to its caller.', 'callbacks', ['return'], '14_JS_CallBack/03_JS_Callback_Return/JS_Callback_return_Sample.js'],
  ['callback-operations', 'Callbacks as Operations', 'Pass add() or multiply() as the operation to run.', 'callbacks', ['strategy'], '14_JS_CallBack/04_JS_Callback_Prct/02_JS_Callback_Prac.js'],
  ['callback-guard', 'Guard Against Bad Callbacks', 'Check typeof before invoking a callback.', 'callbacks', ['validation'], '14_JS_CallBack/04_JS_Callback_Prct/07_JS_Callback_Prac.js'],

  // ---------------------------------------------------------------- promises
  ['promise-resolve', 'Promise: resolve', 'Create a promise that resolves and read it with .then().', 'promises', ['resolve'], '15_JS_Promise/01_JS_Promise/01_JS_Promise_Sample.js'],
  ['promise-reject', 'Promise: reject & catch', 'Reject a promise and handle it with .catch().', 'promises', ['reject', 'catch'], '15_JS_Promise/01_JS_Promise/02_JS_Promise_Sample.js'],
  ['promise-finally', 'Promise: finally', 'Run cleanup code no matter the outcome.', 'promises', ['finally'], '15_JS_Promise/01_JS_Promise/03_JS_Promise_Sample.js'],
  ['promise-food-order', 'Promise: Food Order', 'Model pending / fulfilled / rejected with a delivery scenario.', 'promises', ['states'], '15_JS_Promise/02_JS_Promise_Pract/03_JS_Promise.prac.js'],
  ['promise-food-order-timer', 'Promise: Delayed Order', 'A food-order promise that resolves after a delay.', 'promises', ['setTimeout'], '15_JS_Promise/02_JS_Promise_Pract/01.JS_Promise_Pract.js'],
  ['promise-all', 'Promise.all', 'Wait for every promise to resolve successfully.', 'promises', ['all'], '15_JS_Promise/03_JS_Promise_All/01_JS_Promise_All_Sample.js'],
  ['promise-all-reject', 'Promise.all with a Failure', 'One rejection rejects the whole Promise.all.', 'promises', ['all', 'reject'], '15_JS_Promise/03_JS_Promise_All/02_JS_Promise_All_Sample.js'],
  ['promise-allSettled', 'Promise.allSettled', 'Wait for every promise to settle, success or failure.', 'promises', ['allSettled'], '15_JS_Promise/04_JS_Promise_AllSettled/01_JS_Promise_AllSetteled_Sample.js'],
  ['promise-race', 'Promise.race', 'The first promise to settle wins.', 'promises', ['race'], '15_JS_Promise/05_JS_Promise_Race/01_JS_Promise_Race.js'],

  // ---------------------------------------------------------------- async / await
  ['async-timer', 'Async Timer', 'See how setTimeout does not block the main flow.', 'async', ['setTimeout'], '16_JS_Async_Await/01_JS_Async_Await_Basics/02_JS_Async_Timer.js'],
  ['async-download', 'Download Test Data', 'Simulate downloading data, then use it in a callback.', 'async', ['callback'], '16_JS_Async_Await/01_JS_Async_Await_Basics/03_JS_Callback_Sample.js'],
  ['async-callback-hell', 'Callback Hell: Checkout', 'Nested callbacks for login, cart, discount and payment.', 'async', ['callback hell'], '16_JS_Async_Await/01_JS_Async_Await_Basics/04_JS_Callback_Hell.js'],
  ['async-await-flow', 'Async / Await Flow', 'Run a sequence of awaited steps in order.', 'async', ['await'], '16_JS_Async_Await/02_JS_Async_Await_CoreSamples/01_JS_Async_Await_sample.js'],
  ['async-await-try-catch', 'Async / Await with try/catch', 'Handle a rejected awaited promise with try/catch.', 'async', ['await', 'errors'], '16_JS_Async_Await/02_JS_Async_Await_CoreSamples/02_JS_Async_Await_sample.js'],
];

const programs = entries.map(([id, title, description, category, tags, file, options = {}]) => {
  let code;
  try {
    code = readFileSync(join(root, file), 'utf8');
  } catch (err) {
    code = `// Could not load ${file}\n// ${err.message}`;
  }
  return {
    id,
    title,
    description,
    category,
    tags,
    file,
    runnable: options.run !== false,
    note: options.note || '',
    lines: code.split('\n').length,
    code,
  };
});

const banner =
  '// AUTO-GENERATED FILE - do not edit by hand.\n' +
  '// Source: tools/generate-programs.mjs  |  Regenerate with: node tools/generate-programs.mjs\n\n';

const out =
  banner +
  'window.CATEGORIES = ' + JSON.stringify(categories, null, 2) + ';\n\n' +
  'window.PROGRAMS = [\n' +
  programs.map((p) => '  ' + JSON.stringify(p)).join(',\n') +
  '\n];\n';

writeFileSync(join(root, 'programs-data.js'), out, 'utf8');

const byCat = categories.map((c) => `${c.label}: ${programs.filter((p) => p.category === c.id).length}`);
console.log(`Generated programs-data.js with ${programs.length} programs.`);
console.log(byCat.join('  |  '));
