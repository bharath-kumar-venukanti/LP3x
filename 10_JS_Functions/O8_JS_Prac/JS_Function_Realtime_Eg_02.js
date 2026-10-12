/**
 * Checks a given status code against specified ranges:
 * - Greater than 200 and up to 300 -> "Success"
 * - 301 to 400 -> "Client Error"
 * - 401 to 500 -> "Server Error" 
 * - Any other value -> "Unknown Status"
 */

//1. Sample function with ifelse
console.log("----Sample Function-----")
function checkStatusCode(code) {
    if(code>200 && code<=300){
        return "Success";
    } else if (code >301 && code<=400) {
        return "Client Error";
    } else if (code>401 && code<=500){
        return "Server Error";
    } else {
        return "Unknown Status"
    }
    
}

console.log(checkStatusCode(250))
console.log(checkStatusCode(400))
console.log(checkStatusCode(500))
console.log(checkStatusCode(501))

//2.Function as expression with Ternary Operator
console.log("----Function As Expression-----")
const checkStatusCodeTernary = function (code) {
    return code > 200 && code <= 300
        ? "Success"
        : code >300 && code <=400
           ? "client Error"
           : code >400 && code <=500
              ? "Server Error"
              : "Unknown"
       
};

console.log(checkStatusCodeTernary(250));
console.log(checkStatusCodeTernary(350));
console.log(checkStatusCodeTernary(450));
console.log(checkStatusCodeTernary(501));

//3. Arrow Function with Switch case
console.log("----Arrow Function-----")
const checkStatusCodeSwitch = (code) => {
    switch (true) {
        // Checks if code is greater than 200 and less than or equal to 300
        case (code > 200 && code <= 300):
            return "Success";   
        // Checks if code is between 301 and 400
        case (code > 300 && code <= 400):
            return "Client Error";   
        // Checks if code is between above 400 and 400
        case (code > 400 && code <= 500):
            return "Server Error"; 
    
        default:
           return  "Unknown Error"    
        }
}

// Test cases
console.log(checkStatusCodeSwitch(250)); 
console.log(checkStatusCodeSwitch(301)); 
console.log(checkStatusCodeSwitch(200)); 
console.log(checkStatusCodeSwitch(500)); 