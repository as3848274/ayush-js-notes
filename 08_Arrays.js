//array

//  const myArr = [1, 2, 3, 4, 5]; // square brackets and elements of array

///Javascripts arrays are resizable and can contain elements of different types


// Javascript array copy-operation create shallow copies of the array

// shallow copy of an object is a copy whose properties share the same references as the original object

//Deep copy of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made.


///different ways to create an array

// const myHeroes = ['shaktiman', 'nagraj', 'doga', 'batman']
// const myArr2 = new Array('ayush', 'hitesh', 'rohit')

// contains a method when we run our array in console it shows the length of the array and also contains protoype and inside the prototype we have only one another prototype 


//Array Methods 

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()
// myArr2.unshift(9) // add element at the start of the array

// console.log(myArr2.includes(9)); // check if the element is present in the array or not
// console.log(myArr2.indexOf(9)); // gives the index of the element if present otherwise -1 when not present 

// console.log(myArr2);

// const newArr = myArr2.join()  //adds all the elements of the array into a string
// console.log(newArr);
// console.log(myArr2);


//slice,spice

// console.log("A" , myArr);
// const myn1 = myArr.slice(1,3); // first included but 3rd is not included
// console.log(myn1);
// console.log("B" , myArr);


// const myn2 = myArr.splice(1,3)
// console.log("C" , myArr);
// console.log(myn2);

// clearly learn the difference between slice and splice

//slice does not change the original array but splice changes the original array 


const marvel_heroes = ['ironman', 'thor', 'captain america', 'black panther']
const dc_heroes = ['superman', 'batman', 'wonder woman', 'flash']
// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // gives result as array inside an array
// console.log(marvel_heroes[4][1]); // to access the element inside the array inside an array


// const allHeroes = marvel_heroes.concat(dc_heroes) // it will add the elements of dc_heroes to the marvel_heroes array but it will not change the original array
// console.log(allHeroes);



// const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator it will also add the elements of dc_heroes to the marvel_heroes array but it will not change the original array
// console.log(all_new_heroes);


// const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity) // flat method it will remove the nested array and will give a single array
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))


console.log(Array.from({name: "Ayush", age: 22})) // it will give an empty array because it is not iterable

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // it will give an array of the elements passed in the method





