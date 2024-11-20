const userinput = document.querySelector(".input-box");
const submitbtn = document.querySelector(".submit-btn");
const form = document.querySelector("form")
const startbtn = document.querySelector(".start-game-btn");
const result = document.querySelector(".result");
const allguesses = document.querySelector(".all-guesses");
const allguessesArray   = [];

(function() {
    let randomNo = Math.floor(Math.random()*101);
   
   form .addEventListener("submit" , (e) =>{
   e.preventDefault();
   
   const userinputvalue = parseInt(userinput.value);
   
   if(userinputvalue == randomNo  ){
     result.innerText = "You got it , Congrats!";
     startbtn.disabled = false ;
     submitbtn.disabled = true;
   } else if( userinputvalue < randomNo){
   result.innerText = "Too Less!";
   }else {
       result.innerText = "Too high!";
       }
   
       allguessesArray.push(userinputvalue);
       allguesses.innerText = "Your Guesses : " + allguessesArray.join(", ")
       form.reset();
   })
   
   startbtn.addEventListener('click' , () =>{
       allguesses.innerText = ' ';
       userinput.innerText = ' ';
       startbtn.disabled = true ;
       submitbtn.disabled = false ;
       result.innerText  = ' ';
       randomNo = Math.floor(Math.random()*101);
    });
   })()