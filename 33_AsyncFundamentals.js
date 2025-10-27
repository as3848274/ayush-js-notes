// javascript   - 1- synchronous
//               2- single threaded 


// execution context 

// executes one line of code at a time

// 1- console log -> 1
// 2- conosle log -> 2
// Call Stack and Memory Heap 


// each operation waits for the last one to complete before executing 


// Blocking Code Vs Non - Blocking Code

Blocks the flow of        |   Does not block the execution
program                   |   
                          |   
Read fill Synchronous     |   Read File Asynchronous 
                          |                         
                                           

//  file Asynchronous means -- aap baaki ke kaam kriye tab tak aur mai file ko read krke aata hu aapko jo file content chahiye vo lekr aata hu fir read krne ke baad mai apko notify kr dungaa 



// JS Engine alone made up of Call Stack and Memory Heap and JS Engine is Single Threaded 

// Call Stack has Global Execution Context aur isi me ek ek krke function load hote hai aur jaise jaise function execute hote jaate hai functions ko unload krte rhte hai 



// Web API is in browser and has access to DOM API 


// Task Queue makes whole JS Fast and Asynchronous and contains callBacks and insert all the callbacks to the Call Stack one by one 


// Promise Queue And High Priority Queue 

