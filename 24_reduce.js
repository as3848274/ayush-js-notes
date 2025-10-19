//const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNumbers.map((num) => { return num + 10 })

// chaining method
// const newNums = myNumbers
//             .map((num) => num * 10 )
//             .map((num) => num + 1)
//             .filter( (num) => num >= 40 )
//  console.log(newNums);



// REDUCE FUNTIONALITY

const Nums = [1,2,3]
// myTotal = Nums.reduce(function (acc , currval) {
//   console.log(`acc : ${acc} and currval: ${currval}`);
  
//   return acc + currval
// } , 0 )
// console.log(myTotal);

// const myTotal = Nums.reduce ((acc , curr) => acc+curr, 0  )
// console.log(myTotal);


const shoppingCart = [
  {
    itemName : "js course",
    price : 3000

  } ,
  {
    itemName : "mobile dev course ",
    price : 6000

  } ,
  {
    itemName : " python course",
    price : 2000

  },
  {
    itemName : " data science course",
    price : 12333

  },

]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price ,0 )
console.log(priceToPay);


 
