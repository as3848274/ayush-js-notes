// Debouncing and Throttling in Javascript 

// ques 1 - create a button ui and add debounce as follows =>
  // ----> show "Button Pressed <X> Times" every time button is pressed..
//     ---> Increase "Triggered <Y> Times" count after 800ms of debounce...



const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const debouncedCount = _.debounce(() =>{
count.innerHTML = ++ triggerCount;

} , 800)

btn.addEventListener('click', ()=> {
  btnPress.innerText = ++pressedCount;
  debouncedCount();
})
