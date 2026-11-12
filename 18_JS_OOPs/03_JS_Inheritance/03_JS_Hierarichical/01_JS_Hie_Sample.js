class Father {
    constructor(surname) {
        this.surname = surname;
    }
    
    displaySurname() {
        console.log("Family Name: " + this.surname + ".");
    }
}

class ElderSon extends Father {
    constructor(name, surname) {
        super(surname);
        this.name = name;
    }
    
    displayElderSonInfo() {
        console.log("First Name: " + this.name);
        super.displaySurname(); 
    }
}

class YoungerSon extends Father {
    constructor(name, surname) {
        super(surname);
        this.name = name;
    }
    
    displayYoungerSonInfo() {
        console.log("First Name: " + this.name);
        super.displaySurname(); 
    }
}

// --- Testing the Classes ---

const elderSon = new ElderSon("Bharath", "Venukanti");
elderSon.displayElderSonInfo();

console.log("-------------------");

const youngerSon = new YoungerSon("Sharath", "Venukanti");
youngerSon.displayYoungerSonInfo();