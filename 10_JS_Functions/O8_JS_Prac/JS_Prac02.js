//Goal: Write a function findMax(arr) that takes an array of numbers and returns the largest number in the array without using Math.max().

// let arrNum=[1,2,3,4,5]

// let arrlen=arrNum.length

// let arrMax=arrNum[0]

// for (let i = 0; i < arrlen; i++) {
//    //Compare the array element (arrNum[i]) to arrMax, not the index (i)
//     if (arrNum[i]>arrMax) {
//         // Assign the specific element, not the whole array
//         arrMax=arrNum[i]
//     }
// }
// console.log(arrMax)
//Sample function
function findMax(arr) {
//Find the length of the array

let arrLen=arr.length;

//Handle the edge case for "EMPTY" array
if (arrLen===0) {
    return undefined
}

// Assume a max element intially
let arrMax=arr[0]

//loop through each number in array
for (let i = 0; i < arrLen; i++) {
    // Compare the array element to max, not the index 'i'
    if (arr[i]>arrMax) {
        arrMax=arr[i];
    }

}
//console.log(arrMax)
return arrMax


}

//calling it
let getarr=[]
console.log(findMax(getarr))

console.log(findMax([1,2,3,4,5,60]))

console.log(findMax([1,2,3,74,5,60]))

//Array as expression

const findMaxNum=function (arr){
    let arrLen=arr.length;
    //If array is empty, then it should be undifined
    if (arrLen===0) {
        return undefined;
    }
    //Assume a max element first
    let maxNum=arr[0]

    for (let i = 0; i < arrLen; i++) {
        //find max value elment
        if (arr[i]>maxNum) {
            maxNum=arr[i]
        }
        
    }
    return maxNum
} 

console.log(findMaxNum([1,23,98]))

//Arrow function
const findMaximumValue=(arr)=>{
    //Find length of an array
    let arrLen=arr.length;
    //return "UNDIFINED" if array is emplty
    if (arrLen===0) {
        return undefined;
    }
    //Assume a max element
    let maxNumber=arr[0]
    //loop througth all element to find max value

    for (let i = 0; i <arrLen; i++) {
        //find max element
        if (arr[i]>maxNumber) {
            maxNumber=arr[i]
            
        }
}
return maxNumber;
}

let arrList=[7,45,1,58,44,99,123];
console.log(findMaximumValue(arrList))