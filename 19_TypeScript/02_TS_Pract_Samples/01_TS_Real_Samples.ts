function buildEndPoint(base:string, path:string):string {
    return base+path;
}

function isCodeSuccess(code:number):boolean {
    return code >=200 && code<300
}

function logTestStep(step:string) {
    console.log(step)
}


let api="https://api.com/"
let user="users"
let url=buildEndPoint(api,user)
console.log(api,user);
console.log("200 is Success:",isCodeSuccess(200));
console.log("400 is Success:",isCodeSuccess(400));
logTestStep("Navigating to Login Page")


