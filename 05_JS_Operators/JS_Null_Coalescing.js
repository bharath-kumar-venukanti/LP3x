// let amul=null;

// //its right-hand side operand when its left-hand side operand is null
// let milkProduct=amul ??"Thirumala";
// console.log("Milk Product Name is: "+milkProduct);

// let api_response=null;

// let api_response=400;
// let response_data=api_response?? "{}";
// console.log("Api Response : "+response_data);

// let speed = 0;
// let label = null;
// let my_name ="";

// let speed_response=speed ?? "No Value";
// let label_response= label ?? "No lable";
// let name_response= my_name ?? "No Name";

// console.log(speed_response,",", label_response, ",", name_response);

let savedAddress = null;
let profileAddress = undefined;
let billingAddress = "123 Main Street";
let defaultAddress = "No Address Provided";

// Checks each variable from left to right until a valid value is found
let finalAddress = savedAddress ?? profileAddress ?? billingAddress ?? defaultAddress;
/*
1. savedAddress is null, ?? skips it and moves to the next variable.
2. profileAddress is undefined, ?? skips it and moves to the next variable.
3. billingAddress contains String value(it will print) 
4. defaultAddress  contains String value  (if billingAddress contain no value then defaultAddress will be executed )
*/
console.log(finalAddress);