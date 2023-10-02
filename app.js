// queryselectorall returns a nod elist
//classlist?
//contains
//It's generally safer to use textContent when dealing with untrusted or user-generated content because it won't execute or render any HTML tags, reducing the risk of XSS attacks.
let count=0;
const value=document.getElementById('value');
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
   btn.addEventListener('click',function(e){
      const id=e.currentTarget.classList;
      console.log(id);

      if(id.contains('decrease')){
         count--;
         value.textContent=count;
      }
      if(id.contains('increase')){
         count++;
         value.textContent=count;
      }
      if(id.contains('reset')){
         count=0;
         value.textContent=count;
      }
   })
});