function one(){
const username = "ayush"

  function two(){
    const website = "swiggy"
    // console.log(username);

  }
  // console.log(website);

  two ()
}
one ()


if(true){
  const username = "Ayush"
  if(username === "ayush"){
    const website = "swiggy"
    // console.log(username + website);

  }
  // console.log(website);
}
// console.log(username);


//+++++++++++++++ interesting +++++++++++++++++++


console.log(addone(5)) // here it gives output as 6 no error shown
function addone(num){
  return num + 1
}



addTwo (5)  // here it gives error and this concept is called hoisting this is because by the way of declaring function as here intially holds it into variable too 
const addTwo  = function (num){
  return num + 2
}
 
