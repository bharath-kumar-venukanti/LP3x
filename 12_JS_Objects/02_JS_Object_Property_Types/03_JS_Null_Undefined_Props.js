// null means "intentionally empty".
// undefined means "no value was ever set".
// Both can appear as object property values.

let testCase = {
  id: "TC_003",
  bugId: null,        // intentionally empty (no bug linked yet)
  assignee: undefined // value not set yet
};

console.log(testCase.bugId);    // null
console.log(testCase.assignee); // undefined

// A property that does not exist at all is also undefined.
console.log(testCase.notes);    // undefined

// typeof shows the difference (note: typeof null is "object" - a known quirk).
console.log(typeof testCase.bugId);    // object
console.log(typeof testCase.assignee); // undefined
