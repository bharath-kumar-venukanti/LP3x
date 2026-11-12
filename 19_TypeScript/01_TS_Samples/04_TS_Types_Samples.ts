//Primitive data types

let name:string="Bharath";
let value:number=10;
//let salary:float=9999.9;
let salary:number=9999.9;

let isActive:boolean=true;
let nothing:null=null;
let notdefined:undefined=undefined;

//Arrays
let numbers:number[]=[1,2,3,4,5,6]
let names:string[]=["1","2","4"]
let name2:Array<string>=["Bharath", "Sharath", "Karath"]

console.log(numbers)
console.log(names)
console.log(name2);

//Any
let anything:any="hello";
let anything2:any=2;
let anything3:any=[1,2,3];

console.log(anything);
console.log(anything2);
console.log(anything3);

//Unknown
let unkn:unknown="hello";
let unkn2:unknown=2;

console.log(unkn);
console.log(unkn2);

