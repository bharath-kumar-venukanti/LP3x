//E2E Login Flow
/**
 * 1. Open Browser 
 * 2. Goto Login Page
 * 3. Enter the credential
 * 4. Click on login button
 */


function openBrowser(callback) {
    console.log("Opening browser")
    setTimeout(function () {
        console.log("Opened Browser")
        callback()
    }, 5000)
}

function goToLoginPage(callback) {
    console.log("Url Entered")
    setTimeout(() => {
        console.log("Navigated to Login Page")
        callback()
        
    }, 2000);
}
function enterCredentials(callback) {
    setTimeout(() => {
        console.log("Entered credentials")
        callback()
    }, 2000);
}

function clickLogin(callback) {
    setTimeout(() => {
        console.log("Clicked on Login Button")
        callback()
    }, 2000);
}

//Callback Hell
openBrowser(function () {
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is completed.")
            })
        })
    })
})