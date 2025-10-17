//var c = 300  // global scope
let a = 300 

if(true){

  let a = 10   //block scope 
  const b = 20  // block scope
  var c = 30    // block scope
  console.log("INNER :", a );
}

console.log(a);  // global scope
console.log(b);
console.log(c);

for (let i = 0 ; i < array.length ; i++){
  const element = array[i] ; 
}

// global scope in console of our web browser is different from the global scope used by  node in  running our code in vs code coding environment
 
