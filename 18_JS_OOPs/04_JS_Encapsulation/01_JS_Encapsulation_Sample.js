class Person {
    // Private property
    #child1;
    #child2;
  
    constructor(name,child1, child2 ) {
        this.name=name;
        this.#child1=child1;
        this.#child2=child2;
    }

    // Getter for child 1
    getchild1(){
        return this.#child1;
    }

    // Getter for child 2
    getchild2(){
        return this.#child2;
    }

    // Method to display information
    getDetails(){
        return `${this.name} is a parent of ${this.#child1} and ${this.#child2}`
    }
    
}

let childerns=new Person("Bharath", "Shlok", "Maha")

console.log(childerns.getchild1());
console.log(childerns.getDetails())
