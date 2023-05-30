var button = document.getElementById('main-but');
var text = document.getElementById('main-tx');
var adder = document.getElementById('ad')
var a=0;
button.addEventListener('click',()=>{
  
  
 
  a++
   var card = document.createElement('div');
   card.classList.add('card')
   card.setAttribute("id",`newdiv-${a}`)
   adder.prepend(card)
   document.querySelector('.card').innerHTML= text.value +`
   <div>
     <input type="buttom" class='rem' id='remove' value="REMOVE" onclick="document.getElementById('newdiv-${a}').remove();">
   </div>`
  
   text.value='';
})



