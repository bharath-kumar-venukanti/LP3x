let fruit = "Apple";

// switch(fruit){
//     case "Banana":
//         console.log("It is Banana, What you are looking for.");
//         break;
//      case "apple":
//         console.log("It is apple, What you are looking for.");
//         break;
//      case "Apple":
//         console.log("It is Apple, What you are looking for.");
//         break;
//     default:
//         console.log("Unknown fruit category found" );
// }

switch (fruit.toLowerCase()) {
  case "apple":
  case "banana":
  case "orange":
    console.log(`${fruit} is a common fruit.`);
    break;
  case "mango":
  case "papaya":
    console.log(`${fruit} is a tropical fruit.`);
    break;
  default:
    console.log("Unknown fruit category.");
}