//Readonly

interface User{
    readonly name:string,
    readonly age:number,
    readonly email:string
}


const user:User={
     name:"Bharath",
    age:30,
    email:"Bharath@gmail.com"
}


console.log(user)
console.log(user.name)