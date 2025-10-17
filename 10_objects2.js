// const tinderUser = new Object() // this is singleton object 
const tinderUser ={} // this is not singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "ayush"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email : "ayush@gmail.com" ,
  fullname : {
    userfullname :{
      firstname : "ayush",
      lastname : "sharma"
    }
  }
}
// console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


// const obj3 = {obj1,obj2}
// console.log(obj3); // gives output as object inside an object

// const obj3 = Object.assign({}, obj1, obj2, obj4) // it will merge the two objects in appropriate 
// assign return the modified target object form the source object
// console.log(obj3);

const obj3 = {...obj1, ...obj2, ...obj4} // spread operator
// console.log(obj3);

const users = [
  {
    id:1 ,
    email : "h@gmail.com"
  },
   {
    id:1 ,
    email : "h@gmail.com"
  },
   {
    id:1 ,
    email : "h@gmail.com"
  },
   {
    id:1 ,
    email : "h@gmail.com"
  },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // it will give the keys of the object in the form of an array

// console.log(Object.values(tinderUser));


// console.log(Object.entries(tinderUser)); // it will give the keys and values of the object in the form of an array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it will return true if the object has the property otherwise false

const course = {
  coursename : "js in hindi",
  price : 999,
  courseInstructor : "hitesh " 
}

// course.courseInstructor

const {courseInstructor : instructor} = course // object destructuring
console.log(courseInstructor);

// const navbar = ({conpany}) => {

// }
//  navbar(company = "hitesh")


//+++++++++++++ APIs ++++++++++++++++++++



// {
//  " name"  : "hitesh",
//   "coursename   "js in hindi",
// "  price ": "free"
// }

[
 {},
 [],
 [], 
]
