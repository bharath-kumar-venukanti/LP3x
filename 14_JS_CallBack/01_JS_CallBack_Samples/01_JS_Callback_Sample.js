//Asynchronous Callback Simulation


//Defining the function
function placeOrder(item, callback ) {
    //Log that the order has been successfully placed
    console.log("Order placed and item is: "+item)
    //Execute the callback function passed as the second argument
    callback()

    console.log("Item Delivered")
}

//Calling it.
// Call the function with an item  and an anonymous function as the callback
placeOrder("Pizza", function () {
    console.log("The order is Ready, Pick it Up!")
})

console.log("")
placeOrder("Burger", function () {
    console.log("The order is Ready, Pick it Up!")
})
