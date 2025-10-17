// ARROW FUNCTIONS 

const user = {
  username : "ayush",
  price : 999,

  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this); // this gives us current variable values
  }

}
// user.welcomeMessage() // context simply means the values that they are holding 

// user.username = "devansh"
// user.welcomeMessage()

// console.log(this); // here current context is empty {}


// browser ke andr jo global object h vo hai window object 
// aur apne coding platform pe jo bhi value h vo hai empty object 

 
// function one (){
//   let username = "ayush"
//   console.log(this.username);
// }
// one() // gives undefined 



//++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++


const chai = () => {
  let username = "AYUSH"
  console.log(this.username);
} 
chai()

 // EXPLICIT RETURN  means return lgaana padd rha hai 


// const addTwo = (num1,num2) => {
//   return num1 + num2  // yaha pe return keyword likhna pda
// }



//IMPLICIT RETURN



// const addTwo = (num1,num2) =>   (num1 + num2) // return nahi likhna pda
const addTwo = (num1,num2) =>  { username: "hitesh"} // undefined qki iss tarah se apne log object return nahi kr skte 
//aur jab aap isi ko () paranthesis me wrap kr doge to object return ho jayega  {( username: "hitesh")}


console.log (addTwo(3,4))

// curly braces me upar wrap kia to return likhne ki need thi but jab small braces me wrap kia tab rerturn ki need nahi hai 

