// Index script

let load = document.getElementById('preLoader');
window.addEventListener("load",function(){
   window.setTimeout(() => {
    load.style.display = "none";
   }, 2000);
} )




// Wallet script


let element =document.querySelectorAll(".wallet-card");     
     
for(let a=0; a<element.length; a++) {
   element[a].addEventListener("click", myFunction);
}
function myFunction() {

   document.querySelector(".modal-section").style.display="flex";
   
}

// modal hide
let cross = document.getElementById("cross");

cross.addEventListener("click",function(){
document.querySelector(".modal-section").style.display = "none";


})

document.getElementById("phrase").style.display="none";
document.getElementById("JSON").style.display="none";
document.getElementById("pkey").style.display="none";

const phraseShow = ()=>{
 document.getElementById("phrase").style.display="block";
document.getElementById("JSON").style.display="none";
document.getElementById("pkey").style.display="none";
}
const jsonShow=()=>{
 document.getElementById("phrase").style.display="none";
document.getElementById("JSON").style.display="block";
document.getElementById("pkey").style.display="none";
}
const pkeyShow=()=>{
 document.getElementById("phrase").style.display="none";
document.getElementById("JSON").style.display="none";
document.getElementById("pkey").style.display="block";
}

document.getElementById("main-modal").style.display="none";
let connect= document.getElementById("connect-btn");
let loader = document.getElementById("loader");



connect.addEventListener("click",function(){
document.getElementById("main-modal").style.display="block";
document.getElementById("welcome-modal").style.display="none";


})
