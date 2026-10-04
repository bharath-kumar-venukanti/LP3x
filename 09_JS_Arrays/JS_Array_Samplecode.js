let statuses = ["pending", "in-progress", "completed"];

console.log("----------findIndex method----------");
console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[2]);

//Modifying the array
statuses[1] = "in-review";
console.log("-----------Modified statuses array----------");
console.log("Modified statuses array: " + statuses);

//Adding a new element to the array at the end
statuses.push("archived");
console.log("-----------Updated statuses array----------");
console.log("Added last element to statuses array: " + statuses);

//Removing the last element from the array
statuses.pop();
console.log("-----------Updated statuses array----------");
console.log("Removed last element from statuses array: " + statuses);

//Adding a new element to array at the begining
statuses.unshift("new");
console.log("-----------Updated statuses array----------");
console.log("Added first element to statuses array: " + statuses);

//Removing the first element from the array
statuses.shift();
console.log("-----------Updated statuses array----------");
console.log("Removed first element from statuses array: " + statuses);
//sorting the array
statuses.sort();
console.log("-----------Updated statuses array----------");
console.log("Sorted statuses array: " + statuses);
//reversing the array
statuses.reverse();
console.log("-----------Updated statuses array----------");
console.log("Reversed statuses array: " + statuses);

//splicing the array- adding and removing elements from the array at any index
//pending,in-review,completed
//Remove 1 element from index 1 and add "in-progress" at index 1
statuses.splice(1, 1, "in-progress");
console.log("-----------Updated statuses array----------");
console.log("Spliced statuses array: " + statuses);

//remove 0 elements from index 2 and add "archived" at index 2
statuses.splice(2, 0, "archived","on-hold");
console.log("-----------Updated statuses array----------");
console.log("Spliced statuses array: " + statuses);