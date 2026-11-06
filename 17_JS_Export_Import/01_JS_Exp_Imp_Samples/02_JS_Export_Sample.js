export default class User {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }

    // user login is successful
    login() {
        //return true;
        return this.name + " is logged in successfully";
    }
}