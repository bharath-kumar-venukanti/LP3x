interface BasePage{
    url:string,
    title:string
}

interface LoginPage extends BasePage{
    userNameSelector:string,
    passwordSelector:string,
    loginButtonSelector:string
}

interface FreeTrailPage extends BasePage{
    userNameSelector:string,
    submitButtonSelector:string
}


let loginPage:LoginPage={
    url: "\login",
    title:"LoginPage",
    userNameSelector:"#username",
    passwordSelector:"#password",
    loginButtonSelector:"#login_Btn"
}

let expUrl=loginPage.url;
let expTitle=loginPage.title;
let expuserName=loginPage.userNameSelector
let expPass=loginPage.passwordSelector
let clickButton=loginPage.loginButtonSelector

console.log(expUrl);
console.log(expTitle);
console.log(expuserName);
console.log(expPass);
console.log(clickButton);


