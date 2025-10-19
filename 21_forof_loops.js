// for of
const arr  = [1,2,3,4,5]
for (const num of arr) {
  // console.log(num);
}

const greetings = "hello world:"
for (const greet  of greetings) {
  // console.log(`Each char is ${greet}`); 
}

// MAP 

const map = new Map()
map.set('IN', "INDIA" )
map.set('USA', "United States Of America" )
map.set('FR', "France" )
// console.log(map);

for (const [key , value] of map) { // yha for of loop me different syntax use kia gya hai 
 // console.log(key); // iss trh se poora ka poora array print ho jayega 
 console.log(key , ':-' , value); // iss trh se key value alag alag aayenge aur upar for loop me different syntax use krte hai [key,value]
 
  
  
}
// maps me entries hamesha unique hoti hai aur duplicate values allowed nahi hai

// maps key value ke order ko dhyaan rkhta hai jis order me aap key values ko enter krte ho usi way me map key values ko print krta hai 

// maps aur objects almost same hai bss ye upar ke kuch differences ko hta ke 

const myObject = {
  'game' : 'NFS',
   'game2' : 'Spiderman' 
}

// for (const [key,value] of myObject) {
//   console.log(key , ':-' , value); 
// }
// with the help of for of loop object is not iterable this above syntax is not appropriate for iterting Object  



