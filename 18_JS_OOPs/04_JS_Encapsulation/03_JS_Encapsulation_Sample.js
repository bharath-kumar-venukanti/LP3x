class Person {
    // Private property
    #name;

    // Constructor to set the initial name
    constructor(name) {
        this.#name=name;
    }

    // Getter method to safely read the private name
    get name(){
        return this.#name
    }

    // Setter method to safely update the private name with validation

    set name(newName){
        if(newName.trim()===""){
            console.log("Name cannot be empty!");
            return;
        }
        return this.#name=newName

    }


}

// Create a new person object
let person = new Person("Bharath");

// Use the getter to read the name
console.log(person.name); 

// Use the setter to update the name
person.name = "Sharath";
console.log(person.name); 

// Try to set an invalid empty name
person.name = ""; 