// Define a class for student details
class studentDetails{

    // Create a constructor with parameters to set student properties
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

// Create the first student object using the constructor
let std = new studentDetails("Bharath", 10, "A")

// Create the second student object using the constructor
let std2 = new studentDetails("Sharath", 10, "B")

// Call the introduce method for the first student
std.introduce();

// Call the introduce method for the second student
std2.introduce()

// Print individual properties of the student objects
// console.log(std.name);
// console.log(std2.age);