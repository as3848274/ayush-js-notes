// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// resolve(result)
// reject (error)

// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most of the people are consumers of already created promises. Essentially a promise is a returned object to which you attach callbacks , instead of passing callbacks into a function.



// Callback Hell - Nested callbacks stacked below one another forming a pyramid structure.....


//Callbacks - A callback is a function passed as an argument to another function 


//Sync in Js - Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

// Asynchronous - Due to synchronous programming sometimes imp instructions gets blocked due to some previous intructions which causes a delay in the UI , Asynchronous code execuiton allows to execute next instructions immediately and doesn't block the flow.




const promiseOne = new Promise (function (resolve , reject){
  // DO an async task 
  // DB calls , cryptography , network
  setTimeout(function (){
    console.log('Async task Is Complete ');
    resolve()
    
  },1000)

})

// resolve ka direct connection hota hai then se
promiseOne.then(function(){
  console.log('Promise Consumed '); 

})


// this is callback hell example where we have to wait for 2 seconds to get data 1 and then after that we have to wait for another 2 seconds to get data 2 and after 2 sec we get data 3 and after 2 sec we get data 4 (PYRAMID OF DOOM )

// concept of promises is used to resolve the problem of the callback hell 
function getData(dataId , getNextData){
  setTimeout(()=>{
    console.log("data" , dataId);
    if(getNextData){
      getNextData();
    }
    
  } ,2000);

}

getData(1, ()=>{
  console.log("getting data 2 ....");
  getData(2 , ()=>{
  console.log("getting data 3....");
    getData(3 , ()=>{
  console.log("getting data 4....");
      getData(4);
    });
  });
});




function getData (dataId , getNextData){
  return new Promise((resolve , reject) =>{
    setTimeout(() => {
      console.log("data",dataId);
      resolve("success");
    if(getNextData){
      getNextData();
    }
    } , 5000);
  });
}





new Promise(function (resolve , reject){
  setTimeout(function(){
    console.log("Async Task 2");
    resolve()
  },1000)
}).then(function(){
  console.log("Async 2 is resolved");
})


const promiseThree = new Promise (function (resolve , reject ){
  setTimeout(function(){
     resolve({username : "Ayush Sharma" , email : "as3848274@gmail.com"})

  },1000)

})

promiseThree.then(function(user){
    console.log(user);
    
})



const promiseFour = new Promise(function(resolve , reject){
   setTimeout(function(){
    let error = true 
    if(! error){
      resolve({username : "Ayush Sharma" , password : "123"})
    }else{
      reject('ERROR : Something went wrong ')
    }
   }, 1000)
})
 promiseFour
 .then((user)=>{
  console.log(user);
  return user.username 

})

.then((username) => {
  console.log(username); 
})

.catch(function(error){
   console.log(error);
   
}).finally(() => console.log("Finally The promise is either resolved or rejected "))


//hamesha aisa nahi hai ki aap promise ko .then aur .catch se hi handle karo kabhi kabhi async await ka use karke bhi aap promise ko handle kar sakte ho
const promiseFive = new Promise(function(resolve , reject){
   setTimeout(function(){
    let error = true 
    if(! error){
      resolve({username : "Javascript" , password : "123"})
    }else{
      reject('ERROR : Js went wrong ')
    }
   }, 1000)
})
async function consumePromiseFive(){
  try { 
    const response = await promiseFive
    console.log(response);
}
    
  } catch (error) {
    console.log(error);
    
  }

consumePromiseFive()




async function getAllUsers (){
 try {
  const response = await fetch ('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
 
 } catch (error) {
  console.log("E: " , error);
  
 }
}
getAllUsers()




fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>{
  return response.json()
})
.then((data )=>{
  console.log(data);
  
})
.catch((error)=> console.log(error))




  






// A fetch promise only rejects when a network error is encountered (which is usually when there is a permissions issue or similar). A fetch() promise does not reject on http errors (404, etc). Instead, a then() handler must check the Response.ok and/or Response.status properties.
 
// mtlb agr promise aapne koi req kri aur udhr se error aagya to vo aapko resolve me milega ya reject me milega ?
to vo hmesha apne ko as a response milega qki vo error nahi hai aapko error sirf uss case me milega jb network hi down ho ya fir aapke pass internet hi na ho to aise case me hi aapko reject me milega aur vo req krr hi n paaya ho


// The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.



 


