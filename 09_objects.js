//objects literals // literals ki trh se jab object declare krte hai to vo singleton nahi bnta hai


// singleton object //kisi bhi constructor se agr object bnaate h to usy singleton object khte h mtlb ye apne trh ka ek hi object h dusri trh se bnane me iske multiple instances ban jaate hai


//object.create // this is constructor method in this singleton abject is created

const mySym = Symbol("key1");

const JsUser =  {
  name : "John",
 " full name" : "AYUSH SHARMA",   // this value will never gets accessed by dot notation because of space
 mySym : "mykey1", // here datatype is not symbol here it is not used as symbol
 [mySym] : "mykey" , // here datatype is symbol this is the syntax to use symbol as key must keep it in square brackets
  age : 18,
  location : "USA",
  email : "hitesh@google.com",
  isLoggedIn : false,
  lastLogonDays :["Monday", "Friday"] // here object values is given as object value pair
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[" full name"])
// console.log(JsUser[mySym]) // here it prints mykey and it's object datatype is object
// console.log(typeof JsUser.mySym)

// JsUser.email = "ayush@chatgpt.com" // this is how we update the value of the key in object

// JsUser.freeze(JsUser) // this method freezes the object and we can not change or update the values of the keys in the object

// JsUser.email = "ayush@chatgpt.com" // this value shall be not be updated because we have freezed the object as before updaing we freezed our object

JsUser.greeting = function() {
  console.log("Hello JS User"); 
}
JsUser.greetingTwo = function() {
  console.log('Hello JS User, ${this.name}'); // this keyword refers to the current object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


 








