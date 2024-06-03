
function calcIdade(){
   let atual = new Date().getFullYear();
   iidade.innerHTML = Number(atual) - Number(iano.value);
}
const form = document.getElementById("form");
const nome = document.getElementById("inome");
const email = document.getElementById("iemail");
const senha = document.getElementById("isenha");


form.addEventListener("submit",(event)=>{
   event.preventDefault();

   verificaUsuario();
   verificaEmail();
   verificaSenha();
})

function verificaUsuario(){
   
   if(nome.value === ""){
      erroInput(nome,"preencha o nome de usuario","form-content erro");
   }else{
      erroInput(nome,"","form-content ok");
      
   }

}

function verificaEmail(){
   
   if(email.value === ""){
      erroInput(email,"preencha o email","form-content erro");
   }else{
      erroInput(email,"","form-content ok");
      
   }

}
function verificaSenha(){
   const senhavalor =senha.value
   if(senhavalor === ""){
      erroInput(senha,"preencha a senha","form-content erro");
   }else{
      erroInput(senha,"","form-content ok");
      
   }

}

function erroInput(input,msg,classname){
   const formItem = input.parentElement;
   const textmsg = formItem.querySelector("output");
   textmsg.innerText = msg;
   formItem.className = classname;
   
}

function mudaTela(){
   document.body.classList.toggle("dark-mode");
}
