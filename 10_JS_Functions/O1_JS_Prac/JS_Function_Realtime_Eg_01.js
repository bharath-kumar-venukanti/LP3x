//Validating the API stautus code

//Simple Function

function validationStatusCode_Simple(status) {
    if(status>=200&&status<=300){
        console.log("Request is fine")
    }
    
}

validationStatusCode_Simple(200)

//Expression Function
const validationStatusCode_Exp=function(status){
     if(status>=200&&status<=300){
        console.log("Request is fine")
    }
}
validationStatusCode_Exp(200)
//Arrow Function

const validationStatusCode_Arrow=(status)=>{
    if(status>=200&&status<=300){
        console.log("Request is fine")
    }
}
validationStatusCode_Arrow(200)
