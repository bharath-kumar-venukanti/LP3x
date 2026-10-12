//Multi line Arrow Function

const isUserMarried=(Marriage)=>{
    if(Marriage===true) return "Married";
    return "Not Married"
}

let marriageStatus=isUserMarried(true)
console.log(marriageStatus)