var likes=document.querySelectorAll('.like')
for (let i = 0; i < likes.length; i++) {
   likes[i].addEventListener('click',like)}


   function like(e) {
    var cible= e.target;
    if (cible.style.color != "red"){
        cible.style.color= 'red';
       }
       else{
        cible.style.color= '#424242';
       }
   }