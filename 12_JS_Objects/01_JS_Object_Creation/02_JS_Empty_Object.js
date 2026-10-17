// An empty object starts with no properties.
// It is useful when you want to add data later,
// for example while building up a test report step by step.

let report = {};

// Nothing inside yet.
console.log(report); // {}

// Add properties one by one AFTER the object is created.
report.name = "Smoke Test";
report.passed = 3;
report.failed = 0;

// Now the object holds data.
console.log(report);
