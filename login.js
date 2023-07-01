"use strict";

const user=document.querySelector(".user");
const password=document.querySelector(".password");
const btnLogin=document.querySelector(".submit");
let attempts=0;


btnLogin.addEventListener("click",()=>{
    validate();
    cleanInputs();
    validarIntentos();
});


//functions
const validate=()=>{
    if(user.value=="Emanuel"&&password.value=="Delrio"){
        window.location.href="system.html";
    }else{
     alert("usuario o contraseña incorrectos")
     cleanInputs();
        intentos++;
    }
}

const cleanInputs=()=>{
    user.value="";
    password.value="";
}

const validateAttempts=()=>{
    if(intentos>=3)alert("has superado el limite de intentos");    
}




