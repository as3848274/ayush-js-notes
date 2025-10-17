// function calculateCarPrice(...num1){  // rest operator
//   return num1
// }
// console.log(calculateCarPrice(2)); // 2

// console.log(calculateCarPrice(200,300,400)); 



// function calculateCarPrice(val1, val2,...num1){  
//   return num1
// } 

// console.log(calculateCarPrice(200,300,400)) ;  // [400] because 200 and 300 are assigned to val1 and val2 respectively and remaining value 400 is assigned to num1 as an array.


const user = {
  username: 'Ayush Sharma',
  price: 25000,
};
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}
// handleObject(user);


handleObject({
  username: 'Ayush Sharma',
  price : 399
})


const myNewArray = [200,300,400,600]
function returnsecondValue(getArray){
  return getArray [0]
}
//console.log(returnsecondValue(myNewArray));

console.log(returnsecondValue([100,200,330,400]));

