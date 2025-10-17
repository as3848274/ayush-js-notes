// console.log("A");
// console.log("Y");
// console.log("U");
// console.log("S");
// console.log("H");

// function sayMyName(){
// console.log("A");
// console.log("Y");
// console.log("U");
// console.log("S");
// console.log("H");

// }

// sayMyName()

// function addTwoNumbers(num1, num2){ // parameters
//   console.log(num1 + num2);
// }
// // addTwoNumbers(5, 7) // arguments


// function addTwoNumbers(num1, num2){ 
//  let result = num1 + num2
//  return result
// console.log("This will never be printed"); // unreachable code because after return function exits
// }


// function addTwoNumbers(num1, num2){ 

//  return num1 + num2

// }


// addTwoNumbers(10, "15") //1015
// addTwoNumbers(3,"a") //3a
// addTwoNumbers(3,null) // 3
// addTwoNumbers(3, undefined) // NaN

// const result = addTwoNumbers(4,5)
// console.log("Result:", result); // undefined

function loginUserMessage(username = "ayush"){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return '${username} just logged in'

}
// console.log(loginUserMessage("ayush"))

// mostly asked in interviews
  console.log(loginUserMessage("ayush")) // undefined just logged in





