// console.log( 2 > 1);
// console.log(2 >= 1);

// console.log("02">1);

// console.log(null > 0);// gives false 
// console.log(null == 0); // gives false 
// console.log(null >= 0); // gives true 

// the reason is that an equality check == and conmparisons ><  >= <= work differently 
// comparisons convert null to a number treating it as 0 that's why (3)null >= 0 is true and (1)null > 0 is false 

// console.log(undefined == 0 ); // output is false always the case of undefined 
// console.log(undefined>0);
// console.log(undefined<0);

// === ye apki na sirf values ko check krta h balki aapke datatypes ko bhi  check karta ha.....

console.log("2"=== 2 ) ; // gives false as the value in both is the same but the datatype is not the same 


