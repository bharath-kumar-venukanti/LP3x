//Three Ways to Pass Callbacks in JavaScript


function placeOrder(item, callback){
    console.log("Order Placed....");
    callback();
}


// WAY 1: Passing a Named Function Reference

//Defining Sample function

function orderedItem() {
    console.log("Orde is Ready, and Pick it up!")
}
let itemName="Burger"
placeOrder(itemName, orderedItem)

console.log("")

// WAY 2: Passing an Anonymous Function

placeOrder(itemName, function () {
    console.log("Orde is Ready, and Pick it up!")   
})
console.log("")
//WAY 3: Passing an Arrow Function

placeOrder(itemName,  () =>
    console.log("Orde is Ready, and Pick it up!") )



