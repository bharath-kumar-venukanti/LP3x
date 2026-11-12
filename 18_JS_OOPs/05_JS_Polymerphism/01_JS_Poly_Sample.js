//Base class

class Animal {
    constructor(name) {
        this.name=name;
    }

    speak(){
        // return `${this.name} makes a sound.`;
        console.log(this.name+" makes a sound");
        
    }
}
//subclass
class Dog extends Animal{
    speak() {
      console.log(this.name+" barks: Bow, Bow ");  
    }
}

//subclass
class Cat extends Animal{
    speak() {
      console.log(this.name+" sounds: Meow, Meow ");  
    }
}


let pet1=new Dog("Puppy");
let pet2=new Cat("Puppy");
pet1.speak();
pet2.speak();