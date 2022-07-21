
email= document.getElementById('Email');
password=document.getElementById("password");
submit= document.getElementById('submit').addEventListener("click",loginbox);



function loginbox (e) {
    e.preventDefault()
    console.log(email.value)
 
   if (email.value!='hamdi.benabd89@gmail.com' ){
   alert(`Email is required`)
   console.log(password)
   }
   else if(password.value!="pass"){
    console.log(password)
    alert(`Wrong password `)
   } else{
    window.location.replace('index.html')
   }
   }

  