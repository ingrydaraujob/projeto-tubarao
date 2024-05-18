const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
   idx++;
   if(idx > img.length - 1){
        idx=0;
   }
   imgs.style.transform = `translateX(${-idx*500}px)`
}
setInterval(carrossel,1800);

function calcIdade(){
   let atual = new Date().getFullYear()
   iidade.innerHTML = Number(atual) - Number(iano.value)
}

const form = document.querySelector("#form")
const name = document.querySelector("#inome")
const email = document.querySelector("#iemail")
const senha = document.querySelector("#isenha")

form.addEventListener("submit", (event) =>{
   event.preventDefault()
   if(nome.value == ""){
      alert("por favor preencha o seu nome")
      return
   }
   if(email.value == "" || !isEmailValid(email.value)){
      alert("por favor, preencha o seu email")
      return
   }
   if(!validaSenha(senha.value,4)){
      alert("digite a senha com no minimo 4 characteres")
      return
   }

   form.submit()
})

function isEmailValid(email){
   const emailrgx = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
   )
   if(emailrgx.test(email)){
      return true
   }else{
      return false
   }
}
function validaSenha(senha, minDigitos){
   if(senha.length >= minDigitos){
      return true
   }else{
      return false
   }
}