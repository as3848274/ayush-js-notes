//if


const isUserLoggedIn = true 
const temperature = 41

// if( temperature < 50){
//   console.log("Less than 50");
// }else{
//   console.log("temperature is greater");
// }

// const score = 200
// if (score > 100){
//   const power = "fly" // if hum yha "var power" krke lete to vo code line no. 18 ko bhi execute krata qki vo completely global scope hai
//   console.log(`User Power : ${power}`);
// }
//  console.log(`User Power : ${power}`);

 // var ka scope completely global hota hai isiliye hum let aur const ka use krte hai

//  const balance  = 1000
// //  if(balance > 500 ) console.log("test"),console.log("test2");
// if (balance < 500){
//   console.log("less than");
// }else if (balance < 750){
//   console.log("less than 750");
// }else{
//   console.log("less than 1200 ")
// }

// const userLoggedIn = true 
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// // if (userLoggedIn && debitCard ){
// //   console.log("Allow to buy course");
// // }
// if (loggedInFromEmail || loggedInFromGoogle ){
//   console.log("User Logged In");
// }


///+++++++++++++++++++++++++++ SWITCH +++++++++++++++++++++++++++++++


// switch(key){
//   case value :
//     break ;

//     default :
//      break ;  
// }

const month = 3
switch (month) {
  case 1: 
    console.log("January"); 
    break;
  case 2: 
    console.log("January"); 
    break;
  case 3: 
    console.log("March"); 
    break;
  case 4: 
    console.log("April"); 
    break;

  default:
    console.log("default case match ");
    break;
}

// IMPORTANT NOTE 

// isme ek baar jha bhi case match kr jaata hai uske baad ye uske neeche ka saara ka saara code execute karta hai except default  ... yha break use kr lete isilie execution cut off ho jaaata hai agar hum break na use kre to match condition se neeche ka saara ka saara code execute kr dega except default 

// const userEmail = "a@ayush.ai"
// if (userEmail){
//   console.log("Got user email");
// } else {
//   console.log ("Dont have user email");
// }

// falsy values = false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN .....

// truthy value = "0"  // string ke andr 0 truthy value hai
// 'false' = truthy value 
//  " "= truthy value 
//  []= truthy value 
// {}  = truthy value 
// function (){} // truthy value 

// if (userEmail.length === 0) {
//   console.log ("Array is Empty ");
  
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//   console.log ("Object is Empty");
  
// }

// Nullish Coalescing Operator (??): null undefined 

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1  = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator 

condition ? true : false 





