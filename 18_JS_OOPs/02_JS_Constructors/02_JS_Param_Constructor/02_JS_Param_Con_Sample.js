class studentDetails{

    //Creating  Constuctor wiht Parameters
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // A method for the student to introduce themselves
    introduce(){
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
    }

}

//Creating the object to access the Constructor
let std=new studentDetails("Bharath",10, "A")

let std2=new studentDetails("Sharath",10, "B")

std.introduce();
std2.introduce()

// console.log(std.name);
// console.log(std2.age);



