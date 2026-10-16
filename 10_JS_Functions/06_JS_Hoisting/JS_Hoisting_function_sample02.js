//Task Name: The Hoisting and Variable Shadowing Trap

var tex="Outside value";

function logIt() {
    console.log(text); //Will be "Undefined"
    var text="Inside Value" //assignment happens here
}

logIt();