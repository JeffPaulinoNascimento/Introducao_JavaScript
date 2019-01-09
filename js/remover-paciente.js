var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick" , function(event){
    //var alvoEvento = event.target; //aqui ele pega o onde foi o clique
    //var paiDoAlvo = alvoEvento.parentNode.classList.add("fadeOut"); // e aqui ele pega o pai de onde foi o clique, no caso o tr; ClassList.add(adiciona a classe do css ao evento)
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();  
    }, 400); //aceita em milisegundos, 1min = 1000 milisegundos
    
})
