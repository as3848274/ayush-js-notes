 // JAVASCRIPT EXECUTION CONTEXT 

 // 1 - Global Execution Context  // allocated in THIS 
 // 2 - Function Execution context 
 // 3 - Eval Execution Context 

  
// Memory Creation Phase / Creation Phase 
// Execution Phase 


let val1 = 10
let val2 = 8
function addNum(num1,num2){
  let total = num1 + num2 
  return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10,2)

// ! - global execution // by this keyword 

// 2- Memory Phase
// val1 = undefined
// val2 = undeined
// addNum = defenition
// result1 = undefined 
// result2 = undefined

// 3- Execution Phase 
val1 <- 10
val2 <- 5
addNum ----> here form  1- new variable environment  // new executional context
                        2- execution thread 

                        after all these two steps it gets deleted also 


                       a - memory phase     b - executional
                      val1 --> undefined         context
                      val2 --> undefined      num1 --> 10
                      total--> undefined      num2 --> 5
                                               total --> 15
                                               total value gets returned to global executioanl context


                                   
