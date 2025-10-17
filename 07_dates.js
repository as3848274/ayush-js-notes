// let myDate = new Date();
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toDateString());  
// console.log(myDate.toLocalString()); 
// console.log(typeof myDate); // output: object

// let myCreatedDate = new Date(2020, 0, 31); // January is 0
// console.log(myCreatedDate); 

let myCreatedDate1 = new Date("2020-01-31") // YY MM DD
console.log(myCreatedDate1.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000)); // in seconds many times asked in interviews

let newDate2 = new date()
console.log(newDate2.getMonth());
console.log(newDate2.getMonth()+1); // current month
console.log(newDate2.getDate());

// '${newDate2.getDay()} and the time is '

newDate2.toLocaleString('default', {
  weekday : "long"
})

