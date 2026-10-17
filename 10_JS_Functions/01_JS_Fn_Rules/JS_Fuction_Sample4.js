//With Arguments & With Return Type

// Function Definition (HAS parameters inside brackets, HAS a 'return' statement)
function calculateTotalWithTax(price, tax) {
    let taxPer=price*tax;
    let totalPrice=price+taxPer
    return totalPrice;
}

// Function Call (Passes arguments AND receives the calculated value back)

let totalBillwithTax=calculateTotalWithTax(100, 0.33);
console.log(totalBillwithTax)