// Create the parent class
class Parent {

    // Create a constructor to initialize the name property
    constructor(name){
        this.name=name;
    }

   // Method to show a parent message
   displayParent(){
    console.log("Im a parent");
   }
}

// Create the child class that inherits from Parent
class Child extends Parent {
    // Create a constructor to initialize the child name property
    constructor(name,age){
        super(name)
        this.age=age
    }
    // Method to show a child message
    displayChild() {
        console.log(this.name+" Im a Child");
        console.log(this.age)
    }
}

// Create a new object from the Child class
let family = new Child("Bharath", 30);

// Call the child method using the object
family.displayChild();
// Call the parent method using the object
family.displayParent();