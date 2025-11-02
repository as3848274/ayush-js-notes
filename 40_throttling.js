// Debouncing and throttling in Javascript 

// Ques 2 => Create a button ui and add a throttle as follows =>
  //      --> Show "Button Pressed <x> Times" every time button is pressed
//        --> Increase "Triggered <Y> Times" every 800ms of throttle


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date ().getTime();

const throttledCount = _.throttle(()=>{
const start = new Date ().getTime();
console.log(now-start);
count.innerHTML = ++triggerCount; 
},800)



btn.addEventListener('click', ()=> {
  btnPress.innerText = ++pressedCount;
  throttledCount();
})
