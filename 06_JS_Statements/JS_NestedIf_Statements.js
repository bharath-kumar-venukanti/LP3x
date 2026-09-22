
// Loan Approval Eligibility

// let age = 25;
// let monthlyIncome = 3500;
// let creditScore = 720;


// if(age>=21){
//     //1. Eligibility Check

//      console.log("Applicant age is eligible for loan")

//      //2. Income Check

//     if(monthlyIncome>=3000){
//         console.log("Monthly income is eligible for loan")

//     // 3. credit score check
    
//        if(creditScore>=700){
//         console.log("Loan approved at low interest rate.")
//     } else if(creditScore>=600 && creditScore>=699){
//         console.log("Loan approved at standard interest rate.")
//     }else{
//         console.log("Loan Denied,Credit score is too low.")
//     }
// } else{
//         console.log("Loan Denied, Monthly income should be needed 3000 or above.")
//     }
// }else{
//     console.log("Loan Denied: Applicant must be at least 21 years old.")
// }


//Accessing User Dash board.

// let userLoggedIn = true;
// let userRole = "admin";

// if (userLoggedIn) {
//   if (userRole === "admin") {
//     console.log("Welcome Admin! Accessing dashboard...");
//   } else {
//     console.log("Welcome User! Viewing home page...");
//   }
// } else {
//   console.log("Please log in to continue.");
// }


//Order Eligibility Check
let isLoggedIn = true;
let isPremiumMember = true;
let cartTotal = 40;

if (isLoggedIn) {
  //Check membership type inside logged-in state
  if (isPremiumMember) {
    console.log("Free shipping applied! (Premium Member perk)");
  } else if (cartTotal >= 50) {
    console.log("Free shipping applied! (Spent over $50)");
  } else {
    console.log("Standard shipping fee: $5.00");
  }
} else {
  console.log("Please log in to proceed to checkout.");
}