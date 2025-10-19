const Object = {
  js : 'javascript',
  cpp : 'C++',
  rb : 'ruby',
  swift : 'switch by apple'
}

// for in loop 

for (const key in Object) {
//  console.log(`${key} shortcut is for ${Object[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
  // console.log(programming[key]);
  
}

// const map = new Map()
// map.set('IN', "INDIA" )
// map.set('USA', "United States Of America" )
// map.set('FR', "France" )

// for (const key in map) {
// console.log(key);
// }

// map is not iterable with above syntax in for in loop

// ++++++++++++++++++++++++++++++++++++++++++++++FOR EACH LOOP +++++++++++++++++++++++++++++++++++++++++++++++++

const coding = [ "js" , " ruby", "java" , "python" , "swift"]

//  coding.forEach(  function (val) {
//   console.log(val);
//  } )

// coding.forEach( (item)  => {
//   console.log(item);
// })
 


  // function printMe(item){
  //   console.log(item);
  // }
  
  // coding.forEach(printMe)

  // coding.forEach( (item , index , arr) =>{
  // console.log(item, index , arr);
  
  // } )

  const myCoding = [
    {
       languageName : "javascript",
       languageFileName : "py"
    },
    {
      languageName: "python",
      languageFileName : "py"
    },
  ] 

  myCoding.forEach((item) => {

    console.log(item.languageFileName);
    
  })
