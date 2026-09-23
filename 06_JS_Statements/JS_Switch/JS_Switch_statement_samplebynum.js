let dayNumber = 3;  
// switch (dayNumber) {
//     case 0:
//         console.log("Sunday - Rest Day");
//         break;
//     case 1:
//         console.log("Monday - Sprint Planning");
//         break;
//     case 2:
//         console.log("Tuesday - Development");
//         break;
//     case 3:
//         console.log("Wednesday - Code Review");
//         break;
//     case 4:
//         console.log("Thursday - Testing");
//         break;
//     case 5:
//         console.log("Friday - Deployment & Retro");
//         break;
//     case 6:
//         console.log("Saturday - Rest Day");
//         break;
//     default:
//         console.log("Invalid day value");
//     }

let dayName;

switch(dayNumber){
    case 1:
        dayName="Monday";
       // console.log(dayName+","+dayNumber);
        break;
    case 2:
        dayName="Tuesday";
       // console.log(dayName+","+dayNumber);
        break;
    case 3:
        dayName="Wednesday";
       //console.log(dayName+","+dayNumber);
        break;
    case 3:
        dayName="Thursday";
       //console.log(dayName+","+dayNumber);
        break;
    case 4:
        dayName="Friday";
       //console.log(dayName+","+dayNumber);
        break;
    default:
            console.log("Weekends are not allowed to work");
}
console.log(`Day is ${dayNumber} and it is ${dayName}`)
