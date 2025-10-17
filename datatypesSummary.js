// primitive data types
// 7 types :  String, Number, Boolean, null , undefined , Symbol , BigInt  // call by value 


//reference datatype  (non - primitve datatype)
//Arrays , Objects , Functions
//datatype of all non-primitive datatype is function or function object



// Javascript is dynamically typed language You don’t need to declare variable types.
// The type is determined at runtime, based on the value assigned
// You can even change the type of a variable later.


// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId );


// const myFunction = function(){
//   console.log("Hello World");
// }

// ++++++++++++++++++++++++++++++++++ MEMORY +++++++++++++++++++

// Stack , Heap 

// Stack :  stores primitive values and references to objects
// Heap :  used to store NON - PRIMITIVE datatype 


// let myYoutubename = "AYUSH SHARMA"
// let anothername = myYoutubename 
// anothername = "Devansh Sharma"
// console.log(myYoutubename);
// console.log(anothername);

let userOne  ={
  email: "user@google.com",
  upi: "user@upi"
}

let userTwo = userOne
userTwo.email = "ayush@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



