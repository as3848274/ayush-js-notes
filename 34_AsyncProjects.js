<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ayush Sharma Aur Code </h1>
    <button id="stop"> Stop </button>
    <button id="start"> Start </button>

</body>
<script>

    const sayHitesh = function(){
        console.log("Ayush Sharma");
    }
    const changeText = function(){
        document.querySelector('h1').innerHTML = "best JS series"
    }
    setTimeout(changeText, 2000)



    const changeMe = setTimeout(changeText, 2000)
    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe)
        console.log("STOPPED")
    })



    setTimeout((function)  {
      console.log("Ayush")
      
    }, 2000);  ye 2 sec ke baad ekk baar bass Ayush Print kar Dega Baar baar nahi karega 



    const sayAyush = function(){
        console.log("Hitesh");
    }

    setTimeout(sayAyush, 2000)


     const sayDate = function(str){
         console.log(str , Date.now());
     }
     const intervalId =  setInterval(sayDate, 1000 , "hi");  ye har ek second ke baad ayush aur current date print karta rahega 

     clearInterval(intervalId)  ye usko rok dega





     ek project ab jisme ek start button hoga aur ek stop button hoga aur start button press karne pe harr baar background color change hota rahe every second aur stop button press karne pe jo color hai as it is reh jaaye aur color change hona band ho jaaye


     // generating a random color 

     const randomColor = function(){
        const hex = "0123456789ACDEF"
        let color = '#'
        for (let i = 0 ; i < 0 ; i++){
            color += hex[Math.floor(Math.random() * 16)] 
        }
        return color;
     };


     let intervalId;
     const startChangingColor = function(){

        if(!intervalId){
         intervalId = setInterval(changeBgColor, 1000);

        }
        
        
        function changeBgColor (){
            document.body.stylr.backgroudColor = randomColor();
        }
     };

     const stopChangingColor = function(){
        clearInterval(intervalId);
        intervalId = null;
     };


     document.querySelector("#start").addEventListener('click', startChangingColor)

     document.querySelector("#stop").addEventListener('click', stopChangingColor)
     

    




     // here next project is keyboard check isme kya hoga ki jab hum koi key press karenge to uska naam console me print hoga press the key and watch the magic


     const insert = document.getElementById('insert')
     window.addEventListener("keydown", function(e) => {
        insert.innerHTML = `
        <div class = 'color'>

        <table>
       <tr>
         <th>key</th>
         <th>keyCode</th>
         <th>code</th>
       </tr>
       <tr>
         <td>${e.key=== " " ? "Space" : e.key}</td>
         <td>${e.keycode}</td>
         <td>${e.code}</td>
       </tr>
       
      </table>

        </div>
       `

     })





</script>
</html>

{/* clearInterval()
//clearTimeOut() */}



 In JavaScript, the clearInterval() function is used to stop a timer that was previously created using setInterval(). 

 setInterval() repeatedly executes a function after a fixed time interval (in milliseconds) isme baaar baar ek function ko execute karta hai specified time interval ke baad,
 clearInterval() stops that repeated execution



 The clearTimeout() function in JavaScript is used to cancel a timer that was previously set with setTimeout().








