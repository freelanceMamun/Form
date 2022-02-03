////// email valiton
const form = document.querySelector(".myfromValid"); 
const emailInput = document.querySelector(".EmailBox input");
const passWordInput = document.querySelector(".passWordBox input");
const inputBtn = document.querySelector(".fromBtn");
const textValid  = document.getElementById("text"),
      textValid2 = document.getElementById("text1");
  const checkbox = document.getElementById("checkbox"); 



//// Email valid log in

 form.addEventListener("submit",function(e){
     e.preventDefault();
       let validEmaliPattran =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        form.classList.add("Error");
        form.classList.remove("Valid");
         if(emailInput.value  == ""){
            textValid.innerText = "Email can't be blank";
           //textValid.style.color = "red" ;
            
         }else if(!emailInput.value.match(validEmaliPattran)){
            textValid.innerText = "Please enter the valid email";
           // textValid.style.color = "red";
         }else{
           form.classList.replace("Error" ,"Valid");
           textValid.innerText = "This valid Email";
         }

      
         

 })


///// password valid  log in

  form.addEventListener("submit",function(e){

      e.preventDefault();
      let pass =  /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
      form.classList.add("PassError");
      form.classList.remove("Valid-1");
         if(passWordInput.value == ""){
            textValid2.innerText = "Password can't be blank"
         } else if(!passWordInput.value.match(pass)){
              textValid2.innerText = "Please enter the valid password";
         } else {
             form.classList.replace('PassError', "Valid-1")
             textValid2.innerText = "This a valid password";
         }
  

  })

   passWordInput.addEventListener("keyup", function(){
      if(passWordInput.value){
       textValid2.textContent =  "Password must be greater than 8 digits " ;
      }else{
        textValid2.textContent = "" ;
      }
      
  
  })

  inputBtn.addEventListener("click",function(params){
       if(checkbox.checked == false){
        checkbox.checked = true;
       }
  })



 ////

//// Creating form Valitaion

const SignUPForm = document.querySelector(".MainSignForm");
const SignName = document.querySelector(".nameFrombox input");
const SignEmail =  document.querySelector(".emailBoxCreat input");
const SignPassbox = document.querySelector(".creatAcPassword input");
const Mathpassbox = document.querySelector(".MatchPassword input");
const SignUPbtn = document.getElementById("SignUpButton");
const stext =   document.getElementById("CTextF"),
      EtextS  =  document.getElementById("EtextS"),
      Spssword = document.getElementById("Spssword");



//// name or   valid sign up
SignUPForm.addEventListener("submit",function(e){
     e.preventDefault();
     let pat = /[a-zA-Z@#&0-9]+$/;

     SignUPForm.classList.add("SError");
     SignUPForm.classList.remove("SValid");
    if( SignName.value == ""){
      stext.innerHTML = "Enter your name can't be blank";
    }else if(!SignName.value.match(pat)){
      stext.innerHTML = "Your Name is not valid";

    }else{
      SignUPForm.classList.replace("SError" , "SValid");
      stext.innerHTML = "This is valid name";
    }
  
})

/// email valid in Sign Form

SignUPForm.addEventListener("submit",function(e) {
   e.preventDefault();
   let validEmaliPattran =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   SignUPForm.classList.add("Error3");
   SignUPForm.classList.remove("valid3");

   if(SignEmail.value == ""){
    EtextS.innerHTML= "Email can't be blank";
   }else if(!SignEmail.value.match(validEmaliPattran)){
     EtextS.innerHTML = "Please enter the valid email"
   }else{
    SignUPForm.classList.replace("Error3" , "valid3");
    EtextS.innerHTML = "This is valid Email";

   }

})
    

//// Pwasswrod

let alphabet = /[a-zA-Z]/ , //// letter a to z and A to Z,
numbers  =  /[0-9]/,  //// number,
sCaraters = /[!.@,#,$,%,^,&,*,?,_,,(,),-,+,=,~]/ ;



// SignPassbox.addEventListener("keyup",function () {
//      let val = SignPassbox.value;
//       if(val.match(alphabet) || val.match(numbers) || val.match(sCaraters)){
//         Spssword.innerHTML = "Password must be greater than 8 digits" 
//       }

//       if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
//         Spssword.innerHTML = "Password is medium";
//       }
//       if(val.match(alphabet) && val.match(numbers) && val.match(sCaraters) && val.length >= 8){
//         Spssword.innerHTML = "Password is strong";
//         Spssword.style.color= "#22c32a";
//       }
          
  
// })



/// password valid input box

SignUPForm.addEventListener("submit",function(e){
   e.preventDefault();
   let pass =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
   let psw  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
   SignUPForm.classList.add("SErro4")
   SignUPForm.classList.remove("Svalid4");
      
    if(SignPassbox.value == ""){
       Spssword.innerHTML = "Password can't be blank";
      }else if(!SignPassbox.value.match(psw)){
        Spssword.innerHTML = "Please enter the valid password";
      } else{
        SignUPForm.classList.replace("SErro4", "Svalid4")
        Spssword.innerHTML = "This valid Password";
      }


})



///////////////////
const matchText = document.getElementById("Context");
SignUPForm.addEventListener("submit",function(e) {
  e.preventDefault();
  SignUPForm.classList.add("CError");
  SignUPForm.classList.remove("Cvalid");
   let value = Mathpassbox.value ;

   if(value == ""){
      matchText.innerHTML = "Confrim Password can't be blank"
   }else if(SignPassbox.value !== value){
    matchText.innerHTML = "Password can't  Match";
   }else{
    SignUPForm.classList.replace("CError", "Cvalid"); 
    matchText.innerHTML = "Password Match "

   }

})


const chkbox = document.getElementById("SignCecked"),
      chekText = document.getElementById('CondiText');
  
      chkbox.addEventListener("click",function(){
        chkbox.classList.add("off");
         if(chkbox.checked == true){
          chekText.style.display = "none";
         }else if(chkbox.checked == false){
          chekText.style.display = "block";
          chkbox.classList.remove("off");
         }
      })

      SignUPbtn.addEventListener("click",function(){
        chekText.style.color ="red";

      })


      
const MainSignUPForm = document.querySelector(".CreatingForm");
const LoginFormMain  =  document.querySelector(".validFrom");
const SignUpDiv = document.getElementById("SignUp"),
      logingdiv = document.getElementById("login");

 
      SignUpDiv.addEventListener('click',function(e){
       e.preventDefault();
       LoginFormMain.classList.remove("block");
       MainSignUPForm.classList.remove("none");

       LoginFormMain.classList.toggle("none");
       MainSignUPForm.classList.toggle("block");
      })

      logingdiv.addEventListener("click",function(e){
        e.preventDefault();
         LoginFormMain.classList.remove("none");
          MainSignUPForm.classList.remove("block");
  
        LoginFormMain.classList.toggle("block");
        MainSignUPForm.classList.toggle('none');
          
      })


    
