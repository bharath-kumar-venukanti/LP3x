//Step 1: Login - Pass the token to the next step
// Step 2: Fetch Token - Pass the cart ID to the next step
// Step 3: Open Cart  - Pass the final price to the next step
// Step 4: Checkout. - Pass the receipt back

function loginUser(email, callback) {
    console.log(`1. Logging in user: ${email}`);
    //Generating the Token
    setTimeout(() => {
        const token="auth_Tok_111";
        callback(token);
    }, 2000);
    
}
function getCartItems(token, callback) {
    console.log(`2. Fetching the cart using token: ${token}`);
    setTimeout(() => {
        const cartID="auth_cartID_111";
        callback(cartID);
    }, 2000);
    
}
function applyDiscount(cartID, promoCode, callback) {
    console.log(`3. Applying promo code '${promoCode}' to cart: ${cartID}...`);
    setTimeout(() => {
        const discountPrice=50;
        callback(discountPrice);
    }, 2000);
    
}
function submitPayment(amount, callback) {
    console.log(`4. Processing payment of $${amount}...`);
    setTimeout(() => {
        const receipt="RECT-2026-01"
        callback(receipt)
    }, 1000);

}

//callback hell
let uesrMail="Bharath@gmail.com"
loginUser(uesrMail, function (token) {
    getCartItems(token, function (cartID) {
        applyDiscount(cartID,"SUMMER20", function (discountedPrice) {
            submitPayment(discountedPrice, function (recpt) {
                console.log("Order successful! Receipt:", recpt)
            })
            
        } )
    })
})

