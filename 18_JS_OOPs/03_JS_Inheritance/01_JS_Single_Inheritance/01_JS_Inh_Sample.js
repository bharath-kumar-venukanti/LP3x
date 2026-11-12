// Create the parent class
class Parent {
   // Method to show a parent message
   displayParent(){
    console.log("Im a parent");
   }
}

// Create the child class that inherits from Parent
class Child extends Parent {
    // Method to show a child message
    displayChild() {
        //super.displayParent();
        console.log("Im a Child");
    }
}

// Create a new object from the Child class
let family = new Child();

// Call the child method using the object
family.displayChild();
// Call the parent method using the object
family.displayParent();