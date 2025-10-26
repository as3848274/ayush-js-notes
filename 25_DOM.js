<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <title>DOM Learning</title>
</head>
<body style="background-color: #212121; color: white;">
  <div class = "parent" >
    <div class="day"> Monday</div>
    <div class="day"> Tuesday</div>
    <div class="day"> Wednesday </div>
    <div class="day"> Thrusday </div>
  </div>
</body>
<script>
  const parent =  document.querySelector('.parent')
  console.log(parent);
  console.log(parent.children[1].innerHTML);
  for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i];
    console.log(parent.children[i].innerHTML);
    
    
  }

  parent.children[1].style.color = "orange"
  console.log(parent.FirstElementChild);
  console.log(parent.LastElementChild);

  const dayOne = document.querySelector('.day')
  console.log('dayOne');
  console.log('dayOne.parentElement');
  console.log('dayOne.nextElementSibling');


  
  console.log("NODES : " , parent.childNodes);
  
  
</script>
</html>
