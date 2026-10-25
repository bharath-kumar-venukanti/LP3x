//E2E Login Flow
/**
 * 1. Open Browser 
 * 2. Goto Login Page
 * 3. Enter the credential
 * 4. Click on login button
 */


function openBrowser(callback) {
    console.log("Opening browser")
    callback();
}

function goToLoginPage(callback) {
    console.log("Url Entered")
        callback();
}
function enterCredentials(callback) {
    console.log( "Credentials Entered")
   callback();
}

function clickLogin(callback) {
        console.log("Clicked on Login Button")
        callback()
   
}

//Callback Hell
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function (){
            clickLogin(function () {
                console.log("Test Completed")
            })
        })
    })
})