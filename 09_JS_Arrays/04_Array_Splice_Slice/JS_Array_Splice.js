
//splicing the array- adding and removing elements from the array at any index
let statuses = ["pending", "progress", "completed"];
//Remove 1 element from index 1 and add "in-progress" at index 1
statuses.splice(1, 1, "in-progress");
console.log("-----------Updated statuses array----------");
console.log("Spliced statuses array: " + statuses);

//remove 0 elements from index 2 and add "archived" at index 2
statuses.splice(2, 0, "archived","on-hold");
console.log("-----------Updated statuses array----------");
console.log("Spliced statuses array: " + statuses);